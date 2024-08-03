import { useEffect } from 'react';

import ButtonGradient from './assets/svg/ButtonGradient';
import Benefits from './components/Benefits';
import Technologies from './components/Technologies';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Roadmap from './components/Roadmap';
import Services from './components/Services';
import Aos from 'aos';
import 'aos/dist/aos.css';
import StarsCanvas from './components/canvas/Stars';

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: false });

    const handleScroll = () => {
      Aos.refresh();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <div className="relative z-0">
          <Hero />
          <StarsCanvas />
        </div>
        <Benefits />
        <Technologies />
        <Services />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
