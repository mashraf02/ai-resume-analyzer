from fastapi import APIRouter, File, Form, HTTPException, UploadFile

from app.resume_parser import extract_resume_text
from app.skills import extract_skills
from app.matching import calculate_match
from app.recommendations import generate_recommendations


router = APIRouter()


@router.post("/analyze")
async def analyze_resume(
    resume: UploadFile = File(...),
    job_description: str = Form(...),
):
    # -----------------------------
    # Validate resume
    # -----------------------------

    if not resume.filename:
        raise HTTPException(
            status_code=400,
            detail="No filename provided.",
        )

    if not resume.filename.lower().endswith((".pdf", ".docx")):
        raise HTTPException(
            status_code=400,
            detail="Please upload a PDF or DOCX file.",
        )

    # -----------------------------
    # Validate job description
    # -----------------------------

    if not job_description.strip():
        raise HTTPException(
            status_code=400,
            detail="Job description cannot be empty.",
        )

    # -----------------------------
    # Read resume
    # -----------------------------

    file_bytes = await resume.read()

    # -----------------------------
    # Extract resume text
    # -----------------------------

    try:
        resume_text = extract_resume_text(
            resume.filename,
            file_bytes,
        )

    except ValueError as error:
        raise HTTPException(
            status_code=400,
            detail=str(error),
        )

    except Exception:
        raise HTTPException(
            status_code=500,
            detail="Could not extract text from the resume.",
        )

    # -----------------------------
    # Validate extracted text
    # -----------------------------

    if not resume_text:
        raise HTTPException(
            status_code=400,
            detail="No text could be extracted from the resume.",
        )

    # -----------------------------
    # Extract skills
    # -----------------------------

    resume_skills = extract_skills(resume_text)

    job_skills = extract_skills(job_description)

    # -----------------------------
    # Calculate match
    # -----------------------------

    match_result = calculate_match(
        resume_skills,
        job_skills,
    )

    # -----------------------------
    # Generate recommendations
    # -----------------------------

    recommendations = generate_recommendations(
        match_result["missing_skills"]
    )

    # -----------------------------
    # Return result
    # -----------------------------

    return {
        "filename": resume.filename,
        "resume_text": resume_text,
        "job_description": job_description.strip(),
        "resume_skills": resume_skills,
        "job_skills": job_skills,
        "match_score": match_result["match_score"],
        "matched_skills": match_result["matched_skills"],
        "missing_skills": match_result["missing_skills"],
        "recommendations": recommendations,
    }