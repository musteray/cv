import ConsultlyLogo from "../images/logos/consultly.svg";
// import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
// import BimLogo from "../images/logos/bim.png";
// import CDGOLogo from "../images/logos/cdgo.png";
// import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
// import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
// import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
// import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Raymund Balicante",
  initials: "RB",
  location: "Ormoc City, Philippine, PHT",
  locationLink: "https://www.google.com/maps/place/Ormoc,+Leyte",
  about:
    "Full Stack Engineer focused on building products with extra attention to details",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. Currently, I work mostly with TypeScript, React, VueJS, and Node.js. I have over 6 years of experience in working web development.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  // personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "r.balicante@gmail.com",
    tel: "+639668372511",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/musteray",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/musteray/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/rbalicante",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "STI College - Ormoc",
      degree: "Bachelor's Degree in Information Technology",
      start: "2011",
      end: "2015",
    },
  ],
  work: [
    {
      company: "Harken PH",
      link: "#",
      badges: ["Remote"],
      title: "Full Stack Developer",
      // logo: ParabolLogo,
      start: "May 2023",
      end: "Present",
      description:
        "Maintain and updates existing software. Using technologies like VueJS, NodeJS, MongoDB",
    },
    {
      company: "Lanex Philippines",
      link: "https://lanexcorp.com",
      badges: ["Hybrid"],
      title: "Full Stack Developer",
      // logo: ParabolLogo,
      start: "Feb 2016",
      end: "April 2023",
      description:
        "Collaborate with product owner, product designers, technical team lead, and business owners to ensure best user experience on the software. Maintain and updates existing software. Lead small team.",
    },
    {
      company: "coreDev Solutions Inc.",
      link: "https://www.coredev.ph/",
      badges: [],
      title: "Web Developer",
      // logo: NSNLogo,
      start: "May 2015",
      end: "Dec 2015",
      description: "Created and maintained existing software using technologies PHP/Laravel, VueJS, JQuery & Boostrap UI",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "VueJs",
    "Node.js",
    "Python/Django",
    "C# .NET",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Laravel 3/4",
    "Docker",
    "GIT",
    "AWS",
    "GraphQL",
    "WebRTC",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "ReviewBuzz",
      techStack: ["Software Engineer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Nissan",
      techStack: ["Lead Software Engineer", "JQuery", "Nginx", "PostgreSQL"],
      description:
        "Web application catering to the needs of Nissan Fukushima Japan, facilitating online booking for vehicle services. The application should incorporate a comprehensive scheduling system that covers employees across all Nissan branches.",
      // logo: Howdy,
      link: {
        label: "aisha-mente.jp",
        href: "https://aisha-mente.jp/",
      },
    },
    {
      title: "Sanyou Tekkoujo",
      techStack: ["Software Engineer", "PHP/Laravel 3/4", "ReactJS"],
      description:
        "A web-based business management system.",
    },
    {
      title: "Shangyo Shinko",
      techStack: ["Software Engineer", "PHP/Laravel 3/4", "ReactJS"],
      description:
        "A web-based logistics tracking system.",
    },
    {
      title: "Maruki CRM",
      techStack: ["Software Engineer", "PHP", "ReactJS", "JQuery"],
      description:
        "A web-based CRM for medical supplies.",
    },
    {
      title: "Orange Pay Plus (HRIS)",
      techStack: ["Web Developer", "PHP/Laravel", "VueJS"],
      description:
        "A complete paperless HR Management Solutions for SMBs and Enterprise Businesses.",
      link: {
        label: "orangepayplus.com",
        href: "https://cficoop.orangepayplus.com/",
      },
    },
  ],
} as const;
