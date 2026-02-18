import React from 'react';
import { X, Mail, Phone } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-white rounded-3xl p-8 max-w-md w-full relative z-10 shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
        >
          <X size={20} className="text-gray-600" />
        </button>
        
        <div className="text-center mb-8">
          <h3 className="text-3xl font-serif font-bold text-brand-dark mb-2">Get in Touch</h3>
          <p className="text-slate-600">We are here to support your journey.</p>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-brand-light rounded-2xl border border-blue-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-primary shadow-sm">
              <Mail size={24} />
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-xs text-brand-secondary font-bold uppercase tracking-wider mb-0.5">Email Us</p>
              <a href="mailto:student.wellness@visionias.in" className="text-slate-800 font-medium hover:text-brand-primary transition-colors block truncate">
                student.wellness@visionias.in
              </a>
            </div>
          </div>

          <div className="p-4 bg-brand-light rounded-2xl border border-blue-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-primary shadow-sm">
              <Phone size={24} />
            </div>
            <div className="flex-1">
              <p className="text-xs text-brand-secondary font-bold uppercase tracking-wider mb-0.5">Call Us</p>
              <a href="tel:9311799223" className="text-slate-800 font-medium hover:text-brand-primary transition-colors block">
                9311799223
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center border-t border-gray-100 pt-6">
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">Available Mon-Sat, 10 AM - 6 PM</p>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;