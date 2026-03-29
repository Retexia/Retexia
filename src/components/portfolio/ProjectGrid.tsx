
import { ArrowRight } from 'lucide-react';

const ProjectGrid = () => {
    const projects = [
        {
            id: 1,
            title: 'Overmode (Clothing Store)',
            category: 'E-commerce & Retail',
            url: 'https://overmode.com',
            image: 'https://pwtogokzlyjzhyxaiufl.supabase.co/storage/v1/object/public/retexia/Screenshot%202026-03-29%20at%2007.35.05.png',
            span: 'md:col-span-2 md:row-span-2', // Large featured project
            color: 'from-blue-500/40 to-indigo-500/40'
        },
        {
            id: 2,
            title: 'Natural Beauty (Skincare)',
            category: 'E-commerce & Retail',
            url: 'https://naturalbeauty.com.au',
            image: 'https://pwtogokzlyjzhyxaiufl.supabase.co/storage/v1/object/public/retexia/Screenshot%202026-03-29%20at%2007.38.34.png',
            span: 'md:col-span-1 md:row-span-1',
            color: 'from-green-500/40 to-emerald-500/40'
        },
        {
            id: 3,
            title: 'Pearl Isle Capital (Financial Services)',
            category: 'Corporate & Services',
            url: 'https://pearlislecapital.com',
            image: 'https://pwtogokzlyjzhyxaiufl.supabase.co/storage/v1/object/public/retexia/Screenshot%202026-03-29%20at%2007.40.03.png',
            span: 'md:col-span-1 md:row-span-1',
            color: 'from-purple-500/40 to-pink-500/40'
        },
        {
            id: 4,
            title: 'Green Funding (Renewable Energy)',
            category: 'Corporate & Services',
            url: 'https://greenfunding.com.au',
            image: 'https://pwtogokzlyjzhyxaiufl.supabase.co/storage/v1/object/public/retexia/Screenshot%202026-03-29%20at%2007.40.42.png',
            span: 'md:col-span-2 md:row-span-1', // Wide project
            color: 'from-orange-500/40 to-red-500/40'
        },
        {
            id: 5,
            title: 'Zeylan Island Holidays (Tourism Agency)',
            category: 'Corporate & Services',
            url: 'https://zeylanislandholidays.com',
            image: 'https://pwtogokzlyjzhyxaiufl.supabase.co/storage/v1/object/public/retexia/Screenshot%202026-03-29%20at%2007.41.49.png',
            span: 'md:col-span-1 md:row-span-1',
            color: 'from-teal-500/40 to-cyan-500/40'
        },
        {
            id: 6,
            title: 'AV Bids (Event Management System)',
            category: 'Specialty & Platforms',
            url: 'https://avbids.com',
            image: 'https://pwtogokzlyjzhyxaiufl.supabase.co/storage/v1/object/public/retexia/Screenshot%202026-03-29%20at%2007.42.40.png',
            span: 'md:col-span-1 md:row-span-1',
            color: 'from-yellow-500/40 to-amber-500/40'
        },
        {
            id: 7,
            title: 'El Jannah (Food & Restaurant)',
            category: 'Specialty & Platforms',
            url: 'https://eljannah.com.au',
            image: 'https://pwtogokzlyjzhyxaiufl.supabase.co/storage/v1/object/public/retexia/Screenshot%202026-03-29%20at%2007.43.33.png',
            span: 'md:col-span-1 md:row-span-1',
            color: 'from-pink-500/40 to-rose-500/40'
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
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative block w-full overflow-hidden rounded-3xl bg-[#111827] aspect-video sm:aspect-square md:aspect-auto md:h-full min-h-[300px]"
                            >
                                {/* Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                />

                                {/* Overlay details */}
                                <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-0 group-hover:opacity-60 mix-blend-multiply transition-opacity duration-500`}></div>
                                <div className="absolute inset-0 bg-background-dark/20 group-hover:bg-background-dark/60 transition-colors duration-500"></div>

                                {/* View Case Study Button (Revealed on hover) */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-8 group-hover:translate-y-0 ease-[cubic-bezier(0.25,1,0.5,1)]">
                                    <div className="flex items-center text-white font-semibold bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30 hover:bg-white/30 transition-colors">
                                        View Website <ArrowRight size={18} className="ml-2" />
                                    </div>
                                </div>
                            </a>

                            {/* Text Information below the card */}
                            <div className="pt-6 pb-2">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="inline-block px-3 py-1 rounded-full bg-[#1f2937] text-xs font-semibold text-primary uppercase tracking-wider">
                                        {project.category}
                                    </span>
                                </div>
                                <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-block">
                                    <h3 className="text-2xl font-bold text-white hover:text-primary transition-colors line-clamp-2">
                                        {project.title}
                                    </h3>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectGrid;
