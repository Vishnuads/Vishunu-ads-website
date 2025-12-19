import React from 'react';
import { motion } from 'framer-motion';

const ContainerScroll = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`relative w-full ${className || ''}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);
ContainerScroll.displayName = 'ContainerScroll';

const CardSticky = React.forwardRef(
  (
    {
      index,
      incrementY = 20,
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const topOffset = 80;
    
    return (
      <div
        ref={ref}
        className={`sticky ${className || ''}`}
        style={{
          top: `${topOffset + (index * 10)}px`,
          zIndex: index,
          ...style,
        }}
        {...props}
      >
        <motion.div
          initial={{ scale: 1 }}
          // whileInView={{ scale: 1 + (index * 0.02) }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          {children}
        </motion.div>
      </div>
    );
  }
);
CardSticky.displayName = 'CardSticky';

export { ContainerScroll, CardSticky }
