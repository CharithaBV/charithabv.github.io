export type ExperienceCategory = 'all' | 'product' | 'operations' | 'embedded';

export interface ContactInfo {
  location: string;
  email: string;
  linkedInUrl: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface FeaturedPublication {
  icon: string;
  title: string;
  links: {
    label: string;
    url: string;
  }[];
}

export interface HighlightItem {
  prefix: string;
  content: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  companyOrOrg: string;
  location: string;
  period: string;
  category: 'product' | 'operations' | 'embedded';
  description: string;
  links?: {
    label: string;
    url: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface ResearchItem {
  title: string;
  content: string;
  url?: string;
  urlLabel?: string;
  doi?: string;
  doiUrl?: string;
}

export interface ResearchMilestone {
  title: string;
  description: string;
  link?: {
    label: string;
    url: string;
  };
}

