import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Succes from './sections/Succes.jsx';
import ErrorPage from './sections/ErrorPage.jsx';
import { useRef } from 'react';
import Projects from './sections/Projects.jsx';
import useSound from 'use-sound';
import dangerZone from '/assets/audio/danger-zone.mp3';
import { useMediaQuery } from 'react-responsive';

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const cursor = useRef(null)

  const changePosition = (e) => {
    !isMobile && (
      cursor.current.style.top = `${e.clientY}px`,
      cursor.current.style.left = `${e.clientX}px`
    )
  }

  const [play] = useSound(dangerZone, { volume: 0.15, loop: true });

  play();

  return (
    <BrowserRouter>
      <div className="AppCursor h-full w-full" onMouseMove={changePosition} >
        <div className="cursor-style z-50" ref={cursor} ></div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main className="max-w-7xl mx-auto relative">
              <Hero />
              <About />
              <Projects />
              <Footer />
            </main>
          } />
          <Route path="/succes" element={
            <main className="max-w-7xl mx-auto relative">
              < Succes />
            </main>
          } />
          {/*<Route path='/validation' element={<Discord />} />*/}
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;