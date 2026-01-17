
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tracks from './pages/Tracks';
import Schedule from './pages/Schedule';
import About from './pages/About';
import Register from './pages/Register';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={setCurrentPage} />;
      case 'tracks': return <Tracks />;
      case 'schedule': return <Schedule />;
      case 'about': return <About onNavigate={setCurrentPage} />;
      case 'register': return <Register />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background-dark text-white font-body selection:bg-primary selection:text-black">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="min-h-[calc(100vh-80px)]">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;
