import React from "react";
import { motion } from "framer-motion";

const FlipText = ({ name }) => {

    const DURATION = 0.30;

  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className=" block overflow-hidden whitespace-nowrap text-black uppercase "
      style={{
        position: "relative",
        lineHeight: 1,
      }}
    >
      <div>
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
            }}
            className="inline-block"
          >
            {name}
          </motion.span>
      </div>
      <div className="absolute inset-0">
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
            }}
            className="inline-block "
          >
            {name}
          </motion.span>
      </div>
    </motion.div>
  );
};

export default FlipText;