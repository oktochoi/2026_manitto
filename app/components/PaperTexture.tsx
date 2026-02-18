
'use client';
import React from 'react';

export default function PaperTexture() {
  // The component renders a fixed, non‑interactive background made from an SVG data‑URI.
  // No runtime errors are expected, but we guard against unexpected style values.
  const backgroundStyle: React.CSSProperties = {
    backgroundImage:
      'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23n)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
    backgroundRepeat: 'repeat',
  };

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 select-none"
      style={backgroundStyle}
      aria-hidden="true"
    />
  );
}
