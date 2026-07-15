import  { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import aboutImg from '../assets/about/myphoto2.jpeg';
import bouginImg from '../assets/about/bougin.png';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Initial states
    gsap.set('.about-text', { y: -100, opacity: 0 });
    gsap.set('.me-text', { y: 100, opacity: 0 });
    gsap.set('.about-line', { scaleY: 0, transformOrigin: 'top' });
    gsap.set('.me-line', { scaleY: 0, transformOrigin: 'bottom' });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 75%',
      onEnter: () => {
        const tl = gsap.timeline();
        
        tl.to('.about-text', { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' })
          .to('.me-text', { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }, '<')
          .to('.about-line', { scaleY: 1, duration: 1, ease: 'expo.inOut' }, '-=0.8')
          .to('.me-line', { scaleY: 1, duration: 1, ease: 'expo.inOut' }, '<');
      }
    });

    gsap.to('.about-word', {
      color: 'rgba(0, 0, 0, 0.9)',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.about-paragraph',
        start: 'top 85%',
        end: 'bottom 50%',
        scrub: true,
      }
    });
  }, { scope: containerRef });

    return (
      
  <section
    id="about-section"
    ref={containerRef}
    className="relative w-screen min-h-screen bg-white overflow-hidden flex flex-col px-6 md:px-12 pt-20 md:pt-28 pb-10"
  >


    <div className="absolute top-10 right-[-8%] text-[180px] md:text-[260px] font-black uppercase leading-none text-black/[0.03] pointer-events-none select-none">
      ABOUT
    </div>

    
    <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#f03e3e]/5 blur-3xl pointer-events-none" />


    <div className="absolute top-0 right-0 w-[55vw] md:w-[36vw] max-w-[520px] h-[42vh] md:h-[72vh] overflow-hidden z-0">

      <img
        src={aboutImg}
        alt="Moinuddin Patel"
        className="w-full h-full object-cover object-top"
        style={{
          filter: "contrast(1.08) grayscale(0.08)",
        }}
      />

   
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent pointer-events-none" />


      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />


    </div>

  
    <div className="flex-1 flex flex-col justify-center relative w-full h-full max-w-screen-xl mx-auto">

      <div className="relative z-20 flex flex-col h-full mt-8">

    
        <div className="w-full flex items-end mt-[15vh] md:mt-0">

          <div className="relative">

            <div className="absolute -left-5 top-3 h-44 w-[4px] rounded-full bg-[#f03e3e]" />

        <h1 className="about-text text-[100px] md:text-[220px] font-black leading-[0.75] tracking-[-0.08em] ml-[-1vw] relative text-black">
    ABOUT

    <div className="about-line absolute bottom-[74%] left-[58%] w-[2px] bg-black h-screen hidden md:block" />
  </h1>

          </div>

        </div>

        {/* ME */}
        <div className="w-full flex items-center mt-4 md:mt-6">

          <h1 className="me-text text-[clamp(100px,22vh,24vw)] font-black leading-[0.75] tracking-[-0.06em] ml-[-1vw] relative text-black">

            me.

        
            <div className="me-line absolute top-[75%] left-[24%] w-[2px] bg-black h-[100vh] hidden md:block" />

        
            <div className="absolute left-3 bottom-[-20px] w-32 h-[5px] rounded-full bg-[#f03e3e]" />

          </h1>

        </div>

  
        <div className="mt-auto max-w-2xl pl-0 sm:pl-[10%] md:pl-[22%] relative z-20 pb-20 md:pb-12">

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6 mt-0 mt-16">

            {[
              "Full Stack Developer",
              "MERN Stack",
              "Java",
              "Open Source",
              "India",
            ].map((tag) => (

              <span
                key={tag}
                className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-[#f03e3e]/30 text-[#f03e3e] bg-[#f03e3e]/5"
              >
                {tag}
              </span>

            ))}

          </div>
                  {/* Heading */}
          <h2 className="text-[clamp(22px,4vw,3.2rem)] font-black tracking-tight leading-none mb-6">
            Building Scalable Digital Experiences.
          </h2>

    
          <p className="about-paragraph text-[11px] md:text-xs lg:text-sm font-bold leading-relaxed tracking-tight max-w-xl text-justify">
            {`I'm Moinuddin Patel, a passionate Full Stack Developer who loves building modern, scalable, and user-friendly web applications. Skilled in React.js, Next.js, Node.js, Express.js, MongoDB, and familier about Java, I enjoy solving real-world problems, developing efficient REST APIs, and continuously improving through projects and Data Structures & Algorithms..`
              .split(" ")
              .map((word, index) => (
                <span
                  key={index}
                  className="about-word text-black/20 transition-colors duration-300 hover:text-black"
                >
                  {word}{" "}
                </span>
              ))}
          </p>

          {/* Current Focus Card */}
          <div className="mt-8 border-l-4 border-[#f03e3e] pl-5">

            <p className="text-[11px] uppercase tracking-[0.35em] font-bold text-[#f03e3e]">
              CURRENT FOCUS
            </p>

            <h3 className="text-2xl font-black mt-2">
              Full Stack Web Development
            </h3>

            <p className="text-sm text-black/60 leading-7 mt-2 max-w-lg">
          Currently building scalable MERN stack applications,
          crafting responsive user interfaces, developing secure REST APIs,
          and continuously improving my problem-solving skills through
          Data Structures & Algorithms.
            </p>

          </div>

          {/* Expertise */}
          <div className="grid grid-cols-2 gap-4 mt-8">

            <div className="border border-black/10 rounded-xl p-5 hover:border-[#f03e3e]/40 transition-all">

              <p className="text-[#f03e3e] text-xs uppercase tracking-[0.25em] font-bold">
                Frontend
              </p>

              <h4 className="font-black text-lg mt-2">
                ..
              </h4>

              <p className="text-sm text-black/60 mt-2 leading-6">
               React.js • Tailwind CSS • Bootstrap • GSAP • 
              </p>

            </div>
             <div className="border border-black/10 rounded-xl p-5 hover:border-[#f03e3e]/40 transition-all duration-300 hover:shadow-lg">
             
               <p className="text-[#f03e3e] text-xs uppercase tracking-[0.25em] font-bold">
                 Backend & DataBase
               </p>
             
               <h4 className="font-black text-lg mt-2">
                 ..
               </h4>
             
               <p className="text-sm text-black/60 mt-2 leading-6">
                 Node.js, Express.js, MongoDB, REST APIs, JWT Authentication
               </p>
             
             </div>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

            {[
              ["5+", "Projects"],
              ["150+", "DSA Solved"],
              ["10+", "Tech stack"],
              ["100%", "Dedication"],
            ].map(([num, label]) => (

              <div
                key={label}
                className="border-l-2 border-[#f03e3e] pl-4"
              >

                <p className="text-3xl font-black text-[#f03e3e]">
                  {num}
                </p>

                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/40 mt-2">
                  {label}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
    



<img
  src={bouginImg}
  alt="Decoration"
  className="absolute bottom-52 -right-6 w-64 md:w-80 lg:w-[420px] object-contain pointer-events-none z-10 opacity-90"
/>

    
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />

  </section>
  );
};

export default AboutSection;