from fastapi import FastAPI
import uvicorn
import pickle

app = FastAPI(debug=True)


@app.get("/")
def home():
    return {"Hello": "World"}


@app.get("/predict_crop")
def predict(N: float, P: float,  K: float, temperature: float,  humidity: float, ph: float, rainfall: float, price: int):
    model = pickle.load(open("crop.pkl", "rb"))
    prediction = model.predict(
        [[N, P,  K, temperature,  humidity, ph, rainfall, price]])
    return {"prediction": str(prediction[0])}


if __name__ == "__main__":
    uvicorn.run(app)
