import React from "react";
import { motion } from "framer-motion";
import { Dot } from "lucide-react";

const AiWhy = () => {
  const card = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-[#fffefa] py-12">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >

          <span className="flex items-center justify-center font-light gap-2 mb-4  tracking-widest uppercase   ">
            <Dot />  The Future of Production
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl  ">
            Why AI Photoshoots?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <motion.div
            variants={card}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden border border-gray-200 bg-white"
          >

            <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px]" />

            <div className="relative p-6">
              <h3 className="text-2xl font-semibold  mb-4">
                Go anywhere, without going anywhere.
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Create stunning scenes from across the globe—no travel, no
                logistics, just limitless virtual locations.
              </p>

              <div className="flex gap-3 flex-wrap">
                {["∞ Locations", "Zero Travel"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gray-100 border border-gray-300 text-gray-800 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={card}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden border border-gray-200 bg-white"
          >

            <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />

            <div className="relative p-6 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold  mb-4">
                  Save big, shoot smarter.
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Reduce production costs by up to 70% while maintaining
                  cinematic-quality visuals.
                </p>
              </div>

              <span className="inline-block w-fit px-4 py-2 bg-gray-100 border border-gray-300 text-gray-800 rounded-full text-xs font-medium">
                70% Cost Reduction
              </span>
            </div>
          </motion.div>
        </div>
        {/* Wide Card */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 my-4">
          <motion.div
            variants={card}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:col-span-2 relative rounded-3xl overflow-hidden border border-gray-200 bg-white"
          >

            <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px]" />

            <div className="relative p-6 max-w-3xl">
              <h3 className="text-2xl font-semibold mb-4">
                Any style, any time—no limits.
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                From retro noir to futuristic sci-fi, create any visual style
                instantly—without sets, seasons, or constraints.
              </p>

              <div className="flex flex-wrap gap-3">
                {["Minimalist", "Cinematic", "+ More"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gray-100 border border-gray-300 text-gray-800 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={card}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className=" relative rounded-3xl overflow-hidden border border-gray-200 bg-white"
          >
            <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px]" />

            <div className="relative p-6 max-w-3xl">
              <h3 className="text-2xl font-semibold mb-4">
                High-Quality, <br /> Engaging Ads
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our copywriters, editors, and designers ensure real impact.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AiWhy;
