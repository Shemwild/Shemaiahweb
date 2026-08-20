export enum SkillNames {
  PYTHON = "python",
  JAVA = "java",
  C = "c",
  CPP = "cpp",
  AI = "ai",
  MACHINE_LEARNING = "machine-learning",
  DEEP_LEARNING = "deep-learning",
  COMPUTER_VISION = "computer-vision",
  TENSORFLOW = "tensorflow",
  PYTORCH = "pytorch",
  SCIKIT_LEARN = "scikit-learn",
  OPENCV = "opencv",
  PANDAS = "pandas",
  NUMPY = "numpy",
  TABLEAU = "tableau",
  JUPYTER = "jupyter",
  GOOGLE_COLAB = "google-colab",
  MERN = "mern",
  FASTAPI = "fastapi",
  FLASK = "flask",
  ARDUINO = "arduino",
  ESP32 = "esp32",
  IOT = "iot",
  EMBEDDED = "embedded",
  CLOUD = "cloud",
  LINUX = "linux",
  WINDOWS = "windows",
  GIT = "git",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

const skill = (id: number, name: SkillNames, label: string, shortDescription: string): Skill => ({
  id,
  name,
  label,
  shortDescription,
  color: "#38bdf8",
  icon: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`,
});

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.PYTHON]: skill(1, SkillNames.PYTHON, "Python", "A practical language for intelligent systems and automation."),
  [SkillNames.JAVA]: skill(2, SkillNames.JAVA, "Java", "Object-oriented programming for reliable software."),
  [SkillNames.C]: skill(3, SkillNames.C, "C", "Low-level foundations for efficient systems."),
  [SkillNames.CPP]: skill(4, SkillNames.CPP, "C++", "Performance-minded software and embedded development."),
  [SkillNames.AI]: skill(5, SkillNames.AI, "Artificial Intelligence", "Building systems that turn data into useful decisions."),
  [SkillNames.MACHINE_LEARNING]: skill(6, SkillNames.MACHINE_LEARNING, "Machine Learning", "Learning patterns that support real-world problem solving."),
  [SkillNames.DEEP_LEARNING]: skill(7, SkillNames.DEEP_LEARNING, "Deep Learning", "Neural networks for complex data and perception."),
  [SkillNames.COMPUTER_VISION]: skill(8, SkillNames.COMPUTER_VISION, "Computer Vision", "Helping machines interpret visual environments."),
  [SkillNames.TENSORFLOW]: skill(9, SkillNames.TENSORFLOW, "TensorFlow", "Experimenting with trainable intelligent models."),
  [SkillNames.PYTORCH]: skill(10, SkillNames.PYTORCH, "PyTorch", "Flexible research and model development."),
  [SkillNames.SCIKIT_LEARN]: skill(11, SkillNames.SCIKIT_LEARN, "Scikit-learn", "Classical machine learning workflows."),
  [SkillNames.OPENCV]: skill(12, SkillNames.OPENCV, "OpenCV", "Computer vision tools for practical applications."),
  [SkillNames.PANDAS]: skill(13, SkillNames.PANDAS, "Pandas", "Exploring and transforming structured data."),
  [SkillNames.NUMPY]: skill(14, SkillNames.NUMPY, "NumPy", "Numerical computing for data and models."),
  [SkillNames.TABLEAU]: skill(15, SkillNames.TABLEAU, "Tableau", "Making metrics easier to understand."),
  [SkillNames.JUPYTER]: skill(16, SkillNames.JUPYTER, "Jupyter Notebook", "A space for experiments and clear technical thinking."),
  [SkillNames.GOOGLE_COLAB]: skill(17, SkillNames.GOOGLE_COLAB, "Google Colab", "Collaborative cloud notebooks for ML work."),
  [SkillNames.MERN]: skill(18, SkillNames.MERN, "MERN Stack", "Full-stack web products from interface to database."),
  [SkillNames.FASTAPI]: skill(19, SkillNames.FASTAPI, "FastAPI", "Fast, typed APIs for intelligent applications."),
  [SkillNames.FLASK]: skill(20, SkillNames.FLASK, "Flask", "Lightweight Python web services."),
  [SkillNames.ARDUINO]: skill(21, SkillNames.ARDUINO, "Arduino", "Rapid prototyping for connected hardware."),
  [SkillNames.ESP32]: skill(22, SkillNames.ESP32, "ESP32", "Connected embedded systems with real-time sensing."),
  [SkillNames.IOT]: skill(23, SkillNames.IOT, "Internet of Things", "Connecting sensors, systems, and useful decisions."),
  [SkillNames.EMBEDDED]: skill(24, SkillNames.EMBEDDED, "Embedded Systems", "Software and hardware working as one system."),
  [SkillNames.CLOUD]: skill(25, SkillNames.CLOUD, "Cloud Computing", "Scalable infrastructure for practical applications."),
  [SkillNames.LINUX]: skill(26, SkillNames.LINUX, "Linux", "A flexible environment for development and deployment."),
  [SkillNames.WINDOWS]: skill(27, SkillNames.WINDOWS, "Windows", "A familiar platform for building and testing."),
  [SkillNames.GIT]: skill(28, SkillNames.GIT, "Git", "Version control for disciplined collaboration."),
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Apr 2026",
    endDate: "Present",
    title: "Marketing Coordinator",
    company: "MATRIX Karunya",
    description: [
      "Managed marketing campaigns, social media, and event coordination.",
    ],
    skills: [SkillNames.MERN, SkillNames.GIT],
  },
  {
    id: 2,
    startDate: "May 2026",
    endDate: "Jul 2026",
    title: "AI Developer Intern",
    company: "Oil and Natural Gas Corporation Limited (ONGC)",
    description: [
      "Developed an AI-powered Multi-Database Query Platform.",
    ],
    skills: [SkillNames.PYTHON, SkillNames.FASTAPI, SkillNames.PANDAS, SkillNames.JUPYTER],
  },
  {
    id: 3,
    startDate: "Sep 2025",
    endDate: "Apr 2026",
    title: "Multimedia Coordinator",
    company: "MATRIX Karunya",
    description: [
      "Created digital content and managed social media.",
    ],
    skills: [SkillNames.MERN, SkillNames.GIT],
  },
  {
    id: 4,
    startDate: "Jul 2025",
    endDate: "Apr 2026",
    title: "Platform & Communication Lead",
    company: "ACM Student Chapter - Karunya University",
    description: [
      "Led communications and organized technical events.",
    ],
    skills: [SkillNames.MERN, SkillNames.GIT, SkillNames.PYTHON],
  },
];

export const themeDisclaimers = {
  light: ["Light mode activated. Keep building."],
  dark: ["Welcome back. Let's build the future."],
};
