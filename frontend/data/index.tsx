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
    title: "Pen & Paper",
    des: "A platform for writers to share their creative works, including essays, poems, short stories, and thoughts. Readers can explore the content freely, without needing an account, and can engage by liking, commenting, and interacting with the content. Writers can authenticate, manage their content, and submit new works easily.",
    img: "pen-and-paper.png",
    iconLists: ["/re.svg", "/tail.svg", "/mongodb.svg", "/nodejs.svg"],
    linkName: "/pen-and-paper.app",
    link: process.env.NEXT_PUBLIC_PEN_AND_PAPER_URL,
  },
  {
    id: 2,
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
        1. Nice to meet you! I'm Monika,{" "}
        <span className="text-accent-blue">a Web Developer</span>.
      </p>,
      <p key="2">
        2. I'm passionate about both{" "}
        <span className="text-accent-blue">web design</span> and{" "}
        <span className="text-accent-purple">web development</span>, with a
        focus on <span className="text-accent-blue">front-end development</span>{" "}
        and all its aspects. Here, I can best utilize both my{" "}
        <span className="text-accent-purple">technical</span> and{" "}
        <span className="text-accent-blue">creative</span> skills.
      </p>,
      <p key="3">
        3. <span className="text-accent-purple">Coding</span> for me is more
        than just work—I enjoy{" "}
        <span className="text-accent-blue">experimenting</span> with various{" "}
        <span className="text-accent-purple">technologies</span> and maintaining{" "}
        <span className="text-accent-blue">personal projects</span>. Whenever
        possible, I contribute to open-source to give back to the community.
      </p>,
    ],
  },
  {
    id: 2,
    title: "where-i-live",
    text: [
      <p key="1">
        1. Currently based in{" "}
        <span className="text-accent-blue">Mumbai, India</span>.
      </p>,
      <p key="2">
        2. Available for remote collaboration across India and worldwide.{" "}
        <span className="text-accent-purple">🌍</span>
      </p>,
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
        className="flex items-center text-accent-blue hover:text-accent-purple transition-colors duration-200"
        key="1"
      >
        1. LinkedIn
        <TiLocationArrow className="ml-1" />
      </a>,
      <a
        href={process.env.NEXT_PUBLIC_GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-accent-blue hover:text-accent-purple transition-colors duration-200"
        key="2"
      >
        2. GitHub
        <TiLocationArrow className="ml-1" />
      </a>,
      <a
        href={process.env.NEXT_PUBLIC_TWITTER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-accent-blue hover:text-accent-purple transition-colors duration-200"
        key="3"
      >
        3. X (Twitter)
        <TiLocationArrow className="ml-1" />
      </a>,
      <a
        href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-accent-blue hover:text-accent-purple transition-colors duration-200"
        key="4"
      >
        4. Instagram
        <TiLocationArrow className="ml-1" />
      </a>,
    ],
    animatedSpeed: 5.1,
  },
  {
    id: 4,
    title: "hobbies",
    text: [
      <p key="1">
        1. <span className="text-accent-blue">📖 Reading</span>.
      </p>,
      <p key="2">
        2. <span className="text-accent-purple">🏔️ Hiking</span>.
      </p>,
      <p key="3">
        3. <span className="text-accent-blue">💃 Dancing</span>.
      </p>,
    ],
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
