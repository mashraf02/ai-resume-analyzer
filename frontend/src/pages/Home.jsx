function Home() {
    return (
        <main className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-3xl text-center">

                <p className="mb-4 text-sm font-medium uppercase tracking-widest">
                    AI Resume Analyzer
                </p>

                <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
                    Make your resume
                    <br />
                    <span className="text-gray-500">job-ready.</span>
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
                    Understand how well your resume matches a job and discover
                    exactly what you can improve.
                </p>

                <button className="mt-8 rounded-xl bg-black px-7 py-3.5 font-medium text-white hover:bg-gray-800">
                    Analyze My Resume
                </button>

                <div className="mt-12 flex flex-wrap justify-center gap-3">
                    <span className="rounded-full border px-4 py-2 text-sm">
                        ATS Compatibility
                    </span>

                    <span className="rounded-full border px-4 py-2 text-sm">
                        Skill Gap Analysis
                    </span>

                    <span className="rounded-full border px-4 py-2 text-sm">
                        Explainable AI
                    </span>
                </div>

            </div>
        </main>
    )
}

export default Home