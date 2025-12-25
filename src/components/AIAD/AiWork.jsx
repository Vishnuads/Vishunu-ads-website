import React from "react";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaMapMarkedAlt,
  FaRobot,
  FaMagic,
  FaRocket
} from "react-icons/fa";
import { Dot } from "lucide-react";
import Button from "../ui/Button";

export default function HowWeWorkSection() {
  const steps = [
    {
      icon: FaLightbulb,
      title: "Brief It",
      description: "We understand your goal and your audience.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    },
    {
      icon: FaMapMarkedAlt,
      title: "Plan It",
      description: "Script, style, and visual flow mapped clearly.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    },
    {
      icon: FaRobot,
      title: "Create It",
      description: "AI-generated visuals aligned with your brand.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
    },
    {
      icon: FaMagic,
      title: "Polish It",
      description: "Editing, color, voice, and finishing touches.",
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80"
    },
    {
      icon: FaRocket,
      title: "Final Touch",
      description: "Feedback, refinement, and launch-ready delivery.",
      image:
        "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=800&q=80"
    }
  ];

  return (
    <section className="bg-[#fffefa] py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-28"
        >

          <span className="flex items-center justify-center font-light gap-2 mb-4  tracking-widest uppercase  ">
              Our Process <Dot/> 
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl  mb-6 ">
            How We Work
          </h2>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            We blend storytelling experience with AI-driven efficiency to
            deliver cinematic results — faster, cleaner, and smarter.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />

          <div className="space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative"
                >
                  {/* Desktop */}
                  <div className="hidden lg:grid lg:grid-cols-2 gap-6 items-center">
                    {/* Text */}
                    <div
                      className={`${
                        isEven ? "text-right pr-8" : "text-left pl-8 col-start-2"
                      }`}
                    >
                      <Icon className="text-3xl text-gray-400 mb-4 inline-block" />
                      <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Image */}
                    <div
                      className={`${
                        isEven ? "pl-8" : "pr-8 col-start-1 row-start-1"
                      }`}
                    >
                      <div className="rounded-3xl overflow-hidden border border-gray-200 bg-white">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Mobile */}
                  <div className="lg:hidden border border-gray-200 rounded-3xl bg-white p-4">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="rounded-2xl mb-6"
                    />
                    <div className="flex items-start gap-4">
                      <Icon className="text-2xl text-gray-400 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-3 h-3 rounded-full bg-gray-400" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center mt-16"
        >
          <p className="text-gray-600 mb-8">
            Ready to bring your vision to life?
          </p>

          <Button name="Let's start" link="contact"/>
        </motion.div>
      </div>
    </section>
  );
}
