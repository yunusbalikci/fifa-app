import pandas as pd
import numpy as np

pd.set_option("display.max_columns", None)
pd.set_option("display.max_rows", None)

df = pd.read_csv("./data/players_20.csv")


def grab_col_names(df, cat_th=10, car_th=20):
    """

    Veri setindeki kategorik, numerik ve kategorik fakat kardinal değişkenlerin isimlerini verir.
    Not: Kategorik değişkenlerin içerisine numerik görünümlü kategorik değişkenler de dahildir.

    Parameters
    ------
        df: df
                Değişken isimleri alınmak istenilen df
        cat_th: int, optional
                numerik fakat kategorik olan değişkenler için sınıf eşik değeri
        car_th: int, optinal
                kategorik fakat kardinal değişkenler için sınıf eşik değeri

    Returns
    ------
        cat_cols: list
                Kategorik değişken listesi
        num_cols: list
                Numerik değişken listesi
        cat_but_car: list
                Kategorik görünümlü kardinal değişken listesi

    Examples
    ------
        import seaborn as sns
        df = sns.load_dataset("iris")
        print(grab_col_names(df))


    Notes
    ------
        cat_cols + num_cols + cat_but_car = toplam değişken sayısı
        num_but_cat cat_cols'un içerisinde.
        Return olan 3 liste toplamı toplam değişken sayısına eşittir: cat_cols + num_cols + cat_but_car = değişken sayısı

    """

    # cat_cols, cat_but_car
    cat_cols = [col for col in df.columns if df[col].dtypes == "O"]
    num_but_cat = [
        col
        for col in df.columns
        if df[col].nunique() < cat_th and df[col].dtypes != "O"
    ]
    cat_but_car = [
        col
        for col in df.columns
        if df[col].nunique() > car_th and df[col].dtypes == "O"
    ]
    cat_cols = cat_cols + num_but_cat
    cat_cols = [col for col in cat_cols if col not in cat_but_car]

    # num_cols
    num_cols = [col for col in df.columns if df[col].dtypes != "O"]
    num_cols = [col for col in num_cols if col not in num_but_cat]

    print(f"Observations: {df.shape[0]}")
    print(f"Variables: {df.shape[1]}")
    print(f"cat_cols: {len(cat_cols)}")
    print(f"num_cols: {len(num_cols)}")
    print(f"cat_but_car: {len(cat_but_car)}")
    print(f"num_but_cat: {len(num_but_cat)}")
    return cat_cols, num_cols, cat_but_car


cat_cols, num_cols, cat_but_car = grab_col_names(df)

# set all columns to int
for col in num_cols:
    # 0 for NaN values
    df[col] = df[col].fillna(0).astype(int)

df.head()

df["dob"] = pd.to_datetime(df["dob"])
df["joined"] = pd.to_datetime(df["joined"])
df["contract_valid_until"] = df["contract_valid_until"].fillna(0).astype(int)


df.head()
df.dtypes

str_to_int = [
    "ls",
    "st",
    "rs",
    "lw",
    "lf",
    "cf",
    "rf",
    "rw",
    "lam",
    "cam",
    "ram",
    "lm",
    "lcm",
    "cm",
    "rcm",
    "rm",
    "lwb",
    "ldm",
    "cdm",
    "rdm",
    "rwb",
    "lb",
    "lcb",
    "cb",
    "rcb",
    "rb",
]


def convert_to_int(value):
    # Check if the value is NaN
    if pd.isnull(value):
        return 0
    # Convert the value to string first
    str_value = str(value)
    
    if '+' in str_value:
        # Split the string into two parts at the '+', convert each part to int, and add them together
        return sum(int(part) for part in str_value.split('+'))
    else:
        # If there's no '+', just convert the value to int
        return int(float(str_value))


for col in str_to_int:
    df[col] = df[col].apply(convert_to_int)


df.head()

df.dtypes

df.to_csv("players_20_cleaned.csv", index=False)

dff = pd.read_csv("players_20_cleaned.csv")
dff.dtypes