import React from 'react';

export default function NoiseBackground() {
  return (
    <>
      {/* Animated SVG noise overlay */}
      <div className="noise-overlay" />
      
      {/* Cobalt grid lines */}
      <div className="grid-overlay" />
      
      {/* Ambient vignette shading */}
      <div className="vignette-overlay" />
    </>
  );
}
