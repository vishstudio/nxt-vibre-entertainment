"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Zap, Play, X, Volume2, VolumeX } from 'lucide-react';

const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const maskRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Animation Refs for Smooth Lerping
  const rafId = useRef<number | null>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentRotation = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });

  // Helper for linear interpolation (smoothing)
  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Set initial mouse position to center
    mousePos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mousePos.current = { x: clientX, y: clientY };

      // Update Mask (Spotlight effect) - Direct update is fine for mask
      if (maskRef.current) {
        const gradient = `radial-gradient(circle 350px at ${clientX}px ${clientY}px, transparent 10%, black 100%)`;
        maskRef.current.style.maskImage = gradient;
        maskRef.current.style.webkitMaskImage = gradient;
      }

      // Calculate new target rotation based on mouse position
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = clientX - cx;
      const dy = clientY - cy;

      targetRotation.current = {
        x: (dy / cy) * -8, // Max tilt vertical
        y: (dx / cx) * 8   // Max tilt horizontal
      };
    };

    const handleScroll = () => {
      if (textRef.current) {
        const scrollY = window.scrollY;
        textRef.current.style.transform = `translateY(${scrollY * 0.4}px) translateZ(0)`;
      }
    };

    const animate = () => {
      if (cardRef.current && !isPlaying) {
        // Smoothly interpolate current rotation towards target
        currentRotation.current.x = lerp(currentRotation.current.x, targetRotation.current.x, 0.08);
        currentRotation.current.y = lerp(currentRotation.current.y, targetRotation.current.y, 0.08);

        // Apply 3D Transform without CSS transition interference
        cardRef.current.style.transform = `perspective(1200px) rotateX(${currentRotation.current.x}deg) rotateY(${currentRotation.current.y}deg) scale3d(1, 1, 1) translateZ(0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isPlaying]);

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(true);
    // Reset rotation when playing to avoid awkward angles
    targetRotation.current = { x: 0, y: 0 };
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  const closeVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(false);
  };

  return (
    <section
      className="relative h-screen w-full bg-black overflow-hidden flex flex-col justify-center items-center"
    >

      {/* 1. Base Layer: The Static Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="https://videos.pexels.com/video-files/4125027/4125027-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 2. Darkness Layer (Spotlight Mask) */}
      <div
        ref={maskRef}
        className="absolute inset-0 z-10 bg-black pointer-events-none transition-opacity duration-1000"
        style={{
          maskImage: `radial-gradient(circle 350px at 50% 50%, transparent 10%, black 100%)`,
          WebkitMaskImage: `radial-gradient(circle 350px at 50% 50%, transparent 10%, black 100%)`,
        }}
      >
        <div className="absolute inset-0 bg-grain opacity-20"></div>
      </div>

      {/* Grid Lines - Enhanced Pop */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-0 animate-fade-in" style={{ animationDelay: '1.5s' }}>
        <div className="absolute left-[15%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.2)] hidden md:block"></div>
        <div className="absolute right-[15%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.2)] hidden md:block"></div>
        <div className="absolute top-[25%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>
        <div className="absolute bottom-[25%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>
      </div>

      {/* 3. CENTER CONTENT CONTAINER */}
      <div className="relative z-20 w-full h-full flex items-center justify-center">

        {/* A. TYPOGRAPHY (Background Layer - Z-10) */}
        <div
          ref={textRef}
          className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none px-4 md:px-8 will-change-transform"
        >
          <div className="flex flex-col w-auto max-w-full">
            <div className="overflow-visible">
              <h1 className="font-display font-black text-[24vw] md:text-[26vw] leading-[0.8] tracking-tighter text-white select-none animate-swipe-up mix-blend-overlay md:mix-blend-normal whitespace-nowrap">
                VIBRÉ
              </h1>
            </div>

            <div className="h-4 md:h-12"></div>

            <div className="w-full flex justify-between animate-fade-in opacity-0">
              {"ENTERTAINMENT".split("").map((char, i) => (
                <span key={i} className="font-mono text-white/80 text-[1.5vw] md:text-[2vw] font-bold block">
                  {char}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* B. 3D TILTING VIDEO CARD (Foreground Layer - Z-30) */}
        <div className="relative z-30 animate-card-entrance opacity-0">
          <div
            ref={cardRef}
            onClick={!isPlaying ? handlePlayClick : undefined}
            className={`
                relative w-[360px] md:w-[800px] aspect-video
                bg-black border border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.9)]
                rounded-[2rem] overflow-hidden
                ${!isPlaying ? 'cursor-pointer group' : 'cursor-default'}
                will-change-transform
              `}
            style={{
              transformStyle: 'preserve-3d',
              transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0)'
            }}
          >
            {/* Media Layer */}
            <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
              {isPlaying ? (
                <div className="relative w-full h-full bg-black">
                  <video
                    ref={videoRef}
                    autoPlay
                    muted={isMuted}
                    loop
                    playsInline
                    className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-700"
                  >
                    <source src="https://videos.pexels.com/video-files/2022395/2022395-hd_1920_1080_30fps.mp4" type="video/mp4" />
                  </video>

                  {/* Video Controls Overlay */}
                  <div className="absolute top-6 right-6 z-30 flex items-center gap-4">
                    <button
                      onClick={toggleMute}
                      className="bg-black/40 backdrop-blur-md p-3 rounded-full text-white hover:bg-brand transition-colors"
                    >
                      {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    </button>
                    <button
                      onClick={closeVideo}
                      className="bg-black/40 backdrop-blur-md p-3 rounded-full text-white hover:bg-red-500 transition-colors"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <img
                    src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1600"
                    alt="Club Atmosphere"
                    className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-brand flex items-center justify-center shadow-[0_0_30px_rgba(255,77,0,0.4)] group-hover:scale-110 transition-transform duration-300 group-hover:bg-brand/90 group-hover:shadow-[0_0_50px_rgba(255,77,0,0.6)]">
                      <Play size={32} className="fill-white text-white ml-2" />
                    </div>
                  </div>
                </>
              )}

              {/* Persistent UI Elements */}
              <div className={`transition-opacity duration-500 pointer-events-none ${isPlaying ? 'opacity-30' : 'opacity-100'}`}>
                <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_red]"></div>
                  <span className="font-mono text-[10px] font-bold tracking-widest text-white/80 uppercase">Rec</span>
                </div>
                <div className="absolute bottom-6 left-6 z-20 transition-transform duration-300 group-hover:translate-x-2">
                  <h3 className="font-display font-bold text-white text-lg tracking-wide leading-none">SHOWREEL</h3>
                  <p className="font-mono text-[10px] text-white/60 tracking-widest mt-1 uppercase">Highlights 2024</p>
                </div>
                <div className="absolute bottom-6 right-6 z-20 bg-black/30 backdrop-blur-sm px-2 py-1 rounded text-white/90 font-mono text-[10px] font-bold border border-white/10">
                  01:45
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 4. Accents Layer (UI Elements) - Z-40 */}
      <div className="absolute inset-0 z-40 pointer-events-none flex flex-col justify-between items-center p-8 md:p-12">
        <div className="flex items-center gap-3 mt-16 md:mt-0 animate-ui-reveal opacity-0">
          <Zap size={16} className="text-brand animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-white/90">Audio Visual Experience</span>
          <Zap size={16} className="text-brand animate-pulse" />
        </div>
        <div className="flex-grow"></div>
        <div className="flex flex-col items-center gap-4 mb-4 md:mb-8 animate-ui-reveal opacity-0" style={{ animationDelay: '2.6s' }}>
          <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-brand/30 to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-brand shadow-[0_0_10px_#FF4D00] animate-drop-scroll"></div>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-brand/80">Scroll</span>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none p-8 md:p-12 z-20">
        <div className="absolute top-8 left-8 border-l border-t border-brand/50 w-8 h-8 animate-ui-reveal opacity-0" style={{ animationDelay: '2.6s' }}></div>
        <div className="absolute top-8 right-8 border-r border-t border-brand/50 w-8 h-8 animate-ui-reveal opacity-0" style={{ animationDelay: '2.7s' }}></div>
        <div className="absolute bottom-8 left-8 border-l border-b border-brand/50 w-8 h-8 animate-ui-reveal opacity-0" style={{ animationDelay: '2.8s' }}></div>
        <div className="absolute bottom-8 right-8 border-r border-b border-brand/50 w-8 h-8 animate-ui-reveal opacity-0" style={{ animationDelay: '2.9s' }}></div>
      </div>

      <style>{`
        @keyframes swipe-up {
           0% { transform: translateY(100%); }
           100% { transform: translateY(0); }
        }
        .animate-swipe-up {
           animation: swipe-up 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fade-in {
           0% { opacity: 0; }
           100% { opacity: 1; }
        }
        .animate-fade-in {
           animation: fade-in 1.5s ease-out forwards;
           animation-delay: 1.0s;
        }

        @keyframes card-entrance {
           0% { opacity: 0; transform: scale(0.9) translateY(40px); filter: blur(12px); }
           100% { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
        }
        .animate-card-entrance {
           animation: card-entrance 2.0s cubic-bezier(0.16, 1, 0.3, 1) forwards;
           animation-delay: 1.2s;
        }

        @keyframes fade-in-up {
           0% { opacity: 0; transform: translateY(20px); }
           100% { opacity: 1; transform: translateY(0); }
        }
        .animate-ui-reveal {
           animation: fade-in-up 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
           animation-delay: 2.4s;
        }

        @keyframes drop-scroll {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        .animate-drop-scroll {
          animation: drop-scroll 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
        }
      `}</style>

    </section>
  );
};

export default Hero;