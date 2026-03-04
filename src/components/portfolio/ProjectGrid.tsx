import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProjectGrid = () => {
    const projects = [
        {
            id: 1,
            title: 'E-commerce Redesign for Modern Brand',
            category: 'Web App',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
            span: 'md:col-span-2 md:row-span-2', // Large featured project
            color: 'from-blue-500/40 to-indigo-500/40'
        },
        {
            id: 2,
            title: 'HealthTrack iOS Application',
            category: 'iOS App',
            image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2070&auto=format&fit=crop',
            span: 'md:col-span-1 md:row-span-1',
            color: 'from-green-500/40 to-emerald-500/40'
        },
        {
            id: 3,
            title: 'Fintech Dashboard UI/UX',
            category: 'UI/UX Design',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
            span: 'md:col-span-1 md:row-span-1',
            color: 'from-purple-500/40 to-pink-500/40'
        },
        {
            id: 4,
            title: 'Logistics Management Platform',
            category: 'Web App',
            image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop',
            span: 'md:col-span-2 md:row-span-1', // Wide project
            color: 'from-orange-500/40 to-red-500/40'
        },
        {
            id: 5,
            title: 'Smart Home Automation App',
            category: 'Mobile App',
            image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop',
            span: 'md:col-span-1 md:row-span-1',
            color: 'from-teal-500/40 to-cyan-500/40'
        },
        {
            id: 6,
            title: 'SaaS Landing Page Conversion Optimization',
            category: 'Web Development',
            image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop',
            span: 'md:col-span-1 md:row-span-1',
            color: 'from-yellow-500/40 to-amber-500/40'
        }
    ];

    return (
        <section className="py-24 bg-background-dark min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-auto">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`group flex flex-col ${project.span}`}
                        >
                            {/* Image Container */}
                            <Link
                                to="/portfolio/sample-project"
                                className="relative block w-full overflow-hidden rounded-3xl bg-[#111827] aspect-video sm:aspect-square md:aspect-auto md:h-full min-h-[300px]"
                            >
                                {/* Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                />

                                {/* Overlay details */}
                                <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-0 group-hover:opacity-60 mix-blend-multiply transition-opacity duration-500`}></div>
                                <div className="absolute inset-0 bg-background-dark/20 group-hover:bg-background-dark/60 transition-colors duration-500"></div>

                                {/* View Case Study Button (Revealed on hover) */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-8 group-hover:translate-y-0 ease-[cubic-bezier(0.25,1,0.5,1)]">
                                    <div className="flex items-center text-white font-semibold bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30 hover:bg-white/30 transition-colors">
                                        View Case Study <ArrowRight size={18} className="ml-2" />
                                    </div>
                                </div>
                            </Link>

                            {/* Text Information below the card */}
                            <div className="pt-6 pb-2">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="inline-block px-3 py-1 rounded-full bg-[#1f2937] text-xs font-semibold text-primary uppercase tracking-wider">
                                        {project.category}
                                    </span>
                                </div>
                                <Link to="/portfolio/sample-project" className="inline-block">
                                    <h3 className="text-2xl font-bold text-white hover:text-primary transition-colors line-clamp-2">
                                        {project.title}
                                    </h3>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectGrid;
