
import React, { useEffect } from 'react';
import { Page } from '../types';

interface AboutProps {
  onNavigate: (page: Page, day?: 'day1' | 'day2', regDay?: 'day1' | 'day2' | 'both') => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const faqs = [
    {
      q: 'Who can participate?',
      a: 'We welcome developers, designers, product managers, and visionaries of all skill levels. Whether you are a student, a professional, or a hobbyist, you are welcome to join. Teams can range from 1 to 5 members.'
    },
    {
      q: 'Is there a registration fee?',
      a: 'No, Impact Hackathon is completely free for all admitted participants. We believe in open access to innovation. We will provide meals and swag throughout the event.'
    },
    {
      q: 'Will hardware be provided?',
      a: 'While we encourage software-based solutions, we have partnered with select sponsors to provide limited hardware kits available on a first-come, first-served basis.'
    },
    {
      q: 'What are the judging criteria?',
      a: 'Projects are judged on four main criteria: Impact (solving real-world problems), Technical Complexity, Design & UX, and Presentation/Pitch.'
    },
    {
      q: 'Do I own my IP?',
      a: 'Yes, absolutely. You and your team own all rights to the intellectual property created during the hackathon. Impact Hackathon and its sponsors claim no ownership.'
    },
    {
      q: 'Can I participate remotely?',
      a: 'This year our event is offline at Commune - Work Near Home, Kottarakkara. We also have a dedicated remote track.'
    }
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col lg:flex-row bg-background-dark">
      {/* Side Summary - High Impact Left Column */}
      <section className="lg:w-[45%] w-full flex flex-col p-6 sm:p-12 lg:p-20 lg:sticky lg:top-20 lg:h-[calc(100vh-80px)] border-b lg:border-b-0 lg:border-r border-white/10 z-10 bg-background-dark">
        <div className="flex flex-col justify-center h-full gap-8 max-w-lg mx-auto lg:mx-0">
          <div className="space-y-6">
            <div className="w-12 h-1 bg-primary mb-6"></div>
            <h1 className="text-4xl sm:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tighter uppercase text-white font-display">
              ABOUT<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">IMPACT</span>
            </h1>
            <p className="text-text-muted text-lg sm:text-xl font-medium leading-relaxed mt-6">
              A 2-day regional innovation sprint to solve Kottarakkara's most pressing challenges. We unite developers, designers, and visionaries to code for a better future.
            </p>
          </div>

          <div className="flex flex-col xs:flex-row gap-4 pt-4">
            <button
              onClick={() => onNavigate('register')}
              className="bg-primary hover:bg-[#d9ff33] text-background-dark font-black text-base h-14 px-8 rounded-xl flex items-center justify-center gap-2 transition-all group shadow-lg shadow-primary/10"
            >
              Register Now
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>

          <div className="mt-12 lg:mt-auto pt-10 flex flex-wrap gap-6 sm:gap-16 border-t border-white/5">
            <div>
              <p className="text-2xl sm:text-3xl font-black text-white font-display uppercase tracking-tight">2 Days</p>
              <p className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-widest mt-1 font-black">Hacking</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-white font-display uppercase tracking-tight">₹20K+</p>
              <p className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-widest mt-1 font-black">Prizes</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-white font-display uppercase tracking-tight">100+</p>
              <p className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-widest mt-1 font-black">Hackers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Right Column - Scrollable Content with FAQ Anchor */}
      <section id="faq-section" className="lg:w-[55%] w-full p-6 sm:p-12 lg:p-24 bg-surface-dark/10">
        <div className="max-w-2xl mx-auto flex flex-col gap-12 sm:gap-20">

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="h-px flex-1 bg-white/10"></span>
              <span className="text-[11px] font-black text-primary uppercase tracking-[0.3em]">The Mission</span>
            </div>
            <div className="space-y-6 text-text-muted text-lg leading-relaxed font-medium">
              <p>Impact Hackathon is not just another coding competition. It's a high-stakes environment where the brightest minds tackle complex problems with direct human impact.</p>
              <p>Over the course of 2 days, you'll have access to mentors from the Kerala Startup Mission and technical leaders, as well as resources to bring your vision to life for the Kottarakkara municipality.</p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="flex items-center gap-4">
              <span className="h-px flex-1 bg-white/10"></span>
              <span className="text-[11px] font-black text-primary uppercase tracking-[0.3em]">Frequently Asked Questions</span>
            </div>

            <div className="flex flex-col divide-y divide-white/10">
              {faqs.map((item, i) => (
                <details key={i} className="group" open={i === 0}>
                  <summary className="flex cursor-pointer items-center justify-between py-8 transition-all hover:bg-white/5 px-4 -mx-4 rounded-xl list-none">
                    <h3 className="text-xl sm:text-2xl font-black text-white group-open:text-primary transition-colors font-display uppercase tracking-tight">{item.q}</h3>
                    <div className="flex items-center justify-center shrink-0 size-9 rounded-xl border border-white/20 group-open:border-primary group-open:bg-primary/10 transition-all ml-4">
                      <span className="material-symbols-outlined text-white group-open:text-primary group-open:rotate-180 transition-transform duration-500">expand_more</span>
                    </div>
                  </summary>
                  <div className="pb-8 px-2 text-text-muted text-base sm:text-lg leading-relaxed font-medium">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Contact Box */}
          <div className="mt-8 p-8 sm:p-10 rounded-[2.5rem] bg-surface-dark border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-[0_30px_60px_-10px_rgba(0,0,0,0.5)]">
            <div className="space-y-2">
              <h4 className="text-white text-2xl font-black font-display uppercase tracking-tight leading-none">Still have questions?</h4>
              <p className="text-text-muted text-sm font-medium">Email our support team.</p>
            </div>
            <div className="flex flex-wrap gap-4 w-full md:w-auto">
              <a href="mailto:support@impacthack.com" className="flex-1 md:flex-none flex items-center justify-center gap-2 text-sm font-black uppercase tracking-widest text-white hover:text-primary transition-colors px-6 h-12 rounded-xl border border-white/10 hover:bg-white/5">
                <span className="material-symbols-outlined text-xl">mail</span>
                Email Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
