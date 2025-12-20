import Lenis from "@studio-freight/lenis"
import { useEffect } from "react"
import { useMotionValue } from "framer-motion"
import { ScrollContext } from "./SmoothScrollContext"

export default function SmoothScrollProvider({ children }) {
  const scrollY = useMotionValue(0)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => 1 - Math.pow(1 - t, 5),
      smoothWheel: true,
      smoothTouch: false,
    })

    lenis.on("scroll", ({ scroll }) => {
      scrollY.set(scroll)
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [scrollY])

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  )
}
