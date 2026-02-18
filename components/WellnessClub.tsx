import React from 'react';
import { Users, Feather, RefreshCw, Zap, Flower } from 'lucide-react';

const WellnessClub: React.FC = () => {
  const activities = [
    {
      icon: <Users size={24} />,
      title: "Check-In Circles",
      desc: "A structured space to share weekly highs and lows without judgment.",
      cardTheme: "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: <Feather size={24} />,
      title: "Guided Reflection",
      desc: "Thoughtfully designed prompts to process fear of failure and comparison.",
      cardTheme: "bg-gradient-to-br from-violet-50 to-fuchsia-50 border-violet-100",
      iconColor: "text-violet-600"
    },
    {
      icon: <Flower size={24} />,
      title: "Mindfulness & Grounding",
      desc: "Breathing and calming techniques for performance anxiety.",
      cardTheme: "bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-100",
      iconColor: "text-emerald-600"
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Cognitive Reframing",
      desc: "Learn to challenge perfectionism and “falling behind” narratives.",
      cardTheme: "bg-gradient-to-br from-amber-50 to-orange-50 border-amber-100",
      iconColor: "text-amber-600"
    },
    {
      icon: <Zap size={24} />,
      title: "Energy & Focus Resets",
      desc: "Practical tools to rebuild consistency and mental stamina.",
      cardTheme: "bg-gradient-to-br from-rose-50 to-red-50 border-rose-100",
      iconColor: "text-rose-600"
    }
  ];

  return (
    <section id="wellness-club" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden scroll-mt-20">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-3 block">VisionCare Community</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-brand-dark">Student Wellness Club</h2>
          <p className="text-2xl font-script text-brand-accent mb-6 transform -rotate-1">
            "Strength in Community"
          </p>
          <p className="mt-6 text-slate-700 max-w-3xl mx-auto text-lg font-light leading-relaxed">
            The Student Wellness Club is a weekly, guided group experience where individuals come together to reflect, share, and build resilience. Because sometimes the most powerful breakthrough comes from realising: <span className="text-brand-primary font-semibold border-b border-brand-accent/50 pb-0.5">“I’m not alone in this.”</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          {activities.map((activity, idx) => (
            <div key={idx} className={`${activity.cardTheme} border p-5 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

              <div className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center ${activity.iconColor} mb-3 group-hover:scale-110 transition-transform duration-300 shadow-sm relative z-10 ring-1 ring-black/5`}>
                {activity.icon}
              </div>
              <h3 className="text-3xl font-stylish font-bold mb-1 text-brand-dark relative z-10">{activity.title}</h3>
              <p className="text-slate-700 leading-relaxed relative z-10">{activity.desc}</p>
            </div>
          ))}

          {/* Key Values Card */}
          <div className="bg-gradient-to-br from-slate-800 to-brand-dark border border-gray-700 p-8 rounded-3xl flex flex-col justify-center items-center text-center shadow-xl relative overflow-hidden text-white">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent via-brand-secondary to-brand-accent"></div>

            <h3 className="text-3xl font-stylish font-bold mb-6 relative z-10">Core Principles</h3>
            <ul className="space-y-4 text-base relative z-10 w-full">
              {[
                "Every session is confidential",
                "Participation is voluntary",
                "Growth is collective"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 bg-white/10 rounded-lg p-3 w-full border border-white/10 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-brand-accent rounded-full shadow-[0_0_8px_rgba(245,158,11,0.8)]"></div>
                  <span className="font-medium text-slate-100">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WellnessClub;