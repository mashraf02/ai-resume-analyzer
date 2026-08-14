function Navbar() {
    return (
        <nav className="border-b">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

                <div className="text-lg font-bold">
                    ResumeAI
                </div>

                <div className="flex items-center gap-6 text-sm">
                    <button className="text-gray-600 hover:text-black">
                        How it Works
                    </button>

                    <button className="rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800">
                        Analyze Resume
                    </button>
                </div>

            </div>
        </nav>
    )
}

export default Navbar