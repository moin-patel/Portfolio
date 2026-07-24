import { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const navLinks = ['Projects', 'Experience', 'Services', 'Contact'];

const socialLinks = [
  { name: "LinkedIn", url: "https://linkedin.com/in/moinuddin-patel", icon: <FaLinkedin /> },
  { name: "GitHub", url: "https://github.com/moin-patel", icon: <FaGithub /> },
  { name: "LeetCode", url: "https://leetcode.com/u/Moin_Ali/", icon: <SiLeetcode /> },
];

const Footer = () => {
  const [isLoading, setIsLoading] = useState(false);

const handleDownload = () => {
  setIsLoading(true);

  setTimeout(() => {
    const link = document.createElement('a');

    link.href = '/resume.pdf';
    link.download = 'Moinuddin_Patel_Resume.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsLoading(false);
  }, 1000);
};
  return (
    <footer className="relative bg-[#f5f5f5] text-[#1a1a1a] font-inter overflow-hidden border-t border-black/5 w-screen min-h-screen flex flex-col justify-center">

      {/* Big Name watermark */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none select-none overflow-hidden">
        <p className="text-[15vw] md:text-[15vw] font-black uppercase tracking-tighter leading-none text-black/[0.04] whitespace-nowrap translate-y-[30%] text-center">
          Moinuddin
        </p>
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">

        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16 md:mb-20">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#f03e3e] mb-3">Portfolio</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none text-[#1a1a1a] mb-4">Moinuddin</h2>
            <p className="text-black/40 text-sm md:text-base font-medium max-w-xs leading-relaxed">
              Full-stack developer architecting scalable, user-focused web solutions using modern tech, cloud, and AI.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <button
              onClick={handleDownload}
              disabled={isLoading}
              className={`group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#f03e3e] text-white font-black uppercase tracking-widest text-sm rounded-full transition-all duration-300 ${isLoading ? 'opacity-80 cursor-wait' : 'hover:scale-105 hover:shadow-[0_0_40px_rgba(240,62,62,0.35)]'}`}
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Downloading...
                </>
              ) : (
                <>
                  Download Resume
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </>
              )}
            </button>
            <p className="text-black/20 text-xs font-medium">Available for freelance · 2026</p>
          </div>
        </div>


        <div className="mb-16">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-black/30 mb-4">Philosophy</h4>
          <p className="text-xl md:text-2xl font-serif italic text-black/60 max-w-2xl">
            Transforming ideas into scalable applications by combining modern technologies, efficient architectures, and user-focused experiences.
          </p>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent mb-12 md:mb-16" />


        <div className="flex flex-wrap gap-6 mb-12">
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}-section`}
              className="text-sm font-bold text-black/50 hover:text-[#f03e3e] transition-colors duration-200 uppercase tracking-widest"
            >
              {link}
            </a>
          ))}
        </div>


        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-black/20 text-xs font-medium">© 2026 Moin. All rights reserved.</p>
          <div className="flex gap-8">
            {socialLinks.map(s => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold text-black/40 hover:text-[#f03e3e] transition-colors duration-200 uppercase tracking-widest"
              >
                <span className="text-base">{s.icon}</span>
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
