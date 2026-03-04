import { Compass, Code, Rocket } from 'lucide-react';

const Process = () => {
    const steps = [
        {
            number: '01',
            title: 'Discovery & Strategy',
            description: 'We start by deeply understanding your goals, target audience, and market. Through collaborative workshops, we define the product scope, create user personas, and establish a clear technical strategy.',
            icon: <Compass size={36} className="text-white" />,
            color: 'from-blue-500 to-indigo-600'
        },
        {
            number: '02',
            title: 'Design & Development',
            description: 'Our design team crafts intuitive, beautiful interfaces while our engineers build a robust, scalable architecture. We work in agile sprints, keeping you updated with weekly progress and iterative deliveries.',
            icon: <Code size={36} className="text-white" />,
            color: 'from-purple-500 to-pink-600'
        },
        {
            number: '03',
            title: 'Launch & Scale',
            description: 'After rigorous testing and quality assurance, we deploy your product to the world. But we don’t stop there; we provide ongoing support, monitoring, and feature updates to help you scale.',
            icon: <Rocket size={36} className="text-white" />,
            color: 'from-orange-500 to-primary'
        }
    ];

    return (
        <section className="py-24 bg-[#0a0f1d] border-t border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Process</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">How We Work</h3>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop only) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                        {steps.map((step, index) => (
                            <div key={index} className="relative z-10 flex flex-col items-center text-center">
                                {/* Number Badge */}
                                <div className="absolute top-0 right-1/2 translate-x-[4rem] -translate-y-[2rem] text-7xl font-black text-white/5 pointer-events-none z-0">
                                    {step.number}
                                </div>

                                {/* Icon Container */}
                                <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} p-0.5 mb-8 shadow-xl relative z-10`}>
                                    <div className="w-full h-full bg-[#0a0f1d] rounded-[15px] flex items-center justify-center hover:bg-transparent transition-colors duration-300 group">
                                        <div className="group-hover:scale-110 transition-transform duration-300">
                                            {step.icon}
                                        </div>
                                    </div>
                                </div>

                                <h4 className="text-2xl font-bold text-white mb-4 relative z-10">{step.title}</h4>
                                <p className="text-gray-400 leading-relaxed font-light relative z-10">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
