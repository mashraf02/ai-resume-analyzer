from fastapi import FastAPI

from app.routes.analyze import router as analyze_router
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(
    title="ResumeMatch API",
    description="Backend API for ResumeMatch",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {
        "message": "ResumeMatch API is running"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }


app.include_router(
    analyze_router,
    prefix="/api",
    tags=["Analysis"],
)