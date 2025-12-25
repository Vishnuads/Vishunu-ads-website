import React from "react";
import { motion } from "framer-motion";
import { Dot } from "lucide-react";
import Button from "../ui/Button";


const AiShoot = () => {
  return (
    <section className="bg-[#fffefa] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            
            <span className="flex items-center gap-2 mb-4 text-xs tracking-widest uppercase   ">
           <Dot/> Hybrid Approach
          </span>

            <h2 className="text-4xl md:text-5xl  mb-6 ">
              Shoot + AI 
          
            </h2>
            <h3 className="text-lg font-light text-gray-900 mb-4">
              Real shoots when needed. Enhanced with AI.
            </h3>

            <p className="text-lg text-gray-900  font-light leading-relaxed mb-6">
              Need your factory, founder, or a real celebrity on screen? We
              capture it. Everything else — from visuals to cinematic polish —
              is intelligently enhanced with AI.
              <br />
              <span className="block mt-4  font-light text-gray-800">
                Efficient, flexible, and always story-first.
              </span>
            </p>

           <Button name="Let's Create Your Film" link="/contact"/>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="rounded-3xl overflow-hidden border border-gray-200 bg-white">
              <img
                src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80"
                alt="Hybrid filming with camera and AI"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {["Real Shoots", "AI Enhancement", "Best of Both"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AiShoot;
