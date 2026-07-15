

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import designImg1 from '../assets/service/left.png';
import designImg2 from '../assets/service/right.png';
import designImg3 from '../assets/about/myphoto2.jpeg';

import project1Img from '../assets/project/expenseP.png';
import project2Img from '../assets/project/mentoraP.png';
import project3Img from '../assets/project/protfolioP.png';
import project4Img from '../assets/project/todoP.png';


gsap.registerPlugin(ScrollTrigger);


const projects = [
  
  {
    id: '02',
    title: 'Mentora Learning Platform',
    category: 'Full Stack Development · MERN LMS',
    description:
      'Built a complete online learning platform where users can explore courses, enroll in programs, watch lectures, and manage their learning journey. Includes authentication, course management, and an interactive dashboard for creators and students.',
    tags: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
      'JWT Authentication'
    ],
    year: '2026',
    color: '#7c3aed',
    img: project2Img,
    liveLink: 'https://mentora-1-1hsv.onrender.com',
    githubLink: 'https://github.com/moin-patel/Mentora',
  },
  {
    id: '01',
    title: 'Expense Tracker Web App',
    category: 'Full Stack Development · MERN Application',
    description:
      'Developed a modern expense tracking application using the MERN stack that helps users manage income and expenses, visualize financial data through interactive charts, and maintain their personal finance records efficiently.',
    tags: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
      'JWT Authentication'
    ],
    year: '2026',
    color: '#6366f1',
    img: project1Img,
    liveLink: 'https://expensetracker-2-cglh.onrender.com',
    githubLink: 'https://github.com/moin-patel/ExpenseTracker',
  },
  {
    id: '03',
    title: 'Interactive Developer Portfolio',
    category: 'Web Development · Creative Portfolio',
    description:
      'Designed and developed a modern personal portfolio website to showcase projects, skills, and professional journey with smooth animations, responsive layouts, and interactive user experiences.',
    tags: [
      'React.js',
      'Tailwind CSS',
      'GSAP',
      'Three.js',
      'Responsive Design',

    ],
    year: '2026',
    color: '#0ea5e9',
    img: project3Img,
    liveLink: 'https://your-portfolio-link.vercel.app',
    githubLink: 'https://github.com/moin-patel/Portfolio',
  },
  {
    id: '04',
    title: ' Todo List Application',
    category: 'Web Development · Productivity App',
    description:
      'Developed a simple and efficient todo management application that helps users organize daily tasks, track progress, and manage activities with an intuitive and responsive interface.',
    tags: [
      'React.js',
      'JavaScript',
      'Local Storage',
      'Responsive Design',

    ],
    year: '2026',
    color: '#f59e0b',
    img: project4Img,

    liveLink: 'https://todo-yg4w.onrender.com',
    githubLink: 'https://github.com/moin-patel/TODO',
  },

];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setTilt({ x: y * -10, y: x * 10 });
  };

  return (
    <div
      id='projects-section'
      ref={cardRef}
      className="project-card group cursor-pointer"
      style={{ perspective: '1200px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
      onMouseEnter={() => setHovered(true)}
    >
      <div
        className="relative w-full rounded-3xl border overflow-hidden transition-all duration-300 bg-white"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: 'preserve-3d',
          border: hovered ? `1px solid ${project.color}50` : '1px solid rgba(0,0,0,0.06)',
          boxShadow: hovered
            ? `0 30px 80px rgba(0,0,0,0.15), 0 0 0 1px ${project.color}30`
            : '0 8px 32px rgba(0,0,0,0.08)',
        }}
      >
        {/* Project image preview */}
        <div className="w-full h-40 md:h-52 overflow-hidden relative">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700"
            style={{ transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white pointer-events-none" />
          <span
            className="absolute top-4 right-4 text-xs font-black px-3 py-1 rounded-full text-white"
            style={{ background: project.color }}
          >
            {project.year}
          </span>
        </div>
     
        <div className="relative p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
      
          {/* Number */}
          <div className="shrink-0">
            <span
              className="text-6xl md:text-7xl font-black leading-none select-none transition-all duration-300"
              style={{ color: hovered ? project.color : 'rgba(0,0,0,0.08)', WebkitTextStroke: hovered ? '0px' : `2px ${project.color}50` }}
            >
     
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          {/* Content */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border" style={{ color: project.color, borderColor: `${project.color}40`, background: `${project.color}10` }}>
                {project.category}
              </span>
              <span className="text-xs font-bold text-white/30">{project.year}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-[#1a1a1a] tracking-tight leading-none">
              {project.title}
            </h3>
            <p className="text-black/50 text-sm md:text-base leading-relaxed font-medium">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-bold text-black/40 px-3 py-1 rounded-full bg-black/5 border border-black/10">
                  {tag}
                </span>
              ))}
            </div>

            {(project.liveLink || project.figmaLink || project.behanceLink || project.githubLink) && (
              <div className="flex flex-wrap gap-4 mt-4">

                {/* Live Website */}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 hover:bg-blue-500/10 transition-colors duration-300"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>

                    <span className="text-xs font-bold text-black/70">
                      Live
                    </span>
                  </a>
                )}


                {/* GitHub */}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 hover:bg-black/5 transition-colors duration-300"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 
            0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 
            1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 
            0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 
            0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 
            1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 
            0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 
            0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"
                      />
                    </svg>

                    <span className="text-xs font-bold text-black/70">
                      GitHub
                    </span>
                  </a>
                )}

              </div>
            )}
          </div>

          {/* Arrow */}
          <div className="shrink-0 self-center">
            <div
              className="w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300"
              style={{
                borderColor: hovered ? project.color : 'rgba(255,255,255,0.1)',
                background: hovered ? project.color : 'transparent',
                transform: hovered ? 'rotate(-45deg)' : 'rotate(0deg)',
              }}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from('.projects-title', {
      y: 80, opacity: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: '.projects-title', start: 'top 85%' }
    });
    gsap.from('.project-card', {
      y: 100, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
      scrollTrigger: { trigger: '.project-card', start: 'top 90%' }
    });

    gsap.from('.design-bg-img', {
      opacity: 0, scale: 0.9, duration: 1.5, stagger: 0.2, ease: 'power2.out',
      scrollTrigger: { trigger: '#projects-section', start: 'top 80%' }
    });
  }, { scope: sectionRef });

  return (
    <section id="projects-section" ref={sectionRef} className="relative bg-white text-[#1a1a1a] w-screen min-h-screen py-20 md:py-32 font-inter overflow-hidden flex flex-col justify-center">

      {/* Light grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.4) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      
      <img
        src={designImg1}
        alt=""
        className="design-bg-img absolute -left-10 top-1/4 w-32 md:w-56 opacity-[0.08] pointer-events-none select-none z-0 mix-blend-multiply"
      />
   
      <img
        src={designImg2}
        alt=""
        className="design-bg-img absolute -right-10 top-2/3 w-36 md:w-64 opacity-[0.08] pointer-events-none select-none z-0 mix-blend-multiply"
      />
 
      <img
        src={designImg3}
        alt=""
        className="design-bg-img absolute left-6 bottom-4 w-20 md:w-32 h-20 md:h-32 object-cover rounded-full opacity-[0.05] grayscale pointer-events-none select-none z-0"
      />


      <div className="relative w-full max-w-5xl mx-auto px-6 md:px-12 z-10">

        {/* Header */}
        <div className="projects-title mb-16 md:mb-24">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#f03e3e] mb-4">Selected Work</p>
          <h2 className="text-[15vw] md:text-[10vw] font-black uppercase leading-[0.85] tracking-tighter text-[#1a1a1a]">
            Projects
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;