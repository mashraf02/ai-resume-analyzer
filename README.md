# ResumeMatch — AI-Powered Resume–Job Matching System

ResumeMatch is a full-stack web application that helps job seekers evaluate how well their resume matches a specific job description.

The system allows users to upload a PDF or DOCX resume, provide a job description, and receive an automated analysis containing a match score, matched skills, missing skills, and personalized recommendations.

The project was developed with a strong focus on **Human–Computer Interaction (HCI)**, usability, simplicity, feedback, error prevention, and actionable presentation of complex analysis.

---

## Features

* Upload resumes in **PDF** or **DOCX** format
* Enter a target job description
* Extract text from uploaded resumes
* Automatically identify technical skills
* Extract required skills from job descriptions
* Compare resume skills with job requirements
* Calculate an explainable match percentage
* Identify matched skills
* Identify missing skills
* Generate recommendations for missing skills
* Display results through a user-friendly React interface
* Input validation and error handling
* Loading/analyzing state during processing
* REST API powered by FastAPI
* Interactive API documentation through Swagger UI

---

## Project Workflow

```text
                    USER
                      |
                      v
              React Frontend
                      |
          +-----------+-----------+
          |                       |
          v                       v
    Upload Resume          Job Description
          |                       |
          +-----------+-----------+
                      |
                      v
               Analyze Button
                      |
                      v
             FastAPI Backend
                      |
                      v
             Resume Text Extraction
                      |
                      v
                Skill Extraction
                 /          \
                /            \
               v              v
        Resume Skills      Job Skills
               \              /
                \            /
                 v          v
                  Skill Matching
                       |
                       v
                  Match Score
                       |
              +--------+--------+
              |                 |
              v                 v
       Matched Skills     Missing Skills
                                |
                                v
                       Recommendations
                                |
                                v
                         JSON Response
                                |
                                v
                       Results.jsx
                                |
                                v
                         User Results
```

---

## Match Score Calculation

ResumeMatch uses an explainable skill-based matching approach.

Let:

* `R` = set of skills found in the resume
* `J` = set of skills required by the job
* `M` = matched skills

Matched skills are calculated using set intersection:

```text
M = R ∩ J
```

Missing skills are calculated as:

```text
Missing = J - R
```

The match score is calculated as:

```text
Match Score = (Number of Matched Skills / Total Job Skills) × 100
```

### Example

Suppose a job requires:

```text
Python
SQL
AWS
Docker
PySpark
```

and the resume contains:

```text
Python
SQL
PySpark
pandas
NumPy
```

The matched skills are:

```text
Python
SQL
PySpark
```

Therefore:

```text
Matched Skills = 3
Total Job Skills = 5
```

The score becomes:

```text
(3 / 5) × 100 = 60%
```

The system therefore reports:

```text
60% Match
```

The missing skills are:

```text
AWS
Docker
```

This makes the matching process transparent and understandable rather than producing an unexplained score.

---

## Example Analysis

For a Data Engineer position requiring:

```text
AWS
Apache Spark
Docker
NumPy
PostgreSQL
PySpark
Python
SQL
pandas
```

ResumeMatch identified:

### Matched Skills

```text
Apache Spark
NumPy
pandas
PostgreSQL
PySpark
Python
SQL
```

### Missing Skills

```text
AWS
Docker
```

There are 7 matched skills out of 9 required skills:

```text
(7 / 9) × 100 = 77.78%
```

After rounding:

```text
Match Score = 78%
```

The system then generates recommendations for the missing skills.

---

## HCI Design

ResumeMatch was designed from a Human–Computer Interaction perspective rather than treating the application as only a technical system.

### Simplicity

The primary interaction requires only three actions:

```text
1. Upload Resume
2. Enter Job Description
3. Click Analyze
```

### Visibility of System Status

The interface provides feedback while the analysis is being performed so that users know the system is processing their request.

### Error Prevention

The frontend validates important inputs before making the API request.

Examples include:

* Resume must be uploaded
* Job description cannot be empty
* Supported resume formats are validated

### Recognition Rather Than Recall

Users interact with familiar interface elements such as:

* Upload Resume
* Job Description
* Analyze
* Match Score
* Matched Skills
* Missing Skills
* Recommendations

Users do not need to understand the underlying implementation.

### Match Between System and Real World

The system uses terminology familiar to job seekers instead of exposing technical concepts such as set operations or backend processing.

### Minimalist Presentation

The Results page focuses on information that directly supports the user's decision:

```text
Match Score
     ↓
Matched Skills
     ↓
Missing Skills
     ↓
Recommendations
```

---

## Technology Stack

### Frontend

* React
* Vite
* Tailwind CSS
* JavaScript
* React Router

### Backend

* Python
* FastAPI
* Uvicorn

### Resume Processing

* PDF/DOCX text extraction
* Python-based parsing

### Development Tools

* VS Code
* Git
* GitHub
* Swagger UI

---

## Project Structure

```text
HCI Project/
│
├── frontend/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Analyze.jsx
│   │   │   ├── HowItWorks.jsx
│   │   │   └── Results.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── package-lock.json
│
├── backend/
│   │
│   ├── app/
│   │   ├── routes/
│   │   │   └── analyze.py
│   │   │
│   │   ├── resume_parser.py
│   │   ├── skills.py
│   │   ├── matching.py
│   │   ├── recommendations.py
│   │   └── main.py
│   │
│   ├── requirements.txt
│   └── venv/
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

> `venv/` and `node_modules/` are local development environments and should not be committed to GitHub.

---

## API

The backend exposes the main analysis endpoint:

```text
POST /api/analyze
```

The endpoint accepts:

```text
resume
job_description
```

and returns structured analysis data.

Example response:

```json
{
  "filename": "resume.pdf",
  "resume_text": "...",
  "job_description": "...",
  "resume_skills": [],
  "job_skills": [],
  "match_score": 78,
  "matched_skills": [],
  "missing_skills": [],
  "recommendations": []
}
```

---

## Running the Project Locally

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd "HCI Project"
```

