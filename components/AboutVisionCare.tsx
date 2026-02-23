import React from 'react';
import { Compass, Heart, Sparkles } from 'lucide-react';

const AboutVisionCare: React.FC = () => {
  return (
    <section id="about" className="py-14 md:py-20 bg-white relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 bg-brand-primary/10 rounded-full px-4 py-1.5 mb-6">
              <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">Who We Are</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-8 leading-tight">
              About <span className="font-sans"><span className="text-red-600">Vision</span><span className="text-brand-primary">Care</span></span> <br/>
              <span className="font-script text-brand-accent text-5xl md:text-6xl mt-2 block">(Antarbodh)</span>
            </h2>
            <p className="text-xl text-slate-700 mb-6 leading-relaxed font-normal">
              <span className="font-semibold text-brand-dark">VisionCare (Antarbodh)</span> is a dedicated wellness initiative by VisionIAS, designed to support the mental and emotional well-being of various aspirants and individuals.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              We provide a safe, confidential space where you can address the unique psychological challenges of high-pressure environments, academic pursuits, and personal growth.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Through professional counselling, peer support, and holistic wellness strategies, we aim to nurture not just successful outcomes, but resilient and balanced lives.
            </p>
          </div>

          <div className="md:w-1/2">
             <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-brand-accent opacity-10 transform rotate-6 rounded-[2rem] transition-transform duration-500 group-hover:rotate-3"></div>
                <div className="bg-white relative rounded-[2rem] p-10 shadow-xl border border-gray-50 backdrop-blur-xl">
                    <div className="space-y-8">
                        {[
                            { icon: Compass, color: "text-blue-600", bg: "bg-blue-50", title: "Holistic Support", desc: "Addressing performance pressure, emotional health, and lifestyle balance." },
                            { icon: Heart, color: "text-rose-500", bg: "bg-rose-50", title: "Empathetic Care", desc: "A judgment-free zone to voice fears and find inner strength." },
                            { icon: Sparkles, color: "text-amber-500", bg: "bg-amber-50", title: "Potential Unlocked", desc: "Removing mental blocks to help you perform at your peak." }
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-5 items-start group/item">
                                <div className={`flex-shrink-0 w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center shadow-sm transition-transform duration-300 group-hover/item:scale-110`}>
                                    <item.icon size={26} />
                                </div>
                                <div>
                                    <h4 className="font-stylish font-bold text-gray-900 text-2xl">{item.title}</h4>
                                    <p className="text-slate-700 mt-2 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVisionCare;