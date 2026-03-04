import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-16">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-gray-300">
                    <span className="text-primary mr-2">New</span> High-Converting Digital Experiences
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-8 leading-tight">
                    Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">lightning-fast</span><br />
                    digital experiences<br />
                    for modern brands.
                </h1>

                <p className="max-w-2xl mx-auto text-xl text-gray-400 mb-10 leading-relaxed">
                    We specialize in crafting premium web applications, mobile apps, and stunning UI/UX designs that drive growth and elevate your brand.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/services"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 text-base font-semibold text-white bg-primary hover:bg-primary-hover px-8 py-4 rounded-full shadow-[0_0_20px_rgba(217,36,27,0.5)] hover:shadow-[0_0_30px_rgba(217,36,27,0.8)] transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Start a Project <ArrowRight size={20} />
                    </Link>
                    <Link
                        to="/portfolio"
                        className="w-full sm:w-auto flex items-center justify-center text-base font-semibold text-white border border-white/20 bg-white/5 hover:bg-white/10 px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1"
                    >
                        View Our Work
                    </Link>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </section>
    );
};

export default Hero;
