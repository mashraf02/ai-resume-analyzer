import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

function Navbar() {
    const location = useLocation()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const isActive = (path) => location.pathname === path

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <nav className="border-b bg-white">
            <div className="mx-auto max-w-6xl px-6">

                <div className="flex items-center justify-between py-4">

                    {/* Logo */}
                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="text-xl font-bold tracking-tight"
                    >
                        ResumeMatch
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-6 md:flex">

                        <Link
                            to="/"
                            className={`text-sm font-medium transition ${isActive("/")
                                ? "text-black"
                                : "text-gray-500 hover:text-black"
                                }`}
                        >
                            Home
                        </Link>

                        <Link
                            to="/analyze"
                            className={`text-sm font-medium transition ${isActive("/analyze")
                                ? "text-black"
                                : "text-gray-500 hover:text-black"
                                }`}
                        >
                            Analyze
                        </Link>

                        <Link
                            to="/how-it-works"
                            className={`text-sm font-medium transition ${isActive("/how-it-works")
                                ? "text-black"
                                : "text-gray-500 hover:text-black"
                                }`}
                        >
                            How It Works
                        </Link>

                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMenuOpen}
                        className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-black md:hidden"
                    >
                        {isMenuOpen ? (
                            <span className="text-xl">✕</span>
                        ) : (
                            <span className="text-xl">☰</span>
                        )}
                    </button>

                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="border-t py-4 md:hidden">

                        <div className="flex flex-col gap-1">

                            <Link
                                to="/"
                                onClick={closeMenu}
                                className={`rounded-lg px-3 py-3 text-sm font-medium ${isActive("/")
                                    ? "bg-gray-100 text-black"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-black"
                                    }`}
                            >
                                Home
                            </Link>

                            <Link
                                to="/analyze"
                                onClick={closeMenu}
                                className={`rounded-lg px-3 py-3 text-sm font-medium ${isActive("/analyze")
                                    ? "bg-gray-100 text-black"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-black"
                                    }`}
                            >
                                Analyze
                            </Link>

                            <Link
                                to="/how-it-works"
                                onClick={closeMenu}
                                className={`rounded-lg px-3 py-3 text-sm font-medium ${isActive("/how-it-works")
                                    ? "bg-gray-100 text-black"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-black"
                                    }`}
                            >
                                How It Works
                            </Link>

                        </div>

                    </div>
                )}

            </div>
        </nav>
    )
}

export default Navbar