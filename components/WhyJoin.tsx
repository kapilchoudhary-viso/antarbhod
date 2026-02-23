import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface WhyJoinProps {
  onOpenContact: () => void;
}

const WhyJoin: React.FC<WhyJoinProps> = ({ onOpenContact }) => {
  const benefits = [
    {
      title: "Address Performance Pressure",
      desc: "Information overload, anxiety, loneliness, self-doubt.",
      bg: "bg-white border-l-4 border-l-red-400"
    },
    {
      title: "Learn Evidence-Based Tools",
      desc: "Improve concentration, manage stress, and regulate emotions.",
      bg: "bg-white border-l-4 border-l-blue-400"
    },
    {
      title: "Prevent Burnout",
      desc: "Strengthen resilience before exhaustion sets in.",
      bg: "bg-white border-l-4 border-l-amber-400"
    },
    {
      title: "Build a Genuine Support System",
      desc: "Connect with peers who truly understand your challenging journey.",
      bg: "bg-white border-l-4 border-l-green-400"
    }
  ];

  return (
    <section className="py-14 md:py-20 bg-brand-light relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-10 leading-tight">
              Why Join the <br/><span className="text-brand-accent font-script text-6xl md:text-7xl">Club?</span>
            </h2>
            
            <div className="space-y-4">
              {benefits.map((item, idx) => (
                <div key={idx} className={`flex gap-5 p-5 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-x-1 ${item.bg}`}>
                  <div className="mt-1 flex-shrink-0 text-brand-secondary">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-stylish font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-10 md:p-14 shadow-2xl border border-gray-700 text-center relative overflow-hidden group text-white">
               {/* Decorative elements */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary rounded-full blur-[80px] opacity-40 -translate-y-1/2 translate-x-1/2"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent rounded-full blur-[80px] opacity-30 translate-y-1/2 -translate-x-1/2"></div>
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

               <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 relative z-10">Take the First Step</h3>
               <p className="text-slate-200 mb-10 text-lg leading-relaxed relative z-10 font-normal">
                 Your mental well-being is as important as your hard work and strategy. Strong performance begins with a steady mind.
               </p>

               <div className="bg-white/20 border border-white/30 rounded-2xl p-5 mb-10 inline-block backdrop-blur-md relative z-10 shadow-lg">
                 <p className="text-amber-300 font-bold text-sm flex items-center gap-2 justify-center tracking-wide">
                   <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.8)]"></span>
                   Limited seats to ensure meaningful participation.
                 </p>
               </div>

               <button 
                 onClick={onOpenContact}
                 className="block w-full bg-white text-brand-dark font-bold py-5 px-8 rounded-2xl shadow-lg hover:bg-brand-accent hover:text-white transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 relative z-10 text-lg cursor-pointer"
               >
                 Join the Student Wellness Club <ArrowRight />
               </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyJoin;