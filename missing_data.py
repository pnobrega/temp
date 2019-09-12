# Data Preprocessing

# Importing the libraries
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

# Importing the dataset
dataset = pd.read_csv('Data.csv')
X = dataset.iloc[:, :-1].values
y = dataset.iloc[:, 2].values

from sklearn.impute import SimpleImputer

missingvalues = SimpleImputer(missing_values=np.nan, strategy='mean')
missingvalues.fit(X[:, 1:2])
X = missingvalues.transform(X[:, 1:2])

print(missingvalues.transform(X))