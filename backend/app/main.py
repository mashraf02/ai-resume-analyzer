from fastapi import FastAPI

app = FastAPI(
    title="ResumeMatch API",
    description="Backend API for ResumeMatch",
    version="1.0.0",
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