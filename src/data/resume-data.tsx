// import ConsultlyLogo from "../images/logos/consultly.svg";
// import AmbitLogo from "../images/logos/ambit.png";
// import BarepapersLogo from "../images/logos/barepapers.svg";
// import BimLogo from "../images/logos/bim.png";
// import CDGOLogo from "../images/logos/cdgo.png";
// import ClevertechLogo from "../images/logos/clevertech.png";
// import EvercastLogo from "../images/logos/evercast.svg";
// import Howdy from "../images/logos/howdy.png";
// import JarockiMeLogo from "../images/logos/jarocki.svg";
// import JojoMobileLogo from "../images/logos/jojomobile.png";
// import MonitoLogo from "../images/logos/monito.svg";
// import MobileVikingsLogo from "../images/logos/mv.png";
// import NSNLogo from "../images/logos/nsn.svg";
// import ParabolLogo from "../images/logos/parabol.svg";
// import TastyCloudLogo from "../images/logos/tastycloud.png";
// import YearProgressLogo from "../images/logos/yearprogress.svg";
// import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Raymund Balicante",
  initials: "R_B",
  location: "Ormoc City, Philippine, PHT",
  locationLink: "https://www.google.com/maps/place/Ormoc,+Leyte",
  jobTitle: "Software Engineer",
  about:
    "Software Engineer focused on building products with extra attention to details",
  summary:
    "As a Software Engineer, I have successfully taken multiple products from 0 to 1. Currently, I work mostly with React.js, TypeScript, Vue.js, and Node.js. I have over 7 years of experience in working web development.",
  avatarUrl: "https://avatars.githubusercontent.com/u/13032465?s=400&u=bd3486bebee65e6939a6bd9251697ef0e4e0a712&v=4",
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
      company: "FreshClinics",
      link: "#",
      badges: ["Remote"],
      title: "FullStack Developer/Technical Lead",
      // logo: ParabolLogo,
      start: "May 2023",
      end: "July 2025",
      description:
        "Collaborated cross-functionally to gather requirements, develop new features, and improve system performance by optimizing code and database queries. Conducted code reviews, mentored team members, and contributed to Agile ceremonies to ensure high-quality, scalable solutions.",
    },
    {
      company: "Lanex Philippines",
      link: "https://lanexcorp.com",
      badges: ["Hybrid"],
      title: "Software Engineer",
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
      start: "May 2015",
      end: "Dec 2015",
      description: "Created and maintained existing software using technologies PHP/Laravel, Vue.js, JQuery & Boostrap UI",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Vue.js",
    "Node.js",
    "Python/Django",
    "C# .NET",
    "PHP/Laravel 3/4/5",
    "MongoDB",
    "MariaDB",
    "Microsoft SQL Server",
    "MySQL",
    "PostgreSQL",
    "Docker",
    "GIT",
    "AWS",
    "GraphQL",
    "WebRTC",
    "REST API",
    "Shell Scripting"
  ],
  projects: [
    {
      title: "FreshClinics",
      techStack: [
        "FullStack Developer",
        "Technical Lead",
        "Vue.js",
        "NodeJS",
        "MongoDB",
        "AWS",
      ],
      description: "A web-based business system for cosmetics professionals around Australia.",
      link: {
        label: "www.freshclinics.com.au",
        href: "https://www.freshclinics.com.au/",
      },
    },
    {
      title: "Bruno - Video Screen Recorder",
      techStack: [
        "Software Engineer",
        "Vue.js",
        "Vite",
        "AWS(Amplify, Cognito, S3)",
        "WebRTC",
        "Django(Python)",
        "Postgres"
      ],
      description: "SaaS application is specifically designed to video screen recording. It incorporates a Chrome extension that enables users to effortlessly capture and record videos and screen activities.",
      link: {
        label: "www.bruno.ooo",
        href: "https://www.bruno.ooo/home.html",
      },
    },
    {
      title: "Chiteki Zaisan",
      techStack: [
        "Software Engineer",
        "Next.js",
        ".NET C#(API)",
      ],
      description:
        "A Joint Master Application that is a record keeping of the \"products/inventions\" relating to patents, grants, insurances.",
    },
    {
      title: "Nexco",
      techStack: [
        "Software Engineer",
        "Next.js",
        ".NET C#(API)",
      ],
      description:
        "An internal Intellectual Property Management System for a Japanese Tollway Company that allows them to keep track of their patents.",
    },
    {
      title: "OSS-MANO",
      techStack: [
        "Software Engineer",
        "Python",
        "Openstack(tacker)",
        "Ansible, Jenkins & Robot",
        "Podman & Docker", "HAProxy",
        "5VM setup", "Lsync & Rsync",
        "Postman & Newman",
        "GIT"
      ],
      description:
        "Develop various features for Openstack Tacker and provide customer-end system implementation/integration.",
    },
    {
      title: "OSS-Tech Center",
      techStack: [
        "Software Engineer",
        "Wordpress",
        "JQuery",
      ],
      description:
        "Wiki for OSS Team in NEC.",
    },
    {
      title: "Hiyari Hatto",
      techStack: [
        "Software Engineer",
        "React.js",
        ".NET C#",
      ],
      description:
        "An internal incident tracking system for a Japanese Tollway Company that allows employees to log and keep track of incidents that happened in the tollway.",
    },
    {
      title: "ReviewBuzz",
      techStack: [
        "Software Engineer",
        "Vue.js",
        "Laravel 5.6",
        "Python",
        "SocketIO",
        "AWS Infrastructure",
        "Microservices"
      ],
      description:
        "Reputation Management System",
      link: {
        label: "getreviewbuzz.com",
        href: "https://getreviewbuzz.com/",
      },
    },
    {
      title: "Nissan",
      techStack: ["Team Lead", "JQuery", "Nginx", "Postgres"],
      description:
        "Web application catering to the needs of Nissan Fukushima Japan, facilitating online booking for vehicle services.",
      link: {
        label: "aisha-mente.jp",
        href: "https://aisha-mente.jp/",
      },
    },
    {
      title: "Sanyou Tekkoujo",
      techStack: ["Software Engineer", "Laravel 3/4", "React.js"],
      description:
        "A web-based business management system.",
    },
    {
      title: "Shangyo Shinko",
      techStack: ["Software Engineer", "Laravel 3/4", "React.js"],
      description:
        "A web-based logistics tracking system.",
    },
    {
      title: "Maruki CRM",
      techStack: ["Software Engineer", "PHP", "React.js", "JQuery"],
      description:
        "A web-based CRM for medical supplies.",
    },
    {
      title: "Orange Pay Plus (HRIS)",
      techStack: ["Web Developer", "Laravel 2/3", "Vue.js"],
      description:
        "A complete paperless HR Management Solutions for SMBs and Enterprise Businesses.",
      link: {
        label: "orangepayplus.com",
        href: "https://cficoop.orangepayplus.com/",
      },
    },
  ],
} as const;
