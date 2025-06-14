'use client'
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandX,
} from "@tabler/icons-react";
import { floatingDock } from "../data/index";

const iconMap = {
  IconBrandInstagram: (
    <IconBrandInstagram className="h-full w-full text-primary hover:text-accent-purple transition-colors duration-200" />
  ),
  IconBrandLinkedin: (
    <IconBrandLinkedin className="h-full w-full text-primary hover:text-accent-purple transition-colors duration-200" />
  ),
  IconBrandX: (
    <IconBrandX className="h-full w-full text-primary hover:text-accent-purple transition-colors duration-200" />
  ),
  IconBrandGithub: (
    <IconBrandGithub className="h-full w-full text-primary hover:text-accent-purple transition-colors duration-200" />
  ),
};

export default function FloatingDockDemo() {
  // Map the icon names to actual icon components
  const links = floatingDock.map((link) => ({
    ...link,
    icon: iconMap[link.icon],
  }));

  return (
    <div className="flex items-center  bg-secondary font-mono">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
