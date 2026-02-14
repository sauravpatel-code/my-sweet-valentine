import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PopupProps {
  show: boolean;
  isCorrect: boolean;
  emoji: string;
  line1: string;
  line2: string;
  line3?: string;
}

const Popup: React.FC<PopupProps> = ({ show, isCorrect, emoji, line1, line2, line3 }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={`glass-card rounded-2xl p-8 text-center max-w-sm mx-4 shadow-2xl ${
              isCorrect
                ? "border-2 border-valentine-rose"
                : "border-2 border-accent"
            }`}
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 10 }}
            transition={{ type: "spring", damping: 15 }}
          >
            <div className="text-5xl mb-3">{emoji}</div>
            <p className="text-lg font-bold text-foreground mb-1">{line1}</p>
            <p className="text-muted-foreground">{line2}</p>
            {line3 && (
              <p className="text-sm font-semibold text-primary mt-2">{line3}</p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
