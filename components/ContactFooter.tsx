import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const ContactFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-dark text-white pt-20 pb-12 scroll-mt-20 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 border-b border-gray-800 pb-16 mb-12">
          
          <div className="md:w-1/2">
            <h2 className="text-4xl font-serif font-bold mb-6">
              <span className="font-sans"><span className="text-red-500">Vision</span><span className="text-brand-secondary">Care</span></span> 
              <span className="text-2xl font-script text-brand-accent ml-2 block sm:inline">(Antarbodh)</span>
            </h2>
            <p className="text-slate-300 text-xl mb-10 max-w-lg leading-relaxed font-light">
              Your overall well-being is the foundation of sustained success. A balanced mind helps you learn better, perform consistently, and face challenges with confidence.
            </p>
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-12 bg-brand-accent"></div>
              <span className="text-white uppercase tracking-[0.2em] text-sm font-semibold">Nurturing Minds. Building Leaders.</span>
            </div>
          </div>

          <div className="md:w-1/2 md:pl-10">
            <h3 className="text-2xl font-serif font-bold mb-8">Connect With Us</h3>
            <div className="space-y-6">
              <a 
                href="mailto:student.wellness@visionias.in" 
                className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors group border border-white/5"
              >
                <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-brand-accent uppercase tracking-wider font-bold mb-1">Request a Session</p>
                  <p className="text-white font-medium text-lg">student.wellness@visionias.in</p>
                </div>
              </a>

              <a 
                href="tel:9311799223" 
                className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors group border border-white/5"
              >
                <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-brand-accent uppercase tracking-wider font-bold mb-1">Direct Support</p>
                  <p className="text-white font-medium text-lg">9311799223</p>
                </div>
              </a>
            </div>
            
            <div className="mt-10 pt-8 border-t border-gray-800">
               <a href="https://visionias.in" target="_blank" rel="noreferrer" className="inline-flex items-center text-slate-400 hover:text-white transition-colors text-sm group">
                 Visit Main VisionIAS Website <ExternalLink size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
               </a>
            </div>
          </div>
        </div>

        <div className="text-center text-slate-500 text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} VisionIAS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;