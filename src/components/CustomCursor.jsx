import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Check if touch device to skip
    const isTouch = window.matchMedia('(max-width: 1024px)').matches;
    if (isTouch) return;

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Immediate position for dot
      gsap.to(dotRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.05,
        ease: 'power2.out',
      });

      // Lagging position for ring
      gsap.to(ringRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.25,
        ease: 'power2.out',
      });
    };

    const onMouseOver = (e) => {
      // Find if cursor is hovering over an interactive element
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.interactive') ||
        target.classList.contains('interactive');
      
      setHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <div className={`custom-cursor ${hovered ? 'cursor-hover' : ''}`}>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </div>
  );
}
