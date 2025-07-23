#---------------RUN THIS FILE TO START THE SERVER--------------
#uvicorn app.main:app --host 192.168.43.73 --port 8005 --reload

#pip install python-dotenv sqlalchemy pymysql bcrypt pydantic[email] passlib pydantic colorlog
#pip install fastapi uvicorn sqlalchemy databases python-jose[cryptography] passlib[bcrypt]


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