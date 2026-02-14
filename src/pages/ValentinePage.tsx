import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "../components/FloatingHearts";

const noTexts = [
  "No 🙁",
  "Sach me?",
  "Are you sure?",
  "Soch le?",
  "Dil se pucch le",
  "You might regret this",
  "Last chance",
  "Yes button misses you",
  "This would be a mistake",
  "Is it your final answer",
  "You're breaking my heart",
  "💔",
];

const ValentinePage: React.FC = () => {
  const navigate = useNavigate();
  const [noIndex, setNoIndex] = useState(0);
  const [yesScale, setYesScale] = useState(1);
  const [noHidden, setNoHidden] = useState(false);

  const handleNo = () => {
    if (noIndex >= noTexts.length - 1) {
      setNoHidden(true);
      return;
    }
    setNoIndex((prev) => prev + 1);
    setYesScale((prev) => prev + 0.15);
  };

  const handleYes = () => {
    navigate("/celebration");
  };

  return (
    <div className="min-h-screen romantic-gradient flex items-center justify-center p-4 relative overflow-hidden">
      <FloatingHearts />

      <motion.div
        className="glass-card rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl relative z-10 text-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 12 }}
      >
        <h2 className="font-cursive text-3xl md:text-4xl text-primary mb-6">
          Will you be my valentine for whole life? 💐
        </h2>

        {/* SWAP YOUR IMAGE HERE: Replace the src below */}
        <img
          src="/placeholder.svg"
          alt="Valentine"
          className="w-48 h-48 mx-auto object-cover rounded-2xl border-4 border-valentine-pink shadow-lg mb-8"
        />

        <div className="flex flex-wrap items-center justify-center gap-4">
          <motion.button
            onClick={handleYes}
            className="bg-primary text-primary-foreground font-bold rounded-full shadow-lg px-6 py-3"
            animate={{ scale: yesScale }}
            whileHover={{ scale: yesScale + 0.05 }}
            whileTap={{ scale: yesScale - 0.05 }}
            transition={{ type: "spring", damping: 10 }}
          >
            Yes 💖
          </motion.button>

          <AnimatePresence>
            {!noHidden && (
              <motion.button
                onClick={handleNo}
                className="bg-muted text-muted-foreground font-medium rounded-full shadow px-4 py-2"
                animate={{ scale: Math.max(0.4, 1 - noIndex * 0.07) }}
                exit={{ scale: 0, opacity: 0 }}
                whileTap={{ scale: 0.9 }}
              >
                {noTexts[noIndex]}
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default ValentinePage;
