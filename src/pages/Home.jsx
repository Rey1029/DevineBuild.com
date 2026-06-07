import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ThreeGlobe from '../components/ThreeGlobe';
import MagneticButton from '../components/MagneticButton';

// Reusable CountUp component
function CountUp({ end, duration = 1500, suffix = "" }) {
  const [count, setCount] = React.useState(0);
  const elementRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true;
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      }
    }, { threshold: 0.1 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
}

export default function Home() {
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const title3Ref = useRef(null);
  const subheadRef = useRef(null);
  const ctasRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    // GSAP Intro animations
    const tl = gsap.timeline();
    
    const targets = [title1Ref.current, title2Ref.current, title3Ref.current].filter(Boolean);
    if (targets.length > 0) {
      tl.fromTo(targets, 
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
      );
    }

    if (subheadRef.current) {
      tl.fromTo(subheadRef.current, 
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.3'
      );
    }

    if (ctasRef.current) {
      tl.fromTo(ctasRef.current, 
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.3'
      );
    }

    // Scroll trigger for italic quote underline
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.to('.quote-underline', { width: '100%', duration: 1, ease: 'power2.out' });
        }
      });
    }, { threshold: 0.5 });

    if (quoteRef.current) {
      observer.observe(quoteRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-brand-cream pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          {/* Left Hero Texts */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <h1 className="font-display font-bold text-5xl md:text-8xl tracking-wider leading-none text-brand-charcoal flex flex-col gap-2">
              <span className="overflow-hidden block">
                <span ref={title1Ref} className="block">WE BUILD</span>
              </span>
              <span className="overflow-hidden block text-brand-teal">
                <span ref={title2Ref} className="block">THE INTERNET'S</span>
              </span>
              <span className="overflow-hidden block">
                <span ref={title3Ref} className="block">FINEST WEBSITES.</span>
              </span>
            </h1>
            
            <p ref={subheadRef} className="mt-8 text-brand-slate text-lg md:text-xl font-light max-w-lg leading-relaxed opacity-0">
              Premium web experiences for ambitious businesses. Built with high-end aesthetics, 3D graphics, and elegant responsiveness.
            </p>

            <div ref={ctasRef} className="mt-10 flex flex-wrap gap-6 items-center opacity-0">
              <MagneticButton>
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-brand-teal text-white text-xs uppercase tracking-widest font-semibold hover:bg-brand-coral hover:text-white hover:shadow-lg transition-all duration-300 block"
                >
                  Start Your Project →
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link 
                  to="/portfolio" 
                  className="px-8 py-4 border border-brand-charcoal/15 text-brand-charcoal text-xs uppercase tracking-widest font-semibold hover:border-brand-coral hover:text-brand-coral transition-all duration-300 block"
                >
                  View Our Work
                </Link>
              </MagneticButton>
            </div>
          </div>

          {/* Right Hero Three.js Globe */}
          <div className="lg:col-span-5 h-[350px] md:h-[500px] w-full flex items-center justify-center relative">
            <div className="absolute inset-0 bg-brand-teal/5 rounded-full blur-[100px] pointer-events-none" />
            <ThreeGlobe />
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <section className="py-8 bg-brand-sand border-y border-brand-charcoal/8 overflow-hidden z-10 relative">
        <div className="animate-marquee whitespace-nowrap text-2xl md:text-4xl font-display uppercase tracking-widest text-brand-charcoal/60">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="inline-block mr-4">
              WEB DESIGN <span className="text-brand-teal mx-2">·</span> BRANDING <span className="text-brand-teal mx-2">·</span> DEVELOPMENT <span className="text-brand-teal mx-2">·</span> E-COMMERCE <span className="text-brand-teal mx-2">·</span> SEO <span className="text-brand-teal mx-2">·</span> MOTION <span className="text-brand-teal mx-2">·</span> 3D EXPERIENCES <span className="text-brand-teal mx-2">·</span> SAAS PRODUCTS <span className="text-brand-teal mx-2">·</span> LANDING PAGES <span className="text-brand-teal mx-2">·</span>
            </span>
          ))}
        </div>
      </section>

      {/* Stats row */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          <div className="flex flex-col gap-2">
            <h3 className="text-4xl md:text-6xl font-display font-bold text-brand-teal">
              <CountUp end={120} suffix="+" />
            </h3>
            <span className="text-xs uppercase tracking-widest text-brand-slate">Projects Delivered</span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-4xl md:text-6xl font-display font-bold text-brand-charcoal">
              <CountUp end={98} suffix="%" />
            </h3>
            <span className="text-xs uppercase tracking-widest text-brand-slate">Client Satisfaction</span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-4xl md:text-6xl font-display font-bold text-brand-coral">
              <CountUp end={7} />
            </h3>
            <span className="text-xs uppercase tracking-widest text-brand-slate">Countries Served</span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-4xl md:text-6xl font-display font-bold text-brand-charcoal">
              <CountUp end={4} suffix="-Wk" />
            </h3>
            <span className="text-xs uppercase tracking-widest text-brand-slate">Average Delivery</span>
          </div>
        </div>
      </section>

      {/* Featured work preview */}
      <section className="py-24 border-t border-brand-charcoal/8 bg-brand-cream relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-brand-teal font-semibold">SELECTED CREATIONS</span>
              <h2 className="font-display font-bold text-4xl md:text-6xl tracking-wider text-brand-charcoal mt-2">FEATURED WORK</h2>
            </div>
            <Link to="/portfolio" className="group text-sm uppercase tracking-widest font-semibold text-brand-charcoal hover:text-brand-coral flex items-center gap-2 transition-colors duration-300">
              VIEW ALL WORK →
            </Link>
          </div>

          {/* Staggered project cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative bg-white border border-brand-charcoal/8 p-4 overflow-hidden rounded-sm transition-all duration-500 hover:border-brand-teal/40 hover:shadow-lg flex flex-col md:translate-y-8">
              <div className="aspect-[4/3] bg-gradient-to-br from-brand-teal/10 to-brand-sand border border-brand-charcoal/8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/40 group-hover:bg-transparent transition-all duration-500" />
                <span className="font-display text-8xl text-brand-charcoal/5 select-none font-extrabold group-hover:text-brand-teal/10 transition-all duration-500">APEX</span>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <div>
                  <h4 className="font-display text-xl tracking-wider text-brand-charcoal group-hover:text-brand-teal transition-colors duration-300">Apex SaaS Dashboard</h4>
                  <span className="text-xs text-brand-slate uppercase tracking-wider">SaaS · WebApp</span>
                </div>
                <div className="w-8 h-8 rounded-full border border-brand-charcoal/10 flex items-center justify-center text-brand-slate group-hover:text-brand-teal group-hover:border-brand-teal transition-colors duration-300">
                  →
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white border border-brand-charcoal/8 p-4 overflow-hidden rounded-sm transition-all duration-500 hover:border-brand-teal/40 hover:shadow-lg flex flex-col">
              <div className="aspect-[4/3] bg-gradient-to-br from-brand-coral/10 to-brand-sand border border-brand-charcoal/8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/40 group-hover:bg-transparent transition-all duration-500" />
                <span className="font-display text-8xl text-brand-charcoal/5 select-none font-extrabold group-hover:text-brand-coral/10 transition-all duration-500">AURA</span>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <div>
                  <h4 className="font-display text-xl tracking-wider text-brand-charcoal group-hover:text-brand-coral transition-colors duration-300">Aura E-Commerce</h4>
                  <span className="text-xs text-brand-slate uppercase tracking-wider">E-Commerce · Design</span>
                </div>
                <div className="w-8 h-8 rounded-full border border-brand-charcoal/10 flex items-center justify-center text-brand-slate group-hover:text-brand-coral group-hover:border-brand-coral transition-colors duration-300">
                  →
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white border border-brand-charcoal/8 p-4 overflow-hidden rounded-sm transition-all duration-500 hover:border-brand-teal/40 hover:shadow-lg flex flex-col md:translate-y-16">
              <div className="aspect-[4/3] bg-gradient-to-br from-brand-charcoal/5 to-brand-sand border border-brand-charcoal/8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/40 group-hover:bg-transparent transition-all duration-500" />
                <span className="font-display text-8xl text-brand-charcoal/5 select-none font-extrabold group-hover:text-brand-charcoal/8 transition-all duration-500">NOVA</span>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <div>
                  <h4 className="font-display text-xl tracking-wider text-brand-charcoal group-hover:text-brand-charcoal transition-colors duration-300">Nova Interactive Landing</h4>
                  <span className="text-xs text-brand-slate uppercase tracking-wider">3D · Marketing</span>
                </div>
                <div className="w-8 h-8 rounded-full border border-brand-charcoal/10 flex items-center justify-center text-brand-slate group-hover:text-brand-charcoal group-hover:border-brand-charcoal transition-colors duration-300">
                  →
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Large Bold Quote Section */}
      <section ref={quoteRef} className="py-36 bg-brand-sand border-t border-brand-charcoal/8 overflow-hidden relative z-10">
        <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          <span className="text-4xl text-brand-teal font-serif">“</span>
          <blockquote className="font-syne font-extrabold text-2xl md:text-5xl tracking-tight leading-tight text-brand-charcoal max-w-4xl italic">
            Built for businesses that refuse to blend in. We challenge standard templates to create custom digital art.
          </blockquote>
          {/* Cobalt underline accent */}
          <div className="quote-underline mt-8 h-[2px] bg-brand-teal w-0 transition-all duration-1000" />
        </div>
      </section>
    </div>
  );
}
