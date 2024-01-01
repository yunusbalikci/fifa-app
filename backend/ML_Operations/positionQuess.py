"""
2023

Data Preprocessing:

Data Loading:
The code reads a dataset from a CSV file using pandas (pd.read_csv).
Column Selection:

A subset of relevant columns is selected and rearranged.
Columns related to players' attributes (e.g., 'Acceleration', 'Aggression', etc.) and the 'Preferred_Positions' column are retained.
Data Filtering:

Goalkeepers are removed from the dataset.
Handling Multiple Positions:

Players with multiple preferred positions are split into separate rows, each associated with a single position.
Attribute Calculation:

Numeric attributes are converted to numeric values, handling errors by coercing to NaN where appropriate.
Missing values are imputed with the mean using SimpleImputer.
Position Mapping:

Preferred positions ('ST', 'RW', 'LW', etc.) are mapped to numerical values using a predefined dictionary (position_mapping).
Feature Selection:

Recursive Feature Elimination (RFE):
A Random Forest classifier is employed for feature selection using RFE (RFE from sklearn.feature_selection).
The number of features to select is set to 10.
Model Training and Evaluation:

Train-Test Split:

The dataset is split into training and testing sets using train_test_split from sklearn.model_selection.
Random Forest Classifier Training:

A Random Forest classifier is trained on the selected features using fit.
Prediction and Evaluation:

The trained classifier is used to predict positions on the test set.
Accuracy, confusion matrix, and classification report are computed using accuracy_score, confusion_matrix, and classification_report from sklearn.metrics.
"""
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report
from sklearn.feature_selection import RFE
from sklearn.impute import SimpleImputer
import warnings

pd.set_option("display.max_columns", None)
pd.set_option("display.max_rows", None)
warnings.filterwarnings("ignore")
# Load data
df = pd.read_csv("../data/CompleteDataset2.csv", low_memory=False)

# Select relevant columns
columns_needed_rearranged = [
    "Acceleration",
    "Aggression",
    "Agility",
    "Balance",
    "Ball control",
    "Composure",
    "Crossing",
    "Curve",
    "Dribbling",
    "Finishing",
    "Free kick accuracy",
    "Heading accuracy",
    "Interceptions",
    "Jumping",
    "Long passing",
    "Long shots",
    "Marking",
    "Penalties",
    "Positioning",
    "Reactions",
    "Short passing",
    "Shot power",
    "Sliding tackle",
    "Sprint speed",
    "Stamina",
    "Standing tackle",
    "Strength",
    "Vision",
    "Volleys",
    "Preferred_Positions",
]
df = df[columns_needed_rearranged]

# Remove goalkeepers
df["Preferred_Positions"] = df["Preferred_Positions"].str.strip()
df = df[df["Preferred_Positions"] != "GK"]

# Handle players with multiple preferred positions
positions = df["Preferred_Positions"].str.split().apply(lambda x: x[0]).unique()
df_new = pd.concat(
    [
        df[df["Preferred_Positions"].str.contains(pos)].assign(Preferred_Positions=pos)
        for pos in positions
    ]
)

# Perform attribute calculation
df_new.iloc[:, :-1] = df_new.iloc[:, :-1].apply(
    lambda x: pd.to_numeric(x, errors="coerce")
    if x.name != "Preferred_Positions"
    else x
)

# Impute missing values with the mean
imputer = SimpleImputer(strategy="mean")
df_imputed = pd.DataFrame(
    imputer.fit_transform(df_new.iloc[:, :-1]), columns=df_new.columns[:-1]
)

# Map positions to numerical values
position_mapping = {
    "ST": 0,
    "RW": 1,
    "LW": 1,
    "RM": 2,
    "CM": 3,
    "LM": 2,
    "CAM": 4,
    "CF": 5,
    "CDM": 6,
    "CB": 7,
    "LB": 8,
    "RB": 8,
    "RWB": 8,
    "LWB": 8,
}
df_new["Preferred_Positions"] = df_new["Preferred_Positions"].map(position_mapping)

# Feature selection using Recursive Feature Elimination (RFE)
clf = RandomForestClassifier(n_estimators=15)
rfe = RFE(estimator=clf, n_features_to_select=10, step=1)
x_selected = rfe.fit_transform(df_imputed, df_new["Preferred_Positions"])

# Train-test split
x_train, x_test, y_train, y_test = train_test_split(
    x_selected, df_new["Preferred_Positions"], test_size=0.3, random_state=42
)

# Train RandomForestClassifier
clf.fit(x_train, y_train)

# Predict and evaluate
y_pred = clf.predict(x_test)
accuracy = accuracy_score(y_test, y_pred)
conf_matrix = confusion_matrix(y_test, y_pred)
class_report = classification_report(y_test, y_pred, digits=3)

print(f"Accuracy: {accuracy}")
print(f"Confusion Matrix:\n{conf_matrix}")
print(f"Classification Report:\n{class_report}")


selected_features = df_imputed.columns[rfe.support_]
print("Selected Features:", selected_features)

# test model with new random data  
test_data = [[80, 80, 80, 80, 80, 80, 80, 80, 80, 80]]

test_data = pd.DataFrame(test_data, columns=selected_features)

print("Predicted Position:", clf.predict(test_data))

# save model wiht joblib into models folder
from joblib import dump, load

dump(clf, "../Models/positionQuess.joblib")

# load model from models folder
clf = load("../Models/positionQuess.joblib")

# test model with new random data
test_data = [[80, 80, 80, 80, 80, 80, 80, 80, 80, 80]]

test_data = pd.DataFrame(test_data, columns=selected_features)

print("Predicted Position:", clf.predict(test_data))