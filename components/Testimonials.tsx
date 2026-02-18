import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark">Voices of Resilience</h2>
          <div className="w-24 h-1.5 bg-brand-accent mx-auto mt-6 rounded-full opacity-50"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {[
              {
                  text: "The Student Wellness Club helped me realise that my anxiety and self-doubt weren’t personal failures — they were part of the process.",
                  author: "Community Member",
                  gradient: "from-blue-50/50 to-indigo-50/30"
              },
              {
                  text: "I used to feel trapped by endless material and setbacks. Sharing in the club helped me reset without guilt. I’m approaching my goals smarter now.",
                  author: "Community Member",
                  gradient: "from-amber-50/50 to-orange-50/30"
              }
          ].map((testimonial, idx) => (
            <div key={idx} className={`bg-gradient-to-br ${testimonial.gradient} border border-gray-100 p-10 rounded-[2.5rem] relative hover:shadow-xl transition-all duration-300 group`}>
                <div className="absolute -top-6 left-10 w-12 h-12 bg-white text-brand-primary flex items-center justify-center rounded-full shadow-md border border-gray-50 group-hover:scale-110 transition-transform">
                    <Quote size={20} />
                </div>
                <p className="text-slate-800 text-xl font-serif italic mb-8 pt-4 leading-relaxed opacity-90 relative z-10">
                “{testimonial.text}”
                </p>
                <div className="flex items-center gap-4 border-t border-gray-200/60 pt-6 relative z-10">
                    <div className="w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md font-serif">
                        V
                    </div>
                    <div>
                        <p className="font-bold text-gray-900 text-lg">{testimonial.author}</p>
                        <p className="text-sm text-brand-primary font-medium tracking-wide uppercase">Student Wellness Club</p>
                    </div>
                </div>
                {/* Subtle texture overlay */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-30 rounded-[2.5rem] pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="text-2xl font-serif italic text-slate-600">
            When the mind feels supported, preparation becomes <span className="text-brand-primary not-italic font-bold">sustainable.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;