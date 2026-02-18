
'use client';

export default function DoodleDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 select-none overflow-hidden">
      <div className="absolute top-[8%] left-[5%] text-5xl" style={{ transform: 'rotate(-15deg)' }}>🌻</div>
      <div className="absolute top-[15%] right-[8%] text-3xl" style={{ transform: 'rotate(12deg)' }}>⭐</div>
      <div className="absolute top-[45%] left-[3%] text-4xl" style={{ transform: 'rotate(-8deg)' }}>🍃</div>
      <div className="absolute bottom-[20%] right-[5%] text-4xl" style={{ transform: 'rotate(20deg)' }}>🎈</div>
      <div className="absolute bottom-[10%] left-[10%] text-3xl" style={{ transform: 'rotate(-5deg)' }}>🌸</div>
      <div className="absolute top-[70%] right-[12%] text-3xl" style={{ transform: 'rotate(10deg)' }}>🦋</div>

      <div
        className="absolute top-[5%] right-[30%] w-12 h-12 border-2 border-dashed border-pink-300/40 rounded-full"
        style={{ transform: 'rotate(15deg)' }}
      />
      <div className="absolute bottom-[30%] left-[8%] w-8 h-8 border-2 border-dashed border-sky-300/40 rounded-full" />
      <div
        className="absolute top-[60%] right-[3%] w-16 h-16 border-2 border-dotted border-yellow-300/30 rounded-full"
        style={{ transform: 'rotate(-20deg)' }}
      />

      <div
        className="absolute top-[25%] left-[15%] w-20 h-[2px] bg-pink-200/50"
        style={{ transform: 'rotate(-30deg)' }}
      />
      <div
        className="absolute bottom-[40%] right-[20%] w-16 h-[2px] bg-sky-200/50"
        style={{ transform: 'rotate(25deg)' }}
      />

      <div
        className="absolute top-[35%] right-[25%] text-pink-300/40 text-xs"
        style={{ fontFamily: "'Gamja Flower', cursive", transform: 'rotate(-10deg)' }}
      >
        ♡
      </div>
      <div
        className="absolute bottom-[55%] left-[20%] text-sky-300/40 text-xs"
        style={{ fontFamily: "'Gamja Flower', cursive", transform: 'rotate(5deg)' }}
      >
        ☆
      </div>

      <div className="absolute top-[12%] left-[40%]">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-pink-300/30" />
          <div className="w-2 h-2 rounded-full bg-yellow-300/30" />
          <div className="w-2 h-2 rounded-full bg-sky-300/30" />
        </div>
      </div>

      <div className="absolute bottom-[15%] right-[35%]">
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-300/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-purple-300/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-orange-300/30" />
        </div>
      </div>
    </div>
  );
}
