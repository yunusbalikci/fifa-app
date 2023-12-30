import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, mean_squared_error
from sklearn.feature_selection import RFE
from sklearn.impute import SimpleImputer
import warnings

pd.set_option('display.max_columns', None)
warnings.filterwarnings('ignore')
pd.set_option('display.float_format', lambda x: '%.3f' % x)

# Load data
df = pd.read_csv('CompleteDataset2.csv', low_memory=False)

# Select relevant columns
selected_columns = ['Overall', 'Potential', 'Ball control', 'Composure', 'Reactions', 'Short passing', 'Age', 'Value']
df = df[selected_columns]

# Parse string for millions and thousands to numeric values
def parseValue(x):
    x = str(x).replace('€', '')
    if 'M' in str(x):
        x = str(x).replace('M', '')
        x = float(x) * 1000000
    elif 'K' in str(x):
        x = str(x).replace('K', '')
        x = float(x) * 1000
    return float(x)

# Convert 'Value' to numerical values
df['Value'] = df['Value'].apply(parseValue)

# Convert other columns to numeric, filling NaN with 0
numeric_columns = ['Ball control', 'Composure', 'Reactions', 'Short passing']
df[numeric_columns] = df[numeric_columns].apply(pd.to_numeric, errors='coerce').fillna(0)

# Impute missing values with the mean
imputer = SimpleImputer(strategy='mean')
df_imputed = pd.DataFrame(imputer.fit_transform(df), columns=df.columns)

# Feature selection using Recursive Feature Elimination (RFE)
clf = RandomForestRegressor(n_estimators=15, random_state=42)
rfe = RFE(estimator=clf, n_features_to_select=6, step=1)
x_selected = rfe.fit_transform(df_imputed.drop('Value', axis=1), df_imputed['Value'])

# Train-test split
x_train, x_test, y_train, y_test = train_test_split(x_selected, df_imputed['Value'], test_size=0.3, random_state=42)

# Train RandomForestRegressor
clf.fit(x_train, y_train)

# Predict and evaluate
y_pred = clf.predict(x_test)

# Print evaluation metrics
print(f'Mean Absolute Error: {mean_absolute_error(y_test, y_pred)}')
print(f'Mean Squared Error: {mean_squared_error(y_test, y_pred)}')

from sklearn.metrics import r2_score

# Predict and evaluate
y_pred = clf.predict(x_test)

# Calculate R-squared
r2 = r2_score(y_test, y_pred)

# Print R-squared
print(f'The coefficient of determination (R²): {r2}')