import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Card = ({ index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.1], [ 0, 40]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.50, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, scale }}
      className="sticky top-[20vh] border"
    >
      Testimonial {index}
    </motion.div>
  );
};
export default Card