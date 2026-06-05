import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ThreeGear from '../components/ThreeGear';
import gsap from 'gsap';

// Reusable Process Step component with Intersection Observer
function ProcessStep({ step, index }) {
  const [active, setActive] = useState(false);
  const stepRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry && entry.isIntersecting) {
        setActive(true);
      }
    }, { threshold: 0.25 });

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={stepRef} 
      className={`flex gap-6 md:gap-12 items-start transition-all duration-1000 transform ${
        active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Node / Number Column */}
      <div className="flex flex-col items-center">
        <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-display text-xl font-bold transition-all duration-500 ${
          active 
            ? 'bg-brand-cobalt border-brand-cobalt text-brand-white shadow-[0_0_15px_rgba(0,71,255,0.4)] scale-110' 
            : 'bg-brand-dark-gray border-brand-white/10 text-brand-gray'
        }`}>
          0{index + 1}
        </div>
        {/* Connecting line */}
        {index < 6 && (
          <div className={`w-[2px] h-24 md:h-32 transition-colors duration-500 mt-2 ${
            active ? 'bg-brand-cobalt' : 'bg-brand-white/5'
          }`} />
        )}
      </div>

      {/* Description Column */}
      <div className="flex-1 text-left pt-2.5">
        <h3 className={`font-display text-2xl tracking-wider uppercase transition-colors duration-300 ${
          active ? 'text-brand-white' : 'text-brand-gray/60'
        }`}>
          {step.title}
        </h3>
        <p className="text-sm text-brand-gray mt-2 leading-relaxed max-w-lg">
          {step.desc}
        </p>
      </div>
    </div>
  );
}

export default function Process() {
  const [selectedProductType, setSelectedProductType] = useState('Business');
  useEffect(() => {
    // Staggered letters reveal using class selection
    gsap.fromTo('.process-title-char',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: 'power3.out' }
    );
  }, []);

  const steps = [
    { title: 'Discovery Call', desc: 'We align on your product vision, brand goals, layout references, target audience, and identify key functional requirements.' },
    { title: 'Strategy & Scope', desc: 'We draft a precise design blueprint, outline page architectures, identify technological frameworks, and deliver transparent timelines.' },
    { title: 'Design Concepts', desc: 'Our creative directors build bespoke UI layouts, customize color theory tokens, select typography, and model prototype wireframes.' },
    { title: 'Development', desc: 'Our engineers transform approved design frames into hand-coded React files, write Three.js shaders, and integrate GSAP pipelines.' },
    { title: 'Testing & QA', desc: 'We run rigorous tests across multiple viewport sizes and mobile browsers, optimize database queries, and polish loading speeds.' },
    { title: 'Launch & Handoff', desc: 'We deploy the project to production-grade servers, implement technical SEO mapping, and guide you through configuration steps.' },
    { title: 'Ongoing Support', desc: 'We provide monthly monitoring, performance optimization checks, and scaling assistance to make sure your asset is forever pristine.' }
  ];

  const estimates = {
    Landing: { weeks: 1, progress: 'w-[12.5%]', price: 'Starter Project', notes: 'Best for single promos and conversions.' },
    Business: { weeks: 1, progress: 'w-[37.5%]', price: 'Growth Package', notes: 'Complete custom site with CMS integrations.' },
    Ecommerce: { weeks: 1, progress: 'w-[62.5%]', price: 'Elite Package', notes: 'Bespoke shops with payment systems.' },
    SaaS: { weeks: 1, progress: 'w-[100%]', price: 'Custom Quote', notes: 'Complex dashboards and live WebSocket synchronization.' }
  };

  const currentEst = estimates[selectedProductType];

  return (
    <div className="w-full bg-brand-bg pt-32 pb-24 relative overflow-hidden z-10">
      {/* Three.js Gear background representation */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] pointer-events-none opacity-40 z-0 select-none">
        <ThreeGear />
      </div>

      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 relative z-10">
        <span className="text-xs uppercase tracking-widest text-brand-cobalt font-semibold">THE PROCESS</span>
        <h1 className="font-display font-bold text-5xl md:text-8xl tracking-wider leading-none text-brand-white mt-4 flex select-none">
          {'HOW WE WORK'.split('').map((char, index) => (
            <span 
              key={index} 
              className="inline-block process-title-char"
              style={{ marginRight: char === ' ' ? '1rem' : '0' }}
            >
              {char}
            </span>
          ))}
        </h1>
        <div className="h-[2px] bg-brand-cobalt mt-6 w-1/3" />
      </section>

      {/* Scroll Steps Column Container */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 mb-32 relative z-10 flex flex-col gap-2">
        {steps.map((step, i) => (
          <ProcessStep key={i} step={step} index={i} />
        ))}
      </section>

      {/* Timeline Estimates Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 border-t border-brand-white/5 pt-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">ESTIMATOR DASHBOARD</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-white tracking-widest uppercase mt-2">SPECIALITY TIMELINES</h2>
          <p className="text-sm text-brand-gray mt-4">Select your scope of work to inspect estimate delivery cycles and highlights.</p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(estimates).map(type => (
            <button
              key={type}
              onClick={() => setSelectedProductType(type)}
              className={`px-6 py-2.5 text-xs uppercase tracking-widest font-semibold border rounded-sm transition-all duration-300 interactive ${
                selectedProductType === type
                  ? 'bg-brand-cobalt border-brand-cobalt text-brand-white shadow-[0_0_15px_rgba(0,71,255,0.3)]'
                  : 'bg-brand-card border-brand-white/5 text-brand-gray hover:border-brand-gold hover:text-brand-gold'
              }`}
            >
              {type === 'Landing' ? 'Landing Page' : type === 'Business' ? 'Business Website' : type === 'Ecommerce' ? 'E-Commerce' : 'SaaS App'}
            </button>
          ))}
        </div>

        {/* Interactive Progress Bar Card */}
        <div className="max-w-3xl mx-auto bg-brand-card border border-brand-white/5 p-8 md:p-12 rounded-sm text-left">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-brand-cobalt font-semibold">Duration Target</span>
              <h3 className="font-display text-4xl text-brand-white mt-1">
                {currentEst.weeks} {currentEst.weeks === 1 ? 'WEEK' : 'WEEKS'}
              </h3>
            </div>
            <div className="text-right md:text-right">
              <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">Matching tier</span>
              <p className="font-display text-xl text-brand-white mt-1 uppercase">{currentEst.price}</p>
            </div>
          </div>

          {/* Timeline Bar */}
          <div className="w-full h-3 bg-brand-dark-gray border border-brand-white/5 rounded-full overflow-hidden mb-6 relative">
            {/* Week markers */}
            <div className="absolute inset-0 flex justify-between px-2 text-[8px] font-bold text-brand-gray/30 pt-0.5 pointer-events-none">
              <span>WK 1</span>
              <span>WK 1</span>
              <span>WK 1</span>
              <span>WK 1</span>
              <span>WK 1</span>
            </div>
            {/* Glowing progress line */}
            <div className={`h-full bg-brand-cobalt shadow-[0_0_10px_rgba(0,71,255,0.5)] rounded-full transition-all duration-700 ${currentEst.progress}`} />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-brand-white/5 pt-6 gap-4">
            <p className="text-sm text-brand-gray">{currentEst.notes}</p>
            <Link 
              to="/contact" 
              className="px-6 py-2.5 bg-brand-cobalt text-brand-white hover:bg-brand-gold hover:text-brand-bg text-xs uppercase tracking-widest font-semibold transition-all duration-300 interactive self-end md:self-auto"
            >
              Request Timeline Scope
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
