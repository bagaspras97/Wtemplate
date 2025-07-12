import { motion } from "framer-motion";
import sayangku from "./assets/sayangku.jpeg";
import aku from "./assets/aku.jpeg";

interface BrideGroomProfilesProps {
  onBackToCover: () => void;
  onNavigateToSection: (section: string) => void;
}

function BrideGroomProfiles({
  onBackToCover,
  onNavigateToSection,
}: BrideGroomProfilesProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      }}
      className="flex flex-col items-center justify-center min-h-screen text-center relative px-4 py-8 overflow-y-auto bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50"
    >
      {/* Hand-drawn Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={`bg-shape-${i}`}
            className="absolute rounded-full bg-gradient-to-br from-white/20 to-red-100/30 shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.02)]"
            animate={{
              x: [0, Math.random() * 10 - 5],
              y: [0, Math.random() * 10 - 5],
              scale: [1, 1.01, 1],
              rotate: [0, Math.random() * 5 - 2.5, 0],
            }}
            transition={{
              duration: Math.random() * 40 + 30,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 40 + 20}px`,
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      {/* Doodle Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 0.5 }}
          className="absolute top-8 left-8 text-red-400/50 text-lg transform rotate-12"
        >
          💕
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 0.7 }}
          className="absolute top-8 right-8 text-orange-400/50 transform -rotate-12"
        >
          ✨
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 0.9 }}
          className="absolute bottom-8 left-8 text-red-400/50 transform rotate-45"
        >
          ♡
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1.1 }}
          className="absolute bottom-8 right-8 text-amber-400/50 transform -rotate-45"
        >
          📖
        </motion.div>
      </div>

      {/* Hand-drawn Notebook Page */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          delay: 0.2,
          duration: 1.2,
          type: "spring",
          stiffness: 120,
          damping: 12,
        }}
        className="relative max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto w-full z-10"
      >
        {/* Paper texture background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-lg transform rotate-1 shadow-lg"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 rounded-lg transform -rotate-1 shadow-lg"></div>

        {/* Main Notebook Page */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
          className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-lg p-6 sm:p-8 md:p-10 shadow-xl border-l-4 border-red-300/40 z-10 max-h-[95vh] overflow-y-auto"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(239, 68, 68, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "20px 25px",
            backgroundPosition: "0 0, 0 5px",
          }}
        >
          {/* Notebook holes */}
          <div className="absolute left-2 top-4 flex flex-col space-y-8">
            <div className="w-3 h-3 bg-white border-2 border-red-300/50 rounded-full shadow-inner"></div>
            <div className="w-3 h-3 bg-white border-2 border-red-300/50 rounded-full shadow-inner"></div>
            <div className="w-3 h-3 bg-white border-2 border-red-300/50 rounded-full shadow-inner"></div>
            <div className="w-3 h-3 bg-white border-2 border-red-300/50 rounded-full shadow-inner"></div>
          </div>

          {/* Hand-drawn doodle borders */}
          <div className="absolute top-3 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-red-400/60 to-transparent transform -rotate-1"></div>
          <div className="absolute bottom-3 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-red-400/60 to-transparent transform rotate-1"></div>
          <div className="absolute top-6 bottom-6 left-3 w-0.5 bg-gradient-to-b from-transparent via-red-400/60 to-transparent transform rotate-1"></div>
          <div className="absolute top-6 bottom-6 right-3 w-0.5 bg-gradient-to-b from-transparent via-red-400/60 to-transparent transform -rotate-1"></div>

          {/* Handwritten Title */}
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 0.6,
              duration: 0.8,
              type: "spring",
              stiffness: 150,
            }}
            className="text-center mb-8 relative"
          >
            <div
              className="text-lg sm:text-xl md:text-2xl text-red-600 font-bold mb-2 transform -rotate-1"
              style={{
                fontFamily: "Kalam, cursive",
                textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
              }}
            >
              Meet the Couple 💕
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="w-32 h-0.5 bg-red-400/60 mx-auto transform rotate-1"
            ></motion.div>
            <div className="absolute -top-2 -right-4 transform rotate-12 text-red-400/60 text-sm">
              ✏️
            </div>
          </motion.div>

          {/* Bride Profile */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: 1 }}
            transition={{
              delay: 1.0,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
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
                  className="text-lg sm:text-xl text-red-700 font-bold"
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
                <div
                  className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-200/80 transform rotate-45 shadow-sm"
                  style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%)" }}
                ></div>
              </motion.div>

              {/* Bride Description */}
              <div className="space-y-3">
                <div
                  className="text-sm sm:text-base text-pink-700 leading-relaxed"
                  style={{ fontFamily: "Kalam, cursive" }}
                >
                  @fajrizulia
                </div>
                <div
                  className="text-sm sm:text-base text-pink-700 leading-relaxed"
                  style={{ fontFamily: "Kalam, cursive" }}
                >
                  <strong className="text-pink-800">💖 Love for:</strong> Books,
                  coffee, and storytelling
                </div>
                <div
                  className="text-sm sm:text-base text-pink-700 leading-relaxed italic transform rotate-1"
                  style={{ fontFamily: "Kalam, cursive" }}
                >
                  "Every love story is beautiful, but ours is my favorite
                  chapter 📖"
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -left-2 text-pink-400/60 text-lg transform rotate-12">
                ♡
              </div>
              <div className="absolute -bottom-1 -right-1 text-pink-400/60 text-xs">
                ✨
              </div>
            </div>
          </motion.div>

          {/* Heart Connector */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: 180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              delay: 1.4,
              duration: 0.6,
              type: "spring",
              stiffness: 200,
            }}
            className="flex justify-center mb-8"
          >
            <div className="bg-red-500 p-3 rounded-full shadow-lg transform rotate-12">
              <span className="text-white text-xl">💕</span>
            </div>
          </motion.div>

          {/* Groom Profile */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotate: 10 }}
            animate={{ opacity: 1, x: 0, rotate: -1 }}
            transition={{
              delay: 1.6,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
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
                  className="text-lg sm:text-xl text-red-700 font-bold"
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
                <div
                  className="absolute -top-1 -left-1 w-6 h-6 bg-yellow-200/80 transform -rotate-45 shadow-sm"
                  style={{ clipPath: "polygon(0% 0%, 100% 0%, 0% 100%)" }}
                ></div>
              </motion.div>

              {/* Groom Description */}
              <div className="space-y-3">
                <div
                  className="text-sm sm:text-base text-blue-700 leading-relaxed"
                  style={{ fontFamily: "Kalam, cursive" }}
                >
                  @bagasprasetyadi
                </div>
                <div
                  className="text-sm sm:text-base text-blue-700 leading-relaxed"
                  style={{ fontFamily: "Kalam, cursive" }}
                >
                  <strong className="text-blue-800">🎯 Love for:</strong>{" "}
                  Technology, music, and adventures
                </div>
                <div
                  className="text-sm sm:text-base text-blue-700 leading-relaxed italic transform -rotate-1"
                  style={{ fontFamily: "Kalam, cursive" }}
                >
                  "I code all day, but she's the only one who compiled my heart
                  💙"
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 text-blue-400/60 text-lg transform -rotate-12">
                ♡
              </div>
              <div className="absolute -bottom-1 -left-1 text-blue-400/60 text-xs">
                ⚡
              </div>
            </div>
          </motion.div>

          {/* Their Story */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 2.0,
              duration: 0.7,
              type: "spring",
              stiffness: 120,
            }}
            className="mb-8"
          >
            <div
              className="bg-orange-100/80 p-6 rounded-lg border-2 border-orange-200/50 transform rotate-1 shadow-md relative"
              style={{ borderStyle: "dashed" }}
            >
              <h3
                className="text-lg sm:text-xl font-bold text-orange-800 mb-4 text-center transform -rotate-1"
                style={{ fontFamily: "Kalam, cursive" }}
              >
                📖 Our Love Story
              </h3>
              <p
                className="text-sm sm:text-base text-orange-700 leading-relaxed text-center"
                style={{ fontFamily: "Kalam, cursive" }}
              >
                When a writer meets a developer, magic happens! ✨ She writes
                beautiful stories, he creates digital worlds. Together, they're
                writing the most beautiful chapter of their lives. Join us as we
                celebrate our love story on December 24, 2025!
              </p>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-orange-400/60 text-lg rotate-12">
                💫
              </div>
            </div>
          </motion.div>

          {/* Wedding Date Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: -1 }}
            transition={{
              delay: 2.3,
              duration: 0.8,
              type: "spring",
              stiffness: 150,
            }}
            className="mb-8 text-center"
          >
            <div
              className="bg-yellow-100/80 p-4 rounded-lg border-2 border-red-200/50 transform -rotate-1 shadow-md relative inline-block"
              style={{ borderStyle: "dashed" }}
            >
              <div
                className="text-sm text-orange-700 font-medium mb-1"
                style={{ fontFamily: "Kalam, cursive" }}
              >
                Save the Date!
              </div>
              <div
                className="text-lg sm:text-xl text-red-700 font-bold"
                style={{ fontFamily: "Kalam, cursive" }}
              >
                December 24, 2025 💕
              </div>
              <div className="absolute -top-1 -right-1 text-red-400/60 text-xs animate-pulse">
                ✨
              </div>
            </div>
          </motion.div>

          {/* Back Button */}
          <motion.button
            onClick={onBackToCover}
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 2.6,
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
            className="relative w-full bg-gradient-to-r from-red-400 to-orange-400 hover:from-red-500 hover:to-orange-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 text-sm sm:text-base transform rotate-1 border-2 border-red-500/30"
            style={{
              fontFamily: "Kalam, cursive",
              textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
            }}
          >
            Back to Our Story 📖
            <div className="absolute -top-2 -right-2 text-yellow-300 text-xs animate-pulse">
              ♡
            </div>
          </motion.button>

          {/* Floating Navigation Buttons */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
            {/* Previous Button - Back to Resepsi */}
            <motion.button
              onClick={() => onNavigateToSection("resepsi")}
              initial={{ opacity: 0, x: -50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                delay: 2.8,
                duration: 0.6,
                type: "spring",
                stiffness: 150,
              }}
              whileHover={{
                scale: 1.1,
                x: -5,
                rotate: -5,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
              className="relative bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white font-bold p-3 rounded-full shadow-lg transition-all duration-300 transform rotate-3 border-2 border-blue-500/30 mb-4"
              style={{
                fontFamily: "Kalam, cursive",
                textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
              }}
              title="Kembali ke Resepsi"
            >
              <span className="text-lg">🏛️</span>
              <div className="absolute -top-1 -right-1 text-yellow-300 text-xs animate-pulse">
                ✨
              </div>
            </motion.button>
          </div>

          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
            {/* Next Button - To Gallery */}
            <motion.button
              onClick={() => onNavigateToSection("gallery")}
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                delay: 3.0,
                duration: 0.6,
                type: "spring",
                stiffness: 150,
              }}
              whileHover={{
                scale: 1.1,
                x: 5,
                rotate: 5,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
              className="relative bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-white font-bold p-3 rounded-full shadow-lg transition-all duration-300 transform -rotate-3 border-2 border-amber-500/30"
              style={{
                fontFamily: "Kalam, cursive",
                textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
              }}
              title="Lanjut ke Gallery"
            >
              <span className="text-lg">📸</span>
              <div className="absolute -top-1 -left-1 text-yellow-300 text-xs animate-pulse">
                ✨
              </div>
            </motion.button>
          </div>

          {/* Scattered doodles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6 }}
            className="absolute -top-4 left-1/3 text-orange-400/60 text-xs transform rotate-45"
          >
            ♡
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
            className="absolute -bottom-4 right-1/3 text-red-400/60 text-xs transform -rotate-12"
          >
            💕
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default BrideGroomProfiles;
