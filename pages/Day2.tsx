import React from 'react';
import { Page } from '../types';

interface Day2Props {
    onNavigate: (page: Page, day?: 'day1' | 'day2', regDay?: 'day1' | 'day2' | 'both') => void;
}

const Day2: React.FC<Day2Props> = ({ onNavigate }) => {
    return (
        <div className="theme-day-2 min-h-screen bg-background-dark text-white">
            <div className="py-12 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="relative mb-20">
                    <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none"></div>

                    <div className="relative z-10 space-y-6 text-right">
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                            Day 02 • AI & Data Innovation
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black font-display tracking-tight uppercase">
                            Architecting <br />
                            <span className="text-primary transparent-text-stroke">Intelligence</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-text-muted max-w-2xl ml-auto font-light leading-relaxed">
                            Push the boundaries of what's possible with Neural Networks and Generative AI.
                            Day 2 is about pure innovation and futuristic agents.
                        </p>
                        <div className="flex justify-end gap-4 pt-4">
                            <button
                                onClick={() => onNavigate('schedule', 'day2')}
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
                            <span className="material-symbols-outlined text-2xl">neurology</span>
                        </div>
                        <h3 className="text-2xl font-bold font-display mb-3">Predictive Models</h3>
                        <p className="text-text-muted">Build models that can predict trends, failures, or outcomes based on historical data.</p>
                    </div>

                    <div className="p-8 rounded-3xl bg-surface-dark/50 border border-white/10 hover:border-primary/50 transition-colors group">
                        <div className="mb-6 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                            <span className="material-symbols-outlined text-2xl">smart_toy</span>
                        </div>
                        <h3 className="text-2xl font-bold font-display mb-3">Autonomous Agents</h3>
                        <p className="text-text-muted">Create agents that can perceive their environment and take actions to achieve goals.</p>
                    </div>

                    <div className="p-8 rounded-3xl bg-surface-dark/50 border border-white/10 hover:border-primary/50 transition-colors group">
                        <div className="mb-6 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                            <span className="material-symbols-outlined text-2xl">translate</span>
                        </div>
                        <h3 className="text-2xl font-bold font-display mb-3">NLP & Linguistics</h3>
                        <p className="text-text-muted">Real-time translation, sentiment analysis, or code generation tools.</p>
                    </div>

                    <div className="p-8 rounded-3xl bg-surface-dark/50 border border-white/10 hover:border-primary/50 transition-colors group">
                        <div className="mb-6 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                            <span className="material-symbols-outlined text-2xl">visibility</span>
                        </div>
                        <h3 className="text-2xl font-bold font-display mb-3">Computer Vision</h3>
                        <p className="text-text-muted">Object detection, facial recognition, or automated quality inspection.</p>
                    </div>
                </div>

                {/* CTA */}
                <div className="rounded-[2rem] bg-primary/5 border border-primary/20 p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 blur-3xl"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-black font-display uppercase mb-4">Join the Revolution</h2>
                        <p className="text-text-muted mb-8 max-w-xl mx-auto">Registration for the AI track is filling up fast.</p>
                        <button
                            onClick={() => onNavigate('register', undefined, 'day2')}
                            className="bg-primary text-background-dark font-bold px-8 py-3 rounded-lg hover:shadow-[0_0_20px_rgba(var(--color-primary),0.4)] transition-shadow"
                        >
                            Register for Day 2
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Day2;
