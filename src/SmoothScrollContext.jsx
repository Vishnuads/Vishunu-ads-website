import { createContext, useContext } from "react"

export const ScrollContext = createContext(null)

export const useSmoothScroll = () => {
  const context = useContext(ScrollContext)
  if (!context) {
    throw new Error("useSmoothScroll must be used inside SmoothScrollProvider")
  }
  return context
}
