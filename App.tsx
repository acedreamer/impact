
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
  // Helper to get page from hash
  const getPageFromHash = (): Page => {
    const hash = window.location.hash.replace('#/', '');
    const validPages: Page[] = ['home', 'tracks', 'schedule', 'about', 'register', 'day1', 'day2'];
    return validPages.includes(hash as Page) ? (hash as Page) : 'home';
  };

  const [currentPage, setCurrentPage] = useState<Page>(getPageFromHash);
  const [scheduleDay, setScheduleDay] = useState<'day1' | 'day2'>('day1');
  const [registerSelection, setRegisterSelection] = useState<'day1' | 'day2' | 'both'>('both');

  // Handle browser back/forward buttons
  React.useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromHash());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: Page, day?: 'day1' | 'day2', regDay?: 'day1' | 'day2' | 'both') => {
    if (day) setScheduleDay(day);
    if (regDay) setRegisterSelection(regDay);

    // Only push if different from current hash to avoid duplicate entries
    if (window.location.hash !== `#/${page}`) {
      window.history.pushState({}, '', `#/${page}`);
    }

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
      <Footer onNavigate={(page) => handleNavigate(page)} />
    </div>
  );
};

export default App;
