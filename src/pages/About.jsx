import React, { useEffect, useRef } from 'react';
import ThreeDna from '../components/ThreeDna';
import { Target, Zap, Flame, Users } from 'lucide-react';
import gsap from 'gsap';

export default function About() {
  const lineRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    // Underline animation on mount
    gsap.fromTo(lineRef.current, 
      { width: '0%' },
      { width: '100%', duration: 1.5, ease: 'power3.inOut', delay: 0.2 }
    );
  }, []);

  // Draggable timeline events
  const dragRef = useRef({ isDown: false, startX: 0, scrollLeft: 0 });

  const handleMouseDown = (e) => {
    const drag = dragRef.current;
    drag.isDown = true;
    drag.startX = e.pageX - timelineRef.current.offsetLeft;
    drag.scrollLeft = timelineRef.current.scrollLeft;
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
    const x = e.pageX - timelineRef.current.offsetLeft;
    const walk = (x - drag.startX) * 1.5; // Drag speed multiplier
    timelineRef.current.scrollLeft = drag.scrollLeft - walk;
  };

  const values = [
    { icon: <Target className="text-brand-teal w-8 h-8" />, title: 'Precision', desc: 'Every line of code and layout margin is refined down to the individual pixel.' },
    { icon: <Zap className="text-brand-teal w-8 h-8" />, title: 'Speed', desc: 'Ultra-fast, highly optimized pages that score 100 on Lighthouse tests.' },
    { icon: <Flame className="text-brand-teal w-8 h-8" />, title: 'Boldness', desc: 'We design experiences that challenge convention and command attention.' },
    { icon: <Users className="text-brand-teal w-8 h-8" />, title: 'Partnership', desc: 'We work closely as a technical extension of your brand to drive success.' }
  ];

  const milestones = [
    { year: '2023', title: 'The Genesis', desc: 'DevinEdge founded by a group of creatives and developers aiming to disrupt traditional web standards.' },
    { year: '2024', title: 'Going Global', desc: 'Delivered 50+ projects and expanded operations to serve brands in 4 different continents.' },
    { year: '2025', title: 'Interactive Era', desc: 'Adopted WebGL, Three.js, and immersive 3D technology as standard for all high-end creations.' },
    { year: '2026', title: 'The Future', desc: 'Pioneering next-generation innovative web applications and premium custom digital products.' }
  ];

  const team = [
    { name: 'Xavier Devine', role: 'Founder & Principal Architect', fact: 'Can code in 4 languages while drinking cold espresso.' },
    { name: 'Elena Rostova', role: 'Lead Creative Director', fact: 'Collects modular synthesizers and designs in 3D.' },
    { name: 'Marcus Chen', role: 'Senior WebGL Specialist', fact: 'Spends weekends building custom keyboards.' },
    { name: 'Aria Vance', role: 'Full-Stack Developer', fact: 'Climbs mountains and builds secure API structures.' }
  ];

  return (
    <div className="w-full bg-brand-cream pt-32 pb-24 relative overflow-hidden z-10">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <span className="text-xs uppercase tracking-widest text-brand-teal font-semibold">OUR AGENCY IDENTITY</span>
        <h1 className="font-display font-bold text-5xl md:text-8xl tracking-wider leading-none text-brand-charcoal mt-4 max-w-4xl">
          WE ARE <span className="text-stroke">/</span> DEVINEDGE
        </h1>
        {/* Draw Line under header */}
        <div ref={lineRef} className="h-[2px] bg-brand-teal mt-6 w-0" />
      </section>

      {/* Story section with Three.js Helix */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
        <div className="lg:col-span-6 flex flex-col gap-6 text-left">
          <blockquote className="font-syne font-extrabold text-2xl md:text-4xl text-brand-charcoal italic leading-tight border-l-4 border-brand-teal pl-6">
            "We don't just build websites. We build your first impression. We construct thoughtful digital experiences."
          </blockquote>
          <p className="text-brand-slate text-base leading-relaxed mt-4">
            Founded with a vision to merge structural software engineering with art, DevinEdge craft-engineers digital experiences for businesses who refuse to settle for templates.
          </p>
          <p className="text-brand-slate text-base leading-relaxed">
            Our team consists of specialists in WebGL, React architectures, UI animations, and branding strategy. We treat every layout as a custom gallery piece.
          </p>
        </div>

        {/* 3D DNA helical animation */}
        <div className="lg:col-span-6 h-[350px] md:h-[450px] w-full flex items-center justify-center relative">
          <div className="absolute inset-0 bg-brand-teal/5 rounded-full blur-[80px] pointer-events-none" />
          <ThreeDna />
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-36">
        <span className="text-xs uppercase tracking-widest text-brand-teal font-semibold block text-center mb-4">GUIDING PILLARS</span>
        <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-charcoal tracking-widest uppercase text-center mb-16">OUR CORE VALUES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div 
              key={i} 
              className="group relative p-8 bg-white border border-brand-charcoal/8 rounded-sm hover:border-brand-teal hover:shadow-md transition-all duration-300 flex flex-col gap-4 interactive"
            >
              <div className="mb-2">{v.icon}</div>
              <h3 className="font-display text-xl tracking-wider text-brand-charcoal group-hover:text-brand-teal transition-colors duration-300">{v.title}</h3>
              <p className="text-sm text-brand-slate leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-36">
        <div className="bg-white border border-brand-charcoal/8 p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-coral/5 rounded-full blur-3xl pointer-events-none" />
          
          {/* Founder image placeholder */}
          <div className="w-full lg:w-1/3 aspect-square bg-gradient-to-br from-brand-teal/10 to-brand-sand border border-brand-charcoal/10 flex items-center justify-center relative overflow-hidden rounded-sm">
            <span className="font-display text-4xl text-brand-charcoal/8 font-bold select-none">FOUNDER</span>
            <div className="absolute bottom-4 left-4 h-[2px] bg-brand-coral w-1/2" />
          </div>

          <div className="w-full lg:w-2/3 flex flex-col gap-4 text-left">
            <span className="text-xs uppercase tracking-widest text-brand-coral font-semibold">LEADERSHIP SPOTLIGHT</span>
            <h3 className="font-display font-bold text-3xl md:text-5xl text-brand-charcoal tracking-wide">XAVIER DEVINE</h3>
            <span className="text-xs text-brand-teal uppercase tracking-widest font-semibold mt-1">Founder & CEO</span>
            
            {/* Gold Line */}
            <div className="h-[1px] bg-brand-coral/30 my-2" />

            <p className="text-brand-slate text-base leading-relaxed">
              "We believe the internet should be beautiful. The modern web has become cluttered with generic layouts and uninspired grids. Our mission is to restore visual expression and physical tactile responsiveness to software, crafting websites that operate like luxury timepieces."
            </p>
            <p className="text-brand-slate text-xs mt-2 italic">
              - Prior experience: Design Architect at high-end European agencies and consultant for luxury tech firms.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid with 3D Flip */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-36">
        <span className="text-xs uppercase tracking-widest text-brand-teal font-semibold block text-center mb-4">THE CRAFTSMEN</span>
        <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-charcoal tracking-widest uppercase text-center mb-16">MEET THE TEAM</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div 
              key={i} 
              className="relative aspect-[3/4] group select-none [perspective:1000px] interactive"
            >
              {/* Card Container */}
              <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full bg-white border border-brand-charcoal/8 p-6 flex flex-col justify-between [backface-visibility:hidden]">
                  {/* Photo Placeholder */}
                  <div className="w-full aspect-square bg-brand-sand border border-brand-charcoal/8 flex items-center justify-center text-brand-charcoal/8 rounded-sm">
                    {/* Abstract initial logo */}
                    <span className="font-display text-4xl text-brand-teal/25 font-bold">{member.name.split(' ').map(n=>n[0]).join('')}</span>
                  </div>
                  <div>
                    <h4 className="font-display text-lg tracking-wider text-brand-charcoal mt-4">{member.name}</h4>
                    <p className="text-xs text-brand-slate uppercase tracking-widest mt-1">{member.role}</p>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full bg-brand-sand border border-brand-coral/30 p-6 flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex flex-col gap-4 text-left">
                    <span className="text-xs text-brand-coral uppercase tracking-widest font-semibold">ABOUT ME</span>
                    <p className="text-sm text-brand-charcoal font-medium">{member.role}</p>
                    <p className="text-sm text-brand-slate leading-relaxed mt-2">"{member.fact}"</p>
                  </div>
                  <div className="text-xs text-brand-teal font-display tracking-widest uppercase text-right">
                    DEVINEDGE
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Draggable Milestone Timeline */}
      <section className="border-t border-brand-charcoal/8 pt-24 bg-brand-sand">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest text-brand-teal font-semibold">OUR JOURNEY</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-charcoal tracking-widest uppercase mt-2">MILESTONES</h2>
            <p className="text-xs text-brand-slate uppercase tracking-widest mt-2">(Click and drag horizontally to explore)</p>
          </div>

          <div 
            ref={timelineRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex gap-8 overflow-x-hidden pb-12 cursor-grab active:cursor-grabbing select-none w-full"
          >
            {milestones.map((m, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 w-[280px] md:w-[350px] bg-white border border-brand-charcoal/8 p-8 relative rounded-sm flex flex-col gap-4 hover:border-brand-teal transition-colors duration-300"
              >
                {/* Year Badge */}
                <span className="font-display text-5xl md:text-7xl font-bold text-brand-teal opacity-40">{m.year}</span>
                <div className="h-[2px] bg-brand-coral w-1/3" />
                <h4 className="font-display text-xl tracking-wider text-brand-charcoal uppercase">{m.title}</h4>
                <p className="text-sm text-brand-slate leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
