import { Link, useNavigate } from 'react-router-dom';
import { ExternalLink, Circle, Check, ChevronRight, AlertCircle, ArrowLeft } from 'lucide-react';

const ActiveProjectDetails = () => {
    const navigate = useNavigate();

    const milestones = [
        { id: 1, title: 'Discovery & Wireframing', status: 'completed' },
        { id: 2, title: 'Core Development', status: 'in-progress' },
        { id: 3, title: 'Testing & Revisions', status: 'pending' },
        { id: 4, title: 'Final Launch', status: 'pending' },
    ];

    return (
        <div className="min-h-screen bg-background-dark pt-28 pb-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Breadcrumbs */}
                <nav className="flex items-center text-sm text-gray-400 mb-8" aria-label="Breadcrumb">
                    <Link to="/dashboard" className="hover:text-white transition-colors flex items-center gap-1">
                        <ArrowLeft size={14} />
                        Dashboard
                    </Link>
                    <ChevronRight size={14} className="mx-2" />
                    <span className="text-white">Active Projects</span>
                    <ChevronRight size={14} className="mx-2" />
                    <span className="text-gray-500">Retexia E-commerce Redesign</span>
                </nav>

                {/* Project Header */}
                <div className="bg-[#111827] border border-white/5 rounded-3xl p-8 mb-8 shadow-lg">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold tracking-wide uppercase">
                                    In Development
                                </span>
                                <span className="text-sm text-gray-400">Target Launch: Dec 15, 2023</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold text-white">Retexia E-commerce Redesign</h1>
                        </div>
                        <div className="w-full md:w-64">
                            <div className="flex justify-between text-sm mb-2 text-gray-300">
                                <span>Overall Progress</span>
                                <span className="font-bold text-white">65%</span>
                            </div>
                            <div className="w-full bg-background-dark rounded-full h-3">
                                <div className="bg-primary h-3 rounded-full shadow-[0_0_10px_rgba(217,36,27,0.5)]" style={{ width: '65%' }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links (The Assets) */}
                    <div className="flex flex-wrap gap-4 pt-6 border-t border-white/5">
                        <a href="#" className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium transition-colors border border-white/5">
                            <ExternalLink size={18} className="text-gray-400" />
                            View Live Staging Site
                        </a>
                        <a href="#" className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium transition-colors border border-white/5">
                            <ExternalLink size={18} className="text-gray-400" />
                            View Figma Designs
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Project Milestones / Timeline */}
                    <div className="lg:col-span-2">
                        <h2 className="text-xl font-bold text-white mb-6">Project Timeline</h2>
                        <div className="bg-[#111827] border border-white/5 rounded-3xl p-8 shadow-lg">
                            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[1.4rem] md:before:ml-[1.4rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">

                                {milestones.map((milestone) => (
                                    <div key={milestone.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                                        {/* Icon */}
                                        <div className={`flex items-center justify-center w-12 h-12 rounded-full border-[3px] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors
                                            ${milestone.status === 'completed' ? 'bg-green-500/20 border-green-500 text-green-400' :
                                                milestone.status === 'in-progress' ? 'bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(217,36,27,0.4)]' :
                                                    'bg-background-dark border-gray-600 text-gray-500'}`}
                                        >
                                            {milestone.status === 'completed' && <Check size={20} className="stroke-[3px]" />}
                                            {milestone.status === 'in-progress' && <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />}
                                            {milestone.status === 'pending' && <Circle size={16} />}
                                        </div>

                                        {/* Content Card */}
                                        <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-5 rounded-2xl border transition-colors
                                            ${milestone.status === 'completed' ? 'bg-white/5 border-white/10' :
                                                milestone.status === 'in-progress' ? 'bg-[#1f2937] border-primary/30' :
                                                    'bg-transparent border-transparent opacity-60'}`}
                                        >
                                            <div className="flex justify-between items-center mb-1">
                                                <h3 className="font-bold text-white text-lg">{milestone.title}</h3>
                                            </div>
                                            <p className="text-sm font-medium uppercase tracking-wider
                                                ${milestone.status === 'completed' ? 'text-green-400' : 
                                                  milestone.status === 'in-progress' ? 'text-primary' : 
                                                  'text-gray-500'}">
                                                {milestone.status === 'completed' ? 'Completed' :
                                                    milestone.status === 'in-progress' ? 'In Progress' : 'Pending'}
                                            </p>
                                        </div>

                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>

                    {/* The "Request a Change" Action Area */}
                    <div className="lg:col-span-1">
                        <div className="bg-gradient-to-br from-[#1f2937] to-[#111827] border border-white/10 rounded-3xl p-8 sticky top-28 shadow-xl">
                            <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-6">
                                <AlertCircle size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Need to make a change or report a bug?</h3>
                            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                                Submit a ticket directly to your project team. We monitor this queue constantly to ensure your build stays exactly on track.
                            </p>
                            <button
                                onClick={() => navigate('/dashboard/ticket')}
                                className="w-full flex items-center justify-center gap-2 bg-white text-background-dark hover:bg-gray-200 font-bold py-4 px-6 rounded-xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:-translate-y-1"
                            >
                                Submit a Ticket
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ActiveProjectDetails;
