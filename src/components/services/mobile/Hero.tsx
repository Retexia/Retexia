const Hero = () => {
    return (
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-background-dark relative overflow-hidden">
            {/* Decorative Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none -mt-20 -mr-20"></div>
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[80px] pointer-events-none -translate-x-1/2"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-sm font-semibold text-emerald-400 mb-6 backdrop-blur-sm">
                    Mobile App Development
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
                    Turn your app idea into <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">reality.</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                    From beautiful iOS and Android apps to powerful backend systems, we build native experiences that your users will love. Let's build something amazing together.
                </p>
            </div>
        </section>
    );
};

export default Hero;
