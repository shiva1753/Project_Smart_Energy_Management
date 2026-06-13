from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import joblib
import pandas as pd
from datetime import datetime

app = FastAPI(title="Smart Home Energy Predictor")

# Load the trained AI model
try:
    model = joblib.load('energy_model.pkl')
    print("AI Model loaded successfully!")
except Exception as e:
    print(f"Error loading model: {e}. Did you run train_model.py?")

# Expected JSON payload from the Smart Plug or Frontend
class SensorData(BaseModel):
    voltage: float
    current: float

# Tariff rate for estimation (e.g., ₹8 per kWh)
COST_PER_KWH = 8.0 

@app.get("/")
def read_root():
    return {"message": "Smart Home Energy API is running. Send POST requests to /predict"}

@app.post("/predict")
def predict_power(data: SensorData):
    try:
        current_hour = datetime.now().hour

        # Format input exactly as the model expects
        input_features = pd.DataFrame([{
            'Voltage': data.voltage,
            'Global_intensity': data.current,
            'Hour': current_hour
        }])

        # Predict Active Power
        predicted_power_kw = model.predict(input_features)[0]
        estimated_cost = predicted_power_kw * COST_PER_KWH

        # Send response back to the dashboard
        return {
            "status": "success",
            "timestamp": datetime.now().isoformat(),
            "inputs": {
                "voltage": data.voltage,
                "current": data.current,
                "hour_used": current_hour
            },
            "predictions": {
                "predicted_active_power_kw": round(predicted_power_kw, 4),
                "estimated_hourly_cost_inr": round(estimated_cost, 2)
            }
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))