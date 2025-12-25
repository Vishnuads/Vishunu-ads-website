import React from "react";
import { motion } from "framer-motion";

const AiVision = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-[#fffefa] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center max-w-4xl mx-auto mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-6">
            Reimagining Advertising <br /> & Filmmaking
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Where human creativity meets the power of artificial intelligence.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* Vision */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-gray-200 rounded-3xl p-10"
          >
            <h3 className="text-3xl font-semibold text-gray-900 mb-6">
              Our Vision
            </h3>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              To blend 25+ years of storytelling expertise with cutting-edge AI,
              delivering impactful ad films swiftly and affordably.
            </p>

            <div className="h-[2px] w-16 bg-gray-900" />
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-gray-200 rounded-3xl p-10"
          >
            <h3 className="text-3xl font-semibold text-gray-900 mb-6">
              Our Mission
            </h3>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              To revolutionize brand communication through smart storytelling,
              making innovative ad films accessible to every business.
            </p>

            <div className="h-[2px] w-16 bg-gray-900" />
          </motion.div>
        </div>

        {/* Footer Accent */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-20"
        >
         
        </motion.div>

      </div>
    </section>
  );
};

export default AiVision;
