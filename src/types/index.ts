export interface ProfileInfo {
  name: string;
  headline: string;
  roles: string[];
  bioIntro: string;
  currentDegree: string;
  currentUniversity: string;
  currentPeriod: string;
  previousDegree: string;
  previousUniversity: string;
  previousPeriod: string;
  location: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
  emailPlaceholder?: string;
  avatarPath: string;
}

export interface SkillItem {
  name: string;
  category: 'Programming' | 'Backend' | 'AI & Intelligent Systems' | 'Tools & Platforms' | 'Databases';
  highlight?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  featured: boolean;
  technologies: string[];
  status: 'Completed Prototype' | 'In Active Development' | 'Research & Prototype';
  category: 'AI & Systems' | 'Computer Vision' | 'Full Stack' | 'Mobile & Safety' | 'Security';
  problemStatement: string;
  architectureDetails: string;
  keyFeatures: string[];
  implementationHighlights: string[];
  challengesAndSolutions: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: 'Current' | 'Completed';
  focus: string;
}

export interface NavItem {
  name: string;
  href: string;
}
