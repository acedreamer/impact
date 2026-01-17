import React from 'react';
import { Page, Track } from '../types';

interface TracksProps {
  onNavigate: (page: Page, day?: 'day1' | 'day2', regDay?: 'day1' | 'day2' | 'both') => void;
}

const Tracks: React.FC<TracksProps> = ({ onNavigate }) => {
  const tracks: Track[] = [
    {
      id: 'day1',
      title: 'Local Governance & Community',
      description: 'Rebuild local bureaucracy. Focus on traffic, waste management, and public service delivery.',
      icon: 'apartment',
      color: 'var(--color-primary)'
    },
    {
      id: 'day2',
      title: 'AI & Data Innovation',
      description: 'Architect the future. Build autonomous agents and predictive models for complex systems.',
      icon: 'neurology',
      color: '#00f0ff'
    }
  ];

  return (
    <div className="py-12 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto flex flex-col items-center">
      <div className="w-full space-y-12 sm:space-y-20">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between border-b border-white/5 pb-12">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-[clamp(3rem,8vw,6rem)] font-black leading-[0.9] tracking-tighter text-white font-display uppercase">
              Choose Your <br /><span className="text-primary italic">Impact</span>
            </h1>
            <p className="text-lg sm:text-xl font-medium text-text-muted leading-relaxed max-w-2xl">
              Solve real-world problems. Select a track to view specific problem statements.
            </p>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-2">
            <span className="text-xs font-black text-white/30 uppercase tracking-[0.3em] font-mono">Official Selection</span>
            <span className="text-sm font-black text-primary uppercase tracking-widest border border-primary/20 bg-primary/5 px-4 py-1.5 rounded-full">Jan 2026</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tracks.map((track, idx) => (
            <div key={track.id} className={`theme-day-${track.id === 'day1' ? '1' : '2'} group relative flex flex-col justify-between rounded-[2rem] border border-white/5 bg-surface-dark/80 p-6 sm:p-10 transition-transform duration-300 hover:-translate-y-2 hover:border-primary/40 hover:bg-surface-dark hover:shadow-[0_20px_40px_-15px_rgba(204,255,0,0.2)] gpu-accelerate`}>
              <div>
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors duration-300">
                  <span className="material-symbols-outlined text-[36px]">{track.icon}</span>
                </div>
                <h3 className="mb-4 text-2xl sm:text-3xl font-black text-white group-hover:text-primary transition-colors font-display uppercase tracking-tight">{track.title}</h3>
                <p className="text-base sm:text-lg font-medium text-text-muted leading-relaxed">
                  {track.description}
                </p>
              </div>
              <div className="mt-10 flex items-center justify-start border-t border-white/5 pt-6">
                <span className="text-[11px] font-black text-white/20 uppercase tracking-[0.2em] font-mono">Track 0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tracks;

