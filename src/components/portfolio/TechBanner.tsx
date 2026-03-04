const TechBanner = () => {
    const technologies = [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' }
    ];

    return (
        <section className="py-20 bg-[#0a0f1d] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">The Stack Behind the Magic</h3>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We leverage industry-leading technologies to ensure our products are fast, secure, and scalable from day one.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {technologies.map((tech) => (
                        <div key={tech.name} className="flex flex-col items-center group">
                            <div className="w-16 h-16 rounded-2xl bg-[#111827] border border-white/10 flex items-center justify-center p-3 mb-3 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(217,36,27,0.2)] transition-all duration-300">
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className={`w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100 ${tech.name === 'Next.js' ? 'invert opacity-80 group-hover:opacity-100 group-hover:invert' : ''}`}
                                />
                            </div>
                            <span className="text-sm font-medium text-gray-500 group-hover:text-gray-300 transition-colors">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechBanner;
