import { TiLocationArrow } from "react-icons/ti";

export const gridItems = [
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "md:col-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 1,
    title: "Eager to Learn and Grow",
    description:
      "Freshly graduated and enthusiastic about diving into the tech industry, I'm committed to continuously expanding my skills and knowledge.",
    className: "md:col-span-1",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    spareImg: "/exp1.svg",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "md:col-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/sk.png",
  },

  {
    id: 5,
    title: "Currently working on Job Finder project",
    description: "The Inside Scoop",
    className: "md:col-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    spareImg: "/code-snippet.png",
  },
];

export const projects = [
  {
    id: 1,
    title: "Job Finder",
    des: "A comprehensive application using Vite, Tailwind CSS, Node.js, and various librabries including Redux Toolkit and React Hook Form.",
    img: "/job-finder.png",
    iconLists: ["/re.svg", "/tail.svg", "/mongodb.svg", "/nodejs.svg"],
    linkName: "/job-finder.app",
    link: process.env.NEXT_PUBLIC_JOB_FINDER_URL,
  },
  {
    id: 2,
    title: "YouTube clone",
    des: "Built a basic YouTube clone using HTML and CSS, replicating key interface elements such as video thumbnails and navigation. Enhanced my foundational skills in front-end desgin and responsive layout.",
    img: "/YT-clone.png",
    iconLists: ["/html.png", "/css.png"],
    linkName: "/youtube-clone.site",
    link: process.env.NEXT_PUBLIC_YOUTUBE_CLONE_URL,
  },
  {
    id: 3,
    title: "Netflix clone",
    des: "Developed an early-stage clone of Netflic using pure HTML and CSS. This project helped me gain foundational skills in front-end desgin and layout.",
    img: "/Netflix-clone.png",
    iconLists: ["/html.png", "/css.png"],
    linkName: "/netflix-clone.site",
    link: process.env.NEXT_PUBLIC_NETFLIX_CLONE_URL,
  },
];

export const interactiveCards = [
  {
    id: 1,
    title: "about-me",
    animatedSpeed: 5.1,
    text: [
      <p key="1">
        1. Nice to meet you! I'm Monika, I'm{" "}
        <span style={{ color: "#E63946" }}>a Web Developer</span>.
      </p>,
      ,
      <p key="2">
        2. I'm passionate about both{" "}
        <span style={{ color: "#3A0CA3" }}>web design</span> and{" "}
        <span style={{ color: "#008000" }}>web development</span>, with a
        particular focus on{" "}
        <span style={{ color: "#B69121" }}>front-end development</span> and in
        all of its aspects. This is where both my{" "}
        <span style={{ color: "#C9184A" }}>technical</span> and{" "}
        <span style={{ color: "#8900F2" }}>creative</span> skills can be used at
        their best.
      </p>,
      ,
      <p key="3">
        <span style={{ color: "#023E8A" }}>3. Coding</span> for me is not just
        my work, I like <span style={{ color: "#EF233C" }}>experimenting</span>{" "}
        with many <span style={{ color: "#CA67020" }}>technologies</span> and I
        also maintain some{" "}
        <span style={{ color: "#197278" }}>personal projects</span>. Whenever I
        can, I like to contribute to open-source to give back to the community.
      </p>,
      ,
    ],
  },
  {
    id: 2,
    title: "where-i-live",
    text: [
      "1. Currently based in Mumbai, India",
      "2. available for remote collaboration acroos India and worldwide🌍",
    ],
    animatedSpeed: 5.1,
  },
  {
    id: 3,
    title: "me-online",
    text: [
      <a
        href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
        key="1"
      >
        1. LinkedIn
        <TiLocationArrow />
      </a>,
      <a
        href={process.env.NEXT_PUBLIC_GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
        key="2"
      >
        2. GitHub <TiLocationArrow />
      </a>,
      <a
        href={process.env.NEXT_PUBLIC_TWITTER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
        key="3"
      >
        3. X (Twitter) <TiLocationArrow />
      </a>,
      <a
        href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
        key="4"
      >
        4. Instagram <TiLocationArrow />
      </a>,
    ],
    animatedSpeed: 5.1,
  },
  {
    id: 4,
    title: "hobbies",
    text: ["1. 📖Reading", "2. 🏔️Hiking", "3. 💃Dancing"],
    animatedSpeed: 5.1,
  },
];

export const floatingDock = [
  {
    title: "Instagram",
    icon: "IconBrandInstagram",
    href: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
  },
  {
    title: "Linkedin",
    icon: "IconBrandLinkedin",
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL,
  },
  {
    title: "Twitter",
    icon: "IconBrandX",
    href: process.env.NEXT_PUBLIC_TWITTER_URL,
  },
  {
    title: "GitHub",
    icon: "IconBrandGithub",
    href: process.env.NEXT_PUBLIC_GITHUB_URL,
  },
];
