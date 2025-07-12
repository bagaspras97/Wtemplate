import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import usImage from "./assets/16.webp";
import WeddingInvitation from "./WeddingInvitation";
import BookPageWrapper from "./BookPageWrapper";
import AkadNikahContent from "./AkadNikahContent";
import ResepsiContent from "./ResepsiContent";
import MeetTheCoupleContent from "./MeetTheCoupleContent";
import GalleryContent from "./GalleryContent";
import LoveStoryContent from "./LoveStoryContent";
import GiftsAndWishesContent from "./GiftsAndWishesContent";
import ClosingContent from "./ClosingContent";

function App() {
  const [currentView, setCurrentView] = useState<
    | "cover"
    | "invitation"
    | "akad"
    | "resepsi"
    | "profiles"
    | "gallery"
    | "lovestory"
    | "gifts"
    | "closing"
  >("cover");
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState<
    Array<{ id: number; x: number; y: number; delay: number }>
  >([]);

  useEffect(() => {
    // Generate floating hearts
    const hearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setFloatingHearts(hearts);
  }, []);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const coverVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8, y: -50 },
  };

  const heartVariants = {
    float: {
      y: [-10, -20, -10],
      x: [-2, 2, -2],
      rotate: [0, 5, 0],
      scale: [1, 1.1, 1],
    },
  };

  const renderCover = () => (
    <motion.div
      variants={coverVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col items-center justify-center h-full text-center relative px-4 overflow-hidden"
    >
      {/* Floating Hand-drawn Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingHearts.slice(0, 6).map((heart, index) => (
          <motion.div
            key={heart.id}
            className="absolute text-amber-300/30 text-base sm:text-lg pointer-events-none"
            style={{
              left: `${Math.max(5, Math.min(95, heart.x))}%`,
              top: `${Math.max(5, Math.min(95, heart.y))}%`,
              transform: `rotate(${Math.random() * 20 - 10}deg)`,
            }}
            variants={heartVariants}
            animate="float"
            transition={{
              duration: 10 + heart.delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: heart.delay,
            }}
          >
            {["✏️", "📝", "📖", "✒️", "🖊️", "📚"][index % 6]}
          </motion.div>
        ))}
      </div>

      {/* Hand-drawn Notebook Page */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          delay: 0.3,
          duration: 1.0,
          type: "spring",
          stiffness: 80,
        }}
        className="relative max-w-sm sm:max-w-md md:max-w-lg mx-auto w-full"
      >
        {/* Paper texture background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-lg transform rotate-1 shadow-lg"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 rounded-lg transform -rotate-1 shadow-lg"></div>

        {/* Main Notebook Page */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
          className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-lg p-6 sm:p-8 md:p-10 shadow-xl border-l-4 border-red-300/40 z-10"
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
          </div>

          {/* Hand-drawn doodle borders */}
          <div className="absolute top-3 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-red-400/60 to-transparent transform -rotate-1"></div>
          <div className="absolute bottom-3 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-red-400/60 to-transparent transform rotate-1"></div>
          <div className="absolute top-6 bottom-6 left-3 w-0.5 bg-gradient-to-b from-transparent via-red-400/60 to-transparent transform rotate-1"></div>
          <div className="absolute top-6 bottom-6 right-3 w-0.5 bg-gradient-to-b from-transparent via-red-400/60 to-transparent transform -rotate-1"></div>

          {/* Handwritten Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mb-6 sm:mb-8 relative"
          >
            <div
              className="text-sm sm:text-base text-red-600 font-medium mb-2 transform -rotate-1"
              style={{
                fontFamily: "Kalam, cursive",
                textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
              }}
            >
              Our Love Story ♡
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="w-20 h-0.5 bg-red-400/60 mx-auto transform rotate-1"
            ></motion.div>
            <div className="absolute -top-2 -right-4 transform rotate-12 text-red-400/60 text-sm">
              ✏️
            </div>
          </motion.div>

          {/* Redesigned Doodle Frame around Photo - New Layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, type: "spring", stiffness: 120 }}
            className="relative mb-6 sm:mb-8"
          >
            {/* Main Photo Container - Upscaled */}
            <div className="relative mx-auto">
              {/* Photo Frame with Hand-drawn Border */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
                animate={{ opacity: 1, scale: 1, rotate: 1 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
                className="relative w-60 h-70 sm:w-70 mx-auto"
              >
                {/* Hand-drawn polaroid effect - Larger */}
                <div className="relative w-full h-full bg-white p-4 shadow-xl transform rotate-1 border-2 border-gray-200/50 rounded-lg">
                  {/* Large Photo section */}
                  <div className="w-full h-6/9 bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden rounded-md shadow-inner">
                    <img
                      src={usImage}
                      alt="Bagas & Zulia"
                      className="w-full h-full object-cover sepia-[0.2] contrast-105 saturate-110"
                    />
                  </div>

                  {/* Names section at bottom */}
                  <div className="flex flex-col items-center justify-center  pt-2">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 1.6,
                        type: "spring",
                        stiffness: 100,
                      }}
                      className="text-center"
                    >
                      <div
                        className="text-base md:text-lg lg:text-xl text-red-800 font-bold"
                        style={{
                          fontFamily: "Kalam, cursive",
                          textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                        }}
                      >
                        Bagas Prasetyadi
                      </div>

                      {/* Simple Love Icon */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          delay: 1.8,
                          duration: 0.5,
                        }}
                        className="flex items-center justify-center"
                      >
                        <span
                          className="text-red-500 text-lg md:text-xl"
                          style={{
                            filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.2))",
                          }}
                        >
                          ♡
                        </span>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 2.0,
                          type: "spring",
                          stiffness: 100,
                        }}
                      >
                        <div
                          className="text-base md:text-lg lg:text-xl text-red-800 font-bold"
                          style={{
                            fontFamily: "Kalam, cursive",
                            textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                          }}
                        >
                          Fajri Zulia Ramdhani
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>

                {/* Corner Tape Effects */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, type: "spring", stiffness: 120 }}
                  className="absolute -top-2 -left-2 w-8 h-8 md:w-10 md:h-10 bg-yellow-200/80 transform rotate-45 shadow-md"
                  style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%)",
                  }}
                ></motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5, type: "spring", stiffness: 120 }}
                  className="absolute -top-2 -right-2 w-8 h-8 md:w-10 md:h-10 bg-yellow-200/80 transform -rotate-45 shadow-md"
                  style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 0% 100%)",
                  }}
                ></motion.div>
              </motion.div>

              {/* Floating Doodles Around Photo - More Spread Out */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: -20 }}
                transition={{ delay: 1.3, type: "spring", stiffness: 150 }}
                className="absolute -top-4 -right-6 text-red-500/70 text-2xl md:text-3xl"
              >
                ♡
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: 45 }}
                animate={{ opacity: 1, scale: 1, rotate: 25 }}
                transition={{ delay: 1.5, type: "spring", stiffness: 150 }}
                className="absolute -bottom-6 -left-8 text-orange-500/70 text-xl md:text-2xl"
              >
                ✨
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.7, type: "spring", stiffness: 150 }}
                className="absolute top-1/2 -right-10 text-amber-500/70 text-lg md:text-xl transform -rotate-15"
              >
                📝
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.9, type: "spring", stiffness: 150 }}
                className="absolute top-1/4 -left-8 text-pink-500/70 text-lg md:text-xl transform rotate-20"
              >
                💕
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.1, type: "spring", stiffness: 150 }}
                className="absolute bottom-1/4 -right-8 text-red-400/70 text-base md:text-lg transform -rotate-30"
              >
                ♡
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.3, type: "spring", stiffness: 150 }}
                className="absolute -top-6 left-1/4 text-purple-500/70 text-base md:text-lg transform rotate-45"
              >
                �
              </motion.div>

              {/* Hand-drawn Arrows and Lines */}
              <motion.div
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 0.6, pathLength: 1 }}
                transition={{ delay: 2.0, duration: 1.2 }}
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
              >
                <svg
                  width="60"
                  height="20"
                  viewBox="0 0 60 20"
                  className="text-red-400/60"
                >
                  <path
                    d="M5 15 Q30 5 55 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="2,3"
                    className="animate-pulse"
                  />
                </svg>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 0.6, pathLength: 1 }}
                transition={{ delay: 2.2, duration: 1.0 }}
                className="absolute -top-8 right-1/4"
              >
                <svg
                  width="40"
                  height="20"
                  viewBox="0 0 40 20"
                  className="text-orange-400/60"
                >
                  <path
                    d="M35 5 Q20 15 5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="1,2"
                  />
                </svg>
              </motion.div>
            </div>

            {/* Handwritten Quote Bubble */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 2.4, type: "spring", stiffness: 100 }}
              className="relative mt-6 mx-auto max-w-xs"
            ></motion.div>
          </motion.div>

          {/* Handwritten Date */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="text-center mb-6 sm:mb-8"
          >
            <div
              className="text-xs sm:text-sm text-orange-700 font-medium mb-2 transform rotate-1"
              style={{ fontFamily: "Kalam, cursive" }}
            >
              Save the Date!
            </div>
            <div
              className="text-lg md:text-xl text-red-700 font-bold mb-4 sm:mb-6 transform -rotate-1"
              style={{
                fontFamily: "Kalam, cursive",
                textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
              }}
            >
              December 24, 2025
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              className="text-red-600 leading-relaxed text-sm sm:text-base max-w-xs mx-auto transform rotate-1"
              style={{
                fontFamily: "Kalam, cursive",
                textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
              }}
            >
              "We're writing our next chapter together! ✨"
            </motion.p>
          </motion.div>

          {/* Handwritten Invitation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2 }}
            className="text-center mb-6 sm:mb-8"
          >
            <div
              className="text-xs sm:text-sm text-orange-700 font-medium mb-2 transform "
              style={{ fontFamily: "Kalam, cursive" }}
            >
              Dear friends & family,
            </div>
            <div
              className="text-sm sm:text-base text-red-700 font-medium bg-yellow-100/80 px-4 py-2 rounded-lg border-2 border-red-200/50 transform  shadow-sm"
              style={{
                fontFamily: "Kalam, cursive",
                borderStyle: "dashed",
              }}
            >
              You're invited to our wedding! 💕
            </div>
          </motion.div>

          {/* Hand-drawn Button */}
          <motion.button
            onClick={() => setCurrentView("invitation")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4 }}
            whileHover={{
              scale: 1.05,
              y: -3,
              rotate: 2,
            }}
            whileTap={{ scale: 0.95 }}
            className="relative w-full bg-gradient-to-r from-red-400 to-orange-400 hover:from-red-500 hover:to-orange-500 text-white font-bold py-3 px-6 sm:px-8 rounded-lg shadow-lg transition-all duration-300 text-sm sm:text-base transform -rotate-1 border-2 border-red-500/30"
            style={{
              fontFamily: "Kalam, cursive",
              textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
            }}
          >
            Open Wedding Book 📖
            <div className="absolute -top-2 -right-2 text-yellow-300 text-xs animate-pulse">
              ✨
            </div>
          </motion.button>

          {/* Scattered doodles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6 }}
            className="absolute -top-4 left-1/4 text-orange-400/60 text-xs transform rotate-45"
          >
            ♡
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
            className="absolute -bottom-4 right-1/4 text-red-400/60 text-xs transform -rotate-12"
          >
            ✨
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom handwritten note */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.0 }}
        className="mt-4 sm:mt-6 text-center"
      >
        <div
          className="text-xs sm:text-sm text-red-500 font-medium transform rotate-1"
          style={{
            fontFamily: "Kalam, cursive",
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          Love, Bagas & Zulia ♡
        </div>
      </motion.div> */}
    </motion.div>
  );

  function renderMainContent() {
    switch (currentView) {
      case "cover":
        return renderCover();
      case "invitation":
        return (
          <WeddingInvitation
            onBackToCover={() => setCurrentView("cover")}
            onNavigateToSection={(section: string) => {
              setCurrentView(
                section as
                  | "akad"
                  | "resepsi"
                  | "profiles"
                  | "gallery"
                  | "lovestory"
                  | "gifts"
                  | "closing"
              );
            }}
          />
        );
      case "akad":
      case "resepsi":
      case "profiles":
      case "gallery":
      case "lovestory":
      case "gifts":
      case "closing":
        return (
          <BookPageWrapper
            currentPage={currentView}
            onNavigateTo={(section: string) => {
              setCurrentView(
                section as
                  | "cover"
                  | "invitation"
                  | "akad"
                  | "resepsi"
                  | "profiles"
                  | "gallery"
                  | "lovestory"
                  | "gifts"
                  | "closing"
              );
            }}
            themeColor={
              currentView === "akad"
                ? "green"
                : currentView === "resepsi"
                ? "blue"
                : currentView === "profiles"
                ? "pink"
                : currentView === "gallery"
                ? "amber"
                : currentView === "lovestory"
                ? "purple"
                : currentView === "gifts"
                ? "red"
                : "purple"
            }
            hideNavigation={currentView === "gallery" && isImageViewerOpen}
          >
            {currentView === "akad" && <AkadNikahContent />}
            {currentView === "resepsi" && <ResepsiContent />}
            {currentView === "profiles" && <MeetTheCoupleContent />}
            {currentView === "gallery" && (
              <GalleryContent onImageViewerChange={setIsImageViewerOpen} />
            )}
            {currentView === "lovestory" && <LoveStoryContent />}
            {currentView === "gifts" && <GiftsAndWishesContent />}
            {currentView === "closing" && <ClosingContent onBackToCover={() => setCurrentView("cover")} />}
          </BookPageWrapper>
        );
      default:
        return null;
    }
  }

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Hand-drawn Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={`bg-shape-${i}`}
            className="absolute rounded-full bg-gradient-to-br from-white/20 to-red-100/30 shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.02)]"
            animate={{
              x: [0, Math.random() * 15 - 7.5],
              y: [0, Math.random() * 15 - 7.5],
              scale: [1, 1.01, 1],
              rotate: [0, Math.random() * 10 - 5, 0],
            }}
            transition={{
              duration: Math.random() * 40 + 30,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              width: `${Math.random() * 60 + 30}px`,
              height: `${Math.random() * 60 + 30}px`,
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      {/* Hand-drawn Doodle Elements Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left Doodle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute top-6 left-6 sm:top-12 sm:left-12 w-8 h-8 sm:w-12 sm:h-12 transform rotate-12"
        >
          <div className="text-red-400/50 text-lg sm:text-xl">✏️</div>
        </motion.div>

        {/* Top Right Doodle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute top-6 right-6 sm:top-12 sm:right-12 w-6 h-6 sm:w-10 sm:h-10 transform -rotate-12"
        >
          <div className="text-orange-400/50 text-base sm:text-lg">📝</div>
        </motion.div>

        {/* Bottom Left Doodle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: 2.1, duration: 1 }}
          className="absolute bottom-6 left-6 sm:bottom-12 sm:left-12 w-6 h-6 sm:w-10 sm:h-10 transform rotate-45"
        >
          <div className="text-red-400/50 text-base sm:text-lg">♡</div>
        </motion.div>

        {/* Bottom Right Doodle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: 2.4, duration: 1 }}
          className="absolute bottom-6 right-6 sm:bottom-12 sm:right-12 w-4 h-4 sm:w-8 sm:h-8 transform -rotate-45"
        >
          <div className="text-amber-400/50 text-sm sm:text-base">✨</div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full w-full">
        <AnimatePresence mode="wait">{renderMainContent()}</AnimatePresence>
      </div>
    </div>
  );
}

export default App;
