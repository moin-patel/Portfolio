
import { useRef } from "react";
import { categories } from "../data/toolsData.js";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const ToolsSection = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {

    const title = new SplitType(".section-title", { types: "words" });
    const description = new SplitType(".section-description", { types: "lines" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(".section-tag", {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    })
      .from(
        title.words,
        {
          y: 80,
          opacity: 0,
          rotateX: -90,
          stagger: 0.03,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.2"
      )
      .from(
        description.lines,
        {
          y: 40,
          opacity: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      )

      .from(
        ".tool-card",
        {
          y: 50,
          opacity: 0,
          scale: 0.8,
          stagger: 0.05,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-white overflow-hidden"
    >
 
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-[#f03e3e]/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="tools-heading text-center max-w-4xl mx-auto mb-24">

          <p className="section-tag text-[#f03e3e] uppercase tracking-[0.35em] text-sm font-bold">
            MY DEVELOPMENT STACK
          </p>

          <h2 className="section-title mt-4 text-[clamp(2.8rem,6vw,5rem)] font-black text-[#111]">
            Tools & Technologies
          </h2>

          <p className="section-description mt-6 text-[#555] leading-8 text-lg max-w-3xl mx-auto">
            As a passionate Full Stack Developer, I enjoy working with modern
            technologies and continuously learning new tools to build
            responsive, scalable, and user-friendly web applications.
          </p>

        </div>

        {/* Categories */}
        <div className="space-y-20 ">

          {categories.map((category) => (

            <div
              key={category.title}
              className="category"
            >

              <div className="flex flex-col items-center mb-12">

                <h3 className="text-3xl md:text-4xl font-black text-[#111]">
                  {category.title}
                </h3>

                <div className="w-16 h-1 bg-[#f03e3e] rounded-full mt-3"></div>

              </div>

              {/* Tools */}
              <div className="flex flex-wrap justify-center gap-8 ">

                {category.items.map((tool, index) => (

                  <div
                    key={`${category.title}-${tool.name}-${index}`}
                    className="tool-card group w-36 h-36 flex flex-col justify-center items-center"
                  >
                    <img
                      src={tool.image}
                      alt={tool.name}
                      className="
                      w-16
                      h-16
                      object-contain
                      transition-all
                      duration-500
                      ease-out
                      group-hover:scale-125
                      group-hover:-translate-y-2
                    "
                      draggable={false}
                      loading="lazy"
                    />

                    <p
                      className="
                      mt-4
                      text-sm
                      font-semibold
                      tracking-wide
                      text-gray-700
                      transition-all
                      duration-300
                      group-hover:text-[#f03e3e]
                    "
                    >
                      {tool.name}
                    </p>

                  </div>

                ))}

              </div>


            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default ToolsSection;