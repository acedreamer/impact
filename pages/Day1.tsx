import React from 'react';
import { Page } from '../types';

interface Day1Props {
    onNavigate: (page: Page, day?: 'day1' | 'day2', regDay?: 'day1' | 'day2' | 'both') => void;
}

const Day1: React.FC<Day1Props> = ({ onNavigate }) => {
    return (
        <div className="theme-day-1 min-h-screen bg-background-dark text-white">
            <div className="py-12 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="relative mb-20">
                    <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none"></div>

                    <div className="relative z-10 space-y-6">
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                            Day 01 • Local Governance & Community
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black font-display tracking-tight uppercase">
                            Rebuilding <br />
                            <span className="text-primary transparent-text-stroke">Bureaucracy</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-text-muted max-w-2xl font-light leading-relaxed">
                            Analyze, dismantle, and reconstruct local governance systems.
                            We are hacking the public sector to improve service delivery for Kottarakkara.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <button
                                onClick={() => onNavigate('schedule', 'day1')}
                                className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-white transition-colors"
                            >
                                <span className="material-symbols-outlined">calendar_month</span>
                                View Schedule
                            </button>
                        </div>
                    </div>
                </div>

                {/* Problem Statements Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <div className="p-8 rounded-3xl bg-surface-dark/50 border border-white/10 hover:border-primary/50 transition-colors group">
                        <div className="mb-6 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                            <span className="material-symbols-outlined text-2xl">traffic</span>
                        </div>
                        <h3 className="text-2xl font-bold font-display mb-3">Junction Traffic Bot</h3>
                        <p className="text-text-muted">Optimize signal timing at Pulamon Junction using real-time camera feed analysis.</p>
                    </div>

                    <div className="p-8 rounded-3xl bg-surface-dark/50 border border-white/10 hover:border-primary/50 transition-colors group">
                        <div className="mb-6 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                            <span className="material-symbols-outlined text-2xl">recycling</span>
                        </div>
                        <h3 className="text-2xl font-bold font-display mb-3">Smart Ward Bins</h3>
                        <p className="text-text-muted">IoT-enabled waste bins for Municipal Wards 12-15 to prevent overflow and optimize truck routes.</p>
                    </div>

                    <div className="p-8 rounded-3xl bg-surface-dark/50 border border-white/10 hover:border-primary/50 transition-colors group">
                        <div className="mb-6 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                            <span className="material-symbols-outlined text-2xl">water_drop</span>
                        </div>
                        <h3 className="text-2xl font-bold font-display mb-3">Pipe Leak Detector</h3>
                        <p className="text-text-muted">Pressure sensor data analysis to predict pipe bursts in the KWA distribution network.</p>
                    </div>

                    <div className="p-8 rounded-3xl bg-surface-dark/50 border border-white/10 hover:border-primary/50 transition-colors group">
                        <div className="mb-6 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                            <span className="material-symbols-outlined text-2xl">receipt_long</span>
                        </div>
                        <h3 className="text-2xl font-bold font-display mb-3">Q-Less Civil Station</h3>
                        <p className="text-text-muted">Digital token system for the Taluk office to reduce waiting times for certificate issuance.</p>
                    </div>
                </div>

                {/* CTA */}
                <div className="rounded-[2rem] bg-primary/5 border border-primary/20 p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 blur-3xl"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-black font-display uppercase mb-4">Ready to Solve?</h2>
                        <p className="text-text-muted mb-8 max-w-xl mx-auto">Registration is open for the Civic Growth track. Join us to make a tangible impact.</p>
                        <button
                            onClick={() => onNavigate('register', undefined, 'day1')}
                            className="bg-primary text-background-dark font-bold px-8 py-3 rounded-lg hover:shadow-[0_0_20px_rgba(var(--color-primary),0.4)] transition-shadow"
                        >
                            Register for Day 1
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Day1;
