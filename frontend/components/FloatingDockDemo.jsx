// import React from "react";
// import { FloatingDock } from "@/components/ui/floating-dock";
// import {
//   IconBrandLinkedin,
//   IconBrandInstagram,
//   IconBrandGithub,
//   IconBrandX,
// } from "@tabler/icons-react";

// export default function FloatingDockDemo() {
//   const links = [
//     {
//       title: "Instagram",
//       icon: (
//         <IconBrandInstagram className="h-full w-full text-black dark:text-neutral-300" />
//       ),
//       href: "https://www.instagram.com/monika.__19/",
//     },
//     {
//       title: "Linkedin",
//       icon: (
//         <IconBrandLinkedin className="h-full w-full text-black dark:text-neutral-300" />
//       ),
//       href: "https://www.linkedin.com/in/monika-dangar/",
//     },
//     {
//       title: "Twitter",
//       icon: (
//         <IconBrandX className="h-full w-full text-black dark:text-neutral-300" />
//       ),
//       href: "https://x.com/dangar_monika",
//     },
//     {
//       title: "GitHub",
//       icon: (
//         <IconBrandGithub className="h-full w-full text-black dark:text-neutral-300" />
//       ),
//       href: "https://github.com/monika-dangar",
//     },
//   ];
//   return (
//     <div className="flex items-center h-[35rem] ">
//       <FloatingDock
//         mobileClassName="translate-y-20" // only for demo, remove for production
//         items={links}
//       />
//     </div>
//   );
// }
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
    <IconBrandInstagram className="h-full w-full text-black dark:text-neutral-300" />
  ),
  IconBrandLinkedin: (
    <IconBrandLinkedin className="h-full w-full text-black dark:text-neutral-300" />
  ),
  IconBrandX: (
    <IconBrandX className="h-full w-full text-black dark:text-neutral-300" />
  ),
  IconBrandGithub: (
    <IconBrandGithub className="h-full w-full text-black dark:text-neutral-300" />
  ),
};

export default function FloatingDockDemo() {
  // Map the icon names to actual icon components
  const links = floatingDock.map((link) => ({
    ...link,
    icon: iconMap[link.icon],
  }));

  return (
    <div className="flex items-center h-[35rem]">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
