import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden bg-brand-light">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-blue-100/40 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-amber-100/30 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 opacity-60"></div>
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">



          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-brand-dark mb-8 leading-[1.1] tracking-tight">
            Nurturing Minds.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Building Leaders.</span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-700 mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
            Your mental well-being is the foundation of sustained success. We help you build the <span className="font-semibold text-brand-primary">resilience</span>, <span className="font-semibold text-brand-primary">balance</span>, and <span className="font-semibold text-brand-primary">inner strength</span> needed for your journey.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-10 py-4 bg-brand-primary text-white font-medium rounded-full shadow-lg hover:shadow-brand-primary/30 hover:bg-brand-secondary transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              Join Wellness Club <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-10 py-4 bg-white/80 backdrop-blur-sm text-brand-primary border border-white font-medium rounded-full shadow-soft hover:bg-white hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Book a Session
            </button>
          </div>
        </div>

        {/* Struggle cards floating below - Themed Gradients */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-6xl mx-auto">
          {[
            { text: "Overcome Anxiety", icon: "😌", bg: "from-sky-50 to-blue-50/50 border-sky-100" },
            { text: "Manage Burnout", icon: "🔋", bg: "from-amber-50 to-orange-50/50 border-amber-100" },
            { text: "Defeat Self-Doubt", icon: "🛡️", bg: "from-indigo-50 to-violet-50/50 border-indigo-100" },
            { text: "Stop Comparing", icon: "🌟", bg: "from-emerald-50 to-teal-50/50 border-emerald-100" }
          ].map((item, index) => (
            <div key={index} className={`bg-gradient-to-br ${item.bg} backdrop-blur-md p-6 rounded-3xl shadow-sm border flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-lg transition-all duration-500 group relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/40 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10">{item.icon}</div>
              <span className="font-stylish font-bold text-brand-dark text-xl md:text-2xl relative z-10">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;