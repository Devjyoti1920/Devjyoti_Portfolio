import { SkillCategory, Project, NonTechSkill } from "./types";

export const profile = {
  name: "RUP",
  title: "Systems & AI Engineer",
  tagline: "Bridging the gap between intelligent algorithms, scalable systems, and secure cloud environments.",
  bio: "Passionate engineer specialized in high-performance computing, advanced machine learning, and cloud-native architecture. Adept at building bulletproof backend services in C++, Python, and Java, as well as orchestrating secure microservice frameworks."
};

export const categories: SkillCategory[] = [
  {
    title: "Full-Stack Development",
    icon: "Code2",
    bgGradient: "from-blue-600/20 to-cyan-500/10",
    neonClass: "neon-border-blue",
    skills: [
      { name: "C++ (Systems & OOP)", level: 90 },
      { name: "Python (ML/Backend)", level: 95 },
      { name: "Java (Enterprise Core)", level: 85 },
      { name: "React (Vite, State)", level: 88 },
      { name: "Node.js (Express, REST)", level: 85 }
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: "BrainCircuit",
    bgGradient: "from-purple-600/20 to-pink-500/10",
    neonClass: "neon-border-purple",
    skills: [
      { name: "Convolutional Neural Networks (CNN)", level: 92 },
      { name: "Support Vector Machines (SVM)", level: 88 },
      { name: "K-Nearest Neighbors (KNN)", level: 85 },
      { name: "Predictive Analytics Models", level: 90 },
      { name: "NLP & Clinical Support", level: 86 }
    ]
  },
  {
    title: "Cloud & Cybersecurity",
    icon: "ShieldAlert",
    bgGradient: "from-pink-600/20 to-rose-500/10",
    neonClass: "neon-border-magenta",
    skills: [
      { name: "Kubernetes Engine (GKE)", level: 88 },
      { name: "IAM & Role Management", level: 85 },
      { name: "Microservices Design", level: 90 },
      { name: "Secure API Gateway", level: 92 },
      { name: "OAuth & Encryption Protocols", level: 84 }
    ]
  }
];

export const projects: Project[] = [
  {
    title: "Project Disha",
    tech: ["Python", "FastAPI", "React", "CNN", "Clinical Knowledge Base"],
    desc: "An AI-assisted clinical support platform designed to streamline doctor-patient analysis. Utilizes NLP and custom diagnostic classification pipelines.",
    details: "Built an intelligent framework that processes clinical logs, identifies symptoms, and correlates with patient history to output recommendations.",
    metric: "94.2% diagnostic support accuracy",
    category: "aiml"
  },
  {
    title: "Support Vector Classifier",
    tech: ["Python", "Scikit-Learn", "SVM", "Pandas", "Matplotlib"],
    desc: "A multi-class predictive classifier for identifying pattern anomalies in complex real-world datasets.",
    details: "Engineered robust scaling kernels to perform high-dimensional space transformations, speeding up optimization through linear support vector algorithms.",
    metric: "0.91 precision factor",
    category: "aiml"
  },
  {
    title: "Multi-Sensor Autonomous Vehicle",
    tech: ["C++", "Fuzzy Logic Controller", "Ultrasonic Sensors", "Embedded Systems"],
    desc: "An automated vehicle combining camera feed analytics and ultrasonic range finders via sensor fusion.",
    details: "Implemented strict fuzzy set definitions for safe navigation behavior control of a robotic platform with instant obstacle deceleration.",
    metric: "Zero collisions across 50 tests",
    category: "hardware"
  },
  {
    title: "Advanced Core Simulator",
    tech: ["C++", "File Streams", "Concurrency", "Security Engine"],
    desc: "A high-integrity console Banking & ATM simulator program executing advanced ledger-level security.",
    details: "Crafted robust object models ensuring zero state desync during simulated multithreaded account debits, using custom local data hashing.",
    metric: "100% thread safety verify",
    category: "hardware"
  },
  {
    title: "Heavy Metal Pollution Index App",
    tech: ["React", "Express", "Python", "GIS Mapping"],
    desc: "A specialized dashboard created for the Smart India Hackathon evaluating local and regional water pollution metrics.",
    details: "Aggregates geographic heavy metal ratios to compute index ratings, alerting local civic bodies about water table deterioration.",
    metric: "National Hackathon Finalist",
    category: "hackathon"
  }
];

export const nonTechSkills: NonTechSkill[] = [
  {
    title: "Multilingual Communication",
    desc: "Connecting with diverse human environments fluently across key linguistic circles.",
    items: ["English (Professional Proficiency)", "Hindi (Fluent & Creative Expression)", "Bengali (Native Speaker / Colloquial & Formal)"]
  },
  {
    title: "Public Speaking & Advocacy",
    desc: "Articulating technical architectural principles onto cross-functional domains and stakeholders.",
    items: ["Technical Presentations", "Ideation Pitch Deck Strategy", "Team Facilitation & Syncing"]
  },
  {
    title: "Ideation & Design Thinking",
    desc: "Deconstructing massive industrial and biological issues down to solvable software targets.",
    items: ["ENERGIA Ideathon National Finalist", "Smart India Hackathon Core Thinker", "Fuzzy Logic System Modeler"]
  }
];
