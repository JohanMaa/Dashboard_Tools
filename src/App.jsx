import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tools from './pages/Tools';
import About from './pages/About';
import Contact from './pages/Contact';
import ToolPage from './components/tools/ToolPage';

const App = () => {
  const homeRef = useRef(null);
  const toolsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const toolRef = useRef(null);
  const guideRef = useRef(null);
  const privacyRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const location = useLocation();
  const isToolPage = location.pathname.startsWith('/tools/');

  const refs = isToolPage
    ? { toolRef, guideRef, privacyRef }
    : { homeRef, toolsRef, aboutRef, contactRef };

  return (
    <div className="min-h-screen">
      <Navbar scrollToSection={scrollToSection} refs={refs} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section ref={homeRef} id="home">
                <Home scrollToSection={scrollToSection} refs={{ homeRef, toolsRef, aboutRef, contactRef }} />
              </section>
              <section ref={toolsRef} id="tools">
                <Tools />
              </section>
              <section ref={aboutRef} id="about">
                <About />
              </section>
              <section ref={contactRef} id="contact">
                <Contact />
              </section>
            </>
          }
        />
        <Route
          path="/tools/:toolId"
          element={<ToolPage scrollToSection={scrollToSection} refs={{ toolRef, guideRef, privacyRef }} />}
        />
      </Routes>
      <Footer scrollToSection={scrollToSection} refs={{ homeRef }} />
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;