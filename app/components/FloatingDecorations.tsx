
'use client';

export default function FloatingDecorations() {
  return (
    <>
      <div className="absolute top-6 left-8 text-4xl animate-float opacity-70 select-none pointer-events-none">🌸</div>
      <div className="absolute top-16 right-12 text-3xl animate-float-delayed opacity-60 select-none pointer-events-none">⭐</div>
      <div className="absolute top-32 left-16 text-2xl animate-bounce-slow opacity-50 select-none pointer-events-none">🎀</div>
      <div className="absolute bottom-32 left-8 text-3xl animate-float opacity-60 select-none pointer-events-none">🌈</div>
      <div className="absolute bottom-16 right-10 text-4xl animate-bounce-slow opacity-50 select-none pointer-events-none">🎊</div>
      <div className="absolute top-1/4 right-6 text-2xl animate-float-delayed opacity-60 select-none pointer-events-none">💫</div>
      <div className="absolute top-1/2 left-4 text-3xl animate-float opacity-50 select-none pointer-events-none">🍀</div>
      <div className="absolute bottom-1/3 right-16 text-2xl animate-bounce-slow opacity-60 select-none pointer-events-none">🎵</div>
      <div className="absolute top-12 left-1/3 text-xl animate-float-delayed opacity-40 select-none pointer-events-none">✿</div>
      <div className="absolute bottom-12 left-1/3 text-2xl animate-float opacity-50 select-none pointer-events-none">🦋</div>

      <div className="absolute top-20 left-20 w-3 h-3 bg-pink-300 rounded-full animate-confetti-1 opacity-70 pointer-events-none"></div>
      <div className="absolute top-10 right-1/4 w-2 h-2 bg-yellow-300 rounded-full animate-confetti-2 opacity-70 pointer-events-none"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-sky-300 rounded-full animate-confetti-3 opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-green-300 rounded-full animate-confetti-1 opacity-60 pointer-events-none"></div>
      <div className="absolute top-1/3 left-10 w-2 h-2 bg-purple-300 rounded-full animate-confetti-2 opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-orange-300 rounded-full animate-confetti-3 opacity-60 pointer-events-none"></div>
    </>
  );
}
