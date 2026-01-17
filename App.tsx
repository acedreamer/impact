
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tracks from './pages/Tracks';
import Schedule from './pages/Schedule';
import About from './pages/About';
import Register from './pages/Register';
import Day1 from './pages/Day1';
import Day2 from './pages/Day2';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [scheduleDay, setScheduleDay] = useState<'day1' | 'day2'>('day1');
  const [registerSelection, setRegisterSelection] = useState<'day1' | 'day2' | 'both'>('both');

  const handleNavigate = (page: Page, day?: 'day1' | 'day2', regDay?: 'day1' | 'day2' | 'both') => {
    if (day) setScheduleDay(day);
    if (regDay) setRegisterSelection(regDay);
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={handleNavigate} />;
      case 'tracks': return <Tracks onNavigate={handleNavigate} />;
      case 'schedule': return <Schedule initialDay={scheduleDay} />;
      case 'about': return <About onNavigate={handleNavigate} />;
      case 'register': return <Register initialSelection={registerSelection} />;
      case 'day1': return <Day1 onNavigate={handleNavigate} />;
      case 'day2': return <Day2 onNavigate={handleNavigate} />;
      default: return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background-dark text-white font-body selection:bg-primary selection:text-black">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="min-h-[calc(100vh-80px)]">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;
