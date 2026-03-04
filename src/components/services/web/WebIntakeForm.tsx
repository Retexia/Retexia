import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const WebIntakeForm = () => {
    const [step, setStep] = useState(1);
    const totalSteps = 3;

    const nextStep = (e: React.MouseEvent) => {
        e.preventDefault();
        if (step < totalSteps) setStep(step + 1);
        window.scrollTo({ top: document.getElementById('web-intake-form')?.offsetTop ? document.getElementById('web-intake-form')!.offsetTop - 100 : 0, behavior: 'smooth' });
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
        window.scrollTo({ top: document.getElementById('web-intake-form')?.offsetTop ? document.getElementById('web-intake-form')!.offsetTop - 100 : 0, behavior: 'smooth' });
    };

    return (
        <section id="web-intake-form" className="relative pb-32 z-20 px-4 sm:px-6 lg:px-8 -mt-10">
            <div className="max-w-3xl mx-auto">
                <div className="bg-[#111827] border border-white/10 rounded-[2.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden">

                    {/* subtle inside glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

                    {/* Form Header */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">
                            {step === 1 && "Step 1: Tell us about your business"}
                            {step === 2 && "Step 2: How should the website work?"}
                            {step === 3 && "Step 3: Project Logistics"}
                        </h2>
                        <p className="text-gray-400">
                            {step === 1 && "Let's start with a friendly introduction. No technical terms required!"}
                            {step === 2 && "Let's translate your business needs into website features."}
                            {step === 3 && "Almost done! Let's talk timeline and budget so we can plan accordingly."}
                        </p>
                    </div>

                    <form className="space-y-8">

                        {/* STEP 1: Tell us about your business */}
                        <div className={`transition-all duration-500 ${step === 1 ? 'block opacity-100' : 'hidden opacity-0'}`}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                                    <input type="text" id="name" placeholder="John Doe" className="w-full bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-600" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                    <input type="email" id="email" placeholder="john@company.com" className="w-full bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-600" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number <span className="text-gray-500 font-normal">(Optional)</span></label>
                                    <input type="tel" id="phone" placeholder="(555) 123-4567" className="w-full bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-600" />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">Business or Brand Name</label>
                                    <input type="text" id="company" placeholder="Acme Corp" className="w-full bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-600" />
                                </div>
                            </div>

                            <div className="mb-8">
                                <label className="block text-sm font-medium text-gray-300 mb-3">Do you currently have a website?</label>
                                <div className="flex gap-4">
                                    <label className="flex-1 cursor-pointer">
                                        <input type="radio" name="has_website" value="yes" className="peer sr-only" />
                                        <div className="text-center bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-gray-300 peer-checked:bg-blue-600/20 peer-checked:border-blue-500 peer-checked:text-white transition-all hover:bg-white/5">
                                            Yes
                                        </div>
                                    </label>
                                    <label className="flex-1 cursor-pointer">
                                        <input type="radio" name="has_website" value="no" className="peer sr-only" defaultChecked />
                                        <div className="text-center bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-gray-300 peer-checked:bg-blue-600/20 peer-checked:border-blue-500 peer-checked:text-white transition-all hover:bg-white/5">
                                            No
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className="mb-8">
                                <label htmlFor="website_link" className="block text-sm font-medium text-gray-300 mb-1">If yes, drop the link here so we can take a look!</label>
                                <input type="url" id="website_link" placeholder="https://www.yourwebsite.com" className="w-full bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-600" />
                            </div>

                            <div>
                                <label htmlFor="goal" className="block text-sm font-medium text-gray-300 mb-1">What is the main reason you want a new website?</label>
                                <p className="text-xs text-gray-500 mb-3">Don't worry about the technical terms; just tell us your main goal.</p>
                                <select id="goal" className="w-full bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-white appearance-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" defaultValue="">
                                    <option value="" disabled>Select your primary goal...</option>
                                    <option value="ecommerce">I want to sell products directly to customers.</option>
                                    <option value="leads">I want people to contact me for my services (plumbing, consulting, etc.).</option>
                                    <option value="portfolio">I want a professional place to show off my portfolio or past work.</option>
                                    <option value="custom">I have an idea for a custom web platform or tool.</option>
                                </select>
                            </div>
                        </div>

                        {/* STEP 2: How should the website work? */}
                        <div className={`transition-all duration-500 ${step === 2 ? 'block opacity-100' : 'hidden opacity-0'}`}>

                            <div className="mb-8">
                                <label className="block text-sm font-medium text-gray-300 mb-1">Will you need to update the website yourself after it's built?</label>
                                <p className="text-xs text-gray-500 mb-3">For example, will you need to add new blog posts, change photos, or update text on your own without calling a developer?</p>
                                <div className="flex gap-4">
                                    <label className="flex-1 cursor-pointer">
                                        <input type="radio" name="needs_cms" value="yes" className="peer sr-only" defaultChecked />
                                        <div className="text-center bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-gray-300 peer-checked:bg-blue-600/20 peer-checked:border-blue-500 peer-checked:text-white transition-all hover:bg-white/5">
                                            Yes
                                        </div>
                                    </label>
                                    <label className="flex-1 cursor-pointer">
                                        <input type="radio" name="needs_cms" value="no" className="peer sr-only" />
                                        <div className="text-center bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-gray-300 peer-checked:bg-blue-600/20 peer-checked:border-blue-500 peer-checked:text-white transition-all hover:bg-white/5">
                                            No
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className="mb-8">
                                <label className="block text-sm font-medium text-gray-300 mb-1">Are we selling things online?</label>
                                <p className="text-xs text-gray-500 mb-3">Let us know if we need to build a shopping cart and a way to accept credit card payments.</p>
                                <div className="flex gap-4">
                                    <label className="flex-1 cursor-pointer">
                                        <input type="radio" name="is_ecommerce" value="yes" className="peer sr-only" />
                                        <div className="text-center bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-gray-300 peer-checked:bg-blue-600/20 peer-checked:border-blue-500 peer-checked:text-white transition-all hover:bg-white/5">
                                            Yes
                                        </div>
                                    </label>
                                    <label className="flex-1 cursor-pointer">
                                        <input type="radio" name="is_ecommerce" value="no" className="peer sr-only" defaultChecked />
                                        <div className="text-center bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-gray-300 peer-checked:bg-blue-600/20 peer-checked:border-blue-500 peer-checked:text-white transition-all hover:bg-white/5">
                                            No
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className="mb-8">
                                <label className="block text-sm font-medium text-gray-300 mb-1">Do your customers need to log in?</label>
                                <p className="text-xs text-gray-500 mb-3">Choose 'Yes' if your users will need their own private accounts, dashboards, or profiles.</p>
                                <div className="flex gap-4">
                                    <label className="flex-1 cursor-pointer">
                                        <input type="radio" name="needs_auth" value="yes" className="peer sr-only" />
                                        <div className="text-center bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-gray-300 peer-checked:bg-blue-600/20 peer-checked:border-blue-500 peer-checked:text-white transition-all hover:bg-white/5">
                                            Yes
                                        </div>
                                    </label>
                                    <label className="flex-1 cursor-pointer">
                                        <input type="radio" name="needs_auth" value="no" className="peer sr-only" defaultChecked />
                                        <div className="text-center bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-gray-300 peer-checked:bg-blue-600/20 peer-checked:border-blue-500 peer-checked:text-white transition-all hover:bg-white/5">
                                            No
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className="mb-8">
                                <label className="block text-sm font-medium text-gray-300 mb-1">Do you already have a logo and brand colors?</label>
                                <p className="text-xs text-gray-500 mb-3">This helps us know if we need to involve our design team!</p>
                                <div className="space-y-3">
                                    <label className="block cursor-pointer">
                                        <input type="radio" name="branding" value="full" className="peer sr-only" defaultChecked />
                                        <div className="bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-gray-300 peer-checked:bg-blue-600/20 peer-checked:border-blue-500 peer-checked:text-white transition-all hover:bg-white/5 text-left">
                                            Yes, I have a logo and a clear brand style.
                                        </div>
                                    </label>
                                    <label className="block cursor-pointer">
                                        <input type="radio" name="branding" value="partial" className="peer sr-only" />
                                        <div className="bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-gray-300 peer-checked:bg-blue-600/20 peer-checked:border-blue-500 peer-checked:text-white transition-all hover:bg-white/5 text-left">
                                            I have a logo, but I need help designing the rest of the look.
                                        </div>
                                    </label>
                                    <label className="block cursor-pointer">
                                        <input type="radio" name="branding" value="none" className="peer sr-only" />
                                        <div className="bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-gray-300 peer-checked:bg-blue-600/20 peer-checked:border-blue-500 peer-checked:text-white transition-all hover:bg-white/5 text-left">
                                            No, I need you to design everything from scratch.
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="inspiration" className="block text-sm font-medium text-gray-300 mb-1">Are there any websites you really love?</label>
                                <p className="text-xs text-gray-500 mb-3">Paste 1 or 2 links to websites you like the look of. This helps us understand your style!</p>
                                <textarea id="inspiration" rows={3} placeholder="https://apple.com, https://stripe.com" className="w-full bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-600 resize-none"></textarea>
                            </div>

                        </div>

                        {/* STEP 3: Project Logistics */}
                        <div className={`transition-all duration-500 ${step === 3 ? 'block opacity-100' : 'hidden opacity-0'}`}>

                            <div className="mb-8">
                                <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-1">When would you ideally like this website to go live?</label>
                                <p className="text-xs text-gray-500 mb-3">We want to make sure we can fit your project into our schedule.</p>
                                <select id="timeline" className="w-full bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-white appearance-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" defaultValue="">
                                    <option value="" disabled>Select a timeline...</option>
                                    <option value="rush">As soon as possible (Rush project)</option>
                                    <option value="1-2_months">Within the next 1 to 2 months</option>
                                    <option value="flexible">I'm not in a rush (3+ months)</option>
                                </select>
                            </div>

                            <div className="mb-8">
                                <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-1">What is your estimated budget for this project?</label>
                                <p className="text-xs text-gray-500 mb-3">Websites are a lot like houses, the price depends on how many "rooms" and custom features you want. Knowing your budget helps us recommend the best solutions without overspending.</p>
                                <select id="budget" className="w-full bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-white appearance-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" defaultValue="">
                                    <option value="" disabled>Select a budget range...</option>
                                    <option value="under_200">Under $200</option>
                                    <option value="200_400">$200 - $400</option>
                                    <option value="400_600">$400 - $600</option>
                                    <option value="above_600">Above $600</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="vision" className="block text-sm font-medium text-gray-300 mb-1">Tell us a little more about your vision! (Optional)</label>
                                <p className="text-xs text-gray-500 mb-3">In your own words, describe what you want this website to do for your business. There are no wrong answers!</p>
                                <textarea id="vision" rows={5} placeholder="I want to create a space that feels trustworthy and modern where users can quickly book consultations..." className="w-full bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-600 resize-none"></textarea>
                            </div>
                        </div>

                        {/* Stepper Controls */}
                        <div className="pt-8 flex justify-between items-center border-t border-white/10 mt-10">
                            {step > 1 ? (
                                <button
                                    type="button"
                                    onClick={prevStep}
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
                                    className="flex items-center text-white bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all font-semibold ml-auto"
                                >
                                    Continue <ArrowRight size={18} className="ml-2" />
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    onClick={(e) => { e.preventDefault(); alert('Web Development Request Submitted!'); }}
                                    className="flex items-center text-white bg-green-600 hover:bg-green-500 px-8 py-4 rounded-full shadow-[0_0_15px_rgba(22,163,74,0.4)] transition-all font-semibold ml-auto"
                                >
                                    Submit Request <CheckCircle2 size={18} className="ml-2" />
                                </button>
                            )}
                        </div>

                        {/* Progress Dots */}
                        <div className="flex justify-center gap-2 mt-6">
                            {[1, 2, 3].map((s) => (
                                <div key={s} className={`h-1.5 rounded-full transition-all duration-300 ${s === step ? 'w-8 bg-blue-500' : s < step ? 'w-3 bg-blue-900' : 'w-3 bg-white/10'}`}></div>
                            ))}
                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default WebIntakeForm;
