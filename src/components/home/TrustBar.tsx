const technologies = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg' },
    { name: 'n8n', icon: 'https://cdn.worldvectorlogo.com/logos/n8n.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
];

const TrustBar = () => {
    return (
        <section className="py-12 border-b border-white/5 bg-[#0a0f1d]/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-medium text-gray-500 mb-8 tracking-widest uppercase">
                    Trusted tech stack powering our solutions
                </p>

                {/* Marquee Container */}
                <div className="relative flex overflow-x-hidden">
                    <div className="animate-marquee whitespace-nowrap flex items-center">
                        {/* First set of items */}
                        {technologies.map((tech, i) => (
                            <div key={i} className="flex items-center mx-8 sm:mx-12 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                                {tech.name === 'n8n' ? (
                                    <img src={tech.icon} alt={tech.name} className="h-8 md:h-10 w-auto invert" />
                                ) : (
                                    <img src={tech.icon} alt={tech.name} className="h-8 md:h-10 w-auto" />
                                )}
                                <span className="ml-3 text-lg font-semibold text-gray-400 hidden sm:block">{tech.name}</span>
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {technologies.map((tech, i) => (
                            <div key={`duplicate-${i}`} className="flex items-center mx-8 sm:mx-12 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                                {tech.name === 'n8n' ? (
                                    <img src={tech.icon} alt={tech.name} className="h-8 md:h-10 w-auto invert" />
                                ) : (
                                    <img src={tech.icon} alt={tech.name} className="h-8 md:h-10 w-auto" />
                                )}
                                <span className="ml-3 text-lg font-semibold text-gray-400 hidden sm:block">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
