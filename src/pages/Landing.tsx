import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FloatingHearts from "../components/FloatingHearts";

const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen romantic-gradient flex items-center justify-center p-4 relative overflow-hidden">
      <FloatingHearts />
      <motion.div
        className="glass-card rounded-3xl p-10 md:p-14 text-center max-w-md w-full shadow-2xl relative z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 12, delay: 0.3 }}
      >
        <motion.div
          className="text-6xl mb-6"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          ❤️
        </motion.div>

        <h1 className="font-cursive text-4xl md:text-5xl font-bold text-primary mb-4">
          Hey Butku!
        </h1>

        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          I made something special just for you because you mean the world to me.
        </p>

        <motion.button
          onClick={() => navigate("/quiz/1")}
          className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🎁 Open your gift
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Landing;
