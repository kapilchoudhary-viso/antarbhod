import React from 'react';
import { Lightbulb, Target, Waves, TrendingUp, MessageCircle, UserCheck, Lock } from 'lucide-react';

const WellnessMatters: React.FC = () => {
  return (
    <section id="wellness-matters" className="py-14 md:py-20 bg-slate-50 relative scroll-mt-20">
      {/* Smooth section transitions */}
      <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-white to-transparent pointer-events-none z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>

      <div className="container mx-auto px-4 md:px-6">

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          <div className="lg:w-1/2 pt-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-8">
              Why Mental Wellness <span className="text-brand-primary italic">Matters</span>
            </h2>
            <p className="text-xl text-slate-700 mb-10 leading-relaxed font-normal">
              A calm, steady mind is the engine of sustained preparation. At VisionCare, we recognise that success in any ambitious pursuit is not built by knowledge alone — it is built by mental clarity and emotional stability.
            </p>

            <div className="flex flex-col gap-3">
              {[
                { text: "Retain and recall more effectively",   Icon: Lightbulb,  accent: "bg-emerald-400", bg: "bg-white hover:bg-emerald-50/50" },
                { text: "Perform consistently in assessments", Icon: Target,     accent: "bg-blue-400",    bg: "bg-white hover:bg-blue-50/50" },
                { text: "Respond calmly under pressure",       Icon: Waves,      accent: "bg-amber-400",   bg: "bg-white hover:bg-amber-50/50" },
                { text: "Sustain momentum over months",        Icon: TrendingUp, accent: "bg-purple-400",  bg: "bg-white hover:bg-purple-50/50" }
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-4 p-5 ${item.bg} rounded-xl shadow-sm border border-gray-100 transition-all duration-200 hover:shadow-md hover:-translate-x-1`}>
                  <div className={`flex-shrink-0 w-1.5 h-10 ${item.accent} rounded-full`}></div>
                  <item.Icon size={18} className="text-slate-400 flex-shrink-0" />
                  <span className="text-slate-800 font-medium leading-snug">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white rounded-[2.5rem] p-10 md:p-12 border border-gray-100 relative overflow-hidden shadow-2xl">
              {/* Advanced Gradient Background */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-brand-primary/5 via-brand-secondary/5 to-transparent rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-amber-50/50 to-transparent rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>

              <h3 className="text-3xl font-serif font-bold text-brand-dark mb-10 relative z-10">Our Core Support System</h3>
              <div className="space-y-3 relative z-10">
                {[
                  {
                    icon: <UserCheck className="text-indigo-600" size={28} />,
                    title: "Experienced Professionals",
                    desc: "Experts who understand the pressure of competitive environments.",
                    bg: "bg-indigo-50/80 border-indigo-100"
                  },
                  {
                    icon: <Lock className="text-emerald-600" size={28} />,
                    title: "Complete Privacy",
                    desc: "A secure, respectful, and judgment-free space for your journey.",
                    bg: "bg-emerald-50/80 border-emerald-100"
                  },
                  {
                    icon: <MessageCircle className="text-rose-600" size={28} />,
                    title: "One-on-One Counselling",
                    desc: "Confidential support for anxiety, burnout, motivation dips, and confidence loss.",
                    bg: "bg-rose-50/80 border-rose-100"
                  }
                ].map((item, idx) => (
                  <div key={idx} className={`flex gap-6 p-4 rounded-2xl border ${item.bg} hover:scale-[1.02] transition-transform duration-300 shadow-sm`}>
                    <div className="flex-shrink-0 w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-stylish font-bold text-gray-900 text-2xl mb-1">{item.title}</h4>
                      <p className="text-slate-700 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WellnessMatters;