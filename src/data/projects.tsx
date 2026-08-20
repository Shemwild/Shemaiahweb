import { ReactNode } from "react";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { sitePath } from "@/lib/site-path";

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const textSkill = (title: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <span className="text-[10px] font-semibold">{title.slice(0, 3)}</span>,
});

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: ReactNode;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "ongc-vannaquery-platform",
    category: "AI / Generative AI / Full Stack",
    title: "AI-Powered Multi-Database Query Platform (ONGC)",
    src: sitePath("/assets/projects-generated/ongc-vannaquery-platform.svg"),
    screenshots: ["ongc-vannaquery-platform.svg"],
    skills: {
      frontend: [textSkill("React"), textSkill("FastAPI"), textSkill("Python")],
      backend: [textSkill("Vanna AI"), textSkill("PostgreSQL"), textSkill("Docker")],
    },
    live: "#",
    content: (
      <div>
        <TypographyP>Developed a natural language SQL query platform for ONGC using FastAPI, PostgreSQL, Docker, and Vanna AI, delivering the solution within 30 days (June 2026).</TypographyP>
        <TypographyH3 className="my-4">Capabilities</TypographyH3>
        <TypographyP>Natural-language-to-SQL generation, PostgreSQL/MySQL support, Dockerized microservices, role-based security, and production deployment.</TypographyP>
      </div>
    ),
  },
  {
    id: "eco-tracker",
    category: "AI / Sustainability / Cloud",
    title: "EcoTracker",
    src: sitePath("/assets/projects-generated/eco-tracker.svg"),
    screenshots: ["eco-tracker.svg"],
    skills: {
      frontend: [textSkill("AI"), textSkill("Cloud")],
      backend: [textSkill("Sustainability"), textSkill("Insights")],
    },
    live: "#",
    content: (
      <div>
        <TypographyP>Built an AI-enabled sustainability platform to monitor environmental metrics, track carbon footprint, and generate actionable insights.</TypographyP>
      </div>
    ),
  },
  {
    id: "smart-oil-leakage-detection",
    category: "IoT / Embedded Systems / Cloud",
    title: "Smart Oil Leakage Detection System",
    src: sitePath("/assets/projects-generated/crude-oil-leakage-detection.svg"),
    screenshots: ["crude-oil-leakage-detection.svg"],
    skills: {
      frontend: [textSkill("Arduino"), textSkill("ESP32")],
      backend: [textSkill("IoT"), textSkill("Cloud Monitoring")],
    },
    live: "#",
    content: (
      <div>
        <TypographyP>Developed an IoT solution using Arduino, ESP32, and cloud monitoring for real-time oil leak detection and pipeline integrity safety.</TypographyP>
      </div>
    ),
  },
  {
    id: "loser-high-tech-helmet",
    category: "Smart Hardware / IoT / Embedded",
    title: "LÖSER High-Tech Helmet",
    src: sitePath("/assets/projects-generated/loser-high-tech-helmet.svg"),
    screenshots: ["loser-high-tech-helmet.svg"],
    skills: {
      frontend: [textSkill("TWS Integration"), textSkill("Calls & Music")],
      backend: [textSkill("Motion Sensors"), textSkill("Safety Tech")],
    },
    live: "#",
    content: (
      <div>
        <TypographyP>A smart helmet concept featuring seamless TWS integration for calls and music, built-in motion sensors, and advanced safety technology.</TypographyP>
        <TypographyH3 className="my-4">Key Features</TypographyH3>
        <TypographyP>Hands-free call and music integration, motion sensor tracking, emergency safety notifications, and connected rider tech.</TypographyP>
      </div>
    ),
  },
  {
    id: "coastmate",
    category: "AI & IoT / Coastal Resilience / MSME Network",
    title: "CoastMate",
    src: sitePath("/assets/projects-generated/coastmate.svg"),
    screenshots: ["coastmate.svg"],
    skills: {
      frontend: [textSkill("AI & IoT"), textSkill("Coastal MSMEs")],
      backend: [textSkill("Resilience"), textSkill("Smart Tech")],
    },
    live: "#",
    content: (
      <div>
        <TypographyP>Smart Coastal Resilience & Trade Network focused on empowering coastal MSMEs, enhancing coastal resilience, and integrating AI and IoT technologies.</TypographyP>
        <TypographyH3 className="my-4">Key Features</TypographyH3>
        <TypographyP>Trade network connectivity for coastal businesses, real-time coastal resilience analytics, and AI/IoT data stream processing.</TypographyP>
      </div>
    ),
  },
  {
    id: "conditional-gan-house-layout",
    category: "Generative AI / Deep Learning / PyTorch",
    title: "Conditional GAN Automated House Layout Generator",
    src: sitePath("/assets/projects-generated/conditional-gan-house-layout.svg"),
    screenshots: ["conditional-gan-house-layout.svg"],
    skills: {
      frontend: [textSkill("Generative AI"), textSkill("PyTorch")],
      backend: [textSkill("Conditional GAN"), textSkill("Computer Vision")],
    },
    live: "#",
    content: (
      <div>
        <TypographyP>Built a Generative AI model for automated house layout design using a Conditional GAN (cGAN).</TypographyP>
        <TypographyP className="mt-3">The model accepts input parameters such as target total area (e.g. 1600 sqft) and number of rooms (e.g. 4 rooms) and generates corresponding architectural layout structures.</TypographyP>
        <TypographyH3 className="my-4">Training Progress & Epoch Progression</TypographyH3>
        <TypographyP>Initial training milestones (demonstrating progression from 10 to 30 epochs) showcase emerging spatial patterns, room partitions, and wall layouts. Ongoing work focuses on sharpening boundary clarity and enforcing real-world architectural structural constraints.</TypographyP>
      </div>
    ),
  },
];

export default projects;
