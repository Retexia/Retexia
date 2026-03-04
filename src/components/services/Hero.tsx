const Hero = () => {
    return (
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-background-dark">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
                    Tailored Digital Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Modern Brands.</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
                    From scalable web platforms to native mobile apps and stunning brand identities, we build what you need to grow.
                </p>
            </div>
        </section>
    );
};

export default Hero;
