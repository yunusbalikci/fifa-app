import pandas as pd

pd.set_option("display.max_columns", None)
pd.set_option("display.max_rows", None)

df = pd.read_csv("./data/players_20.csv")

# Assuming df is your DataFrame and "dob" is the column with dates
df["dob"] = pd.to_datetime(df["dob"])
df["joined"] = pd.to_datetime(df["joined"])

df.dtypes
df.head()

df.to_csv("./data/players_20f.csv", index=False)