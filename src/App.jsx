import React from 'react';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <TrustBar />
      <Features />
      <HowItWorks />
      <footer className="border-t border-white/10 bg-slate-950 py-10 text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} IntelliDocs. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#get-started" className="text-cyan-300 hover:text-cyan-200">Start free trial</a>
            <span className="opacity-40">•</span>
            <a href="#demo" className="hover:text-white">Book a demo</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
