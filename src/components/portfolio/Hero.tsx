const Hero = () => {
    return (
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-background-dark relative overflow-hidden">
            {/* Decorative Gradients */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -mt-40 -mr-40"></div>
            <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-gray-300 mb-6 backdrop-blur-sm">
                    Case Studies & Works
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight">
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Best Work.</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
                    Explore how we've helped modern brands scale through cutting-edge web development, native mobile apps, and stunning design.
                </p>
            </div>
        </section>
    );
};

export default Hero;
