import { motion } from "framer-motion";
import { useEffect } from "react";
import sayangku from "./assets/sayangku.jpeg";
import aku from "./assets/aku.jpeg";


function MeetTheCoupleContent() {
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
        <div className="text-4xl sm:text-5xl mb-4">💕</div>
        <div
          className="text-2xl sm:text-3xl md:text-4xl text-pink-600 font-bold mb-2 transform -rotate-1"
          style={{
            fontFamily: "Kalam, cursive",
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          Meet the Couple
        </div>
        <div
          className="text-sm sm:text-base text-pink-700 mb-4 transform rotate-1"
          style={{ fontFamily: "Kalam, cursive" }}
        >
          Our Love Story
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-32 h-0.5 bg-pink-400/60 mx-auto transform rotate-1"
        ></motion.div>
        <div className="absolute -top-2 -right-4 transform rotate-12 text-pink-400/60 text-sm">
          ✏️
        </div>
      </motion.div>

      {/* Bride Profile */}
      <motion.div
        initial={{ opacity: 0, x: -30, rotate: -3 }}
        animate={{ opacity: 1, x: 0, rotate: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.6,
        }}
        className="mb-8 relative"
      >
        <div
          className="bg-pink-100/80 p-6 rounded-lg border-2 border-pink-200/50 transform rotate-1 shadow-md relative"
          style={{ borderStyle: "dashed" }}
        >
          {/* Bride Header */}
          <div className="text-center mb-4">
            <h3
              className="text-xl sm:text-2xl font-bold text-pink-800 mb-2 transform -rotate-1"
              style={{ fontFamily: "Kalam, cursive" }}
            >
              👰 The Bride
            </h3>
            <div
              className="text-lg sm:text-xl text-pink-700 font-bold"
              style={{ fontFamily: "Kalam, cursive" }}
            >
              Fajri Zulia Ramdhani
            </div>
          </div>

          {/* Bride Photo */}
          <motion.div
            whileHover={{ scale: 1.02, rotate: -1 }}
            className="relative bg-white p-3 shadow-lg transform -rotate-1 border border-gray-200 rounded-lg mb-4 mx-auto max-w-48"
          >
            <img
              src={sayangku}
              alt="Fajri Zulia Ramdhani"
              className="w-full h-32 sm:h-40 object-cover rounded-md sepia-[0.1]"
            />
            {/* Corner tape */}
            <div className="absolute -top-1 -left-1 w-6 h-6 bg-yellow-200/80 transform rotate-45"></div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-200/80 transform -rotate-45"></div>
          </motion.div>

          {/* Bride Instagram */}
          <div className="text-center">
            <motion.a
              href="https://instagram.com/fajrizulia"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition-all duration-300 text-sm transform rotate-1"
              style={{ fontFamily: "Kalam, cursive" }}
            >
              <span className="mr-2">📱</span>
              @fajrizulia
            </motion.a>
          </div>

          {/* Decorative element */}
          <div className="absolute -top-1 -right-1 text-pink-400/60 text-xs transform rotate-12">
            💕
          </div>
        </div>
      </motion.div>

      {/* Groom Profile */}
      <motion.div
        initial={{ opacity: 0, x: 30, rotate: 3 }}
        animate={{ opacity: 1, x: 0, rotate: -1 }}
        transition={{
          delay: 0.5,
          duration: 0.6,
        }}
        className="mb-8 relative"
      >
        <div
          className="bg-blue-100/80 p-6 rounded-lg border-2 border-blue-200/50 transform -rotate-1 shadow-md relative"
          style={{ borderStyle: "dashed" }}
        >
          {/* Groom Header */}
          <div className="text-center mb-4">
            <h3
              className="text-xl sm:text-2xl font-bold text-blue-800 mb-2 transform rotate-1"
              style={{ fontFamily: "Kalam, cursive" }}
            >
              🤵 The Groom
            </h3>
            <div
              className="text-lg sm:text-xl text-blue-700 font-bold"
              style={{ fontFamily: "Kalam, cursive" }}
            >
              Bagas Prasetyadi
            </div>
          </div>

          {/* Groom Photo */}
          <motion.div
            whileHover={{ scale: 1.02, rotate: 1 }}
            className="relative bg-white p-3 shadow-lg transform rotate-1 border border-gray-200 rounded-lg mb-4 mx-auto max-w-48"
          >
            <img
              src={aku}
              alt="Bagas Prasetyadi"
              className="w-full h-32 sm:h-40 object-cover rounded-md sepia-[0.1]"
            />
            {/* Corner tape */}
            <div className="absolute -top-1 -left-1 w-6 h-6 bg-yellow-200/80 transform rotate-45"></div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-200/80 transform -rotate-45"></div>
          </motion.div>

          {/* Groom Instagram */}
          <div className="text-center">
            <motion.a
              href="https://instagram.com/bagasprasetyadi"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition-all duration-300 text-sm transform -rotate-1"
              style={{ fontFamily: "Kalam, cursive" }}
            >
              <span className="mr-2">📱</span>
              @bagasprasetyadi
            </motion.a>
          </div>

          {/* Decorative element */}
          <div className="absolute -top-1 -left-1 text-blue-400/60 text-xs transform -rotate-12">
            💙
          </div>
        </div>
      </motion.div>

      {/* Love Story Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="text-center mb-8"
      >
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-pink-200/40 rounded-lg p-6 transform rotate-1 shadow-sm relative">
          <div className="text-2xl mb-3">💝</div>
          <div
            className="text-base sm:text-lg text-pink-700 italic leading-relaxed"
            style={{ fontFamily: "Kalam, cursive" }}
          >
            "Dua hati yang bersatu dalam cinta,<br />
            merajut mimpi untuk masa depan yang indah"
          </div>
          <div className="absolute -top-1 -right-1 text-pink-400/60 text-xs transform rotate-12">
            ✨
          </div>
        </div>
      </motion.div>

      {/* Wedding Date Reminder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="text-center"
      >
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-200/50 rounded-lg p-4 transform -rotate-1 shadow-md relative">
          <div className="text-lg mb-2">💒</div>
          <div
            className="text-sm sm:text-base text-amber-800 font-bold"
            style={{ fontFamily: "Kalam, cursive" }}
          >
            Save the Date
          </div>
          <div
            className="text-lg sm:text-xl text-amber-700 font-bold"
            style={{ fontFamily: "Kalam, cursive" }}
          >
            24 Desember 2025
          </div>
          <div className="absolute -top-1 -left-1 text-amber-400/60 text-xs transform -rotate-12">
            💍
          </div>
        </div>
      </motion.div>

      {/* Scattered doodles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute -top-4 left-1/4 text-pink-400/60 text-xs transform rotate-45"
      >
        💕
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute -bottom-4 right-1/4 text-blue-400/60 text-xs transform -rotate-12"
      >
        💙
      </motion.div>
    </>
  );
}

export default MeetTheCoupleContent;
