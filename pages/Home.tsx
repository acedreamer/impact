import React from 'react';
import { Page } from '../types';


interface HomeProps {
  onNavigate: (page: Page, day?: 'day1' | 'day2', regDay?: 'day1' | 'day2' | 'both') => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center py-20 px-6 overflow-hidden bg-background-dark">
        {/* Cinematic Lighting */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full -mr-64 -mt-64 pointer-events-none opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/[0.02] blur-[120px] rounded-full -ml-32 -mb-32 pointer-events-none opacity-40"></div>

        {/* Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="mx-auto max-w-5xl relative z-10 flex flex-col items-center text-center">

          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/5 bg-[#141411] px-5 py-2 hover:border-primary/30 transition-colors cursor-default">
            <span className="flex h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_rgba(204,255,0,0.8)] animate-pulse"></span>
            <span className="text-xs font-black text-primary tracking-[0.15em] uppercase">Registrations Open</span>
          </div>

          {/* Main Title */}
          <h1 className="text-[clamp(3.5rem,11vw,9rem)] font-black leading-[0.85] tracking-tighter text-white font-display uppercase mb-8">
            IMPACT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-[#aaff00]/50">HACKATHON</span><br />
            SERIES
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-2xl text-text-muted max-w-2xl leading-relaxed font-medium mb-10">
            Challenge the Status Quo. Build for Good.<br className="hidden sm:block" />
            <span className="text-white/80">Join the movement to solve real-world problems.</span>
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 w-full sm:w-auto mb-16">
            <button
              onClick={() => onNavigate('register')}
              className="w-full sm:w-auto h-14 sm:h-16 px-10 rounded-xl bg-primary text-black font-black text-base sm:text-lg hover:bg-[#d9ff33] hover:shadow-[0_10px_40px_-10px_rgba(204,255,0,0.5)] transition-all flex items-center justify-center gap-3 group active:scale-95"
            >
              Register Now
              <span className="material-symbols-outlined text-2xl transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
            <button
              onClick={() => onNavigate('schedule')}
              className="w-full sm:w-auto h-14 sm:h-16 px-10 rounded-xl border border-white/10 text-white font-bold text-base hover:bg-white/5 hover:border-white transition-all flex items-center justify-center active:scale-95"
            >
              View Schedule
            </button>
          </div>

          {/* Info Grid - Replaces Hero Image Functionality */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
            {[
              { label: 'Date', value: 'Jan 24-25', icon: 'calendar_month' },
              { label: 'Location', value: 'Commune', sub: 'Kottarakkara', icon: 'location_on' },
              { label: 'Prize Pool', value: '₹20K+', icon: 'trophy' },
              { label: 'Tracks', value: '2 Major', sub: 'Themes', icon: 'layers' },
            ].map((item, idx) => (
              <div key={idx} className="glass-card p-4 sm:p-6 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-white/[0.05] transition-colors group">
                <span className="material-symbols-outlined text-white/20 text-2xl group-hover:text-primary transition-colors">{item.icon}</span>
                <div className="text-center">
                  <p className="text-white font-black text-lg sm:text-xl font-display uppercase tracking-tight">{item.value}</p>
                  {item.sub && <p className="text-white/60 text-[10px] uppercase font-bold tracking-wider">{item.sub}</p>}
                </div>
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mt-1">{item.label}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Featured Tracks Section */}
      <section className="w-full bg-surface-dark py-24 sm:py-32 px-6 border-y border-white/5 relative">
        <div className="mx-auto max-w-7xl flex flex-col gap-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="flex flex-col gap-4 max-w-2xl">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter font-display uppercase leading-[0.9]">MISSION <br /><span className="text-primary">TRACKS</span></h2>
              <p className="text-text-muted text-lg font-medium leading-relaxed">We don't do toy apps. Choose a track and build a solution that solves a real human problem.</p>
            </div>
            <button
              onClick={() => onNavigate('tracks')}
              className="text-primary font-black uppercase tracking-widest text-sm hover:text-white transition-all flex items-center gap-2 w-fit border-b-2 border-primary pb-1 group"
            >
              View deep dive
              <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_outward</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Local Governance & Community', desc: 'Streamline governance and improve public service delivery.', icon: 'apartment' },
              { title: 'AI & Data Innovation', desc: 'Leverage Neural Networks and Machine Learning to build predictive models.', icon: 'neurology' },
            ].map((item, idx) => (
              <div key={idx} className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-primary/50 transition-all hover:bg-white/10">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">{item.icon}</span>
                <h3 className="text-2xl font-black text-white font-display uppercase mb-3">{item.title}</h3>
                <p className="text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;