import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeaturedWork = () => {
    const projects = [
        {
            title: 'FinTech Dashboard',
            category: 'Web Application',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
            color: 'from-blue-500/20 to-purple-500/20'
        },
        {
            title: 'HealthTrack App',
            category: 'Mobile App',
            image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1981&auto=format&fit=crop',
            color: 'from-green-500/20 to-emerald-500/20'
        }
    ];

    return (
        <section className="py-24 bg-[#0a0f1d] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Selected Work</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Products we've built.</h3>
                    </div>
                    <Link
                        to="/portfolio"
                        className="flex items-center text-gray-300 hover:text-white transition-colors group pb-2 border-b border-transparent hover:border-white w-fit"
                    >
                        View all projects <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative rounded-3xl overflow-hidden bg-[#111827] block aspect-[4/3] sm:aspect-video lg:aspect-[4/3]">
                            {/* Image Container with Hover Effect */}
                            <div className="absolute inset-0 overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-40 mix-blend-overlay z-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                                />
                            </div>

                            {/* Overlay Gradient for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent opacity-80 z-10"></div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-sm font-medium text-white mb-4 border border-white/20">
                                    {project.category}
                                </div>
                                <h4 className="text-3xl font-bold text-white mb-4">{project.title}</h4>
                                <Link
                                    to="/portfolio"
                                    className="inline-flex items-center text-white font-medium group/link hover:text-primary transition-colors"
                                >
                                    Read Case Study
                                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center ml-3 group-hover/link:bg-primary group-hover/link:text-white transition-all transform group-hover/link:translate-x-1">
                                        <ArrowRight size={14} />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedWork;
