import React from 'react';
import { Page } from '../types';
import heroBg from '../assets/hero-bg.png';

interface HomeProps {
  onNavigate: (page: Page, day?: 'day1' | 'day2', regDay?: 'day1' | 'day2' | 'both') => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-12 sm:py-24 lg:py-32 px-6 overflow-hidden bg-background-dark">
        {/* Cinematic Lighting */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full -mr-64 -mt-32 pointer-events-none opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/[0.02] blur-[120px] rounded-full -ml-32 -mb-32 pointer-events-none opacity-40"></div>

        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-8 sm:gap-10 z-10 text-left">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/5 bg-[#141411] px-4 py-1.5 w-fit">
                <span className="flex h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_rgba(204,255,0,0.8)]"></span>
                <span className="text-[11px] font-black text-primary tracking-[0.1em] uppercase">Registrations Open</span>
              </div>

              <h1 className="text-[clamp(3.5rem,12vw,8.5rem)] font-black leading-[0.85] tracking-tighter text-white font-display uppercase">
                IMPACT <br />
                <span className="text-primary">HACKATHON</span><br />
                SERIES
              </h1>

              <p className="text-base sm:text-xl text-text-muted max-w-lg leading-relaxed font-medium">
                Challenge the Status Quo. Build for Good.<br />
                <span className="text-white">January 24 & 25, 2026</span> • Commune - Work Near Home, Kottarakkara
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
                <button
                  onClick={() => onNavigate('register')}
                  className="h-14 sm:h-16 px-10 rounded-xl bg-primary text-black font-black text-base sm:text-lg hover:bg-[#d9ff33] hover:shadow-[0_10px_40px_-10px_rgba(204,255,0,0.5)] transition-all flex items-center justify-center gap-3 group active:scale-95"
                >
                  Register Now
                  <span className="material-symbols-outlined text-2xl transition-transform group-hover:translate-x-1">arrow_forward</span>
                </button>
                <button
                  onClick={() => onNavigate('schedule')}
                  className="h-14 sm:h-16 px-10 rounded-xl border border-white/10 text-white font-bold text-base hover:bg-white/5 hover:border-white transition-all flex items-center justify-center active:scale-95"
                >
                  View Schedule
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/5 mt-6">
                <div>
                  <p className="text-2xl sm:text-4xl font-black text-white font-display">₹50K+</p>
                  <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mt-1">Prize Pool</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-4xl font-black text-white font-display">2</p>
                  <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mt-1">Tracks</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-4xl font-black text-white font-display">24H</p>
                  <p className="text-[10px] font-black text-text-muted uppercase tracking-widest mt-1">Duration</p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="relative w-full aspect-[4/5] lg:h-[650px] rounded-[3rem] overflow-hidden group shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] border border-white/10">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${heroBg})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>

              {/* Event Info Floating Card */}
              <div className="absolute bottom-8 left-8 right-8 glass-card p-8 rounded-3xl flex flex-col gap-6 shadow-2xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                <div className="flex items-center gap-5 border-b border-white/10 pb-6">
                  <div className="h-14 w-14 rounded-full bg-surface-dark flex items-center justify-center border border-white/10 shrink-0">
                    <span className="material-symbols-outlined text-primary text-2xl">calendar_month</span>
                  </div>
                  <div>
                    <p className="text-white font-black text-lg uppercase font-display tracking-tight">Jan 24-25, 2026</p>
                    <p className="text-xs font-bold text-text-muted uppercase tracking-wider">Starts 09:00 AM</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="h-14 w-14 rounded-full bg-surface-dark flex items-center justify-center border border-white/10 shrink-0">
                    <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
                  </div>
                  <div>
                    <p className="text-white font-black text-lg uppercase font-display tracking-tight">Commune</p>
                    <p className="text-xs font-bold text-text-muted uppercase tracking-wider">Kottarakkara</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Featured Tracks Section */}
      < section className="w-full bg-surface-dark py-24 sm:py-32 px-6 border-y border-white/5 relative" >
        <div className="mx-auto max-w-7xl flex flex-col gap-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="flex flex-col gap-4 max-w-2xl">
              <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter font-display uppercase leading-[0.9]">MISSION <br /><span className="text-primary">TRACKS</span></h2>
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
              { title: 'Civic Growth', desc: 'Streamline governance and improve public service delivery.', icon: 'apartment' },
              { title: 'Neural Networks', desc: 'Leverage Neural Networks and Machine Learning to build predictive models.', icon: 'neurology' },
            ].map((item, idx) => (
              <div key={idx} className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-primary/50 transition-all hover:bg-white/10">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">{item.icon}</span>
                <h3 className="text-2xl font-black text-white font-display uppercase mb-3">{item.title}</h3>
                <p className="text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section >
    </div >
  );
};

export default Home;