import React from 'react';
import { Brain, ShieldCheck, UserCheck, Lock } from 'lucide-react';

const WellnessMatters: React.FC = () => {
  return (
    <section id="wellness-matters" className="py-20 md:py-32 bg-slate-50 relative scroll-mt-20">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6">

        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2 pt-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-8">
              Why Mental Wellness <span className="text-brand-primary italic">Matters</span>
            </h2>
            <p className="text-xl text-slate-700 mb-10 leading-relaxed font-normal">
              A calm, steady mind is the engine of sustained preparation. At VisionCare, we recognise that success in any ambitious pursuit is not built by knowledge alone — it is built by mental clarity and emotional stability.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {[
                { text: "Retain and recall more effectively", color: "border-l-4 border-l-emerald-400 bg-emerald-50/50" },
                { text: "Perform consistently in assessments", color: "border-l-4 border-l-blue-400 bg-blue-50/50" },
                { text: "Respond calmly under pressure", color: "border-l-4 border-l-amber-400 bg-amber-50/50" },
                { text: "Sustain momentum over months", color: "border-l-4 border-l-purple-400 bg-purple-50/50" }
              ].map((item, i) => (
                <div key={i} className={`flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100 ${item.color} hover:shadow-md transition-shadow`}>
                  <div className="mt-0.5">
                    <Brain size={20} className="text-slate-600" />
                  </div>
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
                    icon: <ShieldCheck className="text-rose-600" size={28} />,
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