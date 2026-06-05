import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

export default function PageTransition({ children }) {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const curtainBlueRef = useRef(null);
  const curtainDarkRef = useRef(null);
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
    gsap.set(curtainBlueRef.current, { x: '-100%' });
    gsap.set(curtainDarkRef.current, { x: '-100%' });

    // 2. Animate blue curtain in
    tl.to(curtainBlueRef.current, {
      x: '0%',
      duration: 0.5,
      ease: 'power3.in',
    });

    // 3. Animate dark curtain in, slightly staggered
    tl.to(curtainDarkRef.current, {
      x: '0%',
      duration: 0.5,
      ease: 'power3.in',
    }, '-=0.4');

    // 4. Midway: Swap the children (update the route content) while fully covered
    tl.add(() => {
      setDisplayChildren(children);
      window.scrollTo(0, 0);
    });

    // 5. Slide blue curtain out to the right
    tl.to(curtainBlueRef.current, {
      x: '100%',
      duration: 0.5,
      ease: 'power3.out',
    });

    // 6. Slide dark curtain out to the right
    tl.to(curtainDarkRef.current, {
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
      {/* Blue curtain overlay */}
      <div 
        ref={curtainBlueRef} 
        className="fixed inset-0 bg-brand-cobalt z-[99990] pointer-events-none"
        style={{ transform: 'translateX(-100%)' }}
      />

      {/* Dark luxury curtain overlay with gold stripe */}
      <div 
        ref={curtainDarkRef} 
        className="fixed inset-0 bg-[#0c0c0c] border-l-2 border-brand-gold z-[99991] pointer-events-none flex items-center justify-center"
        style={{ transform: 'translateX(-100%)' }}
      >
        <div className="font-display text-4xl text-brand-white tracking-widest uppercase opacity-20">
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
