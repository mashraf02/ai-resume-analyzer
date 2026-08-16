import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Analyze() {
    const navigate = useNavigate()

    const MAX_JOB_DESCRIPTION_LENGTH = 5000

    const [resume, setResume] = useState(null)
    const [jobDescription, setJobDescription] = useState("")
    const [error, setError] = useState("")
    const [isAnalyzing, setIsAnalyzing] = useState(false)
    const [isDragging, setIsDragging] = useState(false)

    const validateAndSetFile = (file) => {
        if (!file) return

        // Check file type
        const allowedTypes = [
            "application/pdf",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ]

        if (!allowedTypes.includes(file.type)) {
            setError("Please upload a PDF or DOCX file.")
            return
        }

        // Check file size (5MB)
        if (file.size > 5 * 1024 * 1024) {
            setError("Your resume must be smaller than 5MB.")
            return
        }

        setResume(file)
        setError("")
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0]
        validateAndSetFile(file)
    }

    const handleDragOver = (event) => {
        event.preventDefault()
        setIsDragging(true)
    }

    const handleDragLeave = (event) => {
        event.preventDefault()
        setIsDragging(false)
    }

    const handleDrop = (event) => {
        event.preventDefault()
        setIsDragging(false)

        const file = event.dataTransfer.files[0]
        validateAndSetFile(file)
    }

    const removeResume = () => {
        setResume(null)
        setError("")
    }

    const isFormValid =
        resume !== null &&
        jobDescription.trim().length > 0

    const handleAnalyze = async () => {
        if (!resume) {
            setError("Please upload your resume first.")
            return
        }

        if (!jobDescription.trim()) {
            setError("Please enter the job description.")
            return
        }

        setError("")
        setIsAnalyzing(true)

        try {
            const formData = new FormData()

            formData.append("resume", resume)
            formData.append("job_description", jobDescription)

            const response = await fetch(
                "http://127.0.0.1:8000/api/analyze",
                {
                    method: "POST",
                    body: formData,
                }
            )

            if (!response.ok) {
                throw new Error("Analysis failed")
            }

            const data = await response.json()

            console.log("Backend result:", data)

            navigate("/results", {
                state: {
                    result: data,
                },
            })

        } catch (error) {
            console.error(error)
            setError("Something went wrong while analyzing your resume.")
        } finally {
            setIsAnalyzing(false)
        }
    }

    return (
        <>
            {/* Loading Screen */}
            {isAnalyzing && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
                    <div className="w-full max-w-md px-6">

                        <div className="text-center">
                            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-black" />

                            <h2 className="mt-6 text-2xl font-bold">
                                Analyzing your resume
                            </h2>

                            <p className="mt-2 text-sm text-gray-500">
                                Comparing your resume with the job description.
                            </p>
                        </div>

                        <div className="mt-10 space-y-4">

                            <div className="flex items-center gap-3">
                                <span>✓</span>
                                <span className="text-sm">Resume uploaded</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <span>✓</span>
                                <span className="text-sm">Reading resume information</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="animate-pulse">●</span>
                                <span className="text-sm">Matching skills</span>
                            </div>

                            <div className="flex items-center gap-3 text-gray-400">
                                <span>○</span>
                                <span className="text-sm">Checking keywords</span>
                            </div>

                            <div className="flex items-center gap-3 text-gray-400">
                                <span>○</span>
                                <span className="text-sm">Preparing recommendations</span>
                            </div>

                        </div>

                    </div>
                </div>
            )}

            {/* Main Page */}
            <main className="min-h-screen px-4 py-10 sm:px-6 sm:py-12">
                <div className="mx-auto max-w-5xl">

                    {/* Header */}
                    <div className="mb-10">

                        {/* Progress */}
                        <div className="mb-8 flex flex-wrap items-center gap-2 text-xs sm:gap-3 sm:text-sm">

                            <div className="flex items-center gap-2 font-medium">
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-xs text-white">
                                    1
                                </span>
                                Resume
                            </div>

                            <div className="h-px w-6 bg-gray-300 sm:w-10" />

                            <div className="flex items-center gap-2 text-gray-400">
                                <span className="flex h-7 w-7 items-center justify-center rounded-full border text-xs">
                                    2
                                </span>
                                Job Description
                            </div>

                            <div className="h-px w-6 bg-gray-300 sm:w-10" />

                            <div className="flex items-center gap-2 text-gray-400">
                                <span className="flex h-7 w-7 items-center justify-center rounded-full border text-xs">
                                    3
                                </span>
                                Analysis
                            </div>

                        </div>

                        <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
                            Resume Analysis
                        </p>

                        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
                            Analyze your resume
                        </h1>

                        <p className="mt-3 text-gray-600">
                            Upload your resume and provide the job description to see
                            how well they match.
                        </p>

                    </div>

                    {/* Main Inputs */}
                    <div className="grid gap-6 md:grid-cols-2">

                        {/* Resume Upload */}
                        <div className="rounded-2xl border p-6">

                            <h2 className="text-lg font-semibold">
                                Your Resume
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                                Upload your PDF or DOCX resume.
                            </p>

                            {!resume ? (
                                <label
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                    className={`mt-6 flex min-h-56 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-6 text-center transition sm:min-h-64 ${isDragging
                                        ? "border-black bg-gray-50"
                                        : "border-gray-300 hover:bg-gray-50"
                                        }`}
                                >

                                    <div className="text-4xl">
                                        📄
                                    </div>

                                    <p className="mt-4 font-medium">
                                        {isDragging
                                            ? "Release to upload your resume"
                                            : "Drop your resume here"}
                                    </p>

                                    <p className="mt-2 text-sm text-gray-500">
                                        or click to browse
                                    </p>

                                    <p className="mt-4 text-xs text-gray-400">
                                        PDF or DOCX • Maximum 5MB
                                    </p>

                                    <input
                                        id="resume-upload"
                                        type="file"
                                        accept=".pdf,.docx"
                                        onChange={handleFileChange}
                                        className="hidden"
                                        aria-label="Upload your resume"
                                    />

                                </label>
                            ) : (
                                <div className="mt-6 rounded-xl border bg-gray-50 p-5">

                                    <div className="flex items-start justify-between gap-4">

                                        <div className="min-w-0">

                                            <div className="flex items-center gap-2">
                                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-sm text-white">
                                                    ✓
                                                </span>

                                                <p className="truncate font-medium">
                                                    {resume.name}
                                                </p>
                                            </div>

                                            <p className="mt-2 text-sm text-gray-500">
                                                PDF or DOCX • {(resume.size / 1024 / 1024).toFixed(2)} MB
                                            </p>

                                            <p className="mt-1 text-xs text-gray-400">
                                                Resume uploaded successfully
                                            </p>

                                        </div>

                                        <button
                                            type="button"
                                            onClick={removeResume}
                                            className="shrink-0 text-sm text-gray-500 hover:text-black"
                                        >
                                            Remove
                                        </button>

                                    </div>

                                </div>
                            )}

                        </div>

                        {/* Job Description */}
                        <div className="rounded-2xl border p-6">

                            <h2 className="text-lg font-semibold">
                                Job Description
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                                Paste the job description you're applying for.
                            </p>

                            <label
                                htmlFor="job-description"
                                className="mt-6 block text-sm font-medium"
                            >
                                Job description
                            </label>

                            <textarea
                                id="job-description"
                                value={jobDescription}
                                onChange={(event) => {
                                    const value = event.target.value

                                    if (value.length <= MAX_JOB_DESCRIPTION_LENGTH) {
                                        setJobDescription(value)
                                        setError("")
                                    }
                                }}
                                className="mt-2 min-h-64 w-full resize-none rounded-xl border p-4 text-sm outline-none focus:border-black"
                                placeholder="Paste the job description here..."
                            />

                            <p className="mt-2 text-right text-xs text-gray-400">
                                {jobDescription.length} / {MAX_JOB_DESCRIPTION_LENGTH}
                            </p>

                        </div>

                    </div>

                    {/* Error */}
                    {error && (
                        <div
                            role="alert"
                            className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                        >
                            {error}
                        </div>
                    )}

                    {/* Analyze Button */}
                    <div className="mt-8 flex justify-center">

                        <button
                            onClick={handleAnalyze}
                            disabled={!isFormValid || isAnalyzing}
                            className={`rounded-xl px-8 py-3.5 font-medium text-white transition ${!isFormValid || isAnalyzing
                                ? "cursor-not-allowed bg-gray-300"
                                : "bg-black hover:bg-gray-800"
                                }`}
                        >
                            {isAnalyzing
                                ? "Analyzing..."
                                : !resume
                                    ? "Upload Resume"
                                    : !jobDescription.trim()
                                        ? "Enter Job Description"
                                        : "Analyze Resume"}
                        </button>

                    </div>

                </div>
            </main>
        </>
    )
}

export default Analyze