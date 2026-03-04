import { Link } from 'react-router-dom';
import { Code2, Smartphone, MonitorPlay } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: 'Web Development',
            description: 'High-performance, scalable web applications built with modern frontend frameworks and robust backends.',
            icon: <Code2 size={32} className="text-primary" />,
            link: '/services/web',
            delay: 'delay-0'
        },
        {
            title: 'Mobile Apps',
            description: 'Native-feel iOS and Android applications perfectly tailored to your users across all devices.',
            icon: <Smartphone size={32} className="text-primary" />,
            link: '/services/mobile',
            delay: 'delay-100'
        },
        {
            title: 'UI/UX Design',
            description: 'Stunning user interfaces and intuitive user flows designed to delight and convert your audience.',
            icon: <MonitorPlay size={32} className="text-primary" />,
            link: '/services/design',
            delay: 'delay-200'
        }
    ];

    return (
        <section className="py-24 bg-background-dark relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">What We Do</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Expertise that drives <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">results.</span></h3>
                    <p className="text-lg text-gray-400">
                        We deliver end-to-end digital solutions, combining cutting-edge technology with world-class design.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            to={service.link}
                            className={`group bg-[#111827] border border-white/5 rounded-2xl p-8 hover:bg-[#1f2937] hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(217,36,27,0.1)]`}
                        >
                            <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                                {service.icon}
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{service.title}</h4>
                            <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                                {service.description}
                            </p>
                            <div className="flex items-center text-sm font-semibold text-white group-hover:text-primary transition-colors">
                                Explore Service
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
