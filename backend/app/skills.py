SKILLS = {
    # Programming
    "python": "Python",
    "sql": "SQL",
    "postgresql": "PostgreSQL",
    "javascript": "JavaScript",
    "java": "Java",
    "c++": "C++",

    # Machine Learning
    "machine learning": "Machine Learning",
    "scikit-learn": "scikit-learn",
    "sklearn": "scikit-learn",
    "feature engineering": "Feature Engineering",
    "cross-validation": "Cross-Validation",
    "cross validation": "Cross-Validation",
    "hyperparameter tuning": "Hyperparameter Tuning",
    "classification": "Classification",
    "regression": "Regression",
    "random forest": "Random Forest",
    "gradient boosting": "Gradient Boosting",
    "xgboost": "XGBoost",
    "lightgbm": "LightGBM",

    # Deep Learning
    "deep learning": "Deep Learning",
    "pytorch": "PyTorch",
    "tensorflow": "TensorFlow",
    "keras": "Keras",
    "transfer learning": "Transfer Learning",
    "resnet": "ResNet",
    "resnet-50": "ResNet-50",
    "densenet": "DenseNet",
    "densenet-121": "DenseNet-121",

    # Computer Vision
    "computer vision": "Computer Vision",
    "image classification": "Image Classification",
    "opencv": "OpenCV",
    "clahe": "CLAHE",
    "sobel": "Sobel",

    # Data
    "data engineering": "Data Engineering",
    "data pipeline": "Data Pipelines",
    "data pipelines": "Data Pipelines",
    "data cleaning": "Data Cleaning",
    "pyspark": "PySpark",
    "spark": "Apache Spark",
    "spark mllib": "Spark MLlib",
    "pandas": "pandas",
    "numpy": "NumPy",

    # Explainability / Statistics
    "shap": "SHAP",
    "statistical hypothesis testing": "Statistical Hypothesis Testing",
    "statistics": "Statistics",

    # Cloud / DevOps
    "aws": "AWS",
    "amazon web services": "AWS",
    "docker": "Docker",
    "kubernetes": "Kubernetes",

    # Tools
    "git": "Git",
    "github": "GitHub",
    "jupyter": "Jupyter",
    "google colab": "Google Colab",

    # Visualization
    "plotly": "Plotly",
    "matplotlib": "Matplotlib",
    "seaborn": "Seaborn",
}


def extract_skills(text: str) -> list[str]:
    """
    Extract known skills from a piece of text.
    """

    if not text:
        return []

    text_lower = text.lower()

    found_skills = set()

    for keyword, skill_name in SKILLS.items():
        if keyword in text_lower:
            found_skills.add(skill_name)

    return sorted(found_skills)