import React from 'react';
import { Brain, UserCheck, Calendar, ClipboardList } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-10 md:py-14 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 scroll-reveal">

        {/* Journey Section */}
        <div className="bg-gradient-to-b from-slate-50 to-white rounded-[3rem] p-6 md:p-10 shadow-soft border border-gray-100 relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px]"></div>

          <div className="text-center mb-10 relative z-10">
            <span className="text-brand-accent font-script text-3xl block mb-2">Process</span>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6">Your Wellness Journey</h3>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto font-normal leading-relaxed">
              VisionCare is not crisis intervention. It is <span className="font-semibold text-brand-primary">proactive preparation support</span> designed to help you build resilience and balance.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 relative z-10">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-transparent via-brand-secondary/40 to-transparent z-0"></div>

            {[
              {
                icon: <ClipboardList />,
                step: "01",
                title: "Assessment",
                desc: "Understanding your emotional state and stress levels.",
                numBg: "bg-blue-600",
                iconBg: "bg-blue-50",
                iconColor: "text-blue-600",
                accentBar: "bg-blue-500"
              },
              {
                icon: <Calendar />,
                step: "02",
                title: "Personalised Planning",
                desc: "Setting goals aligned with your needs.",
                numBg: "bg-indigo-600",
                iconBg: "bg-indigo-50",
                iconColor: "text-indigo-600",
                accentBar: "bg-indigo-500"
              },
              {
                icon: <UserCheck />,
                step: "03",
                title: "1-on-1 Counselling",
                desc: "Support for anxiety, burnout, and emotional overwhelm.",
                numBg: "bg-purple-600",
                iconBg: "bg-purple-50",
                iconColor: "text-purple-600",
                accentBar: "bg-purple-500"
              },
              {
                icon: <Brain />,
                step: "04",
                title: "Wellness Club",
                desc: "Guided group sessions to share and learn together.",
                numBg: "bg-rose-500",
                iconBg: "bg-rose-50",
                iconColor: "text-rose-500",
                accentBar: "bg-rose-500"
              }
            ].map((step, idx) => (
              <div key={idx} className="group relative flex flex-col items-center text-center stagger-item">
                {/* Icon circle with step badge */}
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-md border-2 border-gray-100 relative z-10 group-hover:scale-110 transition-all duration-300">
                  <div className={`${step.iconBg} w-14 h-14 rounded-full flex items-center justify-center`}>
                    {React.cloneElement(step.icon as React.ReactElement, { size: 26, className: step.iconColor })}
                  </div>
                  <div className={`absolute -top-2 -right-2 w-7 h-7 ${step.numBg} text-white rounded-full flex items-center justify-center font-bold text-xs shadow-md border-2 border-white`}>
                    {step.step}
                  </div>
                </div>

                <div className="bg-white border border-gray-100 p-5 rounded-2xl shadow-sm w-full hover:shadow-md transition-all duration-300">
                  <div className={`w-8 h-0.5 ${step.accentBar} mx-auto mb-3 rounded-full`}></div>
                  <h4 className="text-xl font-stylish font-bold text-brand-dark mb-2">{step.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;