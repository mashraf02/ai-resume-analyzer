RECOMMENDATIONS = {
    "AWS": {
        "title": "Learn AWS fundamentals",
        "description": "Focus on EC2, S3, IAM, networking, and basic cloud deployment."
    },

    "Docker": {
        "title": "Learn Docker fundamentals",
        "description": "Learn how to containerize Python applications, create Dockerfiles, and manage containers."
    },

    "PostgreSQL": {
        "title": "Strengthen PostgreSQL",
        "description": "Practice database design, advanced SQL queries, indexing, joins, and query optimization."
    },

    "Python": {
        "title": "Strengthen Python",
        "description": "Focus on clean Python, OOP, data structures, APIs, testing, and practical project development."
    },

    "SQL": {
        "title": "Strengthen SQL",
        "description": "Practice joins, CTEs, window functions, aggregation, and query optimization."
    },

    "PyTorch": {
        "title": "Deepen PyTorch",
        "description": "Practice model building, training loops, transfer learning, evaluation, and deployment."
    },

    "Machine Learning": {
        "title": "Strengthen machine learning",
        "description": "Review feature engineering, model selection, cross-validation, hyperparameter tuning, and evaluation."
    },

    "PySpark": {
        "title": "Strengthen PySpark",
        "description": "Practice distributed data processing, DataFrames, transformations, actions, and Spark optimization."
    },

    "pandas": {
        "title": "Strengthen pandas",
        "description": "Practice data cleaning, transformation, aggregation, merging, and efficient DataFrame operations."
    },

    "NumPy": {
        "title": "Strengthen NumPy",
        "description": "Practice arrays, vectorized operations, broadcasting, indexing, and numerical computation."
    },

    "Git": {
        "title": "Strengthen Git",
        "description": "Practice branching, merging, pull requests, resolving conflicts, and maintaining clean repositories."
    },

    "GitHub": {
        "title": "Strengthen GitHub",
        "description": "Practice repository management, pull requests, issues, project documentation, and collaboration."
    },

    "Computer Vision": {
        "title": "Strengthen computer vision",
        "description": "Practice image preprocessing, feature extraction, classification, object detection, and evaluation."
    },

    "Deep Learning": {
        "title": "Strengthen deep learning",
        "description": "Review neural networks, optimization, regularization, transfer learning, and model evaluation."
    },
}


def generate_recommendations(missing_skills: list[str]) -> list[dict]:
    """
    Generate learning recommendations for missing job skills.
    """

    recommendations = []

    # Create a case-insensitive lookup
    recommendation_lookup = {
        skill.lower(): data
        for skill, data in RECOMMENDATIONS.items()
    }

    for skill in missing_skills:
        recommendation = recommendation_lookup.get(
            skill.lower()
        )

        if recommendation:
            recommendations.append({
                "skill": skill,
                "title": recommendation["title"],
                "description": recommendation["description"],
            })

        else:
            recommendations.append({
                "skill": skill,
                "title": f"Develop your {skill} skills",
                "description": (
                    f"Review the fundamentals of {skill} "
                    "and build a practical project using it."
                ),
            })

    return recommendations