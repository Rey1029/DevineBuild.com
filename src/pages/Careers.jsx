import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ArrowUpRight } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      id: 'webgl',
      title: 'Creative WebGL Developer',
      location: 'Geneva / Remote',
      type: 'Full-Time',
      desc: 'We are seeking a rendering engineer to model interactive 3D structures, write custom vertex/fragment shaders in GLSL, and connect them with React architectures.',
      requirements: [
        'Advanced proficiency in Three.js / WebGL pipelines',
        'Deep understanding of matrix math, physics vectors, and shader programming',
        'Strong experience with React, TypeScript, and bundlers',
        'A portfolio showing Awwwards-worthy fluid web designs'
      ]
    },
    {
      id: 'react-arch',
      title: 'Senior Frontend Architect',
      location: 'Geneva HQ',
      type: 'Full-Time',
      desc: 'Looking for a systems architect to scale our React framework configurations, establish reusable UI libraries, and optimize state synchronization.',
      requirements: [
        '5+ years programming scalable React layouts',
        'Proficiency in serverless architectures and micro-frontends',
        'Expertise in GSAP, CSS custom properties, and performance index diagnostics',
        'Passion for pixel-perfect structural integrity'
      ]
    },
    {
      id: 'ui-design',
      title: 'Brand Interaction Designer',
      location: 'Geneva / Remote',
      type: 'Full-Time',
      desc: 'Seeking a digital designer to build high-contrast brutalist frames, craft motion vectors, and define luxury color systems.',
      requirements: [
        'Expertise in Figma, Adobe Suite, and 3D modeling tools (Blender/Spline)',
        'Understanding of typography hierarchies and grid systems',
        'Ability to collaborate closely with WebGL and frontend teams',
        'Familiarity with HTML/CSS mechanics'
      ]
    }
  ];

  return (
    <div className="w-full bg-brand-bg pt-32 pb-24 relative overflow-hidden z-10">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 text-left">
        <span className="text-xs uppercase tracking-widest text-brand-cobalt font-semibold">CAREERS</span>
        <h1 className="font-display font-bold text-5xl md:text-8xl tracking-wider leading-none text-brand-white mt-4 flex flex-col gap-2">
          <span>JOIN THE</span>
          <span className="text-brand-cobalt">CREW</span>
        </h1>
        <div className="h-[2px] bg-brand-cobalt mt-6 w-32" />
      </section>

      {/* Agency Culture Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
        <div className="lg:col-span-6">
          <blockquote className="font-syne font-extrabold text-2xl md:text-4xl text-brand-white italic leading-tight">
            "Brutalist work ethic. High-fidelity output."
          </blockquote>
          <p className="text-sm text-brand-gray mt-6 leading-relaxed">
            We operate as a small, specialized, and highly autonomous squad. We do not do bureaucratic meetings, boilerplate codes, or committee design signoffs. We focus on craft, engineering excellence, and pushing the boundaries of web interactions.
          </p>
        </div>
        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          <div className="bg-brand-card border border-brand-white/5 p-6 rounded-sm">
            <h4 className="font-display text-xl text-brand-white tracking-widest uppercase">Remote Friendly</h4>
            <p className="text-xs text-brand-gray mt-2 leading-relaxed">Collaborate from anywhere on earth. We values results over check-in locations.</p>
          </div>
          <div className="bg-brand-card border border-brand-white/5 p-6 rounded-sm">
            <h4 className="font-display text-xl text-brand-gold tracking-widest uppercase">Gear Budget</h4>
            <p className="text-xs text-brand-gray mt-2 leading-relaxed">We finance your high-end hardware setup: customized monitors, standing desks, and design tablets.</p>
          </div>
        </div>
      </section>

      {/* Positions Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-12 text-left">
        <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-white tracking-widest uppercase mb-12">OPEN POSITIONS</h2>
        
        <div className="flex flex-col gap-6">
          {jobs.map(job => (
            <div 
              key={job.id}
              onClick={() => setSelectedJob(job)}
              className="group bg-brand-card border border-brand-white/5 p-6 md:p-8 rounded-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-brand-cobalt/50 hover:shadow-[0_0_20px_rgba(0,71,255,0.1)] transition-all duration-300 cursor-pointer interactive"
            >
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-brand-dark-gray border border-brand-white/5 rounded-sm flex items-center justify-center text-brand-cobalt">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3 className="font-display text-2xl tracking-wider text-brand-white group-hover:text-brand-cobalt transition-colors duration-300">{job.title}</h3>
                  <div className="flex gap-4 text-xs text-brand-gray mt-1 font-semibold uppercase tracking-wider">
                    <span>{job.location}</span>
                    <span className="text-brand-gold">•</span>
                    <span>{job.type}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-cobalt group-hover:text-brand-gold transition-colors duration-300">
                <span>View Details</span>
                <ArrowUpRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Job Details Modal Overlay */}
      {selectedJob && (
        <div className="fixed inset-0 bg-[#080808]/95 z-[99999] flex items-center justify-center p-6 backdrop-blur-md">
          <div className="bg-brand-card border border-brand-gold/30 p-8 md:p-12 rounded-sm max-w-2xl w-full relative z-10 flex flex-col gap-6 text-left shadow-[0_0_50px_rgba(201,168,76,0.15)] animate-[pulse_4s_infinite]">
            <button 
              onClick={() => setSelectedJob(null)}
              className="absolute top-6 right-6 text-brand-white hover:text-brand-gold font-bold text-lg interactive"
            >
              ✕
            </button>

            <div>
              <span className="text-xs uppercase tracking-widest text-brand-cobalt font-semibold">{selectedJob.type} Role</span>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-white tracking-wider mt-2 uppercase">{selectedJob.title}</h2>
              <span className="text-xs text-brand-gold uppercase tracking-widest font-semibold block mt-1">Location: {selectedJob.location}</span>
            </div>

            <div className="h-[1px] bg-brand-white/10 w-full" />

            <div>
              <h4 className="text-xs uppercase tracking-widest text-brand-white font-bold mb-2">ROLE DESCRIPTION</h4>
              <p className="text-sm text-brand-gray leading-relaxed">{selectedJob.desc}</p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-brand-white font-bold mb-2">EXPECTED QUALIFICATIONS</h4>
              <ul className="list-disc list-inside text-sm text-brand-gray flex flex-col gap-1.5 pl-2">
                {selectedJob.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4 flex gap-4 justify-end">
              <button 
                onClick={() => setSelectedJob(null)}
                className="px-6 py-2.5 border border-brand-white/10 text-brand-white hover:border-brand-gold hover:text-brand-gold text-xs uppercase tracking-widest font-semibold transition-colors duration-300 interactive"
              >
                Close
              </button>
              <Link 
                to={`/contact?role=${selectedJob.id}`}
                onClick={() => setSelectedJob(null)}
                className="px-6 py-2.5 bg-brand-cobalt text-brand-white hover:bg-brand-gold hover:text-brand-bg text-xs uppercase tracking-widest font-semibold transition-all duration-300 interactive"
              >
                Apply for Position
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
