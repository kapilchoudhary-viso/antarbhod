import React from 'react';
import { ArrowRight, HeartPulse, BatteryCharging, Award, Fingerprint } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden bg-brand-dark">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-brand-primary/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-brand-accent/10 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 opacity-60"></div>
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-[1.1] tracking-tight">
            Nurturing Minds.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-blue-400">Building Leaders.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
            Your mental well-being is the foundation of sustained success. We help you build the <span className="font-semibold text-white">resilience</span>, <span className="font-semibold text-white">balance</span>, and <span className="font-semibold text-white">inner strength</span> needed for your journey.
          </p>

          <div className="flex items-center justify-center">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-10 py-4 bg-brand-primary text-white font-semibold rounded-full shadow-lg hover:bg-brand-secondary transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              Book a Session <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Wellness cards */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {[
            { text: "Overcome Anxiety",  Icon: HeartPulse,       iconColor: "text-sky-400",    iconBg: "bg-sky-400/15",    border: "hover:border-sky-400/40" },
            { text: "Manage Burnout",    Icon: BatteryCharging,  iconColor: "text-emerald-400", iconBg: "bg-emerald-400/15", border: "hover:border-emerald-400/40" },
            { text: "Defeat Self-Doubt", Icon: Award,            iconColor: "text-amber-400",  iconBg: "bg-amber-400/15",  border: "hover:border-amber-400/40" },
            { text: "Stop Comparing",    Icon: Fingerprint,      iconColor: "text-violet-400", iconBg: "bg-violet-400/15", border: "hover:border-violet-400/40" }
          ].map((item, index) => (
            <div key={index} className={`bg-white/8 border border-white/15 ${item.border} backdrop-blur-md px-5 py-7 rounded-2xl flex flex-col items-center text-center hover:bg-white/12 hover:shadow-lg transition-all duration-500 group`}>
              <div className={`${item.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                <item.Icon size={28} strokeWidth={1.5} className={item.iconColor} />
              </div>
              <span className="font-stylish font-semibold text-white text-xl md:text-2xl leading-snug">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
