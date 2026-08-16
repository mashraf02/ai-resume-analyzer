def calculate_match(resume_skills: list[str], job_skills: list[str]):
    """
    Compare resume skills with job-required skills.

    Returns:
        match_score
        matched_skills
        missing_skills
    """

    # Convert to lowercase for safe comparison
    resume_skill_set = {
        skill.strip().lower()
        for skill in resume_skills
    }

    job_skill_set = {
        skill.strip().lower()
        for skill in job_skills
    }

    # Skills appearing in both resume and job description
    matched_skills = sorted(
        skill
        for skill in job_skill_set
        if skill in resume_skill_set
    )

    # Skills required by the job but missing from resume
    missing_skills = sorted(
        skill
        for skill in job_skill_set
        if skill not in resume_skill_set
    )

    # Calculate percentage
    if not job_skill_set:
        match_score = 0
    else:
        match_score = round(
            len(matched_skills) / len(job_skill_set) * 100
        )

    return {
        "match_score": match_score,
        "matched_skills": matched_skills,
        "missing_skills": missing_skills,
    }
