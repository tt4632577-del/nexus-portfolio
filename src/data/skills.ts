import { SkillItem, SkillCategory } from '../types';

export const skillsData: SkillItem[] = [
  // Languages: Java, Python, JavaScript, SQL, HTML, CSS
  { name: 'Java', category: 'Languages', highlight: true },
  { name: 'Python', category: 'Languages', highlight: true },
  { name: 'JavaScript', category: 'Languages', highlight: true },
  { name: 'SQL', category: 'Languages', highlight: false },
  { name: 'HTML', category: 'Languages', highlight: false },
  { name: 'CSS', category: 'Languages', highlight: false },

  // Backend: Spring Boot, FastAPI, REST APIs, Maven
  { name: 'Spring Boot', category: 'Backend', highlight: true },
  { name: 'FastAPI', category: 'Backend', highlight: true },
  { name: 'REST APIs', category: 'Backend', highlight: true },
  { name: 'Maven', category: 'Backend', highlight: false },

  // Frontend & App: React, Vaadin, Chrome Extensions (Manifest V3)
  { name: 'React', category: 'Frontend & App', highlight: true },
  { name: 'Vaadin', category: 'Frontend & App', highlight: true },
  { name: 'Chrome Extensions (Manifest V3)', category: 'Frontend & App', highlight: true },

  // AI / ML & GenAI
  { name: 'LLM integration (Ollama)', category: 'AI / ML & GenAI', highlight: true },
  { name: 'Prompt Engineering', category: 'AI / ML & GenAI', highlight: true },
  { name: 'ML model deployment (ONNX Runtime)', category: 'AI / ML & GenAI', highlight: true },
  { name: 'OpenCV', category: 'AI / ML & GenAI', highlight: true },
  { name: 'OCR', category: 'AI / ML & GenAI', highlight: false },
  { name: 'Speech-to-Text / Text-to-Speech', category: 'AI / ML & GenAI', highlight: true },
  { name: 'Computer Vision', category: 'AI / ML & GenAI', highlight: false },

  // Databases: MySQL, MongoDB
  { name: 'MySQL', category: 'Databases', highlight: true },
  { name: 'MongoDB', category: 'Databases', highlight: true },

  // Tools: Git, GitHub, VS Code, Antigravity IDE (AI-assisted development)
  { name: 'Git', category: 'Tools', highlight: false },
  { name: 'GitHub', category: 'Tools', highlight: true },
  { name: 'VS Code', category: 'Tools', highlight: false },
  { name: 'Antigravity IDE (AI-assisted development)', category: 'Tools', highlight: true },

  // Core Concepts: Data Structures, OOP, DBMS, Machine Learning, REST API design
  { name: 'Data Structures', category: 'Core Concepts', highlight: true },
  { name: 'OOP', category: 'Core Concepts', highlight: true },
  { name: 'DBMS', category: 'Core Concepts', highlight: false },
  { name: 'Machine Learning', category: 'Core Concepts', highlight: true },
  { name: 'REST API design', category: 'Core Concepts', highlight: true },
];

export interface SkillCategoryMeta {
  title: string;
  category: SkillCategory;
  description: string;
  color: string;
}

export const skillCategories: SkillCategoryMeta[] = [
  {
    title: 'Languages',
    category: 'Languages',
    description: 'Object-oriented programming, modern scripting, and structured query languages.',
    color: '#DC2626',
  },
  {
    title: 'Backend Engineering',
    category: 'Backend',
    description: 'Robust server-side frameworks, high-speed Python inference services, and RESTful architectures.',
    color: '#DC2626',
  },
  {
    title: 'Frontend & App',
    category: 'Frontend & App',
    description: 'Modern component-driven web interfaces, enterprise full-stack UIs, and browser extensions.',
    color: '#DC2626',
  },
  {
    title: 'AI / ML & GenAI',
    category: 'AI / ML & GenAI',
    description: 'Local LLM orchestration, edge ONNX inference, computer vision, and speech processing.',
    color: '#DC2626',
  },
  {
    title: 'Databases',
    category: 'Databases',
    description: 'Relational data modeling, ACID transactions, and document-based NoSQL persistence.',
    color: '#DC2626',
  },
  {
    title: 'Tools & Platforms',
    category: 'Tools',
    description: 'Version control, developer environments, and AI-assisted engineering toolchains.',
    color: '#DC2626',
  },
  {
    title: 'Core Concepts',
    category: 'Core Concepts',
    description: 'Algorithmic fundamentals, modular software architecture, and machine learning foundations.',
    color: '#DC2626',
  },
];
