export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
  techStack: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
  features: string[];
}

export interface Skill {
  name: string;
  level: number; // percentage
  category: 'frontend' | 'tools' | 'business' | 'other';
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface TimelineEvent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}
