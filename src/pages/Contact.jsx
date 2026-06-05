import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import MagneticButton from '../components/MagneticButton';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'design',
    budget: '$5k - $10k',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    // Word-by-word reveal using class selection
    gsap.fromTo('.contact-title-word',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
    );
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generate 50 confetti particles with random vectors
    const particles = Array.from({ length: 60 }).map((_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 80 + Math.random() * 220;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;
      const rot = Math.random() * 360;
      const size = 6 + Math.random() * 12;
      
      // Alternate between cobalt blue and gold particles
      const colors = ['#0047FF', '#C9A84C', '#FFFFFF'];
      const color = colors[Math.floor(Math.random() * colors.length)];

      return {
        id: i,
        tx: `${tx}px`,
        ty: `${ty}px`,
        rot: `${rot}deg`,
        size: `${size}px`,
        color,
        delay: `${Math.random() * 0.2}s`
      };
    });

    setConfetti(particles);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      service: 'design',
      budget: '$5k - $10k',
      message: ''
    });
    setSubmitted(false);
    setConfetti([]);
  };

  return (
    <div className="w-full bg-brand-bg pt-32 pb-24 relative overflow-hidden z-10">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-left relative">
        <span className="text-xs uppercase tracking-widest text-brand-cobalt font-semibold">GET IN TOUCH</span>
        <h1 className="font-display font-bold text-5xl md:text-8xl tracking-wider leading-none text-brand-white mt-4 flex flex-wrap select-none">
          {"LET'S BUILD SOMETHING GREAT.".split(' ').map((word, index) => (
            <span 
              key={index} 
              className="inline-block mr-4 md:mr-6 contact-title-word"
            >
              {word}
            </span>
          ))}
        </h1>
        <div className="h-[2px] bg-brand-cobalt mt-6 w-32" />
      </section>

      {/* Main Split Layout */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
        {/* Left Form Column */}
        <div className="lg:col-span-7 bg-brand-card border border-brand-white/5 p-8 md:p-12 rounded-sm text-left">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            
            {/* Input Name */}
            <div className="relative">
              <input 
                type="text" 
                name="name" 
                id="form-name"
                value={formData.name}
                onChange={handleChange}
                required
                className="peer w-full bg-transparent border-b border-brand-white/10 py-2.5 text-brand-white focus:outline-none focus:border-brand-cobalt transition-colors duration-300 placeholder-transparent"
                placeholder="Name"
              />
              <label 
                htmlFor="form-name"
                className="absolute left-0 top-2.5 text-sm text-brand-gray/50 tracking-wider transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-2.5 peer-focus:top-[-16px] peer-focus:text-xs peer-focus:text-brand-cobalt"
                style={{ top: formData.name ? '-16px' : undefined, fontSize: formData.name ? '0.75rem' : undefined }}
              >
                YOUR NAME *
              </label>
            </div>

            {/* Input Email */}
            <div className="relative">
              <input 
                type="email" 
                name="email" 
                id="form-email"
                value={formData.email}
                onChange={handleChange}
                required
                className="peer w-full bg-transparent border-b border-brand-white/10 py-2.5 text-brand-white focus:outline-none focus:border-brand-cobalt transition-colors duration-300 placeholder-transparent"
                placeholder="Email"
              />
              <label 
                htmlFor="form-email"
                className="absolute left-0 top-2.5 text-sm text-brand-gray/50 tracking-wider transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-2.5 peer-focus:top-[-16px] peer-focus:text-xs peer-focus:text-brand-cobalt"
                style={{ top: formData.email ? '-16px' : undefined, fontSize: formData.email ? '0.75rem' : undefined }}
              >
                EMAIL ADDRESS *
              </label>
            </div>

            {/* Input Company */}
            <div className="relative">
              <input 
                type="text" 
                name="company" 
                id="form-company"
                value={formData.company}
                onChange={handleChange}
                className="peer w-full bg-transparent border-b border-brand-white/10 py-2.5 text-brand-white focus:outline-none focus:border-brand-cobalt transition-colors duration-300 placeholder-transparent"
                placeholder="Company"
              />
              <label 
                htmlFor="form-company"
                className="absolute left-0 top-2.5 text-sm text-brand-gray/50 tracking-wider transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-2.5 peer-focus:top-[-16px] peer-focus:text-xs peer-focus:text-brand-cobalt"
                style={{ top: formData.company ? '-16px' : undefined, fontSize: formData.company ? '0.75rem' : undefined }}
              >
                COMPANY NAME (OPTIONAL)
              </label>
            </div>

            {/* Dropdown service */}
            <div className="flex flex-col gap-2 text-left">
              <label className="text-[10px] text-brand-gray/50 tracking-widest uppercase">Project Type</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-[#121212] border border-brand-white/5 py-3 px-4 text-sm text-brand-white focus:outline-none focus:border-brand-cobalt transition-colors duration-300"
              >
                <option value="design">Custom Website Design</option>
                <option value="ecommerce">E-Commerce Development</option>
                <option value="saas">SaaS Product Build</option>
                <option value="landing">Landing Page Creation</option>
                <option value="redesign">Website Redesign</option>
                <option value="seo">SEO & Optimization</option>
              </select>
            </div>

            {/* Radio budget */}
            <div className="flex flex-col gap-3 text-left">
              <label className="text-[10px] text-brand-gray/50 tracking-widest uppercase">Estimated Budget</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['<$5k', '$5k - $10k', '$10k - $25k', '$25k+'].map(tier => (
                  <label 
                    key={tier}
                    className={`py-3 text-center text-xs uppercase tracking-widest border rounded-sm cursor-pointer transition-all duration-300 ${
                      formData.budget === tier
                        ? 'bg-brand-cobalt border-brand-cobalt text-brand-white shadow-[0_0_15px_rgba(0,71,255,0.25)] font-bold'
                        : 'bg-brand-dark-gray border-brand-white/5 text-brand-gray hover:border-brand-gold'
                    }`}
                  >
                    <input 
                      type="radio" 
                      name="budget" 
                      value={tier}
                      checked={formData.budget === tier}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    {tier}
                  </label>
                ))}
              </div>
            </div>

            {/* Textarea message */}
            <div className="relative">
              <textarea 
                name="message" 
                id="form-message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                className="peer w-full bg-transparent border-b border-brand-white/10 py-2.5 text-brand-white focus:outline-none focus:border-brand-cobalt transition-colors duration-300 placeholder-transparent resize-none"
                placeholder="Message"
              />
              <label 
                htmlFor="form-message"
                className="absolute left-0 top-2.5 text-sm text-brand-gray/50 tracking-wider transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-2.5 peer-focus:top-[-16px] peer-focus:text-xs peer-focus:text-brand-cobalt"
                style={{ top: formData.message ? '-16px' : undefined, fontSize: formData.message ? '0.75rem' : undefined }}
              >
                TELL US ABOUT THE PROJECT *
              </label>
            </div>

            <div className="mt-4">
              <MagneticButton className="w-full sm:w-auto">
                <button 
                  type="submit"
                  className="w-full px-8 py-4 bg-brand-cobalt text-brand-white text-xs uppercase tracking-widest font-semibold hover:bg-brand-gold hover:text-brand-bg transition-colors duration-300 cursor-pointer"
                >
                  Send Message
                </button>
              </MagneticButton>
            </div>

          </form>
        </div>

        {/* Right Info Column */}
        <div className="lg:col-span-5 flex flex-col gap-10 text-left">
          {/* Particulars Card */}
          <div className="bg-brand-card border border-brand-white/5 p-8 rounded-sm">
            <h3 className="font-display text-2xl tracking-widest text-brand-white uppercase mb-6">OFFICE DETAILS</h3>
            
            <div className="flex flex-col gap-4 text-sm text-brand-gray">
              <div>
                <span className="text-[10px] text-brand-cobalt tracking-wider uppercase font-bold block">EMAIL CONNECTION</span>
                <a href="mailto:devinedge99@gmail.com" className="text-brand-white hover:text-brand-gold transition-colors duration-300">devinedge99@gmail.com</a>
              </div>
              
              <div>
                <span className="text-[10px] text-brand-cobalt tracking-wider uppercase font-bold block">DIRECT LINE</span>
                <span className="text-brand-white">+91 77009 26265</span>
              </div>

              <div>
                <span className="text-[10px] text-brand-cobalt tracking-wider uppercase font-bold block">HQ LOCATION</span>
                <span className="text-brand-white">Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Stylized SVG Map with pin */}
          <div className="bg-brand-card border border-brand-white/5 p-6 rounded-sm relative overflow-hidden aspect-[4/3] flex items-center justify-center">
            {/* Pulsing glow under location */}
            <div className="absolute top-1/2 left-[48%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-brand-cobalt opacity-40 animate-ping pointer-events-none" />
            <div className="absolute top-1/2 left-[48%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-brand-gold z-10 pointer-events-none border border-brand-bg" />

            {/* Stylized grid-style world outline */}
            <svg viewBox="0 0 400 300" className="w-full h-full opacity-20 text-brand-white" fill="none" stroke="currentColor" strokeWidth="1">
              {/* Abstract land shapes representation */}
              <path d="M 20 80 Q 40 50 80 60 Q 120 70 140 40 Q 160 30 180 50 Q 200 70 230 75 Q 260 80 280 60 Q 320 50 360 80 Q 380 90 390 120 Q 350 150 310 130 Q 280 120 260 140 Q 240 160 210 150 Q 180 140 170 170 Q 140 180 120 160 Q 100 140 80 150 Q 50 160 30 120 Z" />
              <path d="M 120 220 Q 140 200 160 220 Q 180 240 210 230 Q 240 220 270 250 Q 260 280 230 275 Z" />
              {/* Radar waves from the pin */}
              <circle cx="192" cy="150" r="10" stroke="#0047FF" strokeWidth="0.5" className="animate-[ping_4s_infinite]" />
              <circle cx="192" cy="150" r="30" stroke="#0047FF" strokeWidth="0.5" className="animate-[ping_6s_infinite]" />
            </svg>
            <span className="absolute bottom-4 left-4 text-[10px] text-brand-gray/50 uppercase tracking-widest font-bold">Mumbai HQ schematic map</span>
          </div>
        </div>
      </section>

      {/* FULL-SCREEN SUBMIT SUCCESS OVERLAY */}
      {submitted && (
        <div className="fixed inset-0 bg-[#080808]/95 z-[999999] flex items-center justify-center p-6 backdrop-blur-md">
          {/* Confetti container */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {confetti.map((c) => (
              <div 
                key={c.id}
                className="absolute top-1/2 left-1/2 rounded-full opacity-0"
                style={{
                  width: c.size,
                  height: c.size,
                  backgroundColor: c.color,
                  animation: `explode 1.5s cubic-bezier(0.1, 0.8, 0.3, 1) ${c.delay} forwards`,
                  '--tx': c.tx,
                  '--ty': c.ty,
                  '--rot': c.rot,
                }}
              />
            ))}
          </div>

          {/* Style snippet to inject the confetti keyframes */}
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes explode {
              0% { transform: translate(-50%, -50%) translate(0, 0) rotate(0deg); opacity: 1; }
              100% { transform: translate(-50%, -50%) translate(var(--tx), var(--ty)) rotate(var(--rot)); opacity: 0; }
            }
          `}} />

          {/* Dialog box */}
          <div className="bg-brand-card border-2 border-brand-cobalt p-10 md:p-16 rounded-sm max-w-lg w-full text-center flex flex-col items-center gap-6 shadow-[0_0_50px_rgba(0,71,255,0.3)] relative z-10 animate-[pulse_4s_infinite]">
            <div className="w-20 h-20 rounded-full border border-brand-cobalt bg-brand-cobalt/10 flex items-center justify-center text-brand-cobalt text-4xl mb-2">
              ✓
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-white tracking-widest uppercase">
              TRANSMISSION SUCCESS
            </h2>
            <p className="text-brand-gray text-sm leading-relaxed max-w-sm">
              We've received your architectural brief. We'll be in touch within 24 hours to schedule our discovery call. 🚀
            </p>
            <div className="h-[1px] bg-brand-white/10 w-full my-2" />
            <button 
              onClick={handleReset}
              className="px-8 py-3 bg-brand-cobalt text-brand-white hover:bg-brand-gold hover:text-brand-bg text-xs uppercase tracking-widest font-semibold transition-all duration-300 interactive cursor-pointer"
            >
              Back to Contact
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
