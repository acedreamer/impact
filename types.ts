
export type Page = 'home' | 'tracks' | 'schedule' | 'about' | 'register' | 'day1' | 'day2';

export interface Track {
  id: string;
  title: string;
  description: string;
  icon: string;
  color?: string;
  prize?: string;
}

export interface ScheduleEvent {
  time: string;
  period: 'AM' | 'PM';
  isCurrent?: boolean;
  isPast?: boolean;
  title: string;
  description: string;
  location: string;
  duration: string;
  icon: string;
  tags?: string[];
  speaker?: {
    name: string;
    role: string;
    avatar: string;
  };
  videoPreview?: string;
  isStreaming?: boolean;
  sessions?: {
    title: string;
    track: string;
    description: string;
    room: string;
    color: string;
  }[];
}
