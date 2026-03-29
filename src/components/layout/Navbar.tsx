import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-background-dark/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-2xl font-bold tracking-tighter text-white">
                            Retexia<span className="text-primary">.</span>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <Link
                            to="/services"
                            className="text-sm font-medium text-white bg-primary hover:bg-primary-hover px-5 py-2.5 rounded-full shadow-[0_0_15px_rgba(217,36,27,0.4)] hover:shadow-[0_0_25px_rgba(217,36,27,0.6)] transition-all"
                        >
                            Start Project
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-background-dark/95 backdrop-blur-xl border-b border-white/10">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4 flex flex-col gap-3 px-3">

                            <Link
                                to="/services"
                                className="text-center text-sm font-medium text-white bg-primary hover:bg-primary-hover px-4 py-2.5 rounded-full shadow-[0_0_15px_rgba(217,36,27,0.4)] transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                Start Project
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
