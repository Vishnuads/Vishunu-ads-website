import { motion, useScroll, useTransform } from "framer-motion";
import { Dot } from "lucide-react";
import { useRef } from "react";
import MovingArrow from "../ui/MovingArrow";

export default function Parallax() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Text animation
  const textScale = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  // const textOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // ENTRY → CENTER
  const fromLeft = useTransform(scrollYProgress, [0, 0.7], ["-310%", "0%"]);
  const fromRight = useTransform(scrollYProgress, [0, 0.7], ["310%", "0%"]);
  const fromTop = useTransform(scrollYProgress, [0, 0.7], ["-280%", "0%"]);
  const fromBottom = useTransform(scrollYProgress, [0, 0.7], ["250%", "0%"]);

  // STACK DEPTH
  const scaleFront = useTransform(scrollYProgress, [0.7, 1], [1, 1]);
  const scaleMid = useTransform(scrollYProgress, [0.7, 1], [1, 0.94]);
  const scaleBack = useTransform(scrollYProgress, [0.7, 1], [1, 0.88]);
  const scaleDeep = useTransform(scrollYProgress, [0.7, 1], [1, 0.82]);

  const zFront = useTransform(scrollYProgress, [0.7, 1], [40, 40]);
  const zMid = useTransform(scrollYProgress, [0.7, 1], [30, 30]);
  const zBack = useTransform(scrollYProgress, [0.7, 1], [20, 20]);
  const zDeep = useTransform(scrollYProgress, [0.7, 1], [10, 10]);

  // ROTATION RESET (nice polish)
  const rotateReset = useTransform(scrollYProgress, [0.6, 1], ["8deg", "0deg"]);

  return (
    <>
      <section ref={ref} className="relative h-[300vh] ">
        <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">

          {/* CENTER TEXT */}
          <motion.div
            style={{ scale: textScale }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="text-center">
              <p className="tracking-widest text-[12px] font-light uppercase flex items-center justify-center gap-2">
                <Dot /> ACHIEVEMENTS
              </p>
              <h1 className=" font-light md:text-6xl text-3xl max-w-[90vw] mx-auto">
                As a data driven team, <br />we let the numbers
                speak for us
              </h1>
            </div>
          </motion.div>

          {/* CARD 1 – LEFT → FRONT */}
          <motion.div
            style={{
              x: fromLeft,
              scale: scaleFront,
              rotate: rotateReset,
              zIndex: zFront,
            }}
            className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2
                     md:w-64 md:h-64 w-52 h-52 bg-gradient-to-br from-black/10 via-white to-black/10 backdrop-blur-3xl rounded-xl shadow-2xl flex items-center justify-center text-center p-4"
          >
            <div className="text-black">
              <h2 className=" text-gray-500"> Experience </h2>
              <p className="md:text-5xl text-2xl md:my-4 my-2 acheive-p font-semibold">19 Years</p>
              <p className="text-xs md:text-sm text-gray-500">Delivering end-to-end solutions for brand creation, growth & expansion</p>
            </div>
          </motion.div>

          {/* CARD 2 – RIGHT → MID */}
          <motion.div
            style={{
              x: fromRight,
              scale: scaleMid,
              rotate: rotateReset,
              zIndex: zMid,
            }}
            className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2
                     md:w-64 md:h-64 w-52 h-52 bg-gradient-to-br from-black/10 via-white to-black/10 backdrop-blur-3xl rounded-xl shadow-xl flex items-center justify-center text-center p-4"
          >
            <div>
              <h2 className="text-gray-500"> Clients handled</h2>
              <p className="md:text-5xl text-2xl font-semibold md:my-4 my-2 acheive-p">50+</p>
              <p className="text-xs md:text-sm text-gray-500">Brands choose to grow with us through multiple recurring cycles</p>
            </div>
          </motion.div>

          {/* CARD 3 – TOP → BACK */}
          <motion.div
            style={{
              y: fromTop,
              scale: scaleBack,
              rotate: rotateReset,
              zIndex: zBack,
            }}
            className="absolute left-1/2 top-[54%] -translate-x-1/2 -translate-y-1/2
                     md:w-64 md:h-64 w-52 h-52 bg-gradient-to-br from-black/10 via-white to-black/10 backdrop-blur-3xl rounded-xl shadow-lg flex items-center justify-center text-center p-4"
          >
            <div>
              <h2 className="text-gray-500">Campaign Success</h2>
              <p className="md:text-5xl text-2xl md:my-4 my-2 acheive-p font-semibold">98%</p>
              <p className="text-xs md:text-sm text-gray-500">Brands choose to grow with us through multiple recurring cycles</p>
            </div>
          </motion.div>

          {/* CARD 4 – BOTTOM → DEEP */}
          <motion.div
            style={{
              y: fromBottom,
              scale: scaleDeep,
              rotate: rotateReset,
              zIndex: zDeep,
            }}
            className="absolute left-1/2 top-[56%] -translate-x-1/2 -translate-y-1/2
                     md:w-64 md:h-64 w-52 h-52 bg-gradient-to-br from-black/10 via-white to-black/10 backdrop-blur-3xl rounded-xl shadow-md flex items-center justify-center text-center p-4"
          >
            <div>
              <h2 className="text-gray-500"> Industries Worked</h2>
              <p className="md:text-5xl text-2xl md:my-4 my-2 acheive-p font-semibold">10+</p>
              <p className="text-xs md:text-sm text-gray-500">FMCG, Beauty, Tech, Fashion, Healthcare & more</p>
            </div>
          </motion.div>

        </div>
      </section>

      <div className="flex justify-center   overflow-hidden">
        <MovingArrow label="Get in touch" link="/contact" />
      </div>
    </>
  );
}
