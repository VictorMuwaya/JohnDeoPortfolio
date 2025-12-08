import React from 'react';
import { SOCIALS, PERSONAL_INFO } from '../constants';
import { Github, Linkedin, Twitter, Dribbble, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const getIcon = (name: string) => {
    switch(name) {
      case 'Github': return <Github size={20} />;
      case 'Linkedin': return <Linkedin size={20} />;
      case 'Twitter': return <Twitter size={20} />;
      case 'Dribbble': return <Dribbble size={20} />;
      case 'Instagram': return <Instagram size={20} />;
      default: return null;
    }
  };

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{PERSONAL_INFO.name}</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          {SOCIALS.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label={social.platform}
            >
              {getIcon(social.iconName)}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;