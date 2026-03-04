import { ArrowUpCircle } from 'lucide-react';

const FinalCTA = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="py-32 bg-background-dark relative border-t border-white/5">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                    Not sure which service fits your needs?
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                    Fill out our general intake form at the top of the page, tell us a bit about your business goals, and our experts will guide you to the perfect solution.
                </p>

                <button
                    onClick={scrollToTop}
                    className="group inline-flex items-center text-white bg-[#1f2937] hover:bg-primary border border-white/10 hover:border-transparent px-8 py-4 rounded-full transition-all duration-300 font-semibold mx-auto shadow-lg hover:shadow-[0_0_30px_rgba(217,36,27,0.4)]"
                >
                    <ArrowUpCircle size={24} className="mr-3 group-hover:-translate-y-1 transition-transform" />
                    Back to Intake Form
                </button>
            </div>
        </section>
    );
};

export default FinalCTA;
