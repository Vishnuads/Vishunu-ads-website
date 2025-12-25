import React from "react";
import { Film, Tv, Dot } from "lucide-react";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function AiService() {
  const services = [
    {
      icon: Film,
      number: "01",
      title: "Cinema / Theatre Ads",
      description:
        "Big screen. Bigger impact. Take your brand to the theatres with cinematic flair and unmatched recall."
    },
    {
      icon: Tv,
      number: "02",
      title: "TV & OTT Ads",
      description:
        "Mass reach, made smarter. Create memorable TV/OTT commercials without traditional production delays."
    },
    {
      icon: FaYoutube,
      number: "03",
      title: "YouTube Ads",
      description:
        "Educate, engage, convert. From promos to product explainers, your YouTube presence starts here."
    },
    {
      icon: FaInstagram,
      number: "04",
      title: "Instagram Reels / Ads",
      description:
        "Scroll-stopping stories. Trend with AI-generated reels that connect and convert."
    }
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative bg-[#fffefa] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <span className="flex items-center justify-center font-light gap-2 mb-6 tracking-widest uppercase   ">
            Our Expertise <Dot/> 
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl  mb-6 ">
            Where AI Meets  Broadcast Quality
          </h2>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            We craft cinematic-quality brand films, commercials, and digital
            stories ready for every screen.
          </p>
        </motion.div>

        {/* Services */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 max-w-6xl mx-auto gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className="group border border-gray-200 rounded-2xl p-6 bg-white transition-all duration-300 hover:border-gray-400 overflow-hidden"
              >
                <div className="relative flex items-start justify-between mb-8">
                  <span className="absolute -top-10 -left-10 text-7xl font-semibold text-gray-200">
                    {service.number}
                  </span>
                  <span className="absolute top-0 right-0">
                  <Icon className="w-8 h-8 text-gray-800" />
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-700 font-light leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center items-center mt-24"
        >
          <p className="text-gray-600 mb-8">
            Ready to transform your brand’s visual story?
          </p>

         <Button name="Explore our work" link="/" />
        </motion.div> */}
      </div>
    </section>
  );
}
