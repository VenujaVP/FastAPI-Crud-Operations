from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# from app.models import SQLModel
# from app.database import engine
# from app.routes import items

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins in development
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

@app.get("/")
def root():
    return {"message": "FastAPI backend is running 🚀"}