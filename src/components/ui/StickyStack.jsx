import React from "react"
import { motion } from "framer-motion"

const StickyStack = ({
    items = [],
    renderItem,
    topOffset = 120,
    revealGap = 180,
    containerHeight = "220vh",
}) => {
    return (
        <section
            className="relative w-full"
            style={{ minHeight: containerHeight }}
        >
            {items.map((item, index) => (
                <div
                    key={index}
                    className="sticky flex justify-center"
                    style={{
                        top: topOffset,
                        zIndex: items.length - index,
                    }}
                >
                    <motion.div
                        initial={{
                            y: 0,
                            scale: 1 - index * 0.05,
                            opacity: 0.9,
                        }}
                        whileInView={{
                            y: index * revealGap,
                            scale: 1,
                            opacity: 1,
                        }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{
                            duration: 0.9,
                            ease: "easeInOut",
                            delay: index * 0.25,
                        }}
                        className="w-full"
                    >
                        {renderItem(item, index)}
                    </motion.div>
                </div>
            ))}
        </section>
    )
}

export default StickyStack
