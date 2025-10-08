import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <SEO
            title="Suraj Kumar gautam | Software Engineer Portfolio"
            description="Portfolio of Suraj Kumar gautam, SDE-2 specializing in Node.js, PostgreSQL, React and scalable backend systems."
            keywords="Suraj Kumar gautam, Software Engineer, Node.js, PostgreSQL, Stripe, RBAC, React, Portfolio"
          />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}
