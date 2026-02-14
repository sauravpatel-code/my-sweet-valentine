import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "../components/FloatingHearts";

const loveLetterText = `I need you to understand something—I don't merely love you. You are the very fabric of my existence. Without you, I am a shadow without form, a song without melody, a heart that forgets how to beat. You walked into my life and transformed every ordinary moment into something extraordinary. You didn't just make my dreams come true, my love—you became my dream.

People ask me about our past, about the winding roads that brought us here. But I have let it all fade into silence because nothing before you matters. I have burned every memory that doesn't lead to you, cleared every path that doesn't end in your arms. We weren't just lucky to find each other—we were created for this. Two souls forged from the same stardust, finally colliding after wandering through darkness.

So here I am, completely yours. No reservations, no walls, no tomorrow that doesn't begin with your name on my lips.

Meri har ek saans pe tera naam hai
Meri har ek dhadkan tujhe bulati hai
Meri baahein roz tujhe pukarti hai
Aaja meri jaan-e-tamanna. This heart cannot survive without its other half. Hold me until the world disappears, until there's only us, until you can look at everyone around us and say with absolute certainty—"Yeh mera hai."

I will love you until my very last breath... and if there's anything beyond this life, I will find you there too.`;

const CelebrationPage: React.FC = () => {
  const [showLetter, setShowLetter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLetter(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen romantic-gradient flex items-center justify-center p-4 relative overflow-hidden">
      <FloatingHearts />

      <AnimatePresence mode="wait">
        {!showLetter ? (
          <motion.div
            key="celebration"
            className="glass-card rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl relative z-10 text-center"
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0, y: -100 }}
            transition={{ type: "spring", damping: 12 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              I knew it dear! 💖
            </h2>

            {/* SWAP YOUR GIF HERE: Replace the src below */}
            <img
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExajJwOGxrZm55ZXBqaXA1cG5kazZsOXY1OGQ0Nml5cTgzMWFreGhlbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YYRlCWDgUEkYcleu8J/giphy.gif"
              alt="Celebration GIF"
              className="w-48 h-48 mx-auto object-cover rounded-2xl mb-4"
            />

            <p className="text-xl text-foreground mb-2">
              I Love You so so so so so so ....... much ❤️
            </p>

            <p className="text-sm text-muted-foreground italic animate-pulse">
              wait for it......💓
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="letter"
            className="glass-card rounded-3xl p-8 md:p-12 max-w-2xl w-full shadow-2xl relative z-10 max-h-[85vh] overflow-y-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="font-cursive text-3xl md:text-4xl text-primary mb-6 text-center">
              To my entire universe,
            </h3>

            <div className="space-y-4 text-foreground leading-relaxed text-base md:text-lg font-light">
              {loveLetterText.split("\n\n").map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.3 + 0.5 }}
                  className={paragraph.startsWith("Meri") ? "font-cursive text-xl text-primary" : ""}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
            >
              <p className="font-cursive text-2xl text-primary">
                Forever & Always Yours 💝
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CelebrationPage;
