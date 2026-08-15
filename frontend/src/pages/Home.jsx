import { Link } from "react-router-dom"

function Home() {
    return (
        <main className="min-h-screen bg-white">

            {/* Hero */}
            <section className="px-6 py-20 sm:py-28">
                <div className="mx-auto max-w-5xl text-center">

                    <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
                        Resume Analysis
                    </p>

                    <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                        Build a stronger resume for the job you want.
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                        Compare your resume with a job description, discover
                        missing skills, and get practical recommendations to
                        improve your application.
                    </p>

                    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                        <Link
                            to="/analyze"
                            className="rounded-xl bg-black px-7 py-3.5 font-medium text-white transition hover:bg-gray-800"
                        >
                            Analyze My Resume
                        </Link>

                        <Link
                            to="/how-it-works"
                            className="rounded-xl border border-gray-300 px-7 py-3.5 font-medium transition hover:bg-gray-50"
                        >
                            See How It Works
                        </Link>

                    </div>

                </div>
            </section>


            {/* Simple Process */}
            <section className="border-y bg-gray-50 px-6 py-16">

                <div className="mx-auto max-w-5xl">

                    <div className="text-center">

                        <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
                            Simple Process
                        </p>

                        <h2 className="mt-3 text-3xl font-bold">
                            From resume to better application
                        </h2>

                    </div>


                    <div className="mt-12 grid gap-6 md:grid-cols-3">

                        <div className="rounded-2xl bg-white p-7 shadow-sm">

                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
                                1
                            </div>

                            <h3 className="mt-5 text-lg font-semibold">
                                Upload
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                Upload your resume as a PDF or DOCX file.
                            </p>

                        </div>


                        <div className="rounded-2xl bg-white p-7 shadow-sm">

                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
                                2
                            </div>

                            <h3 className="mt-5 text-lg font-semibold">
                                Compare
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                Add a job description and compare your
                                qualifications with its requirements.
                            </p>

                        </div>


                        <div className="rounded-2xl bg-white p-7 shadow-sm">

                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
                                3
                            </div>

                            <h3 className="mt-5 text-lg font-semibold">
                                Improve
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                Understand your skill gaps and get
                                recommendations for improvement.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* Features */}
            <section className="px-5 py-16 sm:px-6 sm:py-20 md:py-24">

                <div className="mx-auto max-w-5xl">

                    <div className="max-w-2xl">

                        <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
                            Why ResumeMatch?
                        </p>

                        <h2 className="mt-3 text-3xl font-bold">
                            Focus on what actually matters.
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            Instead of simply telling you whether your resume
                            is good or bad, ResumeMatch shows you where your
                            resume matches the job and where it can improve.
                        </p>

                    </div>


                    <div className="mt-12 grid gap-6 md:grid-cols-3">

                        <div className="rounded-2xl border p-7">

                            <div className="text-2xl">
                                ◉
                            </div>

                            <h3 className="mt-5 text-lg font-semibold">
                                Match Score
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                Get an easy-to-understand overview of how
                                closely your resume matches the position.
                            </p>

                        </div>


                        <div className="rounded-2xl border p-7">

                            <div className="text-2xl">
                                ✓
                            </div>

                            <h3 className="mt-5 text-lg font-semibold">
                                Skill Gaps
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                Identify important skills mentioned in the job
                                description that are missing from your resume.
                            </p>

                        </div>


                        <div className="rounded-2xl border p-7">

                            <div className="text-2xl">
                                →
                            </div>

                            <h3 className="mt-5 text-lg font-semibold">
                                Recommendations
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                Receive actionable suggestions instead of
                                confusing scores with no explanation.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* CTA */}
            <section className="px-6 pb-20">

                <div className="mx-auto max-w-5xl rounded-3xl bg-black px-8 py-14 text-center text-white">

                    <h2 className="text-3xl font-bold">
                        Ready to improve your resume?
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-gray-300">
                        Compare your resume with a real job description and
                        discover what you can improve.
                    </p>

                    <Link
                        to="/analyze"
                        className="mt-8 inline-block rounded-xl bg-white px-8 py-3.5 font-medium text-black transition hover:bg-gray-200"
                    >
                        Start Analysis
                    </Link>

                </div>

            </section>

        </main>
    )
}

export default Home