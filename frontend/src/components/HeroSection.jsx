import  { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import heroImg from '../assets/hero/myphoto1.jpeg';
import flowerImg2 from '../assets/Flower/rose.png';

gsap.registerPlugin(ScrollTrigger);

const BadgeClip = ({ className }) => (
  <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={`drop-shadow-lg ${className}`} style={{ overflow: 'visible' }}>
    <rect x="25" y="20" width="30" height="5" fill="#111827" />
    <path d="M 30 30 L 50 30 C 55 30 55 45 50 45 L 30 45 C 25 45 25 30 30 30 Z" fill="#d1d5db" />
    <circle cx="40" cy="37" r="4" fill="#4b5563" />
    <path d="M 32 45 L 48 45 L 45 70 L 35 70 Z" fill="#9ca3af" />
    <rect x="20" y="70" width="40" height="12" rx="3" fill="#d1d5db" />
    <rect x="15" y="82" width="50" height="6" rx="2" fill="#6b7280" />
  </svg>
);

const HeroSection = ({ preloaderDone }) => {
  const heroRef = useRef(null);
  const badgeRef = useRef(null);
  const dragState = useRef({ isDragging: false, startY: 0, currentY: 0 });
  const scrollOffset = useRef(0);

  useGSAP(() => {
    // Set initial states to hide elements before preloader finishes
    gsap.set('.hero-text-anim', { opacity: 0, y: 40 });
    gsap.set('.hero-bottom-img', { opacity: 0, y: 60 });
    gsap.set(badgeRef.current, { y: -window.innerHeight, rotationZ: 15 });

    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "bottom top",
      onUpdate: (self) => {
        const scrolled = Math.max(0, self.scroll() - self.start);
        scrollOffset.current = scrolled;
      }
    });
  });

  useGSAP(() => {
    if (preloaderDone) {
      const tl = gsap.timeline();
      
      tl.to(badgeRef.current, {
        y: 0,
        rotationZ: 0,
        duration: 2,
        ease: "elastic.out(1, 0.4)",
      })
      .to('.hero-text-anim', {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out"
      }, "-=1.2")
      .to('.hero-bottom-img', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8");
    }
  }, [preloaderDone]);

  const handlePointerDown = (e) => {
    dragState.current.isDragging = true;
    dragState.current.startY = e.clientY - dragState.current.currentY;
  };

  const handlePointerMove = (e) => {
    if (!dragState.current.isDragging) return;
    let newY = e.clientY - dragState.current.startY;
    if (newY < 0) newY = 0;
    const pullDistance = newY * 0.4;
    dragState.current.currentY = pullDistance;
    gsap.set(badgeRef.current, { y: pullDistance, rotationZ: pullDistance * 0.02 });
    gsap.set('#lanyard-strap', { height: `calc(80px + ${scrollOffset.current * 0.3}px + ${pullDistance}px)` });
  };

  const handlePointerUp = () => {
    if (!dragState.current.isDragging) return;
    dragState.current.isDragging = false;
    dragState.current.currentY = 0;
    gsap.to(badgeRef.current, { y: 0, rotationZ: 0, duration: 1.2, ease: "elastic.out(1, 0.4)" });
    gsap.to('#lanyard-strap', { height: `calc(80px + ${scrollOffset.current * 0.3}px)`, duration: 1.2, ease: "elastic.out(1, 0.4)" });
  };

  return (


  <section
  ref={heroRef}
  className="bg-white min-h-screen w-full relative flex flex-col font-inter text-[#1a1a1a] overflow-hidden"
  onPointerMove={handlePointerMove}
  onPointerUp={handlePointerUp}
  onPointerLeave={handlePointerUp}
>

  <div className="badge-pin-container absolute inset-0 z-[40] pointer-events-none w-full h-full" style={{ perspective: '1500px' }}>
    <div className="badge-3d-wrapper w-[280px] md:w-[320px] scale-[0.75] sm:scale-[0.85] md:scale-100 pointer-events-none flex flex-col items-center absolute top-[40%] md:top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 origin-top">
      <div ref={badgeRef} onPointerDown={handlePointerDown} className="relative flex flex-col items-center w-full origin-top pointer-events-none z-10">
        <div id="lanyard-strap" className="absolute bottom-full w-[14px] bg-[#1a1a1a] origin-top z-0" style={{ height: '30vh', marginBottom: '-10px' }}>
          <div className="absolute inset-0 opacity-20" style={{ background: 'repeating-linear-gradient(90deg, transparent, transparent 2px, #fff 2px, #fff 4px)' }} />
        </div>
        <BadgeClip className="w-[50px] h-[60px] -mb-[8px] z-30 pointer-events-auto cursor-grab relative" />
        <div className="w-[280px] md:w-[320px] relative p-[15px] rounded-[15px] bg-white/20 border-2 border-white/80 shadow-[0_15px_35px_rgba(0,0,0,0.1),inset_0_0_10px_rgba(255,255,255,0.8)] backdrop-blur-sm flex flex-col pointer-events-auto cursor-grab active:cursor-grabbing">
          <div className="bg-[#fcfcfc] rounded-[5px] p-5 pt-8 pb-5 flex flex-col border border-gray-200 h-[390px] md:h-[455px] relative z-0">
            <div className="leading-[0.85] tracking-tighter text-[#111] font-black text-4xl mb-5">NEW<br />PORTFOLIO</div>
            <div className="w-full flex justify-center mb-5">
              <div className="w-[165px] h-[200px] bg-gray-200 overflow-hidden shadow-sm">
                <img src={heroImg} alt="Portrait" className="w-full h-full object-cover object-top scale-110 grayscale contrast-125" />
              </div>
            </div>
            <div className="flex flex-col gap-5 mt-auto">
              <div className="flex items-end font-bold text-[11px] relative">
                <span className="mr-2 uppercase">NAME</span>
                <div className="flex-1 border-b-2 border-dotted border-black mb-[2px]" />
                <span className="absolute left-[50px] -bottom-0 font-cursive text-[24px] text-black whitespace-nowrap z-10">Moinuddin Patel</span>
              </div>
              <div className="flex items-end font-bold text-[11px] relative">
                <span className="mr-2 uppercase">ROLE</span>
                <div className="flex-1 border-b-2 border-dotted border-black mb-[2px]" />
                <span className="absolute left-[50px] -bottom-0 font-cursive text-[22px] text-black whitespace-nowrap z-10">Full Stack Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div className="absolute top-[50vh] md:top-[55vh] left-0 w-full flex items-center justify-center z-10 px-4">
    <h1 className="hero-text-anim text-[16vw] md:text-[clamp(80px,26vh,30vw)] font-black leading-[0.75] text-[#111] uppercase text-center select-none">portfolio</h1>
  </div>

  
  <div className="hero-text-anim absolute left-6 bottom-10 z-20 flex flex-col gap-2">
    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">Full Stack Developer</p>
    <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Open for Opportunities</span>
    </div>
  </div>


  <div className="hero-text-anim absolute right-6 bottom-10 z-20 hidden sm:flex flex-col items-center gap-2">
    <div className="w-[24px] h-[38px] border-2 border-gray-400 rounded-full flex justify-center p-1 relative">
      <div className="w-[4px] h-[8px] bg-gray-400 rounded-full animate-bounce mt-1" />
    </div>
    <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-gray-400">Scroll</p>
  </div>


  <img src={flowerImg2} alt="" className="hero-bottom-img absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 w-[20rem] md:w-[35rem] object-contain pointer-events-none z-0" />


  <div className="hero-text-anim absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
    <div className="w-8 h-px bg-[#f03e3e]" />
    <p className="text-[10px] font-bold text-[#f03e3e] uppercase tracking-widest">Moin</p>
    <div className="w-8 h-px bg-[#f03e3e]" />
  </div>
</section>


);
};

export default HeroSection;