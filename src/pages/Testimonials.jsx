import React, { useRef, useState } from 'react';
import { Star, Quote, Play } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';

export default function Testimonials() {
  const carouselRef = useRef(null);
  const dragRef = useRef({ isDown: false, startX: 0, scrollLeft: 0 });
  const [activeVideo, setActiveVideo] = useState(null);

  const handleMouseDown = (e) => {
    const drag = dragRef.current;
    drag.isDown = true;
    drag.startX = e.pageX - carouselRef.current.offsetLeft;
    drag.scrollLeft = carouselRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    dragRef.current.isDown = false;
  };

  const handleMouseUp = () => {
    dragRef.current.isDown = false;
  };

  const handleMouseMove = (e) => {
    const drag = dragRef.current;
    if (!drag.isDown) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - drag.startX) * 1.5;
    carouselRef.current.scrollLeft = drag.scrollLeft - walk;
  };

  const reviews = [
    {
      name: 'Sarah Jenkins',
      role: 'Director of Growth',
      company: 'Apex Analytics',
      rating: 5,
      quote: 'DevinEdge completely redefined our web product. The custom animations and speed performance doubled our conversion rate in the first month. Incredible attention to details.'
    },
    {
      name: 'Oliver Lindqvist',
      role: 'Founder',
      company: 'Aura Living',
      rating: 5,
      quote: 'Working with Xavier and his team was like commissioning a custom gallery piece. They translated our physical furniture textures into an interactive WebGL canvas that wowed our customers.'
    },
    {
      name: 'Jean-Pierre Dubois',
      role: 'Head of Marketing',
      company: 'Chrono AG',
      rating: 5,
      quote: 'The horology site redesign was a massive success. Our pages load instantly and score 100 on mobile performance. DevinEdge is the gold standard of elegant developers.'
    },
    {
      name: 'Emily Zhao',
      role: 'Partner',
      company: 'Nexus VC',
      rating: 5,
      quote: 'Exceptional creative design. They did not just code files, they built a brand identity. The mouse trailing shaders and typographical layouts perfectly represent our elegant VC fund.'
    }
  ];

  const featuredQuotes = [
    {
      quote: 'We wanted a premium digital asset that was as clean as our physical products. DevinEdge delivered a refined landing page that commands attention.',
      author: 'CEO, Nova Aerospace'
    },
    {
      quote: 'Zero template shortcuts, zero bugs. Absolute precision engineering. They have become our permanent development partners for all product launches.',
      author: 'CTO, Pulse Health'
    }
  ];

  const logos = ['Apex Analytics', 'Aura Living', 'Chrono AG', 'Nexus VC', 'Nova Space', 'Pulse Health', 'Vance Capital'];

  const videos = [
    { id: 1, title: 'Interview with Sarah Jenkins', length: '2:15 Min', desc: 'How Apex dashboard solved scaling latency.' },
    { id: 2, title: 'horology design with Chrono AG', length: '1:45 Min', desc: 'Developing fluid physical watches in React.' },
    { id: 3, title: 'VC rebranding with Nexus', length: '3:10 Min', desc: 'Crafting premium typographical brand assets.' }
  ];

  return (
    <div className="w-full bg-brand-cream pt-32 pb-24 relative overflow-hidden z-10">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center flex flex-col items-center">
        <span className="text-xs uppercase tracking-widest text-brand-teal font-semibold">FEEDBACK</span>
        <h1 className="font-display font-bold text-5xl md:text-8xl tracking-wider text-brand-charcoal mt-4 uppercase">
          CLIENTS <span className="text-brand-teal">DON'T LIE.</span>
        </h1>
        <div className="h-[2px] bg-brand-teal mt-6 w-32" />
      </section>

      {/* Draggable Testimonials Carousel */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <p className="text-xs text-brand-slate uppercase tracking-widest text-left mb-6 font-semibold">
          (Click and drag to scroll client cards)
        </p>

        <div 
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex gap-8 overflow-x-hidden pb-12 cursor-grab active:cursor-grabbing select-none w-full"
        >
          {reviews.map((r, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 w-[300px] md:w-[420px] bg-white/90 border border-brand-charcoal/8 p-8 md:p-10 rounded-sm relative flex flex-col justify-between hover:border-brand-teal/40 hover:shadow-lg transition-all duration-300 glass-panel text-left"
            >
              {/* Star Rating */}
              <div className="flex gap-1.5 mb-6 text-brand-coral">
                {[...Array(r.rating)].map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" />
                ))}
              </div>

              <blockquote className="text-base text-brand-charcoal font-medium leading-relaxed italic mb-8">
                "{r.quote}"
              </blockquote>

              <div className="border-t border-brand-charcoal/8 pt-4">
                <h4 className="font-display text-lg tracking-wider text-brand-charcoal uppercase">{r.name}</h4>
                <p className="text-xs text-brand-slate uppercase tracking-widest mt-0.5">{r.role} at <span className="text-brand-teal">{r.company}</span></p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Large Featured Pull Quotes */}
      <section className="bg-brand-sand border-y border-brand-charcoal/8 py-24 mb-32 relative">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
          {featuredQuotes.map((q, i) => (
            <div key={i} className="flex flex-col gap-4 relative">
              <Quote className="text-brand-teal w-12 h-12 opacity-30 absolute top-[-20px] left-[-15px]" />
              <blockquote className="font-syne font-extrabold text-xl md:text-2xl text-brand-charcoal italic leading-relaxed pl-6 relative z-10">
                "{q.quote}"
              </blockquote>
              <span className="text-xs uppercase tracking-widest text-brand-coral font-bold pl-6 mt-2">
                - {q.author}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Logo Wall */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-36">
        <span className="text-xs uppercase tracking-widest text-brand-teal font-semibold block text-center mb-8">TRUSTED BY AMBITIOUS TEAMS IN 7 COUNTRIES</span>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {logos.map((logo, i) => (
            <div 
              key={i} 
              className="py-6 border border-brand-charcoal/8 bg-white rounded-sm text-center font-display tracking-widest uppercase text-sm text-brand-slate/60 hover:text-brand-coral hover:border-brand-coral transition-all duration-300 select-none interactive"
            >
              {logo}
            </div>
          ))}
        </div>
      </section>

      {/* Video Review Placeholders */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-brand-coral font-semibold">VIDEO FEEDBACK</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-charcoal tracking-widest uppercase mt-2">WATCH THEIR STORIES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((v) => (
            <div 
              key={v.id}
              onClick={() => setActiveVideo(v)}
              className="group bg-white border border-brand-charcoal/8 p-6 rounded-sm overflow-hidden flex flex-col justify-between aspect-[1.5] relative hover:border-brand-teal/40 transition-all duration-500 cursor-pointer interactive text-left"
            >
              <div className="absolute inset-0 bg-brand-teal/5 opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
              
              {/* Play Button Icon */}
              <div className="w-12 h-12 rounded-full border border-brand-charcoal/15 flex items-center justify-center bg-brand-sand text-brand-charcoal group-hover:text-brand-teal group-hover:border-brand-teal group-hover:scale-105 transition-all duration-300 z-10 shadow-lg">
                <Play size={18} fill="currentColor" className="ml-0.5" />
              </div>

              <div className="z-10 mt-12">
                <h4 className="font-display text-lg tracking-wider text-brand-charcoal uppercase group-hover:text-brand-teal transition-colors duration-300">{v.title}</h4>
                <p className="text-xs text-brand-slate mt-1 leading-relaxed">{v.desc}</p>
              </div>

              <div className="mt-4 border-t border-brand-charcoal/8 pt-3 flex justify-between items-center text-[10px] text-brand-slate/60 uppercase tracking-widest z-10 font-bold">
                <span>Case study clip</span>
                <span>{v.length}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Modal Popup */}
      {activeVideo && (
        <div className="fixed inset-0 bg-brand-charcoal/80 z-[99999] flex items-center justify-center p-6 backdrop-blur-md">
          <div className="bg-white border border-brand-teal/40 p-10 rounded-sm max-w-lg w-full relative z-10 text-left flex flex-col gap-6 shadow-lg">
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 text-brand-charcoal hover:text-brand-coral font-bold text-lg interactive"
            >
              ✕
            </button>

            <div>
              <span className="text-xs uppercase tracking-widest text-brand-teal font-semibold">Video Playback Simulator</span>
              <h3 className="font-display text-2xl text-brand-charcoal mt-1 uppercase">{activeVideo.title}</h3>
            </div>

            {/* Video Mock Screen */}
            <div className="w-full aspect-video bg-brand-sand border border-brand-charcoal/10 rounded-sm flex flex-col items-center justify-center relative overflow-hidden group">
              {/* Pulsing indicator */}
              <div className="absolute inset-0 bg-brand-teal/5 flex items-center justify-center animate-pulse">
                <div className="w-16 h-16 rounded-full border border-brand-coral flex items-center justify-center text-brand-coral font-bold text-xs">
                  BUFFER
                </div>
              </div>
              <span className="text-[10px] text-brand-slate uppercase tracking-widest z-10 mt-20">Simulation connection online</span>
            </div>

            <p className="text-xs text-brand-slate leading-relaxed">
              * Note: Video playback is represented as an interactive WebGL texture layout inside DevinEdge frameworks. In real client environments, this plays high-definition video formats natively.
            </p>

            <button 
              onClick={() => setActiveVideo(null)}
              className="mt-2 w-full py-3 bg-brand-teal text-white hover:bg-brand-coral hover:text-white text-xs uppercase tracking-widest font-semibold transition-colors duration-300 interactive"
            >
              Close Simulator
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
