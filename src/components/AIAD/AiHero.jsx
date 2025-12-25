import React from "react";
import { Sparkles, ArrowRight, Dot } from "lucide-react";
import Button from "../ui/Button";

const Ai = () => {
  return (
    <section className="relative min-h-screen bg-[#fffefa] text-gray-900">
      <div className="max-w-7xl mx-auto px-6 pt-30 pb-10">

        {/* Eyebrow */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 font-light tracking-wider uppercase ">
           <Dot/> Next-Gen Creative Studio
            {/* <Sparkles className="w-3.5 h-3.5 text-gray-500" /> */}
          </span>
        </div>

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl  mb-6">
            AI-Powered Films
          </h1>

          <p className="text-lg md:text-xl font-light text-gray-600">
            Human-crafted storytelling enhanced with intelligence
          </p>
        </div>

        {/* Stats / Features */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "25+ Years",
              desc: "Creative leadership shaping cinematic storytelling"
            },
            {
              title: "Fast Execution",
              desc: "Premium AI-assisted production at record speed"
            },
            {
              title: "Save Lakhs",
              desc: "High-end results without traditional production costs"
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl text-center p-4 transition-all duration-300 hover:border-gray-400"
            >
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">

          <Button name="Start your project" link="/contact"/>
        </div>

      </div>
    </section>
  );
};

export default Ai;
