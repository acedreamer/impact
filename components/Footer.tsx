
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page, day?: 'day1' | 'day2', regDay?: 'day1' | 'day2' | 'both') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full border-t border-white/5 bg-background-dark py-12 px-6">
      <div className="mx-auto max-w-7xl flex flex-col items-center gap-8">
        <div className="flex items-center gap-2 mb-6 group cursor-pointer" onClick={() => onNavigate('home')}>
          <span className="material-symbols-outlined text-2xl text-primary group-hover:rotate-12 transition-transform">bolt</span>
          <span className="text-lg font-black tracking-tighter text-white font-display uppercase group-hover:text-primary transition-colors">IMPACT HACKATHON</span>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <button className="text-text-muted hover:text-white transition-colors text-sm">Code of Conduct</button>
          <button className="text-text-muted hover:text-white transition-colors text-sm">Privacy Policy</button>
          <button className="text-text-muted hover:text-white transition-colors text-sm">Terms of Service</button>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-text-muted hover:text-primary transition-colors">
            <span className="material-symbols-outlined">alternate_email</span>
          </a>
          <a href="#" className="text-text-muted hover:text-primary transition-colors">
            <span className="material-symbols-outlined">language</span>
          </a>
          <a href="#" className="text-text-muted hover:text-primary transition-colors">
            <span className="material-symbols-outlined">rss_feed</span>
          </a>
        </div>

        <p className="text-sm text-text-muted text-center max-w-md">
          © 2026 Impact Hackathon. Powered by <span className="text-primary font-bold">K-DISC</span>. <br />Organized by <span className="text-white font-bold">μLearn CEK</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
