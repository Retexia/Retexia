const Hero = () => {
    return (
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-background-dark relative overflow-hidden">
            {/* Decorative Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[100px] pointer-events-none -mt-20 -mr-20"></div>
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[80px] pointer-events-none -translate-x-1/2"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="inline-block px-4 py-1.5 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 text-sm font-semibold text-fuchsia-400 mb-6 backdrop-blur-sm">
                    Brand Identity & UI/UX
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
                    Design that demands <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-500">attention.</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                    From unforgettable brand identities and striking logos to seamless, user-centric mobile and web interfaces, we craft visual experiences that elevate your business.
                </p>
            </div>
        </section>
    );
};

export default Hero;
