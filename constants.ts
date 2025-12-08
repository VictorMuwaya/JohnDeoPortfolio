import { Experience, Project, SkillCategory, SocialLink, Testimonial } from './types';

export const PERSONAL_INFO = {
  name: "John Doe",
  title: "Senior Graphic Designer",
  tagline: "Visual storytelling that commands attention.",
  bio: "I'm a visionary Graphic Designer with over 8 years of experience in large-scale visual media. I specialize in high-impact billboard campaigns, brand identity systems, and print media. I blend artistic intuition with marketing strategy to create visuals that don't just look good—they perform.",
  email: "john.doe@example.com",
  location: "New York, NY"
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Skyline Gin Billboard",
    description: "A nationwide billboard campaign for a premium gin brand. The design focused on high-contrast visuals for night visibility and luxury appeal.",
    technologies: ["Adobe Photoshop", "Illustrator", "Cinema 4D"],
    // Updated image to a high-quality billboard night shot
    imageUrl: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=800&q=80", 
    demoUrl: "#",
    caseStudyUrl: "#"
  },
  {
    id: "2",
    title: "TechFlow Rebrand",
    description: "Complete corporate identity overhaul for a logistics tech startup. Included logo design, stationery, and vehicle wrap designs.",
    technologies: ["Adobe Illustrator", "InDesign", "Figma"],
    imageUrl: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    caseStudyUrl: "#"
  },
  {
    id: "3",
    title: "Urban Music Festival",
    description: "Event branding package including stage backdrops, social media assets, and large-format promotional posters.",
    technologies: ["Photoshop", "After Effects", "Typography"],
    imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    caseStudyUrl: "#"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    company: "Apex Creative Agency",
    role: "Art Director",
    period: "2020 - Present",
    description: [
      "Oversee visual direction for major OOH (Out of Home) advertising campaigns.",
      "Lead a team of 5 designers, ensuring brand consistency across all print media.",
      "Awarded 'Campaign of the Year' for the Metro City Transit redesign."
    ]
  },
  {
    id: "2",
    company: "Vivid Prints Studio",
    role: "Senior Graphic Designer",
    period: "2016 - 2020",
    description: [
      "Specialized in large-format printing and billboard layout design.",
      "Collaborated with marketing teams to translate copy into compelling visual concepts.",
      "Managed pre-press processes to ensure 100% color accuracy in final production."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Design Software",
    skills: ["Photoshop", "Illustrator", "InDesign", "Cinema 4D", "Figma", "After Effects"]
  },
  {
    category: "Design Disciplines",
    skills: ["Billboard Design", "Brand Identity", "Typography", "Print Production", "Photo Manipulation"]
  },
  {
    category: "Professional",
    skills: ["Creative Direction", "Project Management", "Client Relations", "Pre-press", "Color Theory"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Jenkins",
    role: "Marketing Director",
    company: "Skyline Spirits",
    content: "John's vision for our billboard campaign was nothing short of revolutionary. We saw a 40% increase in brand engagement within weeks of the launch.",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "CEO",
    company: "TechFlow Logistics",
    content: "We needed a brand identity that screamed efficiency and modernity. John delivered a system that has become the backbone of our visual communication.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    role: "Event Coordinator",
    company: "City Pulse Events",
    content: "The artwork for the Urban Music Festival captured the exact energy we wanted. John is a true artist who understands the commercial landscape.",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: "Dribbble", url: "https://dribbble.com", iconName: "Dribbble" },
  { platform: "Instagram", url: "https://instagram.com", iconName: "Instagram" },
  { platform: "LinkedIn", url: "https://linkedin.com", iconName: "Linkedin" }
];