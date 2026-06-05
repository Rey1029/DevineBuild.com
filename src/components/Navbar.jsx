import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MagneticButton from './MagneticButton';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Process', path: '/process' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-brand-bg/85 backdrop-blur-xl border-b border-brand-white/5 py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 interactive group z-50">
            {/* Geometric Cobalt Mark */}
            <div className="relative w-8 h-8 flex items-center justify-center border border-brand-cobalt group-hover:border-brand-gold transition-colors duration-300">
              <div className="absolute w-4 h-4 bg-brand-cobalt opacity-70 group-hover:bg-brand-gold transition-colors duration-300" />
              <div className="absolute w-2 h-2 bg-brand-bg" />
            </div>
            <span className="font-display font-bold text-2xl tracking-wider text-brand-white">
              DEVIN<span className="text-brand-cobalt group-hover:text-brand-gold transition-colors duration-300">EDGE</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center lg:gap-4 xl:gap-6 2xl:gap-8 mx-6 lg:mx-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`text-sm tracking-widest uppercase font-medium transition-all duration-300 relative group/link py-1 ${
                  location.pathname === link.path 
                    ? 'text-brand-cobalt font-semibold' 
                    : 'text-brand-white/60 hover:text-brand-gold'
                }`}
              >
                {link.name}
                {/* Smooth draw-in line on hover */}
                <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-brand-cobalt scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left ${
                  location.pathname === link.path ? 'scale-x-100' : ''
                }`} />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <MagneticButton>
              <Link 
                to="/contact" 
                className="px-6 py-2.5 bg-brand-cobalt text-brand-white text-xs uppercase tracking-widest font-semibold hover:bg-brand-gold hover:text-brand-bg hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-all duration-300 block"
              >
                Start a Project
              </Link>
            </MagneticButton>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <button 
            className="block lg:hidden text-brand-white p-2 interactive z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-[#080808] z-40 flex flex-col justify-center items-center px-10 transition-all duration-500 ease-in-out ${
          mobileMenuOpen 
            ? 'opacity-100 pointer-events-auto visible' 
            : 'opacity-0 pointer-events-none invisible'
        }`}
      >
        {/* Cobalt blue subtle ambient glow inside mobile menu */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-cobalt/10 rounded-full blur-[100px] pointer-events-none" />

        <nav className="flex flex-col gap-6 text-center z-10 w-full max-w-sm">
          {navLinks.map((link, index) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`font-display text-4xl uppercase tracking-widest transition-all duration-300 ${
                location.pathname === link.path 
                  ? 'text-brand-cobalt translate-x-2' 
                  : 'text-brand-white hover:text-brand-gold'
              }`}
              style={{ 
                transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms',
                transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: mobileMenuOpen ? 1 : 0
              }}
            >
              {link.name}
            </Link>
          ))}
          
          <div 
            className="mt-8"
            style={{ 
              transitionDelay: mobileMenuOpen ? `${navLinks.length * 50}ms` : '0ms',
              transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: mobileMenuOpen ? 1 : 0
            }}
          >
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-brand-cobalt text-brand-white text-sm uppercase tracking-widest font-semibold block text-center hover:bg-brand-gold hover:text-brand-bg transition-all duration-300"
            >
              Start a Project
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
