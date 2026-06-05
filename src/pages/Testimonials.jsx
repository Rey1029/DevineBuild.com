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
      quote: 'The horology site redesign was a massive success. Our pages load instantly and score 100 on mobile performance. DevinEdge is the gold standard of premium developers.'
    },
    {
      name: 'Emily Zhao',
      role: 'Partner',
      company: 'Nexus VC',
      rating: 5,
      quote: 'Exceptional creative design. They did not just code files, they built a brand identity. The mouse trailing shaders and typographical layouts perfectly represent our premium VC fund.'
    }
  ];

  const featuredQuotes = [
    {
      quote: 'We wanted a luxury digital asset that was as clean as our physical products. DevinEdge delivered a cinematic landing page that commands attention.',
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
    <div className="w-full bg-brand-bg pt-32 pb-24 relative overflow-hidden z-10">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center flex flex-col items-center">
        <span className="text-xs uppercase tracking-widest text-brand-cobalt font-semibold">FEEDBACK</span>
        <h1 className="font-display font-bold text-5xl md:text-8xl tracking-wider text-brand-white mt-4 uppercase">
          CLIENTS <span className="text-brand-cobalt">DON'T LIE.</span>
        </h1>
        <div className="h-[2px] bg-brand-cobalt mt-6 w-32" />
      </section>

      {/* Draggable Testimonials Carousel */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <p className="text-xs text-brand-gray uppercase tracking-widest text-left mb-6 font-semibold">
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
              className="flex-shrink-0 w-[300px] md:w-[420px] bg-brand-card/75 border border-brand-white/5 p-8 md:p-10 rounded-sm relative flex flex-col justify-between hover:border-brand-cobalt/50 hover:shadow-[0_0_25px_rgba(0,71,255,0.15)] transition-all duration-300 glass-panel text-left"
            >
              {/* Star Rating */}
              <div className="flex gap-1.5 mb-6 text-brand-gold">
                {[...Array(r.rating)].map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" />
                ))}
              </div>

              <blockquote className="text-base text-brand-white font-medium leading-relaxed italic mb-8">
                "{r.quote}"
              </blockquote>

              <div className="border-t border-brand-white/5 pt-4">
                <h4 className="font-display text-lg tracking-wider text-brand-white uppercase">{r.name}</h4>
                <p className="text-xs text-brand-gray uppercase tracking-widest mt-0.5">{r.role} at <span className="text-brand-cobalt">{r.company}</span></p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Large Featured Pull Quotes */}
      <section className="bg-brand-dark-gray border-y border-brand-white/5 py-24 mb-32 relative">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
          {featuredQuotes.map((q, i) => (
            <div key={i} className="flex flex-col gap-4 relative">
              <Quote className="text-brand-cobalt w-12 h-12 opacity-30 absolute top-[-20px] left-[-15px]" />
              <blockquote className="font-syne font-extrabold text-xl md:text-2xl text-brand-white italic leading-relaxed pl-6 relative z-10">
                "{q.quote}"
              </blockquote>
              <span className="text-xs uppercase tracking-widest text-brand-gold font-bold pl-6 mt-2">
                - {q.author}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Logo Wall */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-36">
        <span className="text-xs uppercase tracking-widest text-brand-cobalt font-semibold block text-center mb-8">TRUSTED BY AMBITIOUS TEAMS IN 7 COUNTRIES</span>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {logos.map((logo, i) => (
            <div 
              key={i} 
              className="py-6 border border-brand-white/5 bg-brand-card rounded-sm text-center font-display tracking-widest uppercase text-sm text-brand-gray/60 hover:text-brand-gold hover:border-brand-gold transition-all duration-300 select-none interactive"
            >
              {logo}
            </div>
          ))}
        </div>
      </section>

      {/* Video Review Placeholders */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">VIDEO FEEDBACK</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-white tracking-widest uppercase mt-2">WATCH THEIR STORIES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((v) => (
            <div 
              key={v.id}
              onClick={() => setActiveVideo(v)}
              className="group bg-brand-card border border-brand-white/5 p-6 rounded-sm overflow-hidden flex flex-col justify-between aspect-[1.5] relative hover:border-brand-cobalt/50 transition-all duration-500 cursor-pointer interactive text-left"
            >
              <div className="absolute inset-0 bg-brand-cobalt/5 opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
              
              {/* Play Button Icon */}
              <div className="w-12 h-12 rounded-full border border-brand-white/20 flex items-center justify-center bg-brand-dark-gray text-brand-white group-hover:text-brand-cobalt group-hover:border-brand-cobalt group-hover:scale-110 transition-all duration-300 z-10 shadow-lg">
                <Play size={18} fill="currentColor" className="ml-0.5" />
              </div>

              <div className="z-10 mt-12">
                <h4 className="font-display text-lg tracking-wider text-brand-white uppercase group-hover:text-brand-cobalt transition-colors duration-300">{v.title}</h4>
                <p className="text-xs text-brand-gray mt-1 leading-relaxed">{v.desc}</p>
              </div>

              <div className="mt-4 border-t border-brand-white/5 pt-3 flex justify-between items-center text-[10px] text-brand-gray/60 uppercase tracking-widest z-10 font-bold">
                <span>Case study clip</span>
                <span>{v.length}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Modal Popup */}
      {activeVideo && (
        <div className="fixed inset-0 bg-[#080808]/95 z-[99999] flex items-center justify-center p-6 backdrop-blur-md">
          <div className="bg-brand-card border border-brand-cobalt/50 p-10 rounded-sm max-w-lg w-full relative z-10 text-left flex flex-col gap-6 shadow-[0_0_40px_rgba(0,71,255,0.2)]">
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 text-brand-white hover:text-brand-gold font-bold text-lg interactive"
            >
              ✕
            </button>

            <div>
              <span className="text-xs uppercase tracking-widest text-brand-cobalt font-semibold">Video Playback Simulator</span>
              <h3 className="font-display text-2xl text-brand-white mt-1 uppercase">{activeVideo.title}</h3>
            </div>

            {/* Video Mock Screen */}
            <div className="w-full aspect-video bg-brand-dark-gray border border-brand-white/10 rounded-sm flex flex-col items-center justify-center relative overflow-hidden group">
              {/* Pulsing indicator */}
              <div className="absolute inset-0 bg-brand-cobalt/5 flex items-center justify-center animate-pulse">
                <div className="w-16 h-16 rounded-full border border-brand-gold flex items-center justify-center text-brand-gold font-bold text-xs">
                  BUFFER
                </div>
              </div>
              <span className="text-[10px] text-brand-gray uppercase tracking-widest z-10 mt-20">Simulation connection online</span>
            </div>

            <p className="text-xs text-brand-gray leading-relaxed">
              * Note: Video playback is represented as an interactive WebGL texture layout inside DevinEdge frameworks. In real client environments, this plays high-definition video formats natively.
            </p>

            <button 
              onClick={() => setActiveVideo(null)}
              className="mt-2 w-full py-3 bg-brand-cobalt text-brand-white hover:bg-brand-gold hover:text-brand-bg text-xs uppercase tracking-widest font-semibold transition-colors duration-300 interactive"
            >
              Close Simulator
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
