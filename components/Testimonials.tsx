import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 dark:bg-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Client Words</h2>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            Don't just take my word for it. Here's what my partners and clients have to say about our collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 relative hover:shadow-md transition-shadow duration-300">
              <div className="absolute top-6 right-8 text-primary-100 dark:text-primary-900/30">
                <Quote size={40} className="transform rotate-180" />
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 mb-8 relative z-10 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.imageUrl} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary-100 dark:border-primary-900/50"
                />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;