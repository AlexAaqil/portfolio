import simian_safaris_image from '../assets/projects/simian-safaris.png';
import qing_jia_safaris_image from '../assets/projects/qing-jia-safaris.png';
import shea254_image from '../assets/projects/shea254.png';

export interface ProjectResult {
    label: string;
    text: string;
}

export interface Project {
  id: string;
  name: string;
  url: string;
  preview_url: string;
  image: ImageMetadata;
  tags: string[];
  description: string;
  is_featured: boolean;
  date: string;
  technologies: string[];
  result: ProjectResult[];
}

export const projects = [
  {
    id: "01",
    name: "Simian Safaris",
    url: "https://simiansafaris.com",
    preview_url: "simiansafaris.com",
    image: simian_safaris_image,
    tags: ["Tourism", "Booking Platform"],
    description: "Full booking and tours management website for a Kenyan safari company. Built to capture international tourists searching for East Africa experiences, with an inquiry system and itinerary showcase.",
    is_featured: true,
    date: "2025",
    technologies: ["Laravel", "Livewire", "TailwindCSS", "MySQL"],
    result: [
        {
            "label": "Outcome",
            "text": "Live, functional booking site serving international tourists with full inquiry management."
        }
    ]
  },
  {
    id: "02",
    name: "Qing Jia Safaris",
    url: "https://qingjiasafaris.com",
    preview_url: "qingjiasafaris.com",
    image: qing_jia_safaris_image,
    tags: ["Tourism", "Multilingual"],
    description: "Tours and safari booking platform serving Chinese-speaking tourists visiting East Africa. Designed with cultural sensitivity for an international audience, with a full itinerary listing system.",
    is_featured: true,
    date: "2025",
    technologies: ["Laravel", "Livewire", "TailwindCSS", "MySQL"],
    result: [
        {
            "label": "Outcome",
            "text": "Tailored for International visitors — a real example of adapting digital products for international markets."
        }
    ]
  },
  {
    id: "03",
    name: "Shea254",
    url: "https://shea254.com",
    preview_url: "shea254.com",
    image: shea254_image,
    tags: ["E-Commerce", "Retail"],
    description: "Full e-commerce platform for a Kenyan natural beauty brand. Built with a product catalogue, cart, and checkout flow — designed to convert browsing shoppers into customers.",
    is_featured: true,
    date: "2024",
    technologies: ["Laravel", "Vue.js", "TailwindCSS", "MySQL"],
    result: [
        {
            "label": "Outcome",
            "text": "Live e-commerce storefront with full product management and order processing."
        }
    ]
  }
];

// Helper functions for filtering
export const getFeaturedProjects = (limit?:number): Project[] => {
  const featuredProjects = projects.filter(project => project.is_featured);
  if (limit !== undefined) {
    return featuredProjects.slice(0, limit);
  }
  return featuredProjects;
}

export const getAllProjects = (): Project[] => projects;
