import { useState } from 'react';
import { submitDesignLead } from '../../../services/webhookApi';
import { Loader2 } from 'lucide-react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const DesignIntakeForm = () => {
    const [step, setStep] = useState(1);
    const totalSteps = 3;

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', brand_name: '', design_services: [] as string[], audience: '', guidelines: 'none', inspiration: '', deliverables: '', timeline: '', budget: '' });

    // Step 2 specific state for limiting traits to 3
    const [selectedTraits, setSelectedTraits] = useState<string[]>([]);

    const handleTraitToggle = (trait: string) => {
        if (selectedTraits.includes(trait)) {
            setSelectedTraits(selectedTraits.filter(t => t !== trait));
        } else if (selectedTraits.length < 3) {
            setSelectedTraits([...selectedTraits, trait]);
        }
    };

    const nextStep = (e: React.MouseEvent) => {
        e.preventDefault();
        if (step < totalSteps) setStep(step + 1);
        window.scrollTo({ top: document.getElementById('design-intake-form')?.offsetTop ? document.getElementById('design-intake-form')!.offsetTop - 100 : 0, behavior: 'smooth' });
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
        window.scrollTo({ top: document.getElementById('design-intake-form')?.offsetTop ? document.getElementById('design-intake-form')!.offsetTop - 100 : 0, behavior: 'smooth' });
    };

    const traits = [
        'Modern & Minimalist',
        'Bold & Energetic',
        'Premium & Luxurious',
        'Fun & Playful',
        'Natural & Organic',
        'Corporate & Professional'
    ];

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
            await submitDesignLead({ ...formData, traits: selectedTraits });
            setIsSuccess(true);
            window.scrollTo({ top: document.getElementById('design-intake-form')?.offsetTop ? document.getElementById('design-intake-form')!.offsetTop - 100 : 0, behavior: 'smooth' });
        } catch (error) {
            console.error('Error:', error);
            alert('There was an issue submitting your request. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <section id="design-intake-form" className="relative pb-32 z-20 px-4 sm:px-6 lg:px-8 -mt-10">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-[#111827] border border-white/10 rounded-[2.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden text-center">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent"></div>
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
                                setFormData({ name: '', email: '', brand_name: '', design_services: [] as string[], audience: '', guidelines: 'none', inspiration: '', deliverables: '', timeline: '', budget: '' });
                                setSelectedTraits([]);
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



    return (
        <section id="design-intake-form" className="relative pb-32 z-20 px-4 sm:px-6 lg:px-8 -mt-10">
            <div className="max-w-3xl mx-auto">
                <div className="bg-[#111827] border border-white/10 rounded-[2.5rem] p-8 md:p-14 shadow-2xl relative overflow-hidden">

                    {/* subtle inside glow specific to design color scheme */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent"></div>

                    {/* Form Header */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">
                            {step === 1 && "Step 1: The Canvas (Who are you and what do you need?)"}
                            {step === 2 && "Step 2: The Vibe (How should it look and feel?)"}
                            {step === 3 && "Step 3: Deliverables & Logistics"}
                        </h2>
                        <p className="text-gray-400">
                            {step === 1 && "Let's figure out exactly what bucket your project falls into."}
                            {step === 2 && "We want to understand your audience and the emotion behind the design."}
                            {step === 3 && "Nail down the exact files you expect to receive, budget, and timeline."}
                        </p>
                    </div>

                    <form className="space-y-8">

                        {/* STEP 1: The Canvas */}
                        <div className={`transition-all duration-500 ${step === 1 ? 'block opacity-100' : 'hidden opacity-0'}`}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Full Name</label>
                                    <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Alex Morgan" className="w-full bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-white focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all placeholder-gray-600" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                    <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="alex@creativestudio.com" className="w-full bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-white focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all placeholder-gray-600" />
                                </div>
                            </div>

                            <div className="mb-8">
                                <label htmlFor="brand_name" className="block text-sm font-medium text-gray-300 mb-1">Business or Brand Name</label>
                                <p className="text-xs text-gray-500 mb-3">What is the name of the company or product we are designing for?</p>
                                <input type="text" id="brand_name" value={formData.brand_name} onChange={handleChange} placeholder="Lumina Co." className="w-full bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-white focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all placeholder-gray-600" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">What kind of design magic do you need?</label>
                                <p className="text-xs text-gray-500 mb-3">Don't worry if you aren't 100% sure; just check the boxes that sound closest to what you are looking for. (Select all that apply)</p>
                                <div className="space-y-3">
                                    {[
                                        'A new logo and full brand identity (colors, fonts)',
                                        'Website or Mobile App layout (UI/UX design)',
                                        'Social media graphics, cover photos, or ad creatives',
                                        'Product packaging or labels for physical goods',
                                        'Print materials (business cards, flyers, brochures)'
                                    ].map((service) => (
                                        <label key={service} className="flex items-center p-4 rounded-xl border border-white/10 bg-[#1f2937] cursor-pointer hover:bg-white/5 transition-colors">
                                            <input type="checkbox" name="design_services" value={service} checked={formData.design_services.includes(service)} onChange={handleChange} className="w-5 h-5 rounded border-gray-600 text-fuchsia-500 focus:ring-fuchsia-500/20 bg-gray-700" />
                                            <span className="ml-3 text-sm text-gray-300">{service}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* STEP 2: The Vibe */}
                        <div className={`transition-all duration-500 ${step === 2 ? 'block opacity-100' : 'hidden opacity-0'}`}>

                            <div className="mb-8">
                                <label htmlFor="audience" className="block text-sm font-medium text-gray-300 mb-1">Who is your target audience?</label>
                                <p className="text-xs text-gray-500 mb-3">Are we designing to attract teenagers, corporate executives, health-conscious shoppers, or someone else entirely?</p>
                                <textarea id="audience" value={formData.audience} onChange={handleChange} rows={3} placeholder="We are trying to reach young professionals aged 25-35 looking for premium fitness solutions..." className="w-full bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-white focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all placeholder-gray-600 resize-none"></textarea>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-end justify-between mb-1">
                                    <label className="block text-sm font-medium text-gray-300">If your brand were a person, how would you describe their personality?</label>
                                    <span className="text-xs font-medium text-fuchsia-400 bg-fuchsia-400/10 px-2 py-1 rounded-md">{selectedTraits.length}/3</span>
                                </div>
                                <p className="text-xs text-gray-500 mb-3">Pick the top 3 traits that best fit your brand's style.</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {traits.map((trait) => (
                                        <button
                                            key={trait}
                                            type="button"
                                            onClick={() => handleTraitToggle(trait)}
                                            className={`text-left p-4 rounded-xl border transition-all duration-300 ${selectedTraits.includes(trait)
                                                ? 'bg-fuchsia-600/20 border-fuchsia-500 text-white'
                                                : (selectedTraits.length >= 3 && !selectedTraits.includes(trait))
                                                    ? 'bg-[#1f2937] border-white/5 text-gray-600 cursor-not-allowed opacity-50'
                                                    : 'bg-[#1f2937] border-white/10 text-gray-300 hover:bg-white/5'
                                                }`}
                                            disabled={selectedTraits.length >= 3 && !selectedTraits.includes(trait)}
                                        >
                                            <span className="text-sm">{trait}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-8">
                                <label className="block text-sm font-medium text-gray-300 mb-1">Do you have an existing brand style we need to follow?</label>
                                <p className="text-xs text-gray-500 mb-3">Let us know if we are starting from scratch or matching what you already have.</p>
                                <div className="space-y-3">
                                    <label className="block cursor-pointer">
                                        <input type="radio" name="guidelines" value="strict" checked={formData.guidelines === 'strict'} onChange={handleChange} className="peer sr-only" />
                                        <div className="bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-gray-300 peer-checked:bg-fuchsia-600/20 peer-checked:border-fuchsia-500 peer-checked:text-white transition-all hover:bg-white/5 text-left">
                                            Yes, we have strict brand guidelines (colors, fonts, logos).
                                        </div>
                                    </label>
                                    <label className="block cursor-pointer">
                                        <input type="radio" name="guidelines" value="partial" checked={formData.guidelines === 'partial'} onChange={handleChange} className="peer sr-only" />
                                        <div className="bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-gray-300 peer-checked:bg-fuchsia-600/20 peer-checked:border-fuchsia-500 peer-checked:text-white transition-all hover:bg-white/5 text-left">
                                            We have a logo, but we are open to evolving the rest of the look.
                                        </div>
                                    </label>
                                    <label className="block cursor-pointer">
                                        <input type="radio" name="guidelines" value="none" checked={formData.guidelines === 'none'} onChange={handleChange} className="peer sr-only" />
                                        <div className="bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-gray-300 peer-checked:bg-fuchsia-600/20 peer-checked:border-fuchsia-500 peer-checked:text-white transition-all hover:bg-white/5 text-left">
                                            No, we are a blank canvas! Please design it from scratch.
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="inspiration" className="block text-sm font-medium text-gray-300 mb-1">Are there any brands or designs you absolutely love?</label>
                                <p className="text-xs text-gray-500 mb-3">Drop 1 or 2 links to websites, Instagram accounts, or competitors whose style you admire. (Or tell us what you absolutely HATE!)</p>
                                <textarea id="inspiration" value={formData.inspiration} onChange={handleChange} rows={4} placeholder="We love the clean aesthetic of Apple, but want something a bit more playful like Discord..." className="w-full bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-white focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all placeholder-gray-600 resize-none"></textarea>
                            </div>

                        </div>

                        {/* STEP 3: Logistics & Launch */}
                        <div className={`transition-all duration-500 ${step === 3 ? 'block opacity-100' : 'hidden opacity-0'}`}>

                            <div className="mb-8">
                                <label htmlFor="deliverables" className="block text-sm font-medium text-gray-300 mb-1">What specific files or formats do you know you'll need? <span className="text-gray-500 font-normal">(Optional)</span></label>
                                <p className="text-xs text-gray-500 mb-3">Skip this if you aren't sure! But if you know you need source files (like Figma or Illustrator), specific image sizes, or 3D renders, let us know here.</p>
                                <textarea id="deliverables" value={formData.deliverables} onChange={handleChange} rows={3} placeholder="I definitely need the raw Figma files for our developers, and exported SVGs." className="w-full bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-white focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all placeholder-gray-600 resize-none"></textarea>
                            </div>

                            <div className="mb-8">
                                <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-1">When do you need the final designs completed?</label>
                                <p className="text-xs text-gray-500 mb-3">Great design takes time, but we want to make sure we hit your deadlines.</p>
                                <select id="timeline" value={formData.timeline} onChange={handleChange} className="w-full bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-white appearance-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all" >
                                    <option value="" disabled>Select a timeline...</option>
                                    <option value="rush">ASAP (Rush project)</option>
                                    <option value="2_4_weeks">2 to 4 weeks</option>
                                    <option value="1_2_months">1 to 2 months</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-1">What is your estimated budget for this design project?</label>
                                <p className="text-xs text-gray-500 mb-3">Knowing your budget helps us determine how many concepts, revisions, and variations we can include in your package.</p>
                                <select id="budget" value={formData.budget} onChange={handleChange} className="w-full bg-[#1f2937] border border-white/10 rounded-xl px-5 py-4 text-white appearance-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all" >
                                    <option value="" disabled>Select a budget range...</option>
                                    <option value="under_15">Under $15 (or local equivalent)</option>
                                    <option value="15_30">$15 - $30</option>
                                    <option value="30_100">$30 - $100</option>
                                </select>
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
                                    className="flex items-center text-white bg-fuchsia-600 hover:bg-fuchsia-500 px-8 py-4 rounded-full shadow-[0_0_15px_rgba(192,38,211,0.4)] transition-all font-semibold ml-auto"
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
                                <div key={s} className={`h-1.5 rounded-full transition-all duration-300 ${s === step ? 'w-8 bg-fuchsia-500' : s < step ? 'w-3 bg-fuchsia-900' : 'w-3 bg-white/10'}`}></div>
                            ))}
                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default DesignIntakeForm;
