// import React from "react";
// import { TypewriterEffect } from "./ui/typewriter-effect";
// import Projects from "./projects/Projects";
// import Contact from "./contact/Contact";
// import BentoGridCompo from "./BentoGridCompo";
// import CanvasRevealEffectCompo from "./CanvasRevealEffectCompo";

// const Hero = () => {
//   const typeWriterText = [
//     {
//       text: "Hi,",
//     },
//     {
//       text: "I'm",
//     },
//     {
//       text: "Monika,",
//     },
//     {
//       text: "a",
//     },
//     {
//       text: "creative",
//       className: "text-white",
//     },
//     {
//       text: "developer!",
//     },
//   ];

//   return (
//     <>
//       <div className=" h-screen flex flex-col items-center justify-center">
//         <div className="text-center max-w-sm md:max-w-5xl  ">
//           {/* <p
//             aria-label="Homepage section"
//             // className="my-5 text-neutral-700 text-md"
//             className="my-5 text-[#E2E8F0] text-md"
//             style={{ fontFamily: "Source Code Pro, monospace" }}
//           >
//             HOME
//           </p>
//           <TypewriterEffect words={typeWriterText} />
//           <p
//             aria-label="Introduction paragraph"
//             // className="my-5 text-neutral-700 text-md"
//                         className="my-5 text-[#E2E8F0] text-md"

//             style={{ fontFamily: "Source Code Pro, monospace" }}
//           >
//             I bring value to web development projects by merging
//             <br /> technical skills with creativity and aesthetics.
//           </p>*/}
//           <p className="my-5 text-[#94A3B8] text-md font-mono">
//             ~ <span className="text-[#34D399]">home</span>
//           </p>

//           <TypewriterEffect words={[
//             { text: "Hi," },
//             { text: "I'm" },
//             { text: "Monika," },
//             { text: "a", className: "" },
//             // { text: "web", className: "text-[#38BDF8]" },
//             { text: "web", className: "text-[#34D399]" },
//             { text: "developer.", className: "text-[#34D399]" },
//           ]} />

//           <p className="my-5 text-[#E2E8F0] text-md font-mono text-center">
//             $ whoami</p>
//           <p className="my-5 text-[#E2E8F0] text-md font-mono text-center">
//             I engineer performant, elegant web apps —<br />
//             blending UX precision with clean, scalable code.
//           </p>
//         </div>
//       </div>
//       <BentoGridCompo />
//       <Projects />
//       <CanvasRevealEffectCompo />
//       <Contact />
//     </>
//   );
// };

// export default Hero;


// import React from "react";
// import { TypewriterEffect } from "./ui/typewriter-effect";
// import Projects from "./projects/Projects";
// import Contact from "./contact/Contact";
// import BentoGridCompo from "./BentoGridCompo";
// import CanvasRevealEffectCompo from "./CanvasRevealEffectCompo";

// const Hero = () => {
//   const typeWriterText = [
//     { text: "Hi," },
//     { text: "I'm" },
//     { text: "Monika," },
//     { text: "a" },
//     { text: "web", className: "text-accent-blue" },
//     { text: "engineer.", className: "text-accent-blue" },
//   ];

//   return (
//     <>
//       <div className="h-screen flex flex-col items-center justify-center bg-secondary">
//         <div className="text-center max-w-sm md:max-w-5xl">
//           <p className="my-5 text-secondary font-mono text-md">
//             ~ <span className="text-accent-blue">/home</span>
//           </p>

//           <TypewriterEffect words={typeWriterText} />

//           <p className="my-5 text-primary font-mono text-md text-center">
//             $ whoami
//           </p>
//           <p className="my-5 text-primary font-mono text-md text-center">
//             I craft scalable, performant web applications —<br />
//             blending clean code with intuitive, elegant UX.
//           </p>
//         </div>
//       </div>
//       <BentoGridCompo />
//       <Projects />
//       <CanvasRevealEffectCompo />
//       <Contact />
//     </>
//   );
// };

// export default Hero;

import React from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import BentoGridCompo from "./BentoGridCompo";
import CanvasRevealEffectCompo from "./CanvasRevealEffectCompo";

const Hero = () => {
  const typeWriterText = [
    { text: "Hi," },
    { text: "I'm" },
    { text: "Monika," },
    { text: "a" },
    { text: "web", className: "text-accent-blue" },
    { text: "engineer.", className: "text-accent-blue" },
  ];

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center bg-secondary">
        <div className="text-center max-w-sm md:max-w-5xl">
          <p className="my-5 text-secondary font-mono text-md font-light">
            ~ <span className="text-accent-blue">/home</span>
          </p>

          <TypewriterEffect words={typeWriterText} />

          <p className="my-5 text-primary font-mono text-md font-medium text-center">
            $ whoami
          </p>
          <p className="my-5 text-primary font-mono text-md font-light text-center">
            I craft scalable, performant web applications —<br />
            blending clean code with intuitive, elegant UX.
          </p>
        </div>
      </div>
      <BentoGridCompo />
      <Projects />
      <CanvasRevealEffectCompo />
      <Contact />
    </>
  );
};

export default Hero;