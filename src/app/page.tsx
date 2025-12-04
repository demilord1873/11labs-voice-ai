"use client";

import { useEffect } from 'react';
import Neon from '@/components/Neon'; // Adjust the import path as needed
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen min-w-min bg-gradient-to-br from-black to-gray-900 text-white font-sans overflow-hidden ">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-md shadow-lg shadow-cyan-500/50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-cyan-400 glow-text">Neon Intelligence</div>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-cyan-300 transition-colors glow-hover">Home</a></li>
            <li><a href="#about" className="hover:text-cyan-300 transition-colors glow-hover">About</a></li>
            <li><a href="#services" className="hover:text-cyan-300 transition-colors glow-hover">Services</a></li>
            <li><a href="#test" className="hover:text-cyan-300 transition-colors glow-hover">Test</a></li>
          </ul>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,255,255,0.1)_100%)] pointer-events-none"></div>
        <h1 className="text-6xl font-extrabold mb-4 glow-text animate-pulse">Neon AI Tutor</h1>
        <p className="text-xl max-w-2xl mb-8 text-gray-300">Powered by cutting-edge technology inspired by DemLabs, our educational intelligence improves the capability of students around the world.</p>
        <a href="#test" className="bg-cyan-500 text-black px-6 py-3 rounded-full font-bold hover:bg-cyan-400 transition-all glow-button">Try It Now</a>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center glow-text">About Neon</h2>
          <p className="text-lg mb-6 text-gray-300">At Neon, we are deeply in the realm of artificial intelligence, specializing in voice technologies that fill the gap between humans and computers. Getting inspiration from AI Voice leaders like 11Labs, our mission is to create AI agents that understand, respond, and improve with every interaction.</p>
          <p className="text-lg mb-6 text-gray-300">Founded in 2025, our role has just been in the promotion of education around the world.</p>
          <p className="text-lg mb-6 text-gray-300">Our commitment to innovation moves us to explore futuristic applications, from virtual assistants in smart homes to advanced customer service robots in companies. We believe in beneficial AI development, ensuring privacy and security in all our solutions.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-gray-800 rounded-lg shadow-md glow-card">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-400">To make voice and software the primary connection for technology, making interactions effortless and human-like.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md glow-card">
              <h3 className="text-2xl font-semibold mb-4">Our Impact in the Future</h3>
              <p className="text-gray-400">Pushing beyond the boundaries of AI.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md glow-card">
              <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
              <p className="text-gray-400">Innovation, Integrity, and massive-thinking guide every decision we make.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services and Capabilities Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,transparent_20%,rgba(0,255,255,0.1)_100%)] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center glow-text">Services & Capabilities</h2>
          <p className="text-lg mb-6 text-gray-300 text-center">Discover how our Agent can transform your education with advanced features and robust capabilities.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="p-6 bg-gray-800 rounded-lg shadow-md glow-card">
              <h3 className="text-2xl font-semibold mb-4">Natural Language Processing</h3>
              <p className="text-gray-400 mb-4">Our AI understands ideas, different languages, and contexts of human interaction for accurate outputs.</p>
              <ul className="list-disc list-inside text-gray-400">
                <li>Multi-language support</li>
                <li>Idea Sharing</li>
                <li>Real-time translation</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md glow-card">
              <h3 className="text-2xl font-semibold mb-4">Smartly Trained</h3>
              <p className="text-gray-400 mb-4">Our Intelligence is trained to teach and guide students as technology evolves.</p>
              <ul className="list-disc list-inside text-gray-400">
                <li>Addressing of Human via their voice tone as Sir or Ma</li>
                <li>Understanding Capabilities</li>
                <li>Polite behaviour during sessions.</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md glow-card">
              <h3 className="text-2xl font-semibold mb-4">Integration Services</h3>
              <p className="text-gray-400 mb-4">Effortlessly integrate our AI into your apps and websites. Just by using the Neon SDK.</p>
              <ul className="list-disc list-inside text-gray-400">
                <li>Visit the Neon SDK Website.</li>
                <li>Follow instructions to integrate the agent.</li>
                <li><Link href="https://neon-sdk.vercel.app"><Button>Neon SDK</Button></Link></li>
              </ul>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-md glow-card">
              <h3 className="text-2xl font-semibold mb-4">Advanced Thinking</h3>
              <p className="text-gray-400 mb-4">Thinks like a nerd, Neon is designed to bring a new era of smart AI agents for education.</p>
              <ul className="list-disc list-inside text-gray-400">
                <li>Interacts like a class mate</li>
                <li>Performance tracking</li>
                <li>Data-driven results</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Test Section */}
      <section id="test" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center glow-text">Test Neon Intelligence</h2>
          <p className="text-lg mb-6 text-gray-300 text-center">Experience the future at last. Interact with Neon below and see its capabilities in action.</p>
          <div className="p-8 bg-gray-800 rounded-lg shadow-md glow-card max-w-3xl mx-auto">
            <Neon />

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-black text-center text-gray-500">
        <p>&copy; 2025 Neon Intelligence. All rights reserved.</p>
      </footer>

      {/* Global Styles */}
      <style jsx global>{`
        .glow-text {
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.5), 0 0 20px rgba(0, 255, 255, 0.3);
        }
        .glow-hover:hover {
          text-shadow: 0 0 5px rgba(0, 255, 255, 0.7);
        }
        .glow-button {
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
        }
        .glow-card {
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
          transition: box-shadow 0.3s ease;
        }
        .glow-card:hover {
          box-shadow: 0 0 30px rgba(0, 255, 255, 0.4);
        }
      `}</style>
    </div>
  )
}