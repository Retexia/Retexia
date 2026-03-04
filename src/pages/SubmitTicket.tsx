import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, UploadCloud } from 'lucide-react';

const SubmitTicket = () => {
    const [requestType, setRequestType] = useState('');
    const [urgency, setUrgency] = useState('');

    const requestOptions = [
        { id: 'bug', label: 'Bug/Error Report', description: 'Something is broken or not working as intended.' },
        { id: 'content', label: 'Content Update', description: 'Text, image, or copy modifications on existing pages.' },
        { id: 'design', label: 'Design Change', description: 'Tweaks to layout, colors, or visual styling.' },
        { id: 'feature', label: 'New Feature Idea', description: 'A completely new functionality addition.' },
    ];

    return (
        <div className="min-h-screen bg-background-dark pt-28 pb-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header & Breadcrumbs */}
                <nav className="flex items-center text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
                    <Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
                    <ChevronRight size={14} className="mx-2" />
                    <Link to="/dashboard/project-details" className="hover:text-white transition-colors">Active Projects</Link>
                    <ChevronRight size={14} className="mx-2" />
                    <span className="text-white">Submit Ticket</span>
                </nav>

                <div className="mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Submit a Change Request</h1>
                    <p className="text-gray-400 text-lg">Let us know what you need updated, changed, or fixed on your current build.</p>
                </div>

                {/* Centralized Form Card */}
                <div className="bg-[#111827] border border-white/5 rounded-3xl p-6 md:p-10 shadow-xl">
                    <form className="space-y-12">

                        {/* Step 1: Request Type */}
                        <div>
                            <h2 className="text-xl font-bold text-white mb-4">1. What kind of request is this?</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {requestOptions.map((option) => (
                                    <label
                                        key={option.id}
                                        className={`relative flex flex-col p-5 cursor-pointer rounded-2xl border transition-all
                                            ${requestType === option.id
                                                ? 'bg-primary/10 border-primary shadow-[0_0_15px_rgba(217,36,27,0.2)]'
                                                : 'bg-[#1f2937]/50 border-white/10 hover:border-gray-400'
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="requestType"
                                            value={option.id}
                                            className="sr-only"
                                            onChange={(e) => setRequestType(e.target.value)}
                                        />
                                        <span className={`font-bold mb-1 ${requestType === option.id ? 'text-white' : 'text-gray-200'}`}>
                                            {option.label}
                                        </span>
                                        <span className="text-sm text-gray-400 leading-relaxed">
                                            {option.description}
                                        </span>
                                        {/* Custom styled radio indicator hidden but present for completeness */}
                                        <div className={`absolute top-5 right-5 w-4 h-4 rounded-full border flex items-center justify-center
                                            ${requestType === option.id ? 'border-primary' : 'border-gray-500'}`}>
                                            {requestType === option.id && <div className="w-2 h-2 bg-primary rounded-full" />}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <hr className="border-white/5" />

                        {/* Step 2: The Details */}
                        <div>
                            <h2 className="text-xl font-bold text-white mb-6">2. The Details</h2>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Ticket Title</label>
                                    <input
                                        type="text"
                                        placeholder="e.g., Change header color"
                                        className="w-full bg-[#1f2937]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Where is this happening?</label>
                                    <input
                                        type="text"
                                        placeholder="Paste exact URL or page name (e.g., /about or retexia.com/contact)"
                                        className="w-full bg-[#1f2937]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Detailed Description</label>
                                    <textarea
                                        rows={6}
                                        placeholder="Describe what you need, what broke, or what you would like to see changed..."
                                        className="w-full bg-[#1f2937]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-y"
                                    ></textarea>
                                </div>

                                {/* File Upload Area */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Upload Screenshots or Files</label>
                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-white/10 border-dashed rounded-xl bg-[#1f2937]/30 hover:bg-[#1f2937]/60 hover:border-gray-400 transition-all cursor-pointer group">
                                        <div className="space-y-1 text-center">
                                            <UploadCloud className="mx-auto h-12 w-12 text-gray-400 group-hover:text-white transition-colors" />
                                            <div className="flex text-sm text-gray-400 justify-center">
                                                <span className="relative rounded-md font-medium text-primary hover:text-primary-hover focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary">
                                                    <span>Upload a file</span>
                                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                </span>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="border-white/5" />

                        {/* Step 3: Priority & Submission */}
                        <div>
                            <h2 className="text-xl font-bold text-white mb-6">3. Priority & Submission</h2>
                            <div className="space-y-8">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Urgency Level</label>
                                    <select
                                        className="w-full md:w-1/2 bg-[#1f2937]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer"
                                        value={urgency}
                                        onChange={(e) => setUrgency(e.target.value)}
                                    >
                                        <option value="" disabled>Select priority level...</option>
                                        <option value="low">Low (When you get a chance)</option>
                                        <option value="medium">Medium (Standard priority)</option>
                                        <option value="high">High (Urgent blocker)</option>
                                    </select>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex h-5 items-center">
                                        <input
                                            id="timeline-approval"
                                            name="timeline-approval"
                                            type="checkbox"
                                            className="h-5 w-5 rounded border-gray-600 bg-background-dark text-primary focus:ring-primary focus:ring-offset-background-dark cursor-pointer transition-all"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="timeline-approval" className="font-medium text-gray-300 select-none cursor-pointer">
                                            I understand that requesting entirely new features may require a separate quote and timeline adjustment.
                                        </label>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                                    <button
                                        type="button"
                                        className="w-full sm:w-auto py-4 px-8 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl shadow-[0_0_20px_rgba(217,36,27,0.3)] hover:shadow-[0_0_30px_rgba(217,36,27,0.5)] transition-all duration-300 transform hover:-translate-y-1"
                                    >
                                        Submit Request
                                    </button>
                                    <Link
                                        to="/dashboard/project-details"
                                        className="w-full sm:w-auto py-4 px-8 bg-transparent text-gray-300 hover:text-white font-medium rounded-xl border border-white/10 hover:border-white/20 transition-all text-center"
                                    >
                                        Cancel
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default SubmitTicket;
