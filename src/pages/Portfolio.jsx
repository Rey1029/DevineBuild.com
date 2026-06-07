import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import MagneticButton from '../components/MagneticButton';

const projectsData = [
  {
    id: 'apex',
    title: 'Apex Dashboard',
    client: 'Apex Analytics',
    category: 'SaaS',
    tags: ['React', 'Next.js', 'TailwindCSS'],
    description: 'An enterprise-scale financial analytics dashboard built to visualize complex market trends in real-time. Features fluid charts, fully customized drag grids, and zero-latency loading pipelines.',
    color: 'from-brand-teal/15 to-brand-sand',
    metric: '40% increase in user retention'
  },
  {
    id: 'aura',
    title: 'Aura Premium Shop',
    client: 'Aura Living',
    category: 'E-Commerce',
    tags: ['WebGL', 'Shopify API', 'TailwindCSS'],
    description: 'Bespoke high-fashion e-commerce platform featuring a custom 3D web configurator that lets customers inspect material textures in close-up detail under dynamic studio lights.',
    color: 'from-brand-coral/15 to-brand-sand',
    metric: '18% average order value boost'
  },
  {
    id: 'nova',
    title: 'Nova Launchpad',
    client: 'Nova Aerospace',
    category: 'Landing Pages',
    tags: ['Three.js', 'GSAP', 'Vite'],
    description: 'An interactive cinematic landing page for an orbital satellite enterprise. Features scrolling space vectors and slow-orbiting wireframe particle models of satellites.',
    color: 'from-brand-charcoal/5 to-brand-sand',
    metric: '1.2M page visits on launch week'
  },
  {
    id: 'chrono',
    title: 'Chrono Timepieces',
    client: 'Chrono AG',
    category: 'Redesigns',
    tags: ['Framer Motion', 'React', 'TailwindCSS'],
    description: 'A website overhaul for a Swiss horology house. Translates physical weight and mechanical escapements into digital fluid physics, complete with a virtual watch assembly game.',
    color: 'from-brand-coral/10 to-brand-teal/8',
    metric: '100 Speed index score on mobile'
  },
  {
    id: 'nexus',
    title: 'Nexus Hub',
    client: 'Nexus VC',
    category: 'Branding',
    tags: ['Logo Design', 'Aesthetics', 'HTML'],
    description: 'Complete digital rebrand for a Silicon Valley venture firm. Outlines clean, architectural typographic lines, dark editorial layouts, and subtle ambient mouse trailing shaders.',
    color: 'from-brand-teal/15 to-brand-sand',
    metric: 'Doubled qualified lead conversions'
  },
  {
    id: 'pulse',
    title: 'Pulse WebApp',
    client: 'Pulse Health',
    category: 'SaaS',
    tags: ['TypeScript', 'GraphQL', 'Next.js'],
    description: 'Telemetry dashboard displaying patient diagnostics in high frequency. Features customized real-time soundscapes, accessible color-blind settings, and WebSockets sync.',
    color: 'from-rose-400/10 to-brand-sand',
    metric: '0.04s database refresh index'
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [sliderPos, setSliderPos] = useState(50); // Before/After slider position (%)
  const underlineRef = useRef(null);
  const sliderContainerRef = useRef(null);

  useEffect(() => {
    // Animate header underline drawing
    gsap.fromTo(underlineRef.current,
      { width: '0%' },
      { width: '150px', duration: 1.2, ease: 'power2.out', delay: 0.2 }
    );
  }, []);

  const handleSliderMove = (clientX) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleTouchMove = (e) => {
    handleSliderMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (e.buttons === 1) { // Check if left click is held
      handleSliderMove(e.clientX);
    }
  };

  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory);

  const categories = ['All', 'Branding', 'E-Commerce', 'SaaS', 'Landing Pages', 'Redesigns'];

  return (
    <div className="w-full bg-brand-cream pt-32 pb-24 relative overflow-hidden z-10">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <span className="text-xs uppercase tracking-widest text-brand-teal font-semibold">PORTFOLIO</span>
        <h1 className="font-display font-bold text-5xl md:text-8xl tracking-wider leading-none text-brand-charcoal mt-4 relative">
          OUR WORK
        </h1>
        <div ref={underlineRef} className="h-[3px] bg-brand-teal mt-4 w-0" />
      </section>

      {/* BEFORE/AFTER FEATURED WORK SLIDER */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <span className="text-xs uppercase tracking-widest text-brand-coral font-semibold block mb-4">FEATURED CASE STUDY: BEFORE / AFTER REDESIGN</span>
        
        {/* Interactive Slider Container */}
        <div 
          ref={sliderContainerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseDown={(e) => handleSliderMove(e.clientX)}
          className="relative w-full aspect-[21/9] min-h-[300px] border border-brand-charcoal/10 rounded-sm overflow-hidden select-none cursor-ew-resize"
        >
          {/* BEFORE: Legacy Website Representation */}
          <div className="absolute inset-0 bg-brand-sand flex flex-col justify-center px-12 md:px-24 text-left">
            <span className="text-xs uppercase tracking-widest text-brand-slate font-bold">THE LEGACY VERSION (BEFORE)</span>
            <h2 className="font-sans font-bold text-3xl md:text-5xl text-brand-slate/40 mt-2 line-through">Standard Template Grid</h2>
            <p className="text-sm text-brand-slate/40 mt-4 max-w-md">Generic themes, slow loading, low conversions, uninspired visual hierarchy.</p>
            {/* Visual template boxes mockup in wireframe style */}
            <div className="mt-8 flex gap-4 opacity-10">
              <div className="w-16 h-16 border border-brand-charcoal/20" />
              <div className="w-16 h-16 border border-brand-charcoal/20" />
              <div className="w-16 h-16 border border-brand-charcoal/20" />
            </div>
          </div>

          {/* AFTER: New DevinEdge Website Representation */}
          <div 
            className="absolute inset-0 bg-white flex flex-col justify-center px-12 md:px-24 text-left overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            {/* Lock width container so texts don't compress on slide */}
            <div className="w-[100vw] h-full flex flex-col justify-center text-left">
              <span className="text-xs uppercase tracking-widest text-brand-coral font-bold">THE DEVINEDGE VERSION (AFTER)</span>
              <h2 className="font-display font-bold text-3xl md:text-6xl text-brand-charcoal mt-2 leading-none">
                CHRONO <span className="text-brand-teal">TIMEPIECES</span>
              </h2>
              <p className="text-sm text-brand-slate mt-4 max-w-md">Cinematic WebGL canvas, interactive particle clocks, custom GSAP magnetic buttons.</p>
              
              <div className="mt-8 flex gap-4 relative">
                <div className="w-16 h-16 border border-brand-teal bg-brand-teal/10 flex items-center justify-center text-brand-teal text-xs font-bold font-display">3D</div>
                <div className="w-16 h-16 border border-brand-teal bg-brand-teal/10 flex items-center justify-center text-brand-teal text-xs font-bold font-display">GSAP</div>
                <div className="w-16 h-16 border border-brand-teal bg-brand-teal/10 flex items-center justify-center text-brand-teal text-xs font-bold font-display">UX</div>
              </div>
            </div>
          </div>

          {/* DRAG HANDLE BAR */}
          <div 
            className="absolute top-0 bottom-0 w-[2px] bg-brand-coral z-10 flex items-center justify-center"
            style={{ left: `${sliderPos}%` }}
          >
            {/* Gold Handle Node */}
            <div className="w-10 h-10 rounded-full bg-white border-2 border-brand-coral flex items-center justify-center text-brand-coral font-bold text-xs shadow-lg">
              ↔
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="flex flex-wrap gap-4 border-b border-brand-charcoal/8 pb-6">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-widest font-semibold rounded-sm border transition-all duration-300 interactive ${
                activeCategory === cat
                  ? 'bg-brand-teal border-brand-teal text-white shadow-md'
                  : 'bg-white border-brand-charcoal/8 text-brand-slate hover:border-brand-coral hover:text-brand-coral'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((p) => (
            <div 
              key={p.id}
              onClick={() => setSelectedProject(p)}
              className="group bg-white border border-brand-charcoal/8 p-6 rounded-sm overflow-hidden flex flex-col justify-between aspect-[1.4] relative hover:border-brand-teal/40 hover:shadow-lg transition-all duration-500 cursor-pointer interactive"
            >
              {/* Dynamic luxury card background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

              <div className="flex justify-between items-start z-10 text-left">
                <span className="text-xs uppercase tracking-widest text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full font-semibold">
                  {p.category}
                </span>
                <span className="text-xs text-brand-coral font-semibold uppercase tracking-widest">{p.client}</span>
              </div>

              {/* Title & Tags */}
              <div className="z-10 text-left mt-16">
                <h3 className="font-display text-3xl md:text-4xl font-bold tracking-wider text-brand-charcoal group-hover:text-brand-teal transition-colors duration-300">
                  {p.title}
                </h3>
                <div className="flex gap-2.5 mt-3">
                  {p.tags.map(t => (
                    <span key={t} className="text-[10px] uppercase tracking-widest text-brand-slate border border-brand-charcoal/10 px-2 py-0.5 rounded-sm bg-brand-sand/50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metric & Click Prompt */}
              <div className="mt-8 flex justify-between items-center border-t border-brand-charcoal/8 pt-4 z-10 text-left">
                <span className="text-xs text-brand-slate/80 font-medium italic">{p.metric}</span>
                <span className="text-xs text-brand-teal font-semibold uppercase tracking-widest group-hover:translate-x-1.5 transition-transform duration-300">
                  View Study →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study Details Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 bg-brand-charcoal/80 z-[99999] flex items-center justify-center p-6 backdrop-blur-md">
          {/* Modal Box */}
          <div className="bg-white border border-brand-coral/30 p-8 md:p-12 rounded-sm max-w-2xl w-full relative z-10 flex flex-col gap-6 text-left shadow-2xl animate-[pulse_4s_infinite]">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-brand-charcoal hover:text-brand-coral font-bold text-lg interactive"
            >
              ✕
            </button>

            <div>
              <span className="text-xs uppercase tracking-widest text-brand-teal font-semibold">{selectedProject.category} Case Study</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-brand-charcoal tracking-wider mt-2 uppercase">{selectedProject.title}</h2>
              <span className="text-xs text-brand-coral uppercase tracking-widest font-semibold block mt-1">Client: {selectedProject.client}</span>
            </div>

            <div className="h-[1px] bg-brand-charcoal/10 w-full" />

            <div>
              <h4 className="text-xs uppercase tracking-widest text-brand-charcoal font-bold mb-2">PROJECT OVERVIEW</h4>
              <p className="text-sm text-brand-slate leading-relaxed">{selectedProject.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-6 bg-brand-sand border border-brand-charcoal/8 p-4 rounded-sm">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-brand-teal font-bold mb-1">KEY PERFORMANCE</h4>
                <p className="text-sm text-brand-charcoal font-medium">{selectedProject.metric}</p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-brand-coral font-bold mb-1">TECH STACK</h4>
                <p className="text-xs text-brand-charcoal">{selectedProject.tags.join(', ')}</p>
              </div>
            </div>

            <div className="mt-4 flex gap-4 justify-end">
              <button 
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 border border-brand-charcoal/10 text-brand-charcoal hover:border-brand-coral hover:text-brand-coral text-xs uppercase tracking-widest font-semibold transition-colors duration-300 interactive"
              >
                Close
              </button>
              <Link 
                to="/contact" 
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 bg-brand-teal text-white hover:bg-brand-coral hover:text-white text-xs uppercase tracking-widest font-semibold transition-all duration-300 interactive"
              >
                Inquire Project
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="border-t border-brand-charcoal/8 pt-24 pb-12 bg-brand-sand">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-bold text-3xl md:text-6xl text-brand-charcoal tracking-widest uppercase">
            HAVE A PROJECT IN MIND?
          </h2>
          <p className="text-brand-slate text-base max-w-lg mb-4">
            Let's collaborate to build an extraordinary premium digital experience that accelerates your brand visibility.
          </p>
          <MagneticButton>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-brand-teal text-white text-sm uppercase tracking-widest font-bold hover:bg-brand-coral hover:text-white hover:shadow-lg transition-all duration-300 block"
            >
              Start a Project
            </Link>
          </MagneticButton>
        </div>
      </section>
    </div>
  );
}
