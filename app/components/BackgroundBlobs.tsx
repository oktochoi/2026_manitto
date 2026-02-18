
'use client';

export default function BackgroundBlobs() {
  return (
    <>
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-pink-200/40 to-purple-200/30 rounded-full blur-3xl animate-blob pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-br from-sky-200/40 to-cyan-200/30 rounded-full blur-3xl animate-blob-delayed pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-br from-yellow-200/30 to-orange-200/20 rounded-full blur-3xl animate-blob pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-gradient-to-br from-green-200/30 to-emerald-200/20 rounded-full blur-3xl animate-blob-delayed pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-48 h-48 bg-gradient-to-br from-violet-200/25 to-fuchsia-200/20 rounded-full blur-3xl animate-blob pointer-events-none"></div>
    </>
  );
}
