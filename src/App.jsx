import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Technology from './components/Technology';
import TelluRover from './components/TelluRover';
import AIPlatform from './components/AIPlatform';
import InteractiveMap from './components/InteractiveMap';
import CTA from './components/CTA';
import DemoModal from './components/DemoModal';
import Admin from './components/Admin';

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [view, setView] = React.useState('landing'); // 'landing' or 'admin'

  useEffect(() => {
    // Only run intersection observer if on landing page
    if (view === 'landing') {
      const observerOptions = {
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
          }
        });
      }, observerOptions);

      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }
  }, [view]);

  return (
    <div className="App">
      {view === 'landing' ? (
        <>
          <Navbar onAdminClick={() => setView('admin')} />
          <main>
            <Hero />
            <Technology />
            <TelluRover />
            <AIPlatform />
            <InteractiveMap />
            <CTA onDemoClick={() => setIsModalOpen(true)} />
          </main>
          <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          <footer>
            <div className="section-container">
              <p>&copy; 2026 TELLUSEO. Conçu pour l'avenir de l'industrie minière.</p>
            </div>
          </footer>
        </>
      ) : (
        <Admin onBack={() => setView('landing')} />
      )}
    </div>
  );
}

export default App;
