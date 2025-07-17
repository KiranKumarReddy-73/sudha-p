export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  skills: string[];
  icon: React.ComponentType<any>;
  color: string;
  description: string;
}

export interface Skill {
  title: string;
  icon: React.ComponentType<any>;
  color: string;
  level: number;
  description: string;
}

export interface ContactMethod {
  icon: React.ComponentType<any>;
  label: string;
  value: string;
  href: string;
  color: string;
}

export interface NavItem {
  id: string;
  label: string;
  isExternal?: boolean;
}