import { motion } from "framer-motion";
import { useEffect } from "react";

interface ClosingContentProps {
  onBackToCover?: () => void;
}

function ClosingContent({ onBackToCover }: ClosingContentProps = {}) {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-center mb-8 relative"
      >
        <div className="text-4xl sm:text-5xl mb-4">✨</div>
        <div
          className="text-2xl sm:text-3xl md:text-4xl text-indigo-600 font-bold mb-2 transform -rotate-1"
          style={{
            fontFamily: "Kalam, cursive",
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          Thank You
        </div>
        <div
          className="text-sm sm:text-base text-indigo-700 mb-4 transform rotate-1"
          style={{ fontFamily: "Kalam, cursive" }}
        >
          With Love & Gratitude
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-32 h-0.5 bg-indigo-400/60 mx-auto transform rotate-1"
        ></motion.div>
        <div className="absolute -top-2 -right-4 transform rotate-12 text-indigo-400/60 text-sm">
          ✏️
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-2xl mx-auto space-y-8"
      >
        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-gradient-to-br from-indigo-50 to-purple-100 border-2 border-indigo-200/50 rounded-lg p-6 transform rotate-1 shadow-md relative"
          style={{ borderStyle: "dashed" }}
        >
          <div className="text-center space-y-4">
            <div className="text-3xl mb-3">🤵👰</div>
            <p
              className="text-base sm:text-lg text-indigo-800 leading-relaxed transform -rotate-1"
              style={{ fontFamily: "Kalam, cursive" }}
            >
              Terima kasih telah menjadi bagian dari perjalanan cinta kami. 
              Kehadiran dan doa restu kalian adalah hadiah terindah bagi kami.
            </p>
            <p
              className="text-sm sm:text-base text-indigo-700 leading-relaxed transform rotate-1"
              style={{ fontFamily: "Kalam, cursive" }}
            >
              Semoga cinta dan kebahagiaan selalu menyertai kita semua! 💕
            </p>
          </div>
          <div className="absolute -top-1 -left-1 text-yellow-400/60 text-xs transform rotate-45">
            🌟
          </div>
          <div className="absolute -bottom-1 -right-1 text-pink-400/60 text-xs transform -rotate-12">
            💖
          </div>
        </motion.div>

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center space-y-4"
        >
          <div
            className="text-xl sm:text-2xl font-bold text-indigo-600 transform -rotate-1"
            style={{ fontFamily: "Kalam, cursive" }}
          >
            With Love,
          </div>
          <div className="space-y-2">
            <div
              className="text-2xl sm:text-3xl font-bold text-indigo-700 transform rotate-1"
              style={{ fontFamily: "Kalam, cursive" }}
            >
              Bagas Prasetyadi
            </div>
            <div
              className="text-xl sm:text-2xl text-indigo-600"
              style={{ fontFamily: "Kalam, cursive" }}
            >
              &
            </div>
            <div
              className="text-2xl sm:text-3xl font-bold text-indigo-700 transform -rotate-1"
              style={{ fontFamily: "Kalam, cursive" }}
            >
              Fajri Zulia Ramdhani
            </div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="bg-gradient-to-br from-purple-50 to-indigo-100 border-2 border-purple-200/50 rounded-lg p-6 transform -rotate-1 shadow-md relative"
          style={{ borderStyle: "dashed" }}
        >
          <div className="text-center space-y-3">
            <div className="text-2xl">🌸</div>
            <p
              className="text-sm sm:text-base text-purple-700 font-medium italic leading-relaxed"
              style={{ fontFamily: "Kalam, cursive" }}
            >
              "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan 
              pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung 
              dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa 
              kasih dan sayang."
            </p>
            <p
              className="text-xs sm:text-sm text-purple-600 font-bold"
              style={{ fontFamily: "Kalam, cursive" }}
            >
              - QS. Ar-Rum: 21 -
            </p>
          </div>
          <div className="absolute -top-2 -left-2 text-purple-400/60 text-xs transform rotate-12">
            📿
          </div>
        </motion.div>

        {/* Wedding Date Reminder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="text-center"
        >
          <div
            className="text-lg sm:text-xl font-bold text-indigo-600 mb-2 transform rotate-1"
            style={{ fontFamily: "Kalam, cursive" }}
          >
            Save The Date! 📅
          </div>
          <div
            className="text-2xl sm:text-3xl font-bold text-indigo-700 transform -rotate-1"
            style={{ fontFamily: "Kalam, cursive" }}
          >
            24 Desember 2025
          </div>
          <div
            className="text-sm sm:text-base text-indigo-600 mt-2"
            style={{ fontFamily: "Kalam, cursive" }}
          >
            We can't wait to celebrate with you! 🎉
          </div>
        </motion.div>

        {/* Back to Cover Button */}
        {onBackToCover && (
          <motion.button
            onClick={onBackToCover}
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 1.3,
              duration: 0.6,
              type: "spring",
              stiffness: 150,
            }}
            whileHover={{
              scale: 1.05,
              y: -5,
              rotate: 2,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
            className="relative w-full max-w-xs mx-auto bg-gradient-to-r from-indigo-400 to-purple-400 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 text-sm sm:text-base transform rotate-1 border-2 border-indigo-500/30"
            style={{
              fontFamily: "Kalam, cursive",
              textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
            }}
          >
            Back to Cover 📖
            <div className="absolute -top-2 -right-2 text-yellow-300 text-xs animate-pulse">
              ✨
            </div>
          </motion.button>
        )}
      </motion.div>

      {/* Scattered doodles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute -top-4 left-1/4 text-indigo-400/60 text-xs transform rotate-45"
      >
        💍
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7 }}
        className="absolute -bottom-4 right-1/4 text-purple-400/60 text-xs transform -rotate-12"
      >
        🌟
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9 }}
        className="absolute top-1/4 -left-4 text-pink-400/60 text-xs transform rotate-90"
      >
        💝
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1 }}
        className="absolute top-3/4 -right-4 text-indigo-400/60 text-xs transform -rotate-45"
      >
        ✨
      </motion.div>
    </>
  );
}

export default ClosingContent;
