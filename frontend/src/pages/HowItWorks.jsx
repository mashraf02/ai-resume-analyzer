import { Link } from "react-router-dom"

function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Upload your resume",
            description:
                "Upload your current resume as a PDF or DOCX file. ResumeMatch checks the file and prepares it for analysis.",
        },
        {
            number: "02",
            title: "Add the job description",
            description:
                "Paste the job description for the position you're applying for so the system can understand what the employer is looking for.",
        },
        {
            number: "03",
            title: "Analyze the match",
            description:
                "ResumeMatch compares your resume with the job requirements and identifies relevant skills, experience, and keywords.",
        },
        {
            number: "04",
            title: "Understand your skill gaps",
            description:
                "See which important skills and keywords are missing or underrepresented in your resume.",
        },
        {
            number: "05",
            title: "Improve your resume",
            description:
                "Use the recommendations to understand what you can improve before submitting your application.",
        },
    ]

    return (
        <main className="min-h-screen px-4 py-12 sm:px-6 sm:py-16">

            <div className="mx-auto max-w-4xl">

                {/* Header */}
                <div className="max-w-2xl">

                    <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
                        How It Works
                    </p>

                    <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
                        From resume to better application.
                    </h1>

                    <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
                        ResumeMatch helps you understand how well your resume
                        matches a specific job and what you can improve before
                        applying.
                    </p>

                </div>


                {/* Steps */}
                <div className="mt-14">

                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            className="relative flex gap-5 pb-12 sm:gap-8"
                        >

                            {/* Connecting line */}
                            {index !== steps.length - 1 && (
                                <div className="absolute left-4 top-10 h-full w-px bg-gray-200" />
                            )}

                            {/* Number */}
                            <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-xs font-medium text-white">
                                {step.number}
                            </div>

                            {/* Content */}
                            <div className="pb-2">

                                <h2 className="text-xl font-semibold">
                                    {step.title}
                                </h2>

                                <p className="mt-2 max-w-2xl leading-7 text-gray-600">
                                    {step.description}
                                </p>

                            </div>

                        </div>
                    ))}

                </div>


                {/* CTA */}
                <div className="mt-4 rounded-2xl bg-black px-6 py-10 text-white sm:px-10">

                    <h2 className="text-2xl font-bold">
                        Ready to analyze your resume?
                    </h2>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-gray-300">
                        Upload your resume and compare it with a job description
                        to see where you stand.
                    </p>

                    <Link
                        to="/analyze"
                        className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
                    >
                        Analyze My Resume
                    </Link>

                </div>

            </div>

        </main>
    )
}

export default HowItWorks