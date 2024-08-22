import React from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import BentoGridDemo from "./BentoGridThirdDemo";
import { CanvasRevealEffectDemo } from "./CanvasRevealEffectDemo";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";

const Hero = () => {
  const typeWriterText = [
    {
      text: "Hi,",
    },
    {
      text: "I'm",
    },
    {
      text: "Monika,",
    },
    {
      text: "a",
    },
    {
      text: "creative",
      className: "text-white",
    },
    {
      text: "developer!",
    },
  ];
  return (
    <>
      <div className=" h-screen flex flex-col items-center justify-center">
        <div className="text-center max-w-sm md:max-w-5xl  ">
          <p
            aria-label="Homepage section"
            className="my-5 text-neutral-700 text-md"
            style={{ fontFamily: "Source Code Pro, monospace" }}
          >
            HOME
          </p>
          <TypewriterEffect words={typeWriterText} />
          <p
            aria-label="Introduction paragraph"
            className="my-5 text-neutral-700 text-md"
            style={{ fontFamily: "Source Code Pro, monospace" }}
          >
            I bring value to web development projects by merging
            <br /> technical skills with creativity and aesthetics.
          </p>
        </div>
      </div>
      <BentoGridDemo />
      <Projects />
      <CanvasRevealEffectDemo />
      <Contact />
    </>
  );
};

export default Hero;
