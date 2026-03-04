import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ClientLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Route to dashboard for testing
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen relative flex items-center justify-center bg-background-dark overflow-hidden z-0">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />

            {/* Login Card Container */}
            <div className="relative z-10 w-full max-w-md px-6 py-12 md:p-12 bg-[#111827]/80 backdrop-blur-xl rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">

                {/* Logo and Header */}
                <div className="text-center mb-10">
                    <Link to="/" className="inline-block text-3xl font-bold tracking-tighter text-white mb-6 hover:opacity-80 transition-opacity">
                        Retexia<span className="text-primary">.</span>
                    </Link>
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Client Portal Login</h1>
                    <p className="text-gray-400 text-sm">Welcome back. Enter your details to view your active projects.</p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="hello@yourbrand.com"
                            className="w-full bg-[#1f2937]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-sm font-medium text-gray-300">Password</label>
                            <a href="#" className="text-xs text-primary hover:text-primary-hover transition-colors">Forgot password?</a>
                        </div>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full bg-[#1f2937]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl shadow-[0_0_20px_rgba(217,36,27,0.3)] hover:shadow-[0_0_30px_rgba(217,36,27,0.5)] transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Login to Portal
                    </button>
                </form>

                {/* Footer Note */}
                <div className="mt-8 text-center">
                    <Link to="/" className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors group">
                        <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        Not a client yet? Return to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ClientLogin;
