import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Question from './components/Question';
import Celebration from './components/Celebration';
import FloatingSlideshow from './components/FloatingSlideshow';
import LoveLetter from './components/LoveLetter';
import SaveTheDate from './components/SaveTheDate';
import BackgroundShapes from './components/BackgroundShapes';
import ParticleEffect from './components/ParticleEffect';

function App() {
  const [answered, setAnswered] = useState(false);

  // Auto-scroll to top when user says YES
  useEffect(() => {
    if (answered) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [answered]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-warm-gray to-pink-50 relative overflow-hidden">
      {/* Background elements */}
      <BackgroundShapes />
      <ParticleEffect />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {!answered ? (
          <>
            <Hero />
            <Question onYes={() => setAnswered(true)} />
          </>
        ) : (
          <>
            <Celebration />
            <FloatingSlideshow />
            <LoveLetter />
            <SaveTheDate />
          </>
        )}
      </motion.div>
    </div>
  );
}

export default App;

