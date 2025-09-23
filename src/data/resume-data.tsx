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
    "Software Engineer with 7+ years of experience delivering scalable, high-performing web applications. Specialized in React.js, TypeScript, Vue.js, and Node.js with proven success in leading cross-functional teams and driving products from concept to launch.",
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
    {
      title: "Frontend",
      tools: [
        "React.js",
        "Next.js",
        "Vue.js",
        "JavaScript",
        "TypeScript",
      ]
    },
    {
      title: "Backend",
      tools: [
        "Node.js",
        "Django",
        "C# .NET",
        "Laravel"
      ]
    },
    {
      title: "Databases",
      tools: [
        "MongoDB",
        "MS SQL Server",
        "MySQL",
        "PostgreSQL",
        "MariaDB"
      ]
    },
    {
      title: "DevOps & Tools",
      tools: [
        "Shell Scripting",
        "Docker",
        "GIT",
        "WebRTC",
        "REST API",
        "GraphQL"
      ]
    }
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
