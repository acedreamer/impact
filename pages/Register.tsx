
import React from 'react';

const Register: React.FC = () => {
  return (
    <div className="relative min-h-[calc(100vh-80px)] w-full flex items-center justify-center p-4 sm:p-6 overflow-hidden bg-background-dark">
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
              Secure your spot in the 2024 global innovation sprint. Limited team slots available.
            </p>
          </div>

          <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
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
            <div className="size-7 sm:size-8 rounded-full border-2 border-background-dark bg-white/10 flex items-center justify-center text-[10px] text-white font-bold tracking-tighter">2k+</div>
          </div>
          <p className="text-text-muted text-[11px] sm:text-xs font-bold uppercase tracking-widest">Join 2,400+ innovators worldwide</p>
        </div>
      </div>

      {/* Stats Overlay - Desktop only */}
      <div className="absolute bottom-6 w-full hidden md:flex justify-center gap-12 lg:gap-20 px-10">
        {[
          { v: '$50k+', l: 'Prize Pool' },
          { v: '48H', l: 'Duration' },
          { v: 'Hybrid', l: 'Format' },
          { v: 'Global', l: 'Impact' },
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
