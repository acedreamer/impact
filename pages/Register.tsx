
import React from 'react';

import { Page } from '../types';
import { useState } from 'react';

interface RegisterProps {
  initialSelection?: 'day1' | 'day2' | 'both';
}

const Register: React.FC<RegisterProps> = ({ initialSelection = 'both' }) => {
  const [selectedDay, setSelectedDay] = useState<'day1' | 'day2' | 'both'>(initialSelection);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden bg-background-dark pt-20 pb-32">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "30px 30px"
        }}
      ></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-[500px] z-10">
        <div className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="text-center mb-8 sm:mb-10">
            <h1 className="text-white text-3xl sm:text-4xl font-bold tracking-tight mb-2 sm:mb-3 font-display uppercase">Join the Challenge</h1>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed">
              Secure your spot in the Impact Hackathon. Limited team slots available.
            </p>
          </div>

          <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-white/60 text-[11px] font-bold uppercase tracking-widest px-1">Select Participation</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: 'day1', label: 'Day 1 Only' },
                  { value: 'day2', label: 'Day 2 Only' },
                  { value: 'both', label: 'Both Days' }
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setSelectedDay(opt.value as any)}
                    className={`h-12 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all ${selectedDay === opt.value
                      ? 'bg-primary text-black border-primary'
                      : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10'
                      }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-white/60 text-[11px] font-bold uppercase tracking-widest px-1">Full Name</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors text-xl">person</span>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-xl h-12 sm:h-14 pl-12 pr-4 text-white text-sm sm:text-base placeholder:text-white/10 focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none transition-all"
                  placeholder="e.g. Satoshi Nakamoto"
                />
              </div>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-white/60 text-[11px] font-bold uppercase tracking-widest px-1">Email Address</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors text-xl">mail</span>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl h-12 sm:h-14 pl-12 pr-4 text-white text-sm sm:text-base placeholder:text-white/10 focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none transition-all"
                  placeholder="contact@impact.io"
                />
              </div>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-white/60 text-[11px] font-bold uppercase tracking-widest px-1">Team Name (Optional)</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors text-xl">groups</span>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-xl h-12 sm:h-14 pl-12 pr-4 text-white text-sm sm:text-base placeholder:text-white/10 focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none transition-all"
                  placeholder="Impact Crew"
                />
              </div>
            </div>

            <div className="pt-4 sm:pt-6">
              <button
                type="submit"
                className="w-full bg-primary hover:bg-[#d9ff33] active:scale-[0.98] text-background-dark text-base sm:text-lg font-black h-12 sm:h-14 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group font-display uppercase tracking-wider"
              >
                Register Now
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>

            <p className="text-center text-text-muted text-[10px] sm:text-xs font-medium pt-2">
              By registering, you agree to our
              <a href="#" className="text-white/60 hover:text-primary underline underline-offset-4 ml-1">Terms of Participation</a>.
            </p>
          </form>
        </div>

        {/* Bottom indicator */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 px-2">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map(i => (
              <img key={i} className="size-7 sm:size-8 rounded-full border-2 border-background-dark" src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
            ))}
            <div className="size-7 sm:size-8 rounded-full border-2 border-background-dark bg-white/10 flex items-center justify-center text-[10px] text-white font-bold tracking-tighter">100+</div>
          </div>
          <p className="text-text-muted text-[11px] sm:text-xs font-bold uppercase tracking-widest">Join 100+ innovators locally</p>
        </div>
      </div>

      {/* Stats Section - Desktop only */}
      <div className="hidden md:flex w-full justify-center gap-12 lg:gap-20 px-10 mt-12 mb-6 z-10">
        {[
          { v: '₹50k+', l: 'Prize Pool' },
          { v: '2 Days', l: 'Duration' },
          { v: 'Offline', l: 'Format' },
          { v: 'Local', l: 'Impact' },
        ].map(stat => (
          <div key={stat.l} className="flex flex-col items-center">
            <span className="text-primary text-lg lg:text-xl font-bold font-display uppercase">{stat.v}</span>
            <span className="text-white/20 text-[9px] uppercase tracking-widest font-black">{stat.l}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Register;
