import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const IntakeForm = () => {
    const [step, setStep] = useState(1);
    const totalSteps = 3;

    const nextStep = (e: React.MouseEvent) => {
        e.preventDefault();
        if (step < totalSteps) setStep(step + 1);
    };

    return (
        <section className="relative -mt-16 pb-24 z-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-[#111827] border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">

                    {/* subtle inside glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Start a Project or Request a Quote</h2>
                        <p className="text-gray-400">Tell us what you're looking for, and we'll get back to you within 24 hours.</p>
                    </div>

                    {/* Progress Indicator */}
                    <div className="mb-10 flex items-center justify-between relative">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-white/10 rounded-full z-0"></div>
                        <div
                            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary rounded-full z-0 transition-all duration-500"
                            style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
                        ></div>

                        {[1, 2, 3].map((s) => (
                            <div
                                key={s}
                                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold relative z-10 transition-all duration-300 ${s < step ? 'bg-primary text-white' : s === step ? 'bg-primary text-white shadow-[0_0_15px_rgba(217,36,27,0.5)] rings-4 ring-primary/20' : 'bg-[#1f2937] text-gray-500 border border-white/10'
                                    }`}
                            >
                                {s < step ? <CheckCircle2 size={20} /> : s}
                            </div>
                        ))}
                    </div>
                    <div className="text-center text-sm font-medium text-primary mb-8 uppercase tracking-widest">
                        Step {step} of {totalSteps}
                    </div>

                    {/* Form Content */}
                    <form className="space-y-6">
                        <div className={`transition-all duration-500 ${step === 1 ? 'opacity-100 block' : 'opacity-0 hidden'}`}>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">What service are you looking for?</label>
                                    <select
                                        id="service"
                                        className="w-full bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Select a service...</option>
                                        <option value="web">Web Development</option>
                                        <option value="mobile">Mobile App Development</option>
                                        <option value="design">UI/UX & Brand Design</option>
                                        <option value="other">Other / Not Sure</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className={`transition-all duration-500 ${step === 2 ? 'opacity-100 block' : 'opacity-0 hidden'}`}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="John Doe"
                                        className="w-full bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder-gray-600"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="john@company.com"
                                        className="w-full bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder-gray-600"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={`transition-all duration-500 ${step === 3 ? 'opacity-100 block' : 'opacity-0 hidden'}`}>
                            <div>
                                <label htmlFor="details" className="block text-sm font-medium text-gray-300 mb-2">Project Details (Optional)</label>
                                <textarea
                                    id="details"
                                    rows={4}
                                    placeholder="Tell us a little bit about your timeline, budget, or specific goals..."
                                    className="w-full bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder-gray-600 resize-none"
                                ></textarea>
                            </div>
                        </div>

                        <div className="pt-6 flex justify-between items-center border-t border-white/10 mt-8">
                            {step > 1 ? (
                                <button
                                    type="button"
                                    onClick={() => setStep(step - 1)}
                                    className="text-gray-400 hover:text-white font-medium transition-colors px-6 py-3"
                                >
                                    Back
                                </button>
                            ) : (
                                <div></div>
                            )}

                            {step < totalSteps ? (
                                <button
                                    onClick={nextStep}
                                    className="flex items-center text-white bg-primary hover:bg-primary-hover px-8 py-3.5 rounded-full shadow-[0_0_15px_rgba(217,36,27,0.4)] transition-all font-semibold ml-auto"
                                >
                                    Next Step <ArrowRight size={18} className="ml-2" />
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    onClick={(e) => { e.preventDefault(); alert('Form submitted successfully!'); }}
                                    className="flex items-center text-white bg-green-600 hover:bg-green-500 px-8 py-3.5 rounded-full shadow-[0_0_15px_rgba(22,163,74,0.4)] transition-all font-semibold ml-auto"
                                >
                                    Submit Request
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default IntakeForm;
