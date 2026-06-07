import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Plus, Minus } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';

// Reusable FAQ Accordion Component
function FaqItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-brand-charcoal/8 py-5 text-left">
      <button 
        onClick={onClick}
        className="w-full flex justify-between items-center text-left font-display text-lg tracking-wider text-brand-charcoal hover:text-brand-coral transition-colors duration-300 py-2 interactive"
      >
        <span>{question}</span>
        <span className="text-brand-teal ml-4">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[300px] opacity-100 mt-3' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-sm text-brand-slate leading-relaxed pr-6">{answer}</p>
      </div>
    </div>
  );
}

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('one-time'); // 'one-time' or 'retainer'
  const [openFaqIdx, setOpenFaqIdx] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIdx(openFaqIdx === index ? null : index);
  };

  const pricingTiers = [
    {
      name: 'Starter',
      oneTimePrice: '$599',
      monthlyPrice: '$19/mo',
      desc: 'Perfect for small businesses seeking an elite single-page promo or a basic 5-page editorial site.',
      features: [
        'Custom Design (no templates)',
        'Up to 5 Pages',
        'Basic Scroll Animations',
        'Technical SEO Setup',
        'Fully Responsive Mobile Build',
        '2 Weeks Post-Launch Support'
      ],
      cta: 'Choose Starter',
      highlighted: false
    },
    {
      name: 'Growth',
      oneTimePrice: '$799',
      monthlyPrice: '$39/mo',
      desc: 'Our flagship tier for established brands needing custom UI elements, full CMS control, and 3D scenes.',
      features: [
        'Custom Web Design & Layouts',
        'Up to 12 Pages',
        'WebGL Globe or Geometry scene',
        'Integrated CMS (Webflow/Sanity)',
        'Complex Scroll animations & Trails',
        '4 Weeks Post-Launch Support',
        'Speed Performance optimization'
      ],
      cta: 'Choose Growth',
      highlighted: true // highlighted Growth card
    },
    {
      name: 'Elite',
      oneTimePrice: '$999',
      monthlyPrice: '$99/mo',
      desc: 'For global enterprises requiring custom web products, advanced shaders, and high-security SaaS portals.',
      features: [
        'Full Custom Web Architectures',
        'Unlimited Pages',
        'Advanced Three.js Interactive Scenes',
        'Bespoke Database & Dashboard UI',
        'Custom Soundscapes & Confetti Shaders',
        '3 Months Priority Support',
        'Dedicated Project Architect'
      ],
      cta: 'Contact Architecture',
      highlighted: false
    }
  ];

  const faqs = [
    {
      q: 'What is the main difference between One-Time and Monthly Retainer options?',
      a: 'The One-Time option covers the initial planning, custom design, programming, and handoff of your project. The Monthly Retainer covers continuous development, monthly feature updates, technical security audits, conversion testing, and regular optimization so your site is always updated and fast.'
    },
    {
      q: 'Do you charge extra for hosting or domain configurations?',
      a: 'We configure your domain records, DNS settings, and set up your host servers (Vercel, Netlify, or AWS) for free during delivery. The actual third-party hosting server fees are billed directly to you with zero markups from our agency.'
    },
    {
      q: 'Can we switch our tier or update features mid-project?',
      a: 'Absolutely. We review project directions at the end of the design concept stage. If your scope demands additional pages or interactive 3D assets, we adjust the timeline and tier transparently before starting build stages.'
    },
    {
      q: 'Do you work with pre-existing templates or theme designs?',
      a: 'Never. Every website we build starts as a blank canvas in Figma and is custom programmed in React, WebGL, or Webflow. This ensures your brand is unique, has clean markup, loads instantly, and has zero bloated code dependencies.'
    },
    {
      q: 'How do you handle post-launch revisions?',
      a: 'Every package includes a dedicated post-launch support period (from 2 weeks to 3 months) where we correct bugs, fix typographical changes, and optimize parameters free of charge. After this period, you can contract us hourly or sign up for a Retainer.'
    },
    {
      q: 'How long does a typical redesign project take?',
      a: 'Typically, Landing Page packages take 1 week. Core business websites take 3-4 weeks, E-commerce platforms take 5-6 weeks, and full custom SaaS/Enterprise builds take 8+ weeks depending on feature specifications.'
    }
  ];

  return (
    <div className="w-full bg-brand-cream pt-32 pb-24 relative overflow-hidden z-10">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center flex flex-col items-center">
        <span className="text-xs uppercase tracking-widest text-brand-teal font-semibold">PRICING TIERS</span>
        <h1 className="font-display font-bold text-4xl md:text-7xl tracking-wider text-brand-charcoal mt-4 max-w-4xl uppercase">
          TRANSPARENT PRICING.<br />
          <span className="text-brand-teal">ZERO SURPRISES.</span>
        </h1>
        <div className="h-[2px] bg-brand-teal mt-6 w-32" />
      </section>

      {/* Retainer Toggle */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 flex justify-center">
        <div className="bg-white border border-brand-charcoal/8 p-1 flex rounded-sm relative z-10">
          <button
            onClick={() => setBillingCycle('one-time')}
            className={`px-6 py-2.5 text-xs uppercase tracking-widest font-semibold rounded-sm transition-all duration-300 interactive ${
              billingCycle === 'one-time'
                ? 'bg-brand-teal text-white shadow-md'
                : 'text-brand-slate hover:text-brand-charcoal'
            }`}
          >
            One-Time Project
          </button>
          <button
            onClick={() => setBillingCycle('retainer')}
            className={`px-6 py-2.5 text-xs uppercase tracking-widest font-semibold rounded-sm transition-all duration-300 interactive ${
              billingCycle === 'retainer'
                ? 'bg-brand-teal text-white shadow-md'
                : 'text-brand-slate hover:text-brand-charcoal'
            }`}
          >
            Monthly Retainer
          </button>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-36 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {pricingTiers.map((tier, i) => (
            <div 
              key={i}
              className={`bg-white border rounded-sm p-8 md:p-10 flex flex-col justify-between relative transition-all duration-500 hover:-translate-y-2 ${
                tier.highlighted 
                  ? 'border-brand-teal shadow-lg lg:scale-105' 
                  : 'border-brand-charcoal/8 hover:border-brand-coral'
              }`}
            >
              {/* Highlight Badge */}
              {tier.highlighted && (
                <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-brand-coral text-white text-[10px] tracking-widest uppercase font-bold py-1 px-4 rounded-sm shadow-md">
                  Most Popular
                </span>
              )}

              {/* Price Details */}
              <div className="text-left">
                <h3 className={`font-display text-3xl tracking-widest uppercase ${
                  tier.highlighted ? 'text-brand-teal' : 'text-brand-charcoal'
                }`}>{tier.name}</h3>
                
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-display text-5xl md:text-6xl font-bold text-brand-charcoal transition-all duration-500">
                    {billingCycle === 'one-time' ? tier.oneTimePrice : tier.monthlyPrice}
                  </span>
                  <span className="text-xs text-brand-slate uppercase tracking-widest font-semibold">
                    {billingCycle === 'one-time' ? 'Project' : '/Month'}
                  </span>
                </div>
                
                <p className="text-sm text-brand-slate mt-6 leading-relaxed min-h-[72px]">
                  {tier.desc}
                </p>

                {/* Features checklist */}
                <div className="h-[1px] bg-brand-charcoal/8 my-6" />
                <ul className="flex flex-col gap-3.5 text-sm text-brand-slate">
                  {tier.features.map((feat, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <Check size={16} className="text-brand-teal mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Link CTA */}
              <div className="mt-10">
                <Link
                  to={`/contact?package=${tier.name.toLowerCase()}&billing=${billingCycle}`}
                  className={`w-full py-4 text-xs uppercase tracking-widest font-bold block text-center rounded-sm transition-all duration-300 interactive ${
                    tier.highlighted
                      ? 'bg-brand-teal text-white hover:bg-brand-coral hover:text-white hover:shadow-lg'
                      : 'bg-brand-sand border border-brand-charcoal/10 text-brand-charcoal hover:border-brand-coral hover:text-brand-coral'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 mb-36 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-brand-teal font-semibold">COMMON CONCERNS</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-charcoal tracking-widest uppercase mt-2">QUESTIONS & ANSWERS</h2>
        </div>

        <div className="border-t border-brand-charcoal/8">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.q}
              answer={faq.a}
              isOpen={openFaqIdx === index}
              onClick={() => toggleFaq(index)}
            />
          ))}
        </div>
      </section>

      {/* Custom Scopes CTA */}
      <section className="border-t border-brand-charcoal/8 pt-24 bg-brand-sand">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-charcoal tracking-widest uppercase">
            NEED A BESPOKE CONFIGURATION?
          </h2>
          <p className="text-brand-slate text-base max-w-lg mb-4">
            If you need an enterprise WebGL platform, a custom database structure, or specialized integrations, we will build a custom scope for you.
          </p>
          <MagneticButton>
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-brand-teal text-white text-xs uppercase tracking-widest font-semibold hover:bg-brand-coral hover:text-white hover:shadow-lg transition-all duration-300 block"
            >
              Book a Free Call
            </Link>
          </MagneticButton>
        </div>
      </section>
    </div>
  );
}
