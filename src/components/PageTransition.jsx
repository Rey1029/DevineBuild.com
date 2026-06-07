import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

export default function PageTransition({ children }) {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const curtainTealRef = useRef(null);
  const curtainCreamRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Skip on initial load
    if (location.pathname === '/' && displayChildren === children) {
      return;
    }

    setIsTransitioning(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setIsTransitioning(false);
      }
    });

    // 1. Reset curtains off-screen left
    gsap.set(curtainTealRef.current, { x: '-100%' });
    gsap.set(curtainCreamRef.current, { x: '-100%' });

    // 2. Animate teal curtain in
    tl.to(curtainTealRef.current, {
      x: '0%',
      duration: 0.5,
      ease: 'power3.in',
    });

    // 3. Animate cream curtain in, slightly staggered
    tl.to(curtainCreamRef.current, {
      x: '0%',
      duration: 0.5,
      ease: 'power3.in',
    }, '-=0.4');

    // 4. Midway: Swap the children (update the route content) while fully covered
    tl.add(() => {
      setDisplayChildren(children);
      window.scrollTo(0, 0);
    });

    // 5. Slide teal curtain out to the right
    tl.to(curtainTealRef.current, {
      x: '100%',
      duration: 0.5,
      ease: 'power3.out',
    });

    // 6. Slide cream curtain out to the right
    tl.to(curtainCreamRef.current, {
      x: '100%',
      duration: 0.5,
      ease: 'power3.out',
    }, '-=0.4');

  }, [location.pathname, children]);

  // Keep displayChildren in sync for initial mount
  useEffect(() => {
    if (!isTransitioning) {
      setDisplayChildren(children);
    }
  }, [children, isTransitioning]);

  return (
    <div className="relative min-h-screen w-full">
      {/* Teal curtain overlay */}
      <div 
        ref={curtainTealRef} 
        className="fixed inset-0 bg-brand-teal z-[99990] pointer-events-none"
        style={{ transform: 'translateX(-100%)' }}
      />

      {/* Cream curtain overlay with coral stripe */}
      <div 
        ref={curtainCreamRef} 
        className="fixed inset-0 bg-brand-cream border-l-2 border-brand-coral z-[99991] pointer-events-none flex items-center justify-center"
        style={{ transform: 'translateX(-100%)' }}
      >
        <div className="font-display text-4xl text-brand-charcoal tracking-widest uppercase opacity-15">
          DEVINEDGE
        </div>
      </div>

      {/* Render current page */}
      <div className="w-full">
        {displayChildren}
      </div>
    </div>
  );
}
