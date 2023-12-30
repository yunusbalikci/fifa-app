"""
2023

Data Preprocessing:

Data Loading:

The code utilizes the pandas library to read a dataset from a CSV file into a DataFrame using pd.read_csv.
The dataset, named 'CompleteDataset2.csv,' is loaded with the option low_memory=False to disable low-memory mode.
Column Selection:

A subset of relevant columns is selected and rearranged in the DataFrame.
Selected columns include various attributes related to players (e.g., 'Overall,' 'Potential,' 'Ball control') and the target variable 'Value.'
Parsing and Conversion:

The 'Value' column, representing players' market values, undergoes parsing to remove currency symbols and convert values to numeric format.
Other specified numeric columns ('Ball control,' 'Composure,' 'Reactions,' 'Short passing') are converted to numeric format, handling errors by coercing to NaN where appropriate.
Imputing Missing Values:

The SimpleImputer class from scikit-learn is employed to fill missing values in the dataset with the mean of each column.
The resulting DataFrame with imputed values is stored in 'df_imputed.'
Feature Selection using RFE:

A RandomForestRegressor model is instantiated with 15 estimators and a fixed random state.
Recursive Feature Elimination (RFE) is applied to select the top 4 features that contribute the most to predicting the 'Value.'
Train-Test Split:

The dataset is split into training and testing sets using the train_test_split function from scikit-learn.
70% of the data is used for training the model, and 30% is reserved for testing.
Training RandomForestRegressor:

The RandomForestRegressor model is trained on the selected features using the fit method.
Predicting and Evaluating:

The trained model is used to predict the 'Value' on the test set.
Evaluation metrics, including Mean Absolute Error, Mean Squared Error, and R-squared, are calculated and printed using functions from scikit-learn's metrics module.
The final result is a trained RandomForestRegressor model that can predict the market value of football players based on the selected attributes, and the evaluation metrics provide insights into the model's performance on unseen data.
"""

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, mean_squared_error
from sklearn.feature_selection import RFE
from sklearn.impute import SimpleImputer

# Load data
df = pd.read_csv("../data/CompleteDataset2.csv", low_memory=False)

# Select relevant columns
selected_columns = [
    "Overall",
    "Potential",
    "Ball control",
    "Composure",
    "Reactions",
    "Short passing",
    "Age",
    "Value",
]
df = df[selected_columns]


# Parse string for millions and thousands to numeric values
def parseValue(x):
    x = str(x).replace("€", "")
    if "M" in str(x):
        x = str(x).replace("M", "")
        x = float(x) * 1000000
    elif "K" in str(x):
        x = str(x).replace("K", "")
        x = float(x) * 1000
    return float(x)


# Convert 'Value' to numerical values
df["Value"] = df["Value"].apply(parseValue)

# Convert other columns to numeric, filling NaN with 0
numeric_columns = ["Ball control", "Composure", "Reactions", "Short passing"]
df[numeric_columns] = (
    df[numeric_columns].apply(pd.to_numeric, errors="coerce").fillna(0)
)

# Impute missing values with the mean
imputer = SimpleImputer(strategy="mean")
df_imputed = pd.DataFrame(imputer.fit_transform(df), columns=df.columns)

# Feature selection using Recursive Feature Elimination (RFE)
clf = RandomForestRegressor(n_estimators=15, random_state=42)
rfe = RFE(estimator=clf, n_features_to_select=6, step=1)
x_selected = rfe.fit_transform(df_imputed.drop("Value", axis=1), df_imputed["Value"])

# Train-test split
x_train, x_test, y_train, y_test = train_test_split(
    x_selected, df_imputed["Value"], test_size=0.3, random_state=42
)

# Train RandomForestRegressor
clf.fit(x_train, y_train)

# Predict and evaluate
y_pred = clf.predict(x_test)

# Print evaluation metrics
print(f"Mean Absolute Error: {mean_absolute_error(y_test, y_pred)}")
print(f"Mean Squared Error: {mean_squared_error(y_test, y_pred)}")

from sklearn.metrics import r2_score

# Predict and evaluate
y_pred = clf.predict(x_test)

# Calculate R-squared
r2 = r2_score(y_test, y_pred)

# Print R-squared
print(f"The coefficient of determination (R²): {r2}")


# see which features were selected by RFE 
for i in range(len(rfe.support_)):
    if rfe.support_[i]:
        print(df_imputed.columns[i])


# random value prediction
# Overall, Potential, Ball control, Composure, Reactions, Short passing
data = [[93, 93, 90, 96, 94, 30]]
print(clf.predict(data)) 


# save the model by joblib
import joblib

# save model to Model directory
joblib.dump(clf, "../Models/priceQuess.pkl")

# load model from Model directory
clf = joblib.load("../Models/priceQuess.pkl")

# predict the value
data = [[93, 93, 90, 96, 94, 30]]
print(clf.predict(data))

