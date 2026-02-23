import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark">Voices of Resilience</h2>
          <div className="w-16 h-1 bg-brand-accent mx-auto mt-5 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
              {
                  text: "The Student Wellness Club helped me realise that my anxiety and self-doubt weren't personal failures — they were part of the process.",
                  author: "Community Member",
                  accentColor: "text-brand-primary",
                  accentBar: "bg-brand-primary",
                  avatarColor: "bg-brand-primary"
              },
              {
                  text: "I used to feel trapped by endless material and setbacks. Sharing in the club helped me reset without guilt. I'm approaching my goals smarter now.",
                  author: "Community Member",
                  accentColor: "text-brand-accent",
                  accentBar: "bg-brand-accent",
                  avatarColor: "bg-brand-accent"
              }
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-white border border-gray-100 p-10 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 group relative">
                <div className={`w-1 h-12 ${testimonial.accentBar} rounded-full absolute left-0 top-10`}></div>
                <Quote size={32} className={`${testimonial.accentColor} opacity-20 mb-6`} />
                <p className="text-slate-700 text-xl font-stylish italic mb-8 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                    <div className={`w-10 h-10 ${testimonial.avatarColor} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm`}>
                        V
                    </div>
                    <div>
                        <p className="font-semibold text-gray-900">{testimonial.author}</p>
                        <p className={`text-xs ${testimonial.accentColor} font-medium tracking-widest uppercase mt-0.5`}>Student Wellness Club</p>
                    </div>
                </div>
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
