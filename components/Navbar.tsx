
import React, { useState, useEffect } from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page, day?: 'day1' | 'day2', regDay?: 'day1' | 'day2' | 'both') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navItems: { label: string; value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Tracks', value: 'tracks' },
    { label: 'Schedule', value: 'schedule' },
    { label: 'FAQ', value: 'about' },
    { label: 'Register', value: 'register' },
  ];

  const handleNavigate = (item: { label: string; value: Page }) => {
    onNavigate(item.value);
    setIsMenuOpen(false);

    if (item.label === 'FAQ') {
      setTimeout(() => {
        const element = document.getElementById('faq-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-[100] w-full border-b border-white/5 bg-background-dark/90 backdrop-blur-sm gpu-accelerate">
        <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <span className="material-symbols-outlined text-3xl text-primary group-hover:rotate-12 transition-transform duration-300">bolt</span>
            <span className="text-xl font-black tracking-tighter text-white font-display uppercase group-hover:text-primary transition-colors">IMPACT HACKATHON</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.filter(i => i.label !== 'Register').map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigate(item)}
                className={`text-[13px] font-black uppercase tracking-widest transition-all hover:text-primary ${currentPage === item.value && item.label !== 'FAQ' ? 'text-primary' : 'text-text-muted'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('register')}
              className="hidden sm:flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-[13px] font-black uppercase tracking-wider text-black transition-all hover:bg-[#d9ff33] hover:shadow-[0_0_20px_rgba(204,255,0,0.3)]"
            >
              Register Now
            </button>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex md:hidden h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-white hover:bg-white/10 active:scale-90 transition-all border border-white/5"
              aria-label="Open menu"
            >
              <span className="material-symbols-outlined text-2xl font-bold">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Side Drawer Component */}
      <div className="md:hidden">
        {/* Backdrop overlay */}
        <div
          className={`fixed inset-0 z-[150] bg-black/80 backdrop-blur-[2px] transition-opacity duration-500 ease-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* The Side Panel */}
        <div
          className={`fixed top-0 right-0 z-[200] h-full w-[85%] max-w-[420px] bg-black shadow-[-20px_0_80px_rgba(0,0,0,0.9)] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {/* Drawer Header - Matching Navbar style */}
          <div className="flex h-16 items-center justify-between px-6 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-2xl font-bold">bolt</span>
              <span className="text-base font-bold tracking-tighter text-white font-display uppercase">IMPACT HACKATHON</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#18181b] text-white hover:bg-white/10 active:scale-90 transition-all border border-white/5"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>

          {/* Real Navigation Content */}
          <nav className="flex flex-col h-[calc(100%-64px)] p-8 overflow-y-auto">
            <div className="flex flex-col gap-2 mt-4">
              <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-4">Navigation</span>
              {navItems.map((item, idx) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigate(item)}
                  className={`group flex items-center justify-between py-4 text-left transition-all ${currentPage === item.value && item.label !== 'FAQ' ? 'text-primary' : 'text-white'
                    }`}
                  style={{
                    transitionDelay: isMenuOpen ? `${idx * 40}ms` : '0ms',
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(30px)'
                  }}
                >
                  <span className="text-4xl xs:text-5xl font-black font-display tracking-tighter uppercase leading-none group-active:translate-x-2 transition-transform">
                    {item.label}
                  </span>
                  <span className={`material-symbols-outlined text-2xl transition-all ${currentPage === item.value && item.label !== 'FAQ' ? 'opacity-100' : 'opacity-0 -translate-x-4'
                    }`}>arrow_forward</span>
                </button>
              ))}
            </div>

            {/* Bottom Section - Branding */}
            <div className="mt-auto pt-10 pb-8">

              <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/5">
                <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] font-mono">Impact • Kottarakkara</span>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-white/10 hover:text-primary transition-colors cursor-pointer text-xl">language</span>
                  <span className="material-symbols-outlined text-white/10 hover:text-primary transition-colors cursor-pointer text-xl">chat</span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
