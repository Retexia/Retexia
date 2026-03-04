import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0a0f1d] border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <Link to="/" className="text-2xl font-bold tracking-tighter text-white block mb-4">
                            Retexia<span className="text-primary">.</span>
                        </Link>
                        <p className="text-gray-400 mb-6 max-w-sm">
                            We build lightning-fast digital experiences for modern brands. Web, mobile, and UI/UX design that converts.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex flex-col items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex flex-col items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex flex-col items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                                <Github size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-gray-400 hover:text-primary transition-colors flex items-center group"><ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" /> Home</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors flex items-center group"><ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" /> Services</Link></li>
                            <li><Link to="/portfolio" className="text-gray-400 hover:text-primary transition-colors flex items-center group"><ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" /> Portfolio</Link></li>
                            <li><Link to="/login" className="text-gray-400 hover:text-primary transition-colors flex items-center group"><ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" /> Client Portal</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
                        <ul className="space-y-3">
                            <li><Link to="/services/web" className="text-gray-400 hover:text-primary transition-colors">Web Development</Link></li>
                            <li><Link to="/services/mobile" className="text-gray-400 hover:text-primary transition-colors">Mobile Apps</Link></li>
                            <li><Link to="/services/design" className="text-gray-400 hover:text-primary transition-colors">UI/UX Design</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Consulting</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 flex flex-col md:flex-row justify-between items-center pt-8">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Retexia Agency. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
