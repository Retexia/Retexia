import { Link } from 'react-router-dom';
import { Monitor, Smartphone, PenTool, ArrowRight, CheckCircle2 } from 'lucide-react';

const CoreServices = () => {
    const services = [
        {
            id: 'web',
            title: 'Web Development',
            badge: 'Scalable Platforms',
            description: 'We build high-performance, custom web applications tailored to your specific business needs. From complex enterprise dashboards to high-converting marketing sites, our frontend and backend engineers deliver robust, secure, and blazing-fast solutions.',
            features: ['Custom Web Apps (React, Next.js)', 'E-commerce Solutions', 'CMS & API Integrations', 'Performance Optimization'],
            icon: <Monitor size={48} className="text-white" />,
            link: '/services/web',
            linkText: 'Start a Web Project',
            color: 'from-blue-600 to-indigo-600',
            shadowColor: 'rgba(79, 70, 229, 0.4)'
        },
        {
            id: 'mobile',
            title: 'Mobile App Development',
            badge: 'Native Experience',
            description: 'Reach your users wherever they are with premium iOS and Android applications. We specialize in cross-platform development that doesn\'t sacrifice performance, ensuring a native feel and seamless functionality across all mobile devices.',
            features: ['iOS & Android Apps', 'Cross-Platform (React Native)', 'App Store Deployment', 'Mobile UI/UX Design'],
            icon: <Smartphone size={48} className="text-white" />,
            link: '/services/mobile',
            linkText: 'Start an App Project',
            color: 'from-emerald-500 to-teal-600',
            shadowColor: 'rgba(16, 185, 129, 0.4)'
        },
        {
            id: 'design',
            title: 'UI/UX & Brand Design',
            badge: 'Pixel Perfect',
            description: 'Great software starts with great design. Our interface designers and UX researchers craft stunning, intuitive experiences that delight users and drive conversions. We build comprehensive design systems that scale with your brand.',
            features: ['Wireframing & Prototyping', 'User Interface Design', 'Brand Identity & Guidelines', 'Usability Testing'],
            icon: <PenTool size={48} className="text-white" />,
            link: '/services/design',
            linkText: 'Start a Design Project',
            color: 'from-orange-500 to-primary',
            shadowColor: 'rgba(217, 36, 27, 0.4)'
        }
    ];

    return (
        <section className="py-24 bg-background-dark relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Expertise</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Core Services</h3>
                </div>

                <div className="space-y-24">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`flex flex-col md:flex-row gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Visual/Icon Block */}
                            <div className="w-full md:w-5/12 flex justify-center">
                                <div className="relative w-full aspect-square max-w-sm rounded-[2rem] bg-[#111827] border border-white/5 flex items-center justify-center group overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>

                                    {/* Glowing Icon Container */}
                                    <div
                                        className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 z-10`}
                                        style={{ boxShadow: `0 20px 40px ${service.shadowColor}` }}
                                    >
                                        {service.icon}
                                    </div>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="w-full md:w-7/12">
                                <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-gray-300 mb-6 backdrop-blur-sm">
                                    {service.badge}
                                </div>

                                <h4 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">{service.title}</h4>

                                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                                    {service.description}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center text-gray-300 font-medium">
                                            <CheckCircle2 size={20} className="text-primary mr-3 flex-shrink-0" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    to={service.link}
                                    className="inline-flex items-center text-white bg-[#1f2937] hover:bg-primary border border-white/10 hover:border-primary px-8 py-4 rounded-full transition-all duration-300 font-semibold group"
                                >
                                    {service.linkText}
                                    <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreServices;
