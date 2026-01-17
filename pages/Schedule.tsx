
import React from 'react';
import { ScheduleEvent } from '../types';

interface ScheduleProps {
  initialDay?: 'day1' | 'day2';
}

const Schedule: React.FC<ScheduleProps> = ({ initialDay = 'day1' }) => {
  const [activeDay, setActiveDay] = React.useState<'day1' | 'day2'>(initialDay);

  const day1Events: ScheduleEvent[] = [
    {
      time: '09:00',
      period: 'AM',
      title: 'Registration',
      description: 'Check-in at the venue. Collect ID cards and kits.',
      location: 'Reception Desk',
      duration: '30m',
      icon: 'badge',
    },
    {
      time: '09:30',
      period: 'AM',
      title: 'Inaugural Session',
      description: 'Keynote address by dignitaries and Work Near Home inauguration.',
      location: 'Main Hall',
      duration: '30m',
      icon: 'campaign',
    },
    {
      time: '10:00',
      period: 'AM',
      title: 'Problem Briefing',
      description: 'Detailed explanation of Local Self Government problem statements.',
      location: 'Main Hall',
      duration: '30m',
      icon: 'assignment',
    },
    {
      time: '10:30',
      period: 'AM',
      title: 'Hackathon Sprint - Phase 1',
      description: 'Teams begin ideation and prototyping.',
      location: 'Hacking Area',
      duration: '2h 30m',
      icon: 'code',
      tags: ['Sprint'],
    },
    {
      time: '01:00',
      period: 'PM',
      title: 'Lunch Break',
      description: 'Recharge and network.',
      location: 'Cafeteria',
      duration: '60m',
      icon: 'restaurant',
    },
    {
      time: '02:00',
      period: 'PM',
      title: 'Hackathon Sprint - Phase 2',
      description: 'Finalize prototypes and prepare for presentation.',
      location: 'Hacking Area',
      duration: '2h 30m',
      icon: 'terminal',
      tags: ['Sprint'],
    },
    {
      time: '04:30',
      period: 'PM',
      title: 'Final Presentations',
      description: 'Teams present solutions to the judging panel.',
      location: 'Main Stage',
      duration: '60m',
      icon: 'present_to_all',
    },
    {
      time: '05:30',
      period: 'PM',
      title: 'Evaluation & Closing',
      description: 'Winners announcement and closing remarks.',
      location: 'Main Stage',
      duration: '30m',
      icon: 'emoji_events',
    },
  ];

  const day2Events: ScheduleEvent[] = [
    {
      time: '09:00',
      period: 'AM',
      title: 'Registration',
      description: 'Check-in for Day 2 participants.',
      location: 'Reception Desk',
      duration: '30m',
      icon: 'badge',
    },
    {
      time: '09:30',
      period: 'AM',
      title: 'Inaugural Session',
      description: 'Keynote on AI in Governance and Future Tech.',
      location: 'Main Hall',
      duration: '30m',
      icon: 'psychology',
    },
    {
      time: '10:00',
      period: 'AM',
      title: 'Problem Briefing',
      description: 'Briefing on AI-driven problem statements.',
      location: 'Main Hall',
      duration: '30m',
      icon: 'assignment',
    },
    {
      time: '10:30',
      period: 'AM',
      title: 'Hackathon Sprint - Phase 1',
      description: 'AI Model training and agent development begins.',
      location: 'Labs',
      duration: '2h 30m',
      icon: 'rocket_launch',
      tags: ['Sprint'],
    },
    {
      time: '01:00',
      period: 'PM',
      title: 'Lunch Break',
      description: 'Networking lunch.',
      location: 'Cafeteria',
      duration: '60m',
      icon: 'restaurant',
    },
    {
      time: '02:00',
      period: 'PM',
      title: 'Hackathon Sprint - Phase 2',
      description: 'Integration and testing of AI models.',
      location: 'Labs',
      duration: '2h 30m',
      icon: 'terminal',
      tags: ['Sprint'],
    },
    {
      time: '04:30',
      period: 'PM',
      title: 'Final Presentations',
      description: 'Demo of AI solutions and prototypes.',
      location: 'Main Stage',
      duration: '60m',
      icon: 'present_to_all',
    },
    {
      time: '05:30',
      period: 'PM',
      title: 'Evaluation & Closing',
      description: 'Award ceremony for the AI track.',
      location: 'Main Stage',
      duration: '30m',
      icon: 'emoji_events',
    },
  ];

  const events = activeDay === 'day1' ? day1Events : day2Events;

  return (
    <div className={`transition-colors duration-500 ${activeDay === 'day1' ? 'theme-day-1' : 'theme-day-2'}`}>
      <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold text-primary ring-1 ring-inset ring-primary/20">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                </span>
                {activeDay === 'day1' ? 'Live Now' : 'Upcoming'}
              </span>
              <span className="text-text-muted text-[10px] sm:text-sm font-mono">UTC-5</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight text-white font-display">
              {activeDay === 'day1' ? 'Day 1: Local Governance & Community' : 'Day 2: AI & Data Innovation'}
            </h2>
            <p className="text-text-muted text-base sm:text-lg max-w-lg font-body">
              {activeDay === 'day1'
                ? 'Local governance, public service, and civic solutions.'
                : 'Artificial Intelligence, Neural Networks, and Innovation.'}
            </p>
          </div>

          {/* Day Switcher */}
          <div className="flex bg-surface-dark border border-white/5 rounded-lg p-1 gap-1">
            <button
              onClick={() => setActiveDay('day1')}
              className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${activeDay === 'day1' ? 'bg-primary text-black' : 'text-text-muted hover:text-white'
                }`}
            >
              Day 1
            </button>
            <button
              onClick={() => setActiveDay('day2')}
              className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${activeDay === 'day2' ? 'bg-primary text-black' : 'text-text-muted hover:text-white'
                }`}
            >
              Day 2
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop timeline line */}
          <div className="absolute left-[80px] sm:left-[120px] lg:left-[140px] top-4 bottom-0 w-px bg-white/10 hidden xs:block">
            <div className="absolute top-0 h-[30%] w-full bg-gradient-to-b from-primary via-primary to-transparent shadow-[0_0_8px_rgb(var(--color-primary)/0.5)]"></div>
          </div>

          <div className="space-y-10 sm:space-y-12">
            {events.map((event, idx) => (
              <div key={idx} className={`relative flex flex-col xs:grid xs:grid-cols-[80px_1fr] sm:grid-cols-[120px_1fr] lg:grid-cols-[140px_1fr] gap-4 sm:gap-12 transition-all duration-300 ${event.isPast ? 'opacity-40 grayscale' : 'opacity-100'}`}>
                {/* Time Column */}
                <div className="text-left xs:text-right pt-1 shrink-0 flex items-center xs:block gap-2">
                  <span className={`block text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-none ${event.isCurrent ? 'text-primary drop-shadow-[0_0_8px_rgb(var(--color-primary)/0.4)]' : 'text-white'}`}>
                    {event.time}
                  </span>
                  <span className={`block text-[10px] font-mono font-bold uppercase ${event.isCurrent ? 'text-primary' : 'text-text-muted'}`}>
                    {event.period} {event.isCurrent && '• NOW'}
                  </span>
                </div>

                {/* Connector Dot */}
                <div className={`absolute left-[80px] sm:left-[120px] lg:left-[140px] top-4 w-2.5 h-2.5 -ml-[5.5px] rounded-full hidden xs:block z-10 border-2 ${event.isCurrent ? 'bg-primary border-primary animate-pulse shadow-[0_0_15px_rgb(var(--color-primary)/0.8)]' : 'bg-surface-dark border-text-muted'}`}></div>

                {/* Card Column */}
                <div className={`relative rounded-xl border p-5 sm:p-6 transition-all ${event.isCurrent ? 'bg-surface-dark border-primary shadow-[0_0_20px_rgb(var(--color-primary)/0.1)]' : 'bg-surface-dark border-white/5 hover:border-white/20'}`}>
                  {event.isStreaming && (
                    <div className="absolute -top-2.5 right-4 sm:right-6 bg-primary text-black text-[9px] font-bold px-2 py-0.5 rounded shadow-lg flex items-center gap-1 z-10">
                      <span className="material-symbols-outlined text-[12px]">videocam</span>
                      LIVE
                    </div>
                  )}

                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1 space-y-4">
                      <div className="flex justify-between items-start">
                        <h3 className={`text-lg sm:text-xl font-bold font-display uppercase tracking-tight ${event.isCurrent ? 'text-primary' : 'text-white'}`}>{event.title}</h3>
                        <span className="material-symbols-outlined text-text-muted shrink-0 text-xl">{event.icon}</span>
                      </div>
                      <p className="text-text-muted leading-relaxed text-sm sm:text-base">{event.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {event.tags?.map(tag => (
                          <span key={tag} className="inline-flex items-center rounded bg-white/5 px-2 py-0.5 text-[9px] font-bold uppercase text-white/60 ring-1 ring-inset ring-white/10">{tag}</span>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-white/5">
                        {event.speaker && (
                          <div className="flex items-center gap-2 text-[11px] text-white">
                            <img src={event.speaker.avatar} className="h-5 w-5 rounded-full border border-white/10" alt={event.speaker.name} />
                            <span className="font-bold">{event.speaker.name}</span>
                          </div>
                        )}
                        <div className="text-[11px] text-text-muted flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">location_on</span> {event.location}
                        </div>
                        <div className="text-[11px] text-text-muted flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">schedule</span> {event.duration}
                        </div>
                      </div>

                      {/* Sessions Grid */}
                      {event.sessions && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                          {event.sessions.map((session, sidx) => (
                            <div key={sidx} className="bg-white/[0.03] rounded-lg p-3 border border-white/5 hover:bg-white/[0.06] transition-colors">
                              <div className="flex justify-between items-start mb-2">
                                <span className={`text-[9px] font-black uppercase tracking-widest ${session.color === 'blue' ? 'text-blue-400' : 'text-purple-400'}`}>{session.track}</span>
                                <div className={`h-1.5 w-1.5 rounded-full ${session.color === 'blue' ? 'bg-blue-400' : 'bg-purple-400'}`}></div>
                              </div>
                              <h4 className="font-bold text-white text-xs mb-1 uppercase tracking-tight">{session.title}</h4>
                              <p className="text-text-muted text-[10px] line-clamp-1">{session.description}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {event.videoPreview && (
                      <div className="w-full lg:w-56 shrink-0 aspect-video rounded-lg overflow-hidden relative group cursor-pointer shadow-xl">
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <div className="h-10 w-10 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-black">play_arrow</span>
                          </div>
                        </div>
                        <img src={event.videoPreview} className="h-full w-full object-cover" alt="preview" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
