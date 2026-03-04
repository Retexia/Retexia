import { Link } from 'react-router-dom';

const FinalCTA = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Complex Background for Premium Feel */}
            <div className="absolute inset-0 bg-[#0f172a]"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

            {/* Light Gradients */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                    Ready to build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">amazing?</span>
                </h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
                    Let's turn your vision into reality. Get a free quote today and discover how Retexia can accelerate your digital growth.
                </p>

                <div className="flex justify-center">
                    <Link
                        to="/services"
                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-1 bg-gradient-to-r from-primary via-orange-500 to-primary background-animate hover:shadow-[0_0_40px_rgba(217,36,27,0.6)] transition-all duration-300"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-primary via-orange-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
                        <span className="relative flex items-center gap-2 bg-background-dark rounded-full px-8 py-4 transition-all duration-300 group-hover:bg-opacity-0">
                            <span className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-white">Get a Free Quote</span>
                            <svg className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
