import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-background-dark border-t border-white/5 text-center">
            {/* Dynamic Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                    Like what you see? <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-primary">Let's build yours.</span>
                </h2>
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">
                    Whether you need a massive web platform or a stunning mobile app, our team is ready to deliver world-class digital experiences.
                </p>

                <Link
                    to="/services"
                    className="inline-flex items-center text-white font-semibold bg-primary hover:bg-primary-hover px-10 py-5 rounded-full shadow-[0_0_25px_rgba(217,36,27,0.5)] transition-all duration-300 transform hover:-translate-y-1 text-lg group"
                >
                    Start a Project <ArrowRight size={22} className="ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </section>
    );
};

export default FinalCTA;
