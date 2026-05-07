import WebDevelopmentIcon from '../assets/icons/website-development.svg';
import ManagementSystemsIcon from '../assets/icons/management-systems.svg';
import BrandingDesignIcon from '../assets/icons/branding-design.svg';

type AstroComponent = (props: any) => any;

export interface Service {
  id: number;
  name: string;
  icon: AstroComponent;
  description: string;
  is_featured: boolean;
  technologies: string[];
}

export const services: Service[] = [
  {
    id: 1,
    name: "Custom Web Development",
    icon: WebDevelopmentIcon,
    description: "High-performance, scalable websites tailored to your brand—designed to convert visitors into customers and drive measurable business growth.",
    is_featured: true,
    technologies: ["Vue", "TailwindCSS", "Laravel", "PostgreSQL"]
  },
  {
    id: 2,
    name: "Business & Managment Systems",
    icon: ManagementSystemsIcon,
    description: "Robust, custom-built web applications that streamline operations, automate workflows, and give you full control over your business processes.",
    is_featured: true,
    technologies: ["Vue", "TailwindCSS", "Laravel", "PostgreSQL"]
  },
  {
    id: 3,
    name: "Branding & Graphic Design",
    icon: BrandingDesignIcon,
    description: "Strategic visual identity design that communicates your brand’s value, builds trust, and creates a lasting impression across all platforms.",
    is_featured: true,
    technologies: ["Adobe Illustrator"]
  },
];

// Helper functions for filtering
export const getFeaturedServices = (limit?:number): Service[] => {
  const featuredServices = services.filter(project => project.is_featured);
  if (limit !== undefined) {
    return featuredServices.slice(0, limit);
  }
  return featuredServices;
}

export const getAllServices = (): Service[] => services;
