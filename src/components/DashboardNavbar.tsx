import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, LogOut, User } from 'lucide-react';

const DashboardNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleLogout = () => {
        // Handle actual logout logic here
        navigate('/');
    };

    return (
        <header className="fixed top-0 w-full z-50 bg-[#0a0f1d] border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center gap-8">
                        <Link to="/dashboard" className="text-2xl font-bold tracking-tighter text-white">
                            Retexia<span className="text-primary">.</span> Portal
                        </Link>

                        <nav className="hidden md:flex items-center space-x-6">
                            <NavLink
                                to="/dashboard"
                                end
                                className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                            >
                                Dashboard
                            </NavLink>
                            <NavLink
                                to="/dashboard/project-details"
                                className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                            >
                                My Projects
                            </NavLink>
                            <NavLink
                                to="/dashboard/invoices"
                                className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                            >
                                Invoices
                            </NavLink>
                        </nav>
                    </div>

                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                <User size={16} />
                            </div>
                            <span className="font-medium">Welcome, Client</span>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-primary transition-colors"
                        >
                            <LogOut size={16} />
                            Logout
                        </button>
                    </div>

                    <button className="md:hidden text-gray-300 hover:text-white p-2" onClick={toggleMenu} aria-label="Toggle menu">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-[#0a0f1d] border-b border-white/10 absolute w-full left-0 top-20">
                    <div className="px-4 py-4 space-y-4">
                        <div className="flex items-center gap-3 px-3 py-2 border-b border-white/5 mb-2">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                                <User size={20} />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-white">Welcome, Client</p>
                            </div>
                        </div>

                        <NavLink
                            to="/dashboard"
                            end
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) => `block px-3 py-2 text-base font-medium rounded-md ${isActive ? 'text-white bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                        >
                            Dashboard Home
                        </NavLink>
                        <NavLink
                            to="/dashboard/project-details"
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) => `block px-3 py-2 text-base font-medium rounded-md ${isActive ? 'text-white bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                        >
                            My Projects
                        </NavLink>

                        <button
                            onClick={() => {
                                setIsMenuOpen(false);
                                handleLogout();
                            }}
                            className="w-full flex items-center gap-2 px-3 py-2 mt-4 text-base font-medium text-primary hover:bg-white/5 rounded-md transition-colors"
                        >
                            <LogOut size={20} />
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default DashboardNavbar;
