import React, { useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import FloatingHearts from "../components/FloatingHearts";
import Popup from "../components/Popup";

interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  hasImage?: boolean;
  wrong: { emoji: string; line1: string; line2: string };
  correct: { emoji: string; line1: string; line2: string };
}

const questions: QuizQuestion[] = [
  {
    question: "When did we meet first?",
    options: ["June 1 2023", "July 15 2023", "Oct 1 2023", "Jan 3 2024"],
    correctIndex: 2,
    wrong: { emoji: "😠", line1: "Bhulakar das", line2: "Hint du? - Physically first meet" },
    correct: { emoji: "😘", line1: "Wahh! I love you Jaan ❤️", line2: "" },
  },
  {
    question: "What was our first meal together?",
    options: ["Chitti wale momos", "Ek dusre k lips", "Purukiya", "Mere hath k chaate"],
    correctIndex: 2,
    wrong: { emoji: "😤", line1: "Kya H??", line2: "Sab bhul jati! Sabse first yaad kr" },
    correct: { emoji: "🤗", line1: "You are more tastier than that 😋", line2: "" },
  },
  {
    question: "When was this photo taken??",
    options: ["July 14, 2024", "Your birth date", "June 14, 2024", "Issi janam me"],
    correctIndex: 0,
    hasImage: true,
    wrong: { emoji: "😡", line1: "Excuse me madam!", line2: "Ab jada ho rha" },
    correct: { emoji: "🥳", line1: "Hurray!! Aapne jita h mera dil 💝", line2: "" },
  },
  {
    question: "When we will get married??",
    options: ["Next year", "Ho chuki sadi, ab bacche krne h", "Aaj hi bhaga le", "Kubul h? Kubul h? Kubul h?"],
    correctIndex: 3,
    wrong: { emoji: "🫣", line1: "Really?", line2: "👉👈" },
    correct: { emoji: "🫶", line1: "Come with milk tonight 🥹", line2: "" },
  },
];

const QuizPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const questionIndex = parseInt(id || "1") - 1;
  const q = questions[questionIndex];

  const [showPopup, setShowPopup] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [hasAttempted, setHasAttempted] = useState(false);
  const [popupData, setPopupData] = useState({ emoji: "", line1: "", line2: "", line3: "" });

  // Read score from sessionStorage
  const getScore = () => parseInt(sessionStorage.getItem("valentine-score") || "0");

  useEffect(() => {
    setHasAttempted(false);
  }, [questionIndex]);

  const handleAnswer = useCallback(
    (selectedIndex: number) => {
      if (showPopup) return;

      const correct = selectedIndex === q.correctIndex;
      setIsCorrect(correct);

      if (correct) {
        let newScore = getScore();
        if (!hasAttempted) {
          newScore += 1;
          sessionStorage.setItem("valentine-score", String(newScore));
        }
        setHasAttempted(true);
        setPopupData({
          emoji: q.correct.emoji,
          line1: q.correct.line1,
          line2: q.correct.line2,
          line3: `Score: ${newScore}/4`,
        });
      } else {
        setHasAttempted(true);
        setPopupData({
          emoji: q.wrong.emoji,
          line1: q.wrong.line1,
          line2: q.wrong.line2,
          line3: "",
        });
      }

      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        if (correct) {
          if (questionIndex < 3) {
            navigate(`/quiz/${questionIndex + 2}`);
          } else {
            navigate("/valentine");
          }
        }
      }, 3000);
    },
    [q, questionIndex, navigate, showPopup, hasAttempted]
  );

  // Reset hasAttempted when question changes
  React.useEffect(() => {
    setHasAttempted(false);
    setShowPopup(false);
    setIsCorrect(false);
  }, [questionIndex]);

  if (!q) return null;

  return (
    <div className="min-h-screen romantic-gradient flex items-center justify-center p-4 relative overflow-hidden">
      <FloatingHearts />
      <Popup
        show={showPopup}
        isCorrect={isCorrect}
        emoji={popupData.emoji}
        line1={popupData.line1}
        line2={popupData.line2}
        line3={popupData.line3}
      />

      <motion.div
        key={questionIndex}
        className="glass-card rounded-3xl p-8 md:p-10 max-w-lg w-full shadow-2xl relative z-10"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 20 }}
      >
        <div className="text-center mb-2">
          <span className="text-sm font-semibold text-muted-foreground">
            Question {questionIndex + 1} of 4
          </span>
        </div>

        <h2 className="font-cursive text-2xl md:text-3xl text-primary text-center mb-6">
          {q.question}
        </h2>

        {q.hasImage && (
          <div className="mb-6 flex justify-center">
            {/* SWAP YOUR PHOTO HERE: Replace the src below with your photo path */}
            <img
              src="/handshake.jpg"
              alt="Our photo together"
              className="w-full h-48 object-cover rounded-2xl border-4 border-valentine-pink shadow-lg"
            />
          </div>
        )}

        <div className="space-y-3">
          {q.options.map((option, i) => (
            <motion.button
              key={i}
              onClick={() => handleAnswer(i)}
              className="w-full p-4 rounded-xl text-left font-medium bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {i + 1}. {option}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default QuizPage;
