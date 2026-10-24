export interface ProfileInfo {
  name: string;
  headline: string;
  roles: string[];
  bioIntro: string;
  currentDegree: string;
  currentUniversity: string;
  currentPeriod: string;
  currentGpa?: string;
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

export type SkillCategory = 
  | 'Languages' 
  | 'Backend' 
  | 'Frontend & App' 
  | 'AI / ML & GenAI' 
  | 'Databases' 
  | 'Tools' 
  | 'Core Concepts';

export interface SkillItem {
  name: string;
  category: SkillCategory;
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
  status: string;
  category: string;
  problemStatement?: string;
  architectureDetails?: string;
  keyFeatures: string[];
  implementationHighlights?: string[];
  challengesAndSolutions?: string[];
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
  gpa?: string;
}

export interface NavItem {
  name: string;
  href: string;
}
