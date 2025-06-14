"use client";
import { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data/index";
import { PinContainer } from "./ui/3d-pin";
import { TypewriterEffect } from "./ui/typewriter-effect";

const AnimatedPinCompo = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const typeWriterText = [
    { text: "Project", className: "text-primary" },
    { text: "highlight", className: "text-accent-blue" },
  ];

  if (!isClient) {
    return null;
  }

  return (
    <div className="py-20 bg-secondary font-mono" id="projects">
      <TypewriterEffect words={typeWriterText} />

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.linkName} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[25vh] mb-5">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl">
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-0 absolute w-full object-contain"
                  />
                </div>
              </div>

              <h1 className="font-mono font-bold lg:text-2xl md:text-xl text-base text-primary line-clamp-1">
                {item.title}
              </h1>

              <p className="font-mono lg:text-xl lg:font-light font-light text-sm text-secondary line-clamp-2">
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-gray-700 rounded-full bg-secondary lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-accent-purple font-mono font-normal">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3 text-accent-purple" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>

      {/* Override PinContainer styles */}
      {/* <style jsx global>{`
        .pin-container {
          background-color: #1A1E33 !important;
          background-image: linear-gradient(
            135deg,
            rgba(56, 189, 248, 0.1) 0%,
            rgba(167, 139, 250, 0.1) 100%
          ) !important;
          color: #F1F5F9 !important;
          font-family: 'Source Code Pro', monospace !important;
          border: 1px solid #2D3748 !important;
          border-radius: 1rem !important;
        }
        .pin-container * {
          font-family: 'Source Code Pro', monospace !important;
          color: inherit !important;
        }
        .project-card {
          transition: transform 0.2s ease;
        }
        .project-card:hover {
          transform: scale(1.02);
        }
      `}</style> */}
    </div>
  );
};

export default AnimatedPinCompo;