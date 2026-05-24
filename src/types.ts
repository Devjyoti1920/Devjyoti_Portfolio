export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  bgGradient: string;
  neonClass: "neon-border-blue" | "neon-border-magenta" | "neon-border-purple";
  skills: Skill[];
}

export interface Project {
  title: string;
  tech: string[];
  desc: string;
  details: string;
  metric: string;
  category: "fullstack" | "aiml" | "cloud" | "hardware" | "hackathon";
}

export interface NonTechSkill {
  title: string;
  desc: string;
  items: string[];
}
