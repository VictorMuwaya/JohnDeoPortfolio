import React from 'react';
import { Briefcase } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-12 h-1 bg-primary-600 rounded-full"></span>
              About Me
            </h2>
            <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 space-y-4">
              <p>
                Visual communication is more than just making things look good; it's about conveying a message instantly. My passion lies in transforming abstract concepts into striking visual realities that capture attention on a crowded street.
              </p>
              <p>
                My career started in print media, obsessing over kerning and color proofs. This foundation in precision evolved into leading large-scale billboard campaigns where every pixel counts at 50 feet high. I believe in bold choices, clean typography, and purposeful design.
              </p>
              <p>
                Currently, I am exploring the fusion of traditional graphic design with 3D modeling to create immersive brand experiences for the physical world.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <span className="block text-3xl font-bold text-primary-600 dark:text-primary-400">8+</span>
                <span className="text-sm text-slate-500 dark:text-slate-400">Years of Design</span>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <span className="block text-3xl font-bold text-primary-600 dark:text-primary-400">100+</span>
                <span className="text-sm text-slate-500 dark:text-slate-400">Campaigns Delivered</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
              <Briefcase className="text-primary-500" /> Career Journey
            </h3>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              {EXPERIENCE.map((job) => (
                <div key={job.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 dark:bg-slate-800 group-hover:bg-primary-500 dark:group-hover:bg-primary-500 transition-colors shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <div className="w-3 h-3 bg-slate-400 rounded-full group-hover:bg-white transition-colors"></div>
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                      <h4 className="font-bold text-slate-900 dark:text-white text-lg">{job.role}</h4>
                      <time className="text-xs font-medium text-primary-600 dark:text-primary-400 px-2 py-1 bg-primary-50 dark:bg-primary-900/20 rounded-full">{job.period}</time>
                    </div>
                    <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">{job.company}</div>
                    <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-1">
                      {job.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;