import { useState } from 'react';
import { submitMobileLead } from '../../../services/webhookApi';
import { Loader2 } from 'lucide-react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const MobileIntakeForm = () => {
    const [step, setStep] = useState(1);
    const totalSteps = 3;

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', app_name: '', purpose: '', platform: 'both', needs_sync: 'no', needs_auth: 'yes', needs_payments: 'no', hardware_features: [] as string[], design_status: '', timeline: '', budget: '', pitch: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { id, name, value, type } = e.target; const checked = (e.target as HTMLInputElement).checked;
        if (type === 'checkbox') {
            const fieldName = name || id;
            setFormData((prev: any) => {
                const arr = (prev as any)[fieldName] || [];
                if (checked) {
                    return { ...prev, [fieldName]: [...arr, value] };
                } else {
                    return { ...prev, [fieldName]: arr.filter((item: any) => item !== value) };
                }
            });
        } else {
            const fieldName = type === 'radio' ? name : id;
            setFormData((prev: any) => ({ ...prev, [fieldName]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent | React.MouseEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await submitMobileLead(formData);
            setIsSuccess(true);
            window.scrollTo({ top: document.getElementById('mobile-intake-form')?.offsetTop ? document.getElementById('mobile-intake-form')!.offsetTop - 100 : 0, behavior: 'smooth' });
        } catch (error) {
            console.error('Error:', error);
            alert('There was an issue submitting your request. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <section id="mobile-intake-form" className="relative pb-32 z-20 px-4 sm:px-6 lg:px-8 -mt-10">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-[#111827] border border-white/10 rounded-[2.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden text-center">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle2 size={40} className="text-green-500" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4">Success! We will be in touch.</h2>
                        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                            Thank you for submitting your request. Our team is reviewing your details and will get back to you within 24 hours.
                        </p>
                        <button
                            onClick={() => {
                                setIsSuccess(false);
                                setStep(1);
                                setFormData({ name: '', email: '', app_name: '', purpose: '', platform: 'both', needs_sync: 'no', needs_auth: 'yes', needs_payments: 'no', hardware_features: [] as string[], design_status: '', timeline: '', budget: '', pitch: '' });
                                
                            }}
                            className="inline-flex items-center text-white bg-[#1f2937] border border-white/10 hover:bg-white/5 px-8 py-4 rounded-full transition-all font-semibold"
                        >
                            Submit Another Request
                        </button>
                    </div>
                </div>
            </section>
        );
    }


    const nextStep = (e: React.MouseEvent) => {
        e.preventDefault();
        if (step < totalSteps) setStep(step + 1);
        window.scrollTo({ top: document.getElementById('mobile-intake-form')?.offsetTop ? document.getElementById('mobile-intake-form')!.offsetTop - 100 : 0, behavior: 'smooth' });
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
        window.scrollTo({ top: document.getElementById('mobile-intake-form')?.offsetTop ? document.getElementById('mobile-intake-form')!.offsetTop - 100 : 0, behavior: 'smooth' });
    };

    return (
        <section id="mobile-intake-form" className="relative pb-32 z-20 px-4 sm:px-6 lg:px-8 -mt-10">
            <div className="max-w-3xl mx-auto">
                <div className="bg-[#111827] border border-white/10 rounded-[2.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden">

                    {/* subtle inside glow specific to mobile color scheme */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>

                    {/* Form Header */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">
                            {step === 1 && "Step 1: The App Idea (Who and What)"}
                            {step === 2 && "Step 2: How the App Works (Features)"}
                            {step === 3 && "Step 3: Logistics & Launch"}
                        </h2>
                        <p className="text-gray-400">
                            {step === 1 && "Let's capture the core concept of your application."}
                            {step === 2 && "Tell us what features your users will need to interact with."}
                            {step === 3 && "Let's align on timing, visuals, and how we bring this to life."}
                        </p>
                    </div>

                    <form className="space-y-8">

                        {/* STEP 1: The App Idea */}
                        <div className={`transition-all duration-500 ${step === 1 ? 'block opacity-100' : 'hidden opacity-0'}`}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Full Name</label>
                                    <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Jane Doe" className="w-full bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all placeholder-gray-600" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                    <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="jane@company.com" className="w-full bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all placeholder-gray-600" />
                                </div>
                            </div>

                            <div className="mb-8">
                                <label htmlFor="app_name" className="block text-sm font-medium text-gray-300 mb-1">Business or App Name</label>
                                <p className="text-xs text-gray-500 mb-3">If you don't have an official name for the app yet, just use your business name or a working title!</p>
                                <input type="text" id="app_name" value={formData.app_name} onChange={handleChange} placeholder="My Awesome App" className="w-full bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all placeholder-gray-600" />
                            </div>

                            <div>
                                <label htmlFor="purpose" className="block text-sm font-medium text-gray-300 mb-1">What is the main purpose of this app?</label>
                                <p className="text-xs text-gray-500 mb-3">In simple terms, what is the core problem this app solves for your users?</p>
                                <select id="purpose" value={formData.purpose} onChange={handleChange} className="w-full bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-white appearance-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" >
                                    <option value="" disabled>Select the core purpose...</option>
                                    <option value="ecommerce">To sell physical products or services (E-commerce)</option>
                                    <option value="booking">To allow customers to book appointments or services</option>
                                    <option value="internal">To act as an internal tool for my employees</option>
                                    <option value="social">To create a social community or share content</option>
                                    <option value="custom">I have a totally custom new idea</option>
                                </select>
                            </div>
                        </div>

                        {/* STEP 2: How the App Works */}
                        <div className={`transition-all duration-500 ${step === 2 ? 'block opacity-100' : 'hidden opacity-0'}`}>

                            <div className="mb-8">
                                <label className="block text-sm font-medium text-gray-300 mb-1">Where do you want your customers to download this app?</label>
                                <p className="text-xs text-gray-500 mb-3">Building for both platforms takes more time, so let us know where your target audience spends their time.</p>
                                <div className="space-y-3">
                                    <label className="block cursor-pointer">
                                        <input type="radio" name="platform" value="ios" checked={formData.platform === 'ios'} onChange={handleChange} className="peer sr-only" />
                                        <div className="bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-gray-300 peer-checked:bg-emerald-600/20 peer-checked:border-emerald-500 peer-checked:text-white transition-all hover:bg-white/5">
                                            Apple App Store (iPhones only)
                                        </div>
                                    </label>
                                    <label className="block cursor-pointer">
                                        <input type="radio" name="platform" value="android" checked={formData.platform === 'android'} onChange={handleChange} className="peer sr-only" />
                                        <div className="bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-gray-300 peer-checked:bg-emerald-600/20 peer-checked:border-emerald-500 peer-checked:text-white transition-all hover:bg-white/5">
                                            Google Play Store (Androids only)
                                        </div>
                                    </label>
                                    <label className="block cursor-pointer">
                                        <input type="radio" name="platform" value="both" checked={formData.platform === 'both'} onChange={handleChange} className="peer sr-only" />
                                        <div className="bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-gray-300 peer-checked:bg-emerald-600/20 peer-checked:border-emerald-500 peer-checked:text-white transition-all hover:bg-white/5">
                                            Both Apple and Google Stores
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className="mb-8">
                                <label className="block text-sm font-medium text-gray-300 mb-1">Will the app need to connect to an existing website you own?</label>
                                <p className="text-xs text-gray-500 mb-3">For example, if someone buys something on the app, does it need to update the inventory on your current website?</p>
                                <div className="flex gap-4">
                                    <label className="flex-1 cursor-pointer">
                                        <input type="radio" name="needs_sync" value="yes" checked={formData.needs_sync === 'yes'} onChange={handleChange} className="peer sr-only" />
                                        <div className="text-center bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-gray-300 peer-checked:bg-emerald-600/20 peer-checked:border-emerald-500 peer-checked:text-white transition-all hover:bg-white/5">
                                            Yes
                                        </div>
                                    </label>
                                    <label className="flex-1 cursor-pointer">
                                        <input type="radio" name="needs_sync" value="no" checked={formData.needs_sync === 'no'} onChange={handleChange} className="peer sr-only" />
                                        <div className="text-center bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-gray-300 peer-checked:bg-emerald-600/20 peer-checked:border-emerald-500 peer-checked:text-white transition-all hover:bg-white/5">
                                            No
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className="mb-8">
                                <label className="block text-sm font-medium text-gray-300 mb-1">Will users need to create accounts and log in?</label>
                                <p className="text-xs text-gray-500 mb-3">Choose 'Yes' if people will need their own private profiles, dashboards, or saved settings inside the app.</p>
                                <div className="flex gap-4">
                                    <label className="flex-1 cursor-pointer">
                                        <input type="radio" name="needs_auth" value="yes" checked={formData.needs_auth === 'yes'} onChange={handleChange} className="peer sr-only" />
                                        <div className="text-center bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-gray-300 peer-checked:bg-emerald-600/20 peer-checked:border-emerald-500 peer-checked:text-white transition-all hover:bg-white/5">
                                            Yes
                                        </div>
                                    </label>
                                    <label className="flex-1 cursor-pointer">
                                        <input type="radio" name="needs_auth" value="no" checked={formData.needs_auth === 'no'} onChange={handleChange} className="peer sr-only" />
                                        <div className="text-center bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-gray-300 peer-checked:bg-emerald-600/20 peer-checked:border-emerald-500 peer-checked:text-white transition-all hover:bg-white/5">
                                            No
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className="mb-8">
                                <label className="block text-sm font-medium text-gray-300 mb-1">Will the app need to process payments?</label>
                                <p className="text-xs text-gray-500 mb-3">Let us know if you plan to charge a subscription fee, sell physical goods, or offer premium upgrades inside the app.</p>
                                <div className="flex gap-4">
                                    <label className="flex-1 cursor-pointer">
                                        <input type="radio" name="needs_payments" value="yes" checked={formData.needs_payments === 'yes'} onChange={handleChange} className="peer sr-only" />
                                        <div className="text-center bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-gray-300 peer-checked:bg-emerald-600/20 peer-checked:border-emerald-500 peer-checked:text-white transition-all hover:bg-white/5">
                                            Yes
                                        </div>
                                    </label>
                                    <label className="flex-1 cursor-pointer">
                                        <input type="radio" name="needs_payments" value="no" checked={formData.needs_payments === 'no'} onChange={handleChange} className="peer sr-only" />
                                        <div className="text-center bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-gray-300 peer-checked:bg-emerald-600/20 peer-checked:border-emerald-500 peer-checked:text-white transition-all hover:bg-white/5">
                                            No
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Does the app need to use the phone's hardware?</label>
                                <p className="text-xs text-gray-500 mb-3">Check any of these if your app absolutely needs to use the phone's built-in features to work properly.</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {['Camera / Photo Library', 'GPS / Location Services', 'Push Notifications', 'Bluetooth'].map((hw) => (
                                        <label key={hw} className="flex items-center p-4 rounded-xl border border-white/10 bg-[#1f2937] cursor-pointer hover:bg-white/5 transition-colors">
                                            <input type="checkbox" name="hardware_features" value={hw} checked={formData.hardware_features.includes(hw)} onChange={handleChange} className="w-5 h-5 rounded border-gray-600 text-emerald-500 focus:ring-emerald-500/20 bg-gray-700" />
                                            <span className="ml-3 text-sm text-gray-300">{hw}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* STEP 3: Logistics & Launch */}
                        <div className={`transition-all duration-500 ${step === 3 ? 'block opacity-100' : 'hidden opacity-0'}`}>

                            <div className="mb-8">
                                <label htmlFor="design_status" className="block text-sm font-medium text-gray-300 mb-1">Do you have any designs ready for how the app should look?</label>
                                <p className="text-xs text-gray-500 mb-3">Let us know if we are starting from a blank canvas or if you already have a clear vision.</p>
                                <select id="design_status" value={formData.design_status} onChange={handleChange} className="w-full bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-white appearance-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" >
                                    <option value="" disabled>Select design status...</option>
                                    <option value="ready">Yes, I have professional UI/UX designs ready.</option>
                                    <option value="partial">I have some rough sketches and a logo.</option>
                                    <option value="scratch">No, I need your team to design it from scratch.</option>
                                </select>
                            </div>

                            <div className="mb-8">
                                <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-1">When is your ideal launch date?</label>
                                <p className="text-xs text-gray-500 mb-3">App store approvals can take time. When do you want this in the hands of your users?</p>
                                <select id="timeline" value={formData.timeline} onChange={handleChange} className="w-full bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-white appearance-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" >
                                    <option value="" disabled>Select a timeline...</option>
                                    <option value="rush">ASAP (Rush project)</option>
                                    <option value="3_4_months">3 to 4 months</option>
                                    <option value="flexible">5+ months (I'm not in a rush)</option>
                                </select>
                            </div>

                            <div className="mb-8">
                                <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-1">What is your estimated budget for version one of this app?</label>
                                <p className="text-xs text-gray-500 mb-3">Apps are complex. Knowing your budget helps us suggest the best features we can realistically include in your first version without overspending.</p>
                                <select id="budget" value={formData.budget} onChange={handleChange} className="w-full bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-white appearance-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" >
                                    <option value="" disabled>Select a budget range...</option>
                                    <option value="under_200">Under $200</option>
                                    <option value="200_400">$200 - $400</option>
                                    <option value="400_600">$400 - $600</option>
                                    <option value="above_600">Above $600</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="pitch" className="block text-sm font-medium text-gray-300 mb-1">Give us your elevator pitch!</label>
                                <p className="text-xs text-gray-500 mb-3">In your own words, describe your app idea and what makes it special. Don't worry about sounding technical!</p>
                                <textarea id="pitch" value={formData.pitch} onChange={handleChange} rows={5} placeholder="It's like Uber, but for dog walking! I want users to be able to track their walkers in real-time..." className="w-full bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all placeholder-gray-600 resize-none"></textarea>
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
                                    className="flex items-center text-white bg-emerald-600 hover:bg-emerald-500 px-8 py-4 rounded-full shadow-[0_0_15px_rgba(5,150,105,0.4)] transition-all font-semibold ml-auto"
                                >
                                    Continue <ArrowRight size={18} className="ml-2" />
                                </button>
                            ) : (
                                <button type="submit" onClick={handleSubmit} disabled={isSubmitting} className="flex items-center text-white bg-green-600 hover:bg-green-500 px-8 py-4 rounded-full shadow-[0_0_15px_rgba(22,163,74,0.4)] transition-all font-semibold ml-auto disabled:opacity-50 disabled:cursor-not-allowed">
            {isSubmitting ? <><Loader2 size={18} className="animate-spin mr-2" /> Submitting...</> : <>{step < totalSteps ? 'Submit Request' : 'Submit Request'} <CheckCircle2 size={18} className="ml-2" /></>}
        </button>
                            )}
                        </div>

                        {/* Progress Dots */}
                        <div className="flex justify-center gap-2 mt-6">
                            {[1, 2, 3].map((s) => (
                                <div key={s} className={`h-1.5 rounded-full transition-all duration-300 ${s === step ? 'w-8 bg-emerald-500' : s < step ? 'w-3 bg-emerald-900' : 'w-3 bg-white/10'}`}></div>
                            ))}
                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default MobileIntakeForm;
