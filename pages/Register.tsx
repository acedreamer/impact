
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-primary/5 rounded-full blur-[50px] pointer-events-none"></div>

      <div className="w-full max-w-[500px] z-10">
        <div className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="text-center mb-8 sm:mb-10">
            <h1 className="text-white text-3xl sm:text-4xl font-bold tracking-tight mb-2 sm:mb-3 font-display uppercase">Join the Challenge</h1>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed">
              Secure your spot in the Impact Hackathon. Limited team slots available.
            </p>
          </div>

          <div className="space-y-6">
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

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-3 py-4">
              {[
                { icon: 'trophy', text: '₹20K+ Prizes' },
                { icon: 'groups', text: 'Team Size: 1-4' },
                { icon: 'calendar_month', text: 'Jan 24 & 25' },
                { icon: 'location_on', text: 'Kottarakkara' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-white/60">
                  <span className="material-symbols-outlined text-primary text-lg">{item.icon}</span>
                  <span className="text-xs font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={
                  selectedDay === 'day1'
                    ? 'https://docs.google.com/forms/d/e/1FAIpQLScGdY5YQaMvaKlbku8yvmE1byIe6AQziy34JdSb4JJOiEU92w/viewform?usp=pp_url&entry.1234567890=Theme+1'
                    : 'https://docs.google.com/forms/d/e/1FAIpQLScGdY5YQaMvaKlbku8yvmE1byIe6AQziy34JdSb4JJOiEU92w/viewform?usp=pp_url&entry.1234567890=Theme+2'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary hover:bg-[#d9ff33] active:scale-[0.98] text-background-dark text-base sm:text-lg font-black h-12 sm:h-14 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group font-display uppercase tracking-wider"
              >
                Register Now
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>

            <p className="text-center text-text-muted text-[10px] sm:text-xs font-medium">
              You'll be redirected to our secure Google Form to complete registration.
            </p>
          </div>
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
          { v: '₹20k+', l: 'Prize Pool' },
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
