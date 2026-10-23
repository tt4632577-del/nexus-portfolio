import { SkillItem } from '../types';

export const skillsData: SkillItem[] = [
  // Programming
  { name: 'Java', category: 'Programming', highlight: true },
  { name: 'Python', category: 'Programming', highlight: true },

  // Backend
  { name: 'Spring Boot', category: 'Backend', highlight: true },
  { name: 'REST APIs', category: 'Backend', highlight: true },

  // AI and Intelligent Systems
  { name: 'Generative AI', category: 'AI & Intelligent Systems', highlight: true },
  { name: 'Machine Learning Fundamentals', category: 'AI & Intelligent Systems', highlight: true },
  { name: 'Computer Vision', category: 'AI & Intelligent Systems', highlight: true },

  // Tools & Platforms
  { name: 'Git', category: 'Tools & Platforms', highlight: false },
  { name: 'GitHub', category: 'Tools & Platforms', highlight: true },
  { name: 'Maven', category: 'Tools & Platforms', highlight: false },
  { name: 'IntelliJ IDEA', category: 'Tools & Platforms', highlight: false },

  // Databases
  { name: 'MongoDB', category: 'Databases', highlight: true },
];

export const skillCategories = [
  {
    title: 'Core Programming',
    category: 'Programming' as const,
    description: 'Object-oriented programming, clean system design, and algorithmic problem-solving.',
    color: '#ccff00',
  },
  {
    title: 'Backend Engineering',
    category: 'Backend' as const,
    description: 'Scalable service architectures, microservices principles, and secure RESTful endpoints.',
    color: '#00f0ff',
  },
  {
    title: 'AI & Intelligent Systems',
    category: 'AI & Intelligent Systems' as const,
    description: 'Computer vision pipelines, practical LLM integrations, and modern predictive workflows.',
    color: '#ccff00',
  },
  {
    title: 'Databases & Storage',
    category: 'Databases' as const,
    description: 'Document databases, structured schema modeling, and robust data persistence.',
    color: '#00f0ff',
  },
  {
    title: 'Tools & Workflows',
    category: 'Tools & Platforms' as const,
    description: 'Modern developer toolchains, version control, build automation, and productive IDE workflows.',
    color: '#94a3b8',
  },
];
