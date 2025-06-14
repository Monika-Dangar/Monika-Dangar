"use client";
import React, { useEffect, useState } from "react";
import { interactiveCards } from "@/data/index";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { FaMinus, FaSquare } from "react-icons/fa";
import { TbXboxXFilled } from "react-icons/tb";
import { TypewriterEffect } from "./ui/typewriter-effect";

export default function CanvasRevealEffectCompo() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const typeWriterText = [
    { text: "Your", className: "text-primary" },
    { text: "interactive", className: "text-accent-blue" },
    { text: "developer", className: "text-primary" },
  ];

  const mainCard = interactiveCards.find((card) => card.id === 1);
  const otherCards = interactiveCards.filter((card) => card.id > 1);

  if (!isClient) {
    return null;
  }

  return (
    <div className="py-20 bg-secondary font-mono">
      <TypewriterEffect words={typeWriterText} />

      <div className="py-20 relative w-full mx-auto px-8">
        {/* Main Card */}
        {mainCard && (
          <div className="mb-8">
            <Card
              id={mainCard.id}
              title={mainCard.title}
              text={mainCard.text}
              className="w-full max-w-4xl mx-auto"
            >
              <CanvasRevealEffect animationSpeed={mainCard.animatedSpeed} />
            </Card>
          </div>
        )}

        {/* Smaller Cards */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          {otherCards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              text={card.text}
              className="flex-1"
            >
              <CanvasRevealEffect animationSpeed={card.animatedSpeed} />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

const Card = ({
  id,
  title,
  text,
  children,
  className = "",
}: {
  id: number;
  title: string;
  text: React.ReactNode[];
  children?: React.ReactNode;
  className?: string;
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`border border-gray-700 group/canvas-card ${className} items-center justify-center p-4 relative bg-secondary shadow-[0_4px_12px_rgb(0_0_0/0.2)] rounded-2xl`}
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(167, 139, 250, 0.1) 100%)",
      }}
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-primary group-hover/canvas-card:text-accent-purple transition-colors duration-200" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-primary group-hover/canvas-card:text-accent-purple transition-colors duration-200" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-primary group-hover/canvas-card:text-accent-purple transition-colors duration-200" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-primary group-hover/canvas-card:text-accent-purple transition-colors duration-200" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }} // Reduced opacity of the effect
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 font-mono">
        {/* Add a semi-transparent background behind text on hover */}
        <div className="absolute inset-0 bg-secondary/70 rounded-2xl opacity-0 group-hover/canvas-card:opacity-100 transition-opacity duration-200"></div>
        <div className="relative z-30 text-primary font-bold text-lg">
          <div className="flex justify-between w-full border-b border-gray-700">
            <span className="m-1 md:text-sm lg:text-lg">{title}</span>
            <span className="flex items-center space-x-2 md:text-sm lg:text-lg text-primary group-hover/canvas-card:text-accent-purple transition-colors duration-200">
              <span>
                <FaMinus />
              </span>
              <span>
                <FaSquare />
              </span>
              <span>
                <TbXboxXFilled />
              </span>
            </span>
          </div>

          <div className="w-full mt-3 text-secondary font-light">
            {text.map((txt, i) => (
              <span className="block" key={i}>
                {txt}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};