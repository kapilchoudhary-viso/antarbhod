import React from 'react';
import { Brain, UserCheck, Calendar, Activity } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">

        {/* Journey Section */}
        <div className="bg-gradient-to-b from-slate-50 to-white rounded-[3rem] p-8 md:p-16 shadow-soft border border-gray-100 relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px]"></div>

          <div className="text-center mb-16 relative z-10">
            <span className="text-brand-accent font-script text-3xl block mb-2">Process</span>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6">Your Wellness Journey</h3>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto font-normal leading-relaxed">
              VisionCare is not crisis intervention. It is <span className="font-semibold text-brand-primary">proactive preparation support</span> designed to help you build resilience and balance.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-2 relative z-10">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-gray-200 via-brand-secondary/30 to-gray-200 z-0 dashed-line"></div>

            {[
              {
                icon: <Activity />,
                step: "01",
                title: "Assessment",
                desc: "Understanding your emotional state and stress levels.",
                theme: "from-slate-50 to-blue-50 border-blue-100 text-blue-600"
              },
              {
                icon: <Calendar />,
                step: "02",
                title: "Personalised Planning",
                desc: "Setting goals aligned with your needs.",
                theme: "from-blue-50 to-indigo-50 border-indigo-100 text-indigo-600"
              },
              {
                icon: <UserCheck />,
                step: "03",
                title: "1-on-1 Counselling",
                desc: "Support for anxiety, burnout, and emotional overwhelm.",
                theme: "from-indigo-50 to-purple-50 border-purple-100 text-purple-600"
              },
              {
                icon: <Brain />,
                step: "04",
                title: "Wellness Club",
                desc: "Guided group sessions to share and learn together.",
                theme: "from-purple-50 to-pink-50 border-pink-100 text-pink-600"
              }
            ].map((step, idx) => (
              <div key={idx} className="group relative flex flex-col items-center text-center">
                <div className={`w-24 h-24 bg-white rounded-full flex items-center justify-center mb-3 shadow-md border-4 border-white relative z-10 group-hover:scale-110 group-hover:border-white transition-all duration-300 ring-1 ring-gray-100`}>
                  <div className={`${step.theme.split(' ').pop()} transform group-hover:rotate-6 transition-transform`}>
                    {React.cloneElement(step.icon as React.ReactElement, { size: 32, className: step.theme.split(' ').pop() })}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-dark text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">
                    {step.step}
                  </div>
                </div>

                <div className={`bg-gradient-to-b ${step.theme.split(' text')[0]} p-4 rounded-3xl border shadow-sm w-full h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/40 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                  <h4 className="text-2xl font-stylish font-bold text-brand-dark mb-1 relative z-10">{step.title}</h4>
                  <p className="text-slate-700 leading-relaxed relative z-10">{step.desc}</p>
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