import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
import joblib

def train_energy_model():
    print("1. Loading the UCI dataset...")
    df = pd.read_csv('household_power_consumption.txt', sep=';', 
                     na_values=['?'], low_memory=False)

    print("2. Cleaning and Preprocessing Data...")
    df = df.dropna()
    # Extract the hour to teach the AI human habits
    df['Time'] = pd.to_datetime(df['Time'], format='%H:%M:%S')
    df['Hour'] = df['Time'].dt.hour

    print("3. Selecting Features and Target...")
    X = df[['Voltage', 'Global_intensity', 'Hour']]
    y = df['Global_active_power']

    # Using 100,000 rows for a fast and accurate training phase
    X_sample = X[:100000]
    y_sample = y[:100000]

    print("4. Splitting data into Training & Testing...")
    X_train, X_test, y_train, y_test = train_test_split(X_sample, y_sample, test_size=0.2, random_state=42)

    print("5. Training the Random Forest AI Model...")
    rf_model = RandomForestRegressor(n_estimators=100, random_state=42)
    rf_model.fit(X_train, y_train)

    accuracy = rf_model.score(X_test, y_test)
    print(f"-> Model trained successfully! Accuracy: {accuracy * 100:.2f}%")

    print("6. Saving the AI Brain...")
    joblib.dump(rf_model, 'energy_model.pkl')
    print("-> Model saved as 'energy_model.pkl'.")

if __name__ == "__main__":
    train_energy_model()