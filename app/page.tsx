
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import PaperTexture from './components/PaperTexture';
import DoodleDecorations from './components/DoodleDecorations';

const users = [
  { name: "김슬하", password: "4821", mission: "김원준에게 오늘 수고했다고 한마디 하기" },
  { name: "김원준", password: "7394", mission: "박기희에게 간식 하나 건네주기" },
  { name: "박기희", password: "1568", mission: "손예준에게 웃긴 이야기 하나 해주기" },
  { name: "손예준", password: "9043", mission: "오윤선에게 오늘 수고했다고 한마디 하기" },
  { name: "오윤선", password: "2675", mission: "이준에게 물 한 번 챙겨주기" },
  { name: "이준", password: "8136", mission: "단톡에 장동현에게 칭찬 하나 하기" },
  { name: "장동현", password: "5402", mission: "정시현에게 칭찬 한 가지 말해주기" },
  { name: "정시현", password: "6917", mission: "허에녹에게 오늘 컨디션 물어보기" },
  { name: "허에녹", password: "3284", mission: "전지영에게 하이파이브 요청하기" },
  { name: "전지영", password: "7759", mission: "김슬하에게 몰래 응원 한마디 남기기" },
];

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<{ name: string; mission: string } | null>(null);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showMission, setShowMission] = useState(false);
  const [letterOpen, setLetterOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const user = users.find(u => u.name === name && u.password === password);
    if (user) {
      setCurrentUser({ name: user.name, mission: user.mission });
      setIsLoggedIn(true);
      setTimeout(() => setShowMission(true), 400);
      setTimeout(() => setLetterOpen(true), 1200);
    } else {
      setError('너 누구야?');
    }
  };

  const handleLogout = () => {
    setLetterOpen(false);
    setShowMission(false);
    setTimeout(() => {
      setIsLoggedIn(false);
      setCurrentUser(null);
      setName('');
      setPassword('');
      setError('');
    }, 400);
  };

  if (!mounted) return null;

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        background:
          'linear-gradient(170deg, #FFF9F0 0%, #FFF5F5 30%, #F0F7FF 60%, #FFFDF0 100%)',
      }}
    >
      <PaperTexture />
      <DoodleDecorations />

      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(200,180,160,0.06) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {!isLoggedIn ? (
        <div
          className={`w-full max-w-[400px] relative z-10 transition-all duration-500 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
        >

          <div className="text-center mb-5">
            <div className="inline-block relative mb-3">
              <div
                className="bg-white rounded-2xl p-3 shadow-md border border-amber-100"
                style={{ transform: 'rotate(-2deg)' }}
              >
                <Image
                  src="https://public.readdy.ai/ai/img_res/97f10a1b-1917-4fed-9f65-a528591fc25f.png"
                  alt="Logo"
                  width={64}
                  height={64}
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <div
                className="absolute -top-2 -right-3 bg-red-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow"
                style={{
                  transform: 'rotate(12deg)',
                  fontFamily: "var(--font-jua), sans-serif",
                }}
              >
                비밀!
              </div>
            </div>

            <h1
              className="text-[40px] leading-tight text-gray-800 mb-1"
              style={{ fontFamily: "var(--font-jua), sans-serif" }}
            >
              2026 새내기<br />
              마니또 미션
            </h1>
            <div className="flex justify-center items-center gap-1.5 mt-2">
              <span className="text-lg">🎁</span>
              <p
                className="text-base text-gray-500"
                style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif", fontWeight: 400 }}
              >
                당신만의 비밀 미션을 확인하세요
              </p>
              <span className="text-lg">💌</span>
            </div>
          </div>

          <div className="relative mx-auto">
            <div
              className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-10 h-4 rounded-sm z-20"
              style={{
                background:
                  'linear-gradient(135deg, #FFE4A0 0%, #FFD060 100%)',
                transform: 'translateX(-50%) rotate(-1deg)',
                opacity: 0.9,
              }}
            />

<div className="mb-6 w-full">
            <div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-amber-100/60 shadow-sm"
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
            >
              <h3
                className="text-center text-lg text-gray-700 mb-4"
                style={{ fontFamily: "var(--font-jua), sans-serif" }}
              >
                📋 마니또 규칙
              </h3>
              <div className="space-y-3.5">
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-sm" style={{ fontFamily: "var(--font-jua), sans-serif" }}>
                    ①
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-0.5" style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif" }}>
                      마니또는 매일 새벽에 갱신됩니다 🌙
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed" style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif" }}>
                      마니또는 매일 새벽 시간에 새롭게 변경됩니다. 매일 새로운 마음으로 미션을 시작해주세요!
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-sm" style={{ fontFamily: "var(--font-jua), sans-serif" }}>
                    ②
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-0.5" style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif" }}>
                      미션은 반드시 수행하기 ✅
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed" style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif" }}>
                      주어진 마니또 미션을 성실하게 수행해주세요. 작은 행동 하나가 큰 즐거움이 됩니다.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-pink-50 border border-pink-100 flex items-center justify-center text-sm" style={{ fontFamily: "var(--font-jua), sans-serif" }}>
                    ③
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-0.5" style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif" }}>
                      인증은 최옥토 앞에서 📸
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed" style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif" }}>
                      미션 완료 후 반드시 최옥토 앞에서 인증을 받아야 성공으로 인정됩니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

            <div
              className="bg-white rounded-2xl shadow-lg p-7 relative border border-gray-100"
              style={{
                boxShadow:
                  '0 2px 20px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.02)',
              }}
            >
              <div className="absolute top-3 left-3 flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-200" />
                <div className="w-1.5 h-1.5 rounded-full bg-sky-200" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-200" />
              </div>

    
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label
                    className="block text-sm text-gray-600 mb-1.5 flex items-center gap-1 font-medium"
                    style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif" }}
                  >
                    <span className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-user-heart-line text-amber-400 text-base"></i>
                    </span>
                    이름
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-amber-100 bg-amber-50/30 focus:border-amber-300 focus:bg-white focus:outline-none transition-all text-base"
                    style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif" }}
                    placeholder="이름을 적어주세요 ✏️"
                    required
                  />
                </div>

                <div>
                  <label
                    className="block text-sm text-gray-600 mb-1.5 flex items-center gap-1 font-medium"
                    style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif" }}
                  >
                    <span className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-key-2-line text-pink-400 text-base"></i>
                    </span>
                    비밀번호
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-pink-100 bg-pink-50/30 focus:border-pink-300 focus:bg-white focus:outline-none transition-all text-base"
                    style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif" }}
                    placeholder="비밀번호를 적어주세요 🔑"
                    required
                  />
                </div>

                {error && (
                  <div
                    className="bg-red-50 border border-red-200 text-red-500 px-4 py-2.5 rounded-xl text-center text-sm"
                    style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif" }}
                  >
                    😢 {error}
                  </div>
                )}

                <div className="pt-1 space-y-2">
                  <p className="text-center text-amber-500 text-sm" style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif" }}>
                    👆 입력 후 아래 버튼을 눌러주세요
                  </p>
                  <button
                    type="submit"
                    className="w-full text-white font-bold py-3.5 rounded-xl hover:brightness-105 hover:scale-[1.02] active:scale-[0.97] transition-all whitespace-nowrap cursor-pointer text-lg relative overflow-hidden shadow-lg hover:shadow-xl"
                  style={{
                    fontFamily: "var(--font-jua), sans-serif",
                    fontSize: '20px',
                    background:
                      'linear-gradient(135deg, #FF9A9E 0%, #FECFEF 50%, #A8EDEA 100%)',
                    boxShadow: '0 4px 15px rgba(255,154,158,0.3)',
                  }}
                >
                  내 미션 확인하기 ✉️
                </button>
                </div>
              </form>
            </div>

            <div
              className="absolute -bottom-2 -left-2 text-2xl select-none pointer-events-none"
              style={{ transform: 'rotate(-15deg)' }}
            >
              📌
            </div>
            <div
              className="absolute -bottom-1 -right-2 text-xl select-none pointer-events-none"
              style={{ transform: 'rotate(10deg)' }}
            >
              🖇️
            </div>
          </div>

          <div className="mt-5 text-center">
            <div className="flex justify-center gap-3 mb-2">
              {['🎓', '💌', '🎉', '🌟', '🎪'].map((emoji, i) => (
                <span
                  key={i}
                  className="text-xl cursor-default select-none"
                  style={{ transform: `rotate(${(i - 2) * 8}deg)` }}
                >
                  {emoji}
                </span>
              ))}
            </div>
            <p
              className="text-xs text-gray-300"
              style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif" }}
            >
              Made with okto for 2026 새내기
            </p>
          </div>
        </div>
      ) : (
        <div
          className={`w-full max-w-[400px] relative z-10 transition-all duration-500 ${
            showMission ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="text-center mb-5">
            <div className="inline-block relative mb-2">
              <div
                className="bg-white rounded-xl p-2 shadow-md border border-amber-100"
                style={{ transform: 'rotate(2deg)' }}
              >
                <Image
                  src="https://public.readdy.ai/ai/img_res/97f10a1b-1917-4fed-9f65-a528591fc25f.png"
                  alt="Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 mx-auto"
                />
              </div>
            </div>
            <h1
              className="text-[34px] leading-tight text-gray-800"
              style={{ fontFamily: "var(--font-jua), sans-serif" }}
            >
              {currentUser?.name}님의<br />
              마니또 미션 💌
            </h1>
          </div>

          <div className="relative mx-auto">
            <div
              className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-12 h-4 rounded-sm z-20"
              style={{
                background:
                  'linear-gradient(135deg, #FECFEF 0%, #FFB6C1 100%)',
                transform: 'translateX(-50%) rotate(1deg)',
                opacity: 0.85,
              }}
            />

            <div
              className="bg-white rounded-2xl shadow-lg relative border border-gray-100 overflow-hidden"
              style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.06)' }}
            >
              <div
                className="relative py-3 px-4 text-center"
                style={{
                  background:
                    'linear-gradient(135deg, #FFF5E6 0%, #FFE8EC 50%, #E8F4FD 100%)',
                  borderBottom: '2px dashed #F0E0D0',
                }}
              >
                <span
                  className="text-base font-bold text-amber-700"
                  style={{ fontFamily: "var(--font-jua), sans-serif" }}
                >
                  🎯 비밀 미션 봉투
                </span>
              </div>

              <div className="p-7 space-y-5">
                <div
                  className={`transition-all duration-700 delay-200 ${
                    letterOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <div
                    className="relative rounded-xl p-6 border-2 border-dashed border-amber-200"
                    style={{
                      background:
                        'linear-gradient(170deg, #FFFDF5 0%, #FFF8F0 100%)',
                    }}
                  >
                    <div
                      className="absolute -top-2 -left-1 text-lg select-none pointer-events-none"
                      style={{ transform: 'rotate(-20deg)' }}
                    >
                      📮
                    </div>
                    <div
                      className="absolute -top-2 -right-1 text-lg select-none pointer-events-none"
                      style={{ transform: 'rotate(15deg)' }}
                    >
                      💝
                    </div>

                    <div className="text-center space-y-3">
                      <span
                        className="inline-block bg-white text-amber-600 text-xs px-3 py-0.5 rounded-lg border border-amber-100 shadow-sm"
                        style={{ fontFamily: "var(--font-jua), sans-serif" }}
                      >
                        오늘의 미션
                      </span>
                      <p
                        className="text-xl text-gray-800 leading-relaxed font-medium"
                        style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif" }}
                      >
                        &ldquo;{currentUser?.mission}&rdquo;
                      </p>
                      <div className="flex justify-center gap-1.5 pt-1">
                        <span className="text-base">💛</span>
                        <span className="text-base">🧡</span>
                        <span className="text-base">💖</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`transition-all duration-700 delay-500 ${
                    letterOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <div
                    className="rounded-xl p-3.5 text-center border border-pink-100"
                    style={{
                      background:
                        'linear-gradient(135deg, #FFF0F5 0%, #F5F0FF 100%)',
                    }}
                  >
                    <p
                      className="text-sm font-medium text-gray-600"
                      style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif" }}
                    >
                      쉿! 마니또는 비밀이에요 🤫
                    </p>
                    <p
                      className="text-xs text-gray-400 mt-0.5"
                      style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif" }}
                    >
                      미션을 완수하고 마니또를 감동시켜 보세요!
                    </p>
                  </div>
                </div>

                <div
                  className={`flex justify-center gap-3 text-xl transition-all duration-700 delay-700 ${
                    letterOpen ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {['💝', '🎈', '✨', '🎁', '🌸'].map((e, i) => (
                    <span
                      key={i}
                      className="cursor-default select-none"
                      style={{ transform: `rotate(${(i - 2) * 10}deg)` }}
                    >
                      {e}
                    </span>
                  ))}
                </div>

                <button
                  onClick={handleLogout}
                  className="w-full bg-gray-50 text-gray-500 py-3 rounded-xl hover:bg-gray-100 transition-all whitespace-nowrap cursor-pointer border border-gray-200 text-sm font-medium"
                  style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif" }}
                >
                  돌아가기 👋
                </button>
              </div>
            </div>

            <div
              className="absolute -bottom-2 -right-2 text-xl select-none pointer-events-none"
              style={{ transform: 'rotate(8deg)' }}
            >
              📎
            </div>
          </div>

          <div className="mt-5 text-center">
            <p
              className="text-xs text-gray-300"
              style={{ fontFamily: "var(--font-noto-sans-kr), sans-serif" }}
            >
              🌟 2026 새내기 환영합니다! 🌟
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
