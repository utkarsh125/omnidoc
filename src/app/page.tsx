'use client'

import Navbar from './components/Navbar'; 
import Hero from './components/Hero'; 
import Footer from './components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
