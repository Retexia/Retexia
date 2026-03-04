import { MessageSquare, Zap, Layers } from 'lucide-react';

const Advantage = () => {
    const points = [
        {
            title: 'Transparent Communication',
            description: 'We believe in keeping you in the loop. You\'ll always know the status of your project with our dedicated client portal and regular updates.',
            icon: <MessageSquare size={28} className="text-white" />
        },
        {
            title: 'Lightning Fast Delivery',
            description: 'Our streamlined processes and expert team ensure we deliver high-quality products faster than traditional agencies, without compromising on quality.',
            icon: <Zap size={28} className="text-white" />
        },
        {
            title: 'Modern Tech Stack',
            description: 'We use the latest, most reliable technologies to ensure your applications are secure, scalable, and built for the future.',
            icon: <Layers size={28} className="text-white" />
        }
    ];

    return (
        <section className="py-24 bg-background-dark relative overflow-hidden">
            {/* Background Graphic */}
            <div className="absolute top-0 right-0 -mr-40 -mt-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center md:text-left mb-16 max-w-2xl">
                    <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">The Retexia Advantage</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Why partner with us?</h3>
                    <p className="text-lg text-gray-400">
                        We don't just build software. We build the foundation for your business growth with a process designed around your success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {points.map((point, index) => (
                        <div
                            key={index}
                            className="relative p-8 rounded-3xl bg-gradient-to-b from-[#111827] to-background-dark border border-white/5 hover:border-primary/20 transition-colors duration-300"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(217,36,27,0.3)]">
                                {point.icon}
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4 shadow-sm">{point.title}</h4>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Advantage;
