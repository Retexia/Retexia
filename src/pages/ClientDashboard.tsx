import { ShieldAlert, Laptop, ArrowRight, CircleCheck, Clock, CheckCircle2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const ClientDashboard = () => {
    const navigate = useNavigate();

    const activeProjects = [
        {
            id: 'PRJ-1029',
            name: 'E-commerce Redesign',
            type: 'Web Development',
            status: 'In Progress',
            progress: 65,
            icon: <Laptop size={24} className="text-blue-400" />,
            color: 'bg-blue-500'
        }
    ];

    const recentTickets = [
        { id: 'TKT-042', title: 'Change logo color on footer', status: 'Resolved', date: 'Oct 24, 2023', icon: <CheckCircle2 className="text-green-400" size={16} /> },
        { id: 'TKT-043', title: 'Update Contact page address', status: 'Pending', date: 'Oct 26, 2023', icon: <Clock className="text-yellow-400" size={16} /> },
    ];

    return (
        <div className="min-h-screen bg-background-dark pt-28 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Welcome Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 bg-[#111827] p-8 rounded-3xl border border-white/5 shadow-lg">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
                        <p className="text-gray-400 max-w-xl">
                            Here is an overview of your active projects with Retexia. Track progress, view details, and request changes all in one place.
                        </p>
                    </div>
                    <button
                        onClick={() => navigate('/dashboard/ticket')}
                        className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-[0_0_15px_rgba(217,36,27,0.3)] hover:translate-y-[-2px] whitespace-nowrap"
                    >
                        <ShieldAlert size={18} />
                        Submit a Ticket
                    </button>
                </div>

                {/* Active Projects Grid */}
                <div className="mb-12">
                    <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <CircleCheck className="text-primary" size={20} />
                        Active Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {activeProjects.map((project) => (
                            <div key={project.id} className="bg-[#111827] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors group">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                                        {project.icon}
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-gray-300 border border-white/10">
                                        {project.type}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                                <p className="text-sm font-medium text-gray-400 mb-6">Status: <span className="text-white">{project.status}</span></p>

                                <div className="mb-6">
                                    <div className="flex justify-between text-xs mb-2">
                                        <span className="text-gray-400">Progress</span>
                                        <span className="font-semibold text-white">{project.progress}%</span>
                                    </div>
                                    <div className="w-full bg-background-dark rounded-full h-2">
                                        <div className={`${project.color} h-2 rounded-full`} style={{ width: `${project.progress}%` }}></div>
                                    </div>
                                </div>

                                <Link
                                    to="/dashboard/project-details"
                                    className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl transition-colors"
                                >
                                    View Project Details
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activity Table */}
                <div>
                    <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <Clock className="text-primary" size={20} />
                        Recent Ticket Activity
                    </h2>
                    <div className="bg-[#111827] border border-white/5 rounded-2xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm text-gray-400">
                                <thead className="text-xs uppercase bg-white/5 text-gray-300">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">Ticket ID</th>
                                        <th scope="col" className="px-6 py-4">Request Description</th>
                                        <th scope="col" className="px-6 py-4">Status</th>
                                        <th scope="col" className="px-6 py-4">Date Submited</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentTickets.map((ticket, i) => (
                                        <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                            <td className="px-6 py-4 font-medium text-white">{ticket.id}</td>
                                            <td className="px-6 py-4">{ticket.title}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    {ticket.icon}
                                                    <span className={ticket.status === 'Resolved' ? 'text-green-400' : 'text-yellow-400'}>
                                                        {ticket.status}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">{ticket.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ClientDashboard;
