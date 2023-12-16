import pandas as pd


pd.set_option("display.max_columns", None)
pd.set_option("display.max_rows", None)
pd.set_option("display.width", None)
pd.set_option("display.float_format", lambda x: "%.3f" % x)

df = pd.read_csv("./data/teams_and_leagues.csv")

df.dtypes