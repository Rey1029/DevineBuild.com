import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutTemplate, ShoppingBag, Cpu, MousePointerClick, RefreshCw, Gauge } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      icon: <LayoutTemplate className="w-10 h-10 text-brand-teal group-hover:text-white group-hover:scale-110 transition-all duration-300" />,
      title: 'Custom Website Design',
      desc: 'Thoughtful layout design built from scratch. No templates, no builders — just pure visual storytelling and software craftsmanship.',
      link: '/contact?service=design'
    },
    {
      icon: <ShoppingBag className="w-10 h-10 text-brand-teal group-hover:text-white group-hover:scale-110 transition-all duration-300" />,
      title: 'E-Commerce Development',
      desc: 'Seamless, high-performance checkout flows and bespoke shopping experiences tailored to turn visitors into buyers.',
      link: '/contact?service=ecommerce'
    },
    {
      icon: <Cpu className="w-10 h-10 text-brand-teal group-hover:text-white group-hover:scale-110 transition-all duration-300" />,
      title: 'SaaS Product Builds',
      desc: 'Custom frontend architectures, responsive admin panels, and real-time dashboard interfaces optimized for user activation.',
      link: '/contact?service=saas'
    },
    {
      icon: <MousePointerClick className="w-10 h-10 text-brand-teal group-hover:text-white group-hover:scale-110 transition-all duration-300" />,
      title: 'Landing Page Creation',
      desc: 'High-converting promo pages featuring interactive 3D elements and immersive storytelling to capture your product value.',
      link: '/contact?service=landing'
    },
    {
      icon: <RefreshCw className="w-10 h-10 text-brand-teal group-hover:text-white group-hover:scale-110 transition-all duration-300" />,
      title: 'Website Redesigns',
      desc: 'Transforming legacy corporate websites into luxury digital assets that load instantly and leave a lasting impression.',
      link: '/contact?service=redesign'
    },
    {
      icon: <Gauge className="w-10 h-10 text-brand-teal group-hover:text-white group-hover:scale-110 transition-all duration-300" />,
      title: 'SEO & Performance Opt.',
      desc: 'Optimizing codebases for speed, loading states, schema indexing, accessibility, and high search engine ranking.',
      link: '/contact?service=seo'
    }
  ];

  const technologies = [
    'React', 'Next.js', 'Three.js', 'WebGL', 'GSAP', 'Node.js', 
    'Figma', 'TailwindCSS', 'Webflow', 'Framer', 'GraphQL', 'TypeScript'
  ];

  return (
    <div className="w-full bg-brand-cream pt-32 pb-24 relative overflow-hidden z-10">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <span className="text-xs uppercase tracking-widest text-brand-teal font-semibold">OUR SPECIALIZATIONS</span>
        <h1 className="font-display font-bold text-5xl md:text-8xl tracking-wider leading-none text-brand-charcoal mt-4 flex flex-col gap-2">
          <span>WHAT WE</span>
          <span className="text-brand-teal">BUILD</span>
        </h1>
        <div className="h-[2px] bg-brand-teal mt-6 w-1/3" />
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, i) => (
            <Link 
              key={i} 
              to={service.link}
              className="group relative p-10 bg-white border border-brand-charcoal/8 rounded-sm hover:bg-brand-teal hover:border-brand-teal hover:shadow-lg transition-all duration-500 flex flex-col justify-between min-h-[300px] interactive"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal to-brand-cream opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-sm pointer-events-none" />

              <div className="flex flex-col gap-6 relative z-10 text-left">
                <div className="w-16 h-16 rounded-sm bg-brand-sand border border-brand-charcoal/8 flex items-center justify-center group-hover:bg-white/80 group-hover:border-brand-charcoal/15 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="font-display text-2xl tracking-wider text-brand-charcoal group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-brand-slate group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-teal group-hover:text-white transition-colors duration-300 justify-end relative z-10">
                <span>Inquire</span>
                <span className="text-lg group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Full-Width Banner with Grain */}
      <section className="relative w-full py-20 bg-brand-sand border-y border-brand-charcoal/8 overflow-hidden mb-32">
        {/* Subtle internal grid for design */}
        <div className="absolute inset-0 bg-brand-teal/[0.02] bg-[linear-gradient(rgba(45,160,140,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(45,160,140,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <blockquote className="font-syne font-extrabold text-xl md:text-3xl text-brand-charcoal italic tracking-wide">
            "Every pixel. Every interaction. Intentional."
          </blockquote>
          <p className="text-xs uppercase tracking-widest text-brand-coral font-semibold mt-4">THE DEVINEDGE STANDARD</p>
        </div>
      </section>

      {/* Tech Stack Horizontal Logo Wall */}
      <section className="mb-12">
        <span className="text-xs uppercase tracking-widest text-brand-teal font-semibold block text-center mb-8">OUR TECHNOLOGICAL ARMAMENT</span>
        
        <div className="relative py-8 bg-brand-sand border-y border-brand-charcoal/8 overflow-hidden">
          {/* Scroll left to right */}
          <div className="animate-marquee whitespace-nowrap text-3xl font-display uppercase tracking-widest text-brand-charcoal/30 flex items-center">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="inline-flex items-center">
                {technologies.map((tech) => (
                  <React.Fragment key={tech}>
                    <span className="hover:text-brand-coral transition-colors duration-300 font-bold mx-8">{tech}</span>
                    <span className="w-2 h-2 rounded-full bg-brand-teal" />
                  </React.Fragment>
                ))}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