---

## 2. Start the Backend

Navigate to the backend:

```bash
cd backend
```

Create/activate the virtual environment if necessary.

For Git Bash on Windows:

```bash
source venv/Scripts/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start FastAPI:

```bash
python -m uvicorn app.main:app --reload
```

The backend will run at:

```text
http://127.0.0.1:8000
```

---

## 3. Access API Documentation

FastAPI automatically provides Swagger documentation.

Open:

```text
http://127.0.0.1:8000/docs
```

The main analysis endpoint can be tested directly from Swagger UI.

---

## 4. Start the Frontend

Open another terminal.

Navigate to the project frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

---

## 5. Use ResumeMatch

After both servers are running:

1. Open the frontend in your browser.
2. Navigate to the Analyze page.
3. Upload a PDF or DOCX resume.
4. Paste the target job description.
5. Click **Analyze**.
6. Wait for the backend to process the resume.
7. Review the match score.
8. Review matched skills.
9. Review missing skills.
10. Follow the recommended learning areas.

---

## Error Handling

ResumeMatch provides validation at multiple stages.

### Frontend Validation

The frontend checks whether:

* A resume has been uploaded.
* A job description has been provided.

For example:

```text
Please upload your resume first.
```

or:

```text
Please enter the job description.
```

### Backend Validation

The backend validates:

* Resume filename
* File extension
* Job description
* Resume text extraction
* Extracted resume content

Unsupported files produce an appropriate error response.

---

## HCI Evaluation

The system can be evaluated using common usability criteria.

### Task Completion

Can users successfully:

* Upload a resume?
* Enter a job description?
* Start an analysis?
* Understand the results?

### Efficiency

Measure the time required for a first-time user to complete an analysis.

### Error Rate

Record errors such as:

* Unsupported file uploads
* Empty job descriptions
* Failed analysis requests
* Misunderstanding of result information

### User Satisfaction

Users can rate statements using a 1–5 scale:

```text
1 = Strongly Disagree
2 = Disagree
3 = Neutral
4 = Agree
5 = Strongly Agree
```

Example statements:

* The interface was easy to understand.
* Uploading my resume was easy.
* The job description input was clear.
* The analysis process was easy to follow.
* The match score was understandable.
* Missing skills were clearly presented.
* The recommendations were useful.
* I would use ResumeMatch again.

---

## Limitations

The current implementation has several limitations.

### Skill Recognition

The system primarily depends on recognized skill names. Different names for the same technology may require additional normalization.

For example:

```text
Amazon Web Services
AWS
```

may need to be treated as the same skill.

### Equal Skill Weighting

The current scoring system treats each required skill equally.

For example:

```text
Python = 1 point
AWS = 1 point
Git = 1 point
```

However, real job descriptions may consider some skills significantly more important than others.

### Experience Level

The current system primarily identifies whether a skill appears in the resume. It does not fully evaluate the user's level of experience with that skill.

### Semantic Understanding

The current matching approach is primarily skill-based and does not perform deep semantic understanding of the entire resume and job description.

---

## Future Improvements

Potential future improvements include:

### Weighted Skill Matching

Assign different importance levels to job requirements.

```text
Python → High
SQL → High
AWS → Medium
Git → Low
```

### Semantic Skill Matching

Use NLP or embedding models to recognize related terms and technologies.

### Experience Analysis

Extract years of experience for individual skills.

### Skill Proficiency

Estimate whether a skill is:

```text
Beginner
Intermediate
Advanced
```

### Resume Improvement Suggestions

Provide suggestions for improving:

* Resume summary
* Technical skills section
* Project descriptions
* Experience descriptions

### Job Recommendation

Recommend suitable job postings based on the user's skill profile.

### Resume Ranking

Allow users to upload multiple resumes and identify which version is most suitable for a particular job.

---

## Security and Privacy Considerations

Because resumes may contain personal information, future production versions should implement stronger privacy and security mechanisms.

Potential improvements include:

* Secure file handling
* File size restrictions
* Temporary file deletion
* HTTPS
* Authentication
* Secure API endpoints
* Data encryption
* Avoiding permanent storage of resumes unless explicitly required

---

## Learning Outcomes

This project provided practical experience in:

* Human–Computer Interaction
* User-centered interface design
* React development
* FastAPI development
* REST API communication
* File upload handling
* Resume text extraction
* Skill extraction
* Set-based matching
* Backend/frontend integration
* Error handling
* Git and GitHub
* Usability evaluation

---

## Conclusion

ResumeMatch demonstrates how HCI principles can be combined with modern web development and automated data processing to solve a practical problem faced by job seekers.

Rather than simply presenting a numerical score, the system explains the result through:

```text
Match Score
     ↓
Matched Skills
     ↓
Missing Skills
     ↓
Recommendations
```

This makes the output easier to understand and more actionable for the user.

The project combines a **React frontend**, **FastAPI backend**, resume processing, skill extraction, transparent mathematical matching, and recommendation generation into a complete end-to-end application.

The core design philosophy is:

> **Turn complex resume analysis into simple, understandable, and actionable information for the user.**


---

## Project Status

**Status:** Completed core implementation

Current system supports:

* Resume upload
* Resume text extraction
* Job description input
* Skill extraction
* Skill matching
* Match score calculation
* Missing skill detection
* Recommendations
* React frontend
* FastAPI backend
* REST API integration
* HCI-oriented result presentation

---
