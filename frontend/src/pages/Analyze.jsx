import { useState } from "react"

function Analyze() {
    const [resume, setResume] = useState(null)
    const [jobDescription, setJobDescription] = useState("")
    const [error, setError] = useState("")
    const [isAnalyzing, setIsAnalyzing] = useState(false)

    const handleFileChange = (event) => {
        const file = event.target.files[0]

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

    const removeResume = () => {
        setResume(null)
        setError("")
    }

    const handleAnalyze = () => {
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

        // Temporary simulation.
        // Later this will be replaced with the backend API call.
        setTimeout(() => {
            setIsAnalyzing(false)
            console.log("Analysis completed")
        }, 3000)
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
                                This may take a few moments.
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
            <main className="min-h-screen px-6 py-12">
                <div className="mx-auto max-w-5xl">

                    {/* Header */}
                    <div className="mb-10">
                        <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
                            Resume Analysis
                        </p>

                        <h1 className="mt-2 text-4xl font-bold">
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
                                <label className="mt-6 flex min-h-64 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-6 text-center hover:bg-gray-50">

                                    <div className="text-4xl">
                                        📄
                                    </div>

                                    <p className="mt-4 font-medium">
                                        Drop your resume here
                                    </p>

                                    <p className="mt-2 text-sm text-gray-500">
                                        or click to browse
                                    </p>

                                    <p className="mt-4 text-xs text-gray-400">
                                        PDF or DOCX • Maximum 5MB
                                    </p>

                                    <input
                                        type="file"
                                        accept=".pdf,.docx"
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />

                                </label>
                            ) : (
                                <div className="mt-6 rounded-xl border p-5">

                                    <div className="flex items-center justify-between">

                                        <div>
                                            <p className="font-medium">
                                                ✓ {resume.name}
                                            </p>

                                            <p className="mt-1 text-sm text-gray-500">
                                                {(resume.size / 1024 / 1024).toFixed(2)} MB
                                            </p>
                                        </div>

                                        <button
                                            onClick={removeResume}
                                            className="text-sm text-gray-500 hover:text-black"
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

                            <textarea
                                value={jobDescription}
                                onChange={(event) => {
                                    setJobDescription(event.target.value)
                                    setError("")
                                }}
                                className="mt-6 min-h-64 w-full resize-none rounded-xl border p-4 text-sm outline-none focus:border-black"
                                placeholder="Paste the job description here..."
                            />

                            <p className="mt-2 text-right text-xs text-gray-400">
                                {jobDescription.length} characters
                            </p>

                        </div>

                    </div>

                    {/* Error */}
                    {error && (
                        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                            {error}
                        </div>
                    )}

                    {/* Analyze Button */}
                    <div className="mt-8 flex justify-center">

                        <button
                            onClick={handleAnalyze}
                            disabled={isAnalyzing}
                            className="rounded-xl bg-black px-8 py-3.5 font-medium text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {isAnalyzing ? "Analyzing..." : "Analyze Resume"}
                        </button>

                    </div>

                </div>
            </main>
        </>
    )
}

export default Analyze