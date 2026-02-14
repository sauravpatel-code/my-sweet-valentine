import React from "react";
import { motion } from "framer-motion";

const FloatingHearts: React.FC = () => {
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 20 + 10,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 4,
    opacity: Math.random() * 0.3 + 0.1,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-primary"
          style={{
            left: heart.left,
            fontSize: heart.size,
            opacity: heart.opacity,
          }}
          initial={{ y: "110vh", rotate: 0 }}
          animate={{ y: "-10vh", rotate: 360 }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
