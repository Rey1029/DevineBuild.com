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
      desc: 'Seeking a digital designer to build high-contrast brutalist frames, craft motion vectors, and define refined color systems.',
      requirements: [
        'Expertise in Figma, Adobe Suite, and 3D modeling tools (Blender/Spline)',
        'Understanding of typography hierarchies and grid systems',
        'Ability to collaborate closely with WebGL and frontend teams',
        'Familiarity with HTML/CSS mechanics'
      ]
    }
  ];

  return (
    <div className="w-full bg-brand-cream pt-32 pb-24 relative overflow-hidden z-10">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 text-left">
        <span className="text-xs uppercase tracking-widest text-brand-teal font-semibold">CAREERS</span>
        <h1 className="font-display font-bold text-5xl md:text-8xl tracking-wider leading-none text-brand-charcoal mt-4 flex flex-col gap-2">
          <span>JOIN THE</span>
          <span className="text-brand-teal">CREW</span>
        </h1>
        <div className="h-[2px] bg-brand-teal mt-6 w-32" />
      </section>

      {/* Agency Culture Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
        <div className="lg:col-span-6">
          <blockquote className="font-syne font-extrabold text-2xl md:text-4xl text-brand-charcoal italic leading-tight">
            "Brutalist work ethic. High-fidelity output."
          </blockquote>
          <p className="text-sm text-brand-slate mt-6 leading-relaxed">
            We operate as a small, specialized, and highly autonomous squad. We do not do bureaucratic meetings, boilerplate codes, or committee design signoffs. We focus on craft, engineering excellence, and pushing the boundaries of web interactions.
          </p>
        </div>
        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          <div className="bg-white border border-brand-charcoal/8 p-6 rounded-sm">
            <h4 className="font-display text-xl text-brand-charcoal tracking-widest uppercase">Remote Friendly</h4>
            <p className="text-xs text-brand-slate mt-2 leading-relaxed">Collaborate from anywhere on earth. We values results over check-in locations.</p>
          </div>
          <div className="bg-white border border-brand-charcoal/8 p-6 rounded-sm">
            <h4 className="font-display text-xl text-brand-coral tracking-widest uppercase">Gear Budget</h4>
            <p className="text-xs text-brand-slate mt-2 leading-relaxed">We finance your high-end hardware setup: customized monitors, standing desks, and design tablets.</p>
          </div>
        </div>
      </section>

      {/* Positions Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-12 text-left">
        <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-charcoal tracking-widest uppercase mb-12">OPEN POSITIONS</h2>
        
        <div className="flex flex-col gap-6">
          {jobs.map(job => (
            <div 
              key={job.id}
              onClick={() => setSelectedJob(job)}
              className="group bg-white border border-brand-charcoal/8 p-6 md:p-8 rounded-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-brand-teal/40 hover:shadow-lg transition-all duration-300 cursor-pointer interactive"
            >
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-brand-sand border border-brand-charcoal/8 rounded-sm flex items-center justify-center text-brand-teal">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3 className="font-display text-2xl tracking-wider text-brand-charcoal group-hover:text-brand-teal transition-colors duration-300">{job.title}</h3>
                  <div className="flex gap-4 text-xs text-brand-slate mt-1 font-semibold uppercase tracking-wider">
                    <span>{job.location}</span>
                    <span className="text-brand-coral">•</span>
                    <span>{job.type}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-teal group-hover:text-brand-coral transition-colors duration-300">
                <span>View Details</span>
                <ArrowUpRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Job Details Modal Overlay */}
      {selectedJob && (
        <div className="fixed inset-0 bg-brand-charcoal/80 z-[99999] flex items-center justify-center p-6 backdrop-blur-md">
          <div className="bg-white border border-brand-coral/30 p-8 md:p-12 rounded-sm max-w-2xl w-full relative z-10 flex flex-col gap-6 text-left shadow-lg animate-[pulse_4s_infinite]">
            <button 
              onClick={() => setSelectedJob(null)}
              className="absolute top-6 right-6 text-brand-charcoal hover:text-brand-coral font-bold text-lg interactive"
            >
              ✕
            </button>

            <div>
              <span className="text-xs uppercase tracking-widest text-brand-teal font-semibold">{selectedJob.type} Role</span>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-charcoal tracking-wider mt-2 uppercase">{selectedJob.title}</h2>
              <span className="text-xs text-brand-coral uppercase tracking-widest font-semibold block mt-1">Location: {selectedJob.location}</span>
            </div>

            <div className="h-[1px] bg-brand-charcoal/10 w-full" />

            <div>
              <h4 className="text-xs uppercase tracking-widest text-brand-charcoal font-bold mb-2">ROLE DESCRIPTION</h4>
              <p className="text-sm text-brand-slate leading-relaxed">{selectedJob.desc}</p>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-brand-charcoal font-bold mb-2">EXPECTED QUALIFICATIONS</h4>
              <ul className="list-disc list-inside text-sm text-brand-slate flex flex-col gap-1.5 pl-2">
                {selectedJob.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4 flex gap-4 justify-end">
              <button 
                onClick={() => setSelectedJob(null)}
                className="px-6 py-2.5 border border-brand-charcoal/10 text-brand-charcoal hover:border-brand-coral hover:text-brand-coral text-xs uppercase tracking-widest font-semibold transition-colors duration-300 interactive"
              >
                Close
              </button>
              <Link 
                to={`/contact?role=${selectedJob.id}`}
                onClick={() => setSelectedJob(null)}
                className="px-6 py-2.5 bg-brand-teal text-white hover:bg-brand-coral hover:text-white text-xs uppercase tracking-widest font-semibold transition-all duration-300 interactive"
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
