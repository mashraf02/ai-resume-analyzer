import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Results() {
    const [openRecommendation, setOpenRecommendation] = useState(null)
    const [animatedScore, setAnimatedScore] = useState(0)

    useEffect(() => {
        let current = 0
        const interval = setInterval(() => {
            current += 1
            setAnimatedScore(current)
            if (current >= 78) {
                clearInterval(interval)
            }
        }, 20)
        return () => clearInterval(interval)
    }, [])

    const matchedSkills = [
        "Python",
        "SQL",
        "Machine Learning",
        "Git",
        "Data Analysis",
        "Pandas",
    ]

    const missingSkills = [
        {
            name: "AWS",
            importance: 90,
            level: "High priority",
        },
        {
            name: "Docker",
            importance: 65,
            level: "Medium priority",
        },
        {
            name: "Kubernetes",
            importance: 40,
            level: "Low priority",
        },
    ]

    const recommendations = [
        {
            title: "Add AWS experience",
            description:
                "The job description mentions AWS. Consider adding relevant projects or experience where you used AWS services.",
        },
        {
            title: "Improve project descriptions",
            description:
                "Describe what you built, the technologies you used, and measurable results from your projects.",
        },
        {
            title: "Add missing keywords",
            description:
                "Consider naturally including relevant technologies such as Docker and Kubernetes if you have experience with them.",
        },
    ]

    return (
        <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 sm:py-12">
            <div className="mx-auto max-w-6xl">

                {/* Header */}
                <div className="mb-8">
                    <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
                        Resume Analysis
                    </p>

                    <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
                        Your Resume Results
                    </h1>

                    <p className="mt-3 max-w-2xl text-gray-600">
                        Here's how your resume matches the job description
                        and what you can improve.
                    </p>
                </div>


                {/* Overall Score */}
                <section className="rounded-3xl bg-white p-8 shadow-sm">

                    <div className="flex flex-col items-center gap-8 md:flex-row">

                        {/* Score Circle */}
                        <div className="relative flex h-48 w-48 shrink-0 items-center justify-center rounded-full border-[16px] border-gray-200">

                            <div className="absolute inset-[-16px] rounded-full border-[16px] border-transparent border-t-black border-r-black rotate-[-45deg]" />

                            <div className="text-center">
                                <p className="text-5xl font-bold">
                                    {animatedScore}%
                                </p>

                                <p className="mt-1 text-sm text-gray-500">
                                    Match
                                </p>
                            </div>

                        </div>


                        {/* Score Explanation */}
                        <div className="flex-1 text-center md:text-left">

                            <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
                                Overall Compatibility
                            </p>

                            <h2 className="mt-2 text-2xl font-bold">
                                Good Match
                            </h2>

                            <p className="mt-3 max-w-xl text-gray-600">
                                Your resume matches many of the important
                                requirements for this position. A few
                                missing skills and keywords could improve
                                your overall score.
                            </p>

                        </div>

                    </div>

                </section>


                {/* Score Breakdown */}
                <section className="mt-6 grid gap-6 md:grid-cols-3">

                    <div className="rounded-2xl bg-white p-6 shadow-sm">
                        <p className="text-sm text-gray-500">
                            Skills Match
                        </p>

                        <div className="mt-3 flex items-end justify-between">
                            <p className="text-4xl font-bold">
                                85%
                            </p>

                            <span className="text-sm text-gray-500">
                                Strong
                            </span>
                        </div>

                        <div className="mt-5 h-2 rounded-full bg-gray-200">
                            <div
                                className="h-2 rounded-full bg-black"
                                style={{ width: "85%" }}
                            />
                        </div>
                    </div>


                    <div className="rounded-2xl bg-white p-6 shadow-sm">
                        <p className="text-sm text-gray-500">
                            Experience Match
                        </p>

                        <div className="mt-3 flex items-end justify-between">
                            <p className="text-4xl font-bold">
                                72%
                            </p>

                            <span className="text-sm text-gray-500">
                                Moderate
                            </span>
                        </div>

                        <div className="mt-5 h-2 rounded-full bg-gray-200">
                            <div
                                className="h-2 rounded-full bg-black"
                                style={{ width: "72%" }}
                            />
                        </div>
                    </div>


                    <div className="rounded-2xl bg-white p-6 shadow-sm">
                        <p className="text-sm text-gray-500">
                            Keyword Match
                        </p>

                        <div className="mt-3 flex items-end justify-between">
                            <p className="text-4xl font-bold">
                                76%
                            </p>

                            <span className="text-sm text-gray-500">
                                Good
                            </span>
                        </div>

                        <div className="mt-5 h-2 rounded-full bg-gray-200">
                            <div
                                className="h-2 rounded-full bg-black"
                                style={{ width: "76%" }}
                            />
                        </div>
                    </div>

                </section>


                {/* Skills */}
                <section className="mt-6 grid gap-6 md:grid-cols-2">

                    {/* Matched */}
                    <div className="rounded-2xl bg-white p-6 shadow-sm">

                        <div>
                            <h2 className="text-xl font-semibold">
                                Matched Skills
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                                Skills found in both your resume and the
                                job description.
                            </p>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3">

                            {matchedSkills.map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full border border-gray-200 px-4 py-2 text-sm"
                                >
                                    ✓ {skill}
                                </span>
                            ))}

                        </div>

                    </div>


                    {/* Missing */}
                    <div className="rounded-2xl bg-white p-6 shadow-sm">

                        <div>
                            <h2 className="text-xl font-semibold">
                                Missing Skills
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                                Skills mentioned in the job description
                                that aren't clearly present in your resume.
                            </p>
                        </div>

                        <div className="mt-6 space-y-4">

                            {missingSkills.map((skill) => (
                                <div key={skill.name} className="rounded-xl border p-4">
                                    <div className="flex items-center justify-between">
                                        <span className="font-medium">
                                            {skill.name}
                                        </span>

                                        <span className="text-xs text-gray-500">
                                            {skill.level}
                                        </span>
                                    </div>

                                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
                                        <div
                                            className="h-full rounded-full bg-black transition-all duration-700"
                                            style={{ width: `${skill.importance}%` }}
                                        />
                                    </div>

                                    <p className="mt-2 text-xs text-gray-400">
                                        Job relevance: {skill.importance}%
                                    </p>
                                </div>
                            ))}

                        </div>

                    </div>

                </section>


                {/* Recommendations */}
                <section className="mt-6 rounded-2xl bg-white p-6 shadow-sm">

                    <h2 className="text-xl font-semibold">
                        How to Improve Your Resume
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        Follow these suggestions to improve your match.
                    </p>


                    <div className="mt-6 space-y-4">

                        {recommendations.map((recommendation, index) => {
                            const isOpen = openRecommendation === index

                            return (
                                <div
                                    key={recommendation.title}
                                    className="rounded-xl border border-gray-200"
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenRecommendation(isOpen ? null : index)
                                        }
                                        className="flex w-full items-center gap-4 p-4 text-left"
                                        aria-expanded={isOpen}
                                    >
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold">
                                            {index + 1}
                                        </div>

                                        <span className="flex-1 font-medium">
                                            {recommendation.title}
                                        </span>

                                        <span className="text-xl text-gray-400">
                                            {isOpen ? "−" : "+"}
                                        </span>
                                    </button>

                                    {isOpen && (
                                        <div className="border-t px-4 pb-4 pt-3 pl-16">
                                            <p className="text-sm leading-6 text-gray-600">
                                                {recommendation.description}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            )
                        })}

                    </div>

                </section>


                {/* Actions */}
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

                    <Link
                        to="/analyze"
                        className="rounded-xl bg-black px-7 py-3 font-medium text-white transition hover:bg-gray-800"
                    >
                        Analyze Another Resume
                    </Link>

                    <button
                        className="rounded-xl border border-gray-300 bg-white px-7 py-3 font-medium transition hover:bg-gray-50"
                    >
                        Download Report
                    </button>

                </div>

            </div>
        </main>
    )
}

export default Results