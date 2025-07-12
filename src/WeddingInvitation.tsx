import { motion } from "framer-motion";
import { useEffect } from "react";

interface WeddingInvitationProps {
  onBackToCover: () => void;
  onNavigateToSection: (section: string) => void;
}

function WeddingInvitation({ onBackToCover, onNavigateToSection }: WeddingInvitationProps) {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const tableOfContents = [
    { 
      title: "Akad Nikah", 
      subtitle: "Sacred Wedding Ceremony", 
      icon: "🕌", 
      page: "1",
      section: "akad",
      colorTheme: "green" // Islamic green theme
    },
    { 
      title: "Resepsi", 
      subtitle: "Wedding Reception", 
      icon: "🏛️", 
      page: "2",
      section: "resepsi",
      colorTheme: "blue" // Celebration blue theme
    },
    { 
      title: "Meet the Couple", 
      subtitle: "Our Love Story", 
      icon: "💕", 
      page: "3",
      section: "profiles",
      colorTheme: "pink" // Love pink theme
    },
    { 
      title: "Gallery", 
      subtitle: "Precious Moments", 
      icon: "📸", 
      page: "4",
      section: "gallery",
      colorTheme: "amber" // Gallery amber theme
    },
    { 
      title: "Love Story", 
      subtitle: "Our Journey Together", 
      icon: "💝", 
      page: "5",
      section: "lovestory",
      colorTheme: "purple" // Love Story purple theme
    },
    { 
      title: "Gift & Wishes", 
      subtitle: "Send Your Blessings", 
      icon: "🎁", 
      page: "6",
      section: "gifts",
      colorTheme: "red" // Gift red theme
    },
    { 
      title: "Thank You", 
      subtitle: "With Love & Gratitude", 
      icon: "✨", 
      page: "7",
      section: "closing",
      colorTheme: "purple" // Closing purple theme
    }
  ];

  // Function to get theme colors for each section
  const getThemeColors = (colorTheme: string) => {
    switch (colorTheme) {
      case 'green':
        return {
          bg: 'bg-green-100/80',
          border: 'border-green-200/50',
          hover: 'hover:bg-green-200/80',
          title: 'text-green-800',
          subtitle: 'text-green-600',
          page: 'text-green-700',
          sparkle: 'text-green-400/60',
          underline: 'bg-green-400/40'
        };
      case 'blue':
        return {
          bg: 'bg-blue-100/80',
          border: 'border-blue-200/50',
          hover: 'hover:bg-blue-200/80',
          title: 'text-blue-800',
          subtitle: 'text-blue-600',
          page: 'text-blue-700',
          sparkle: 'text-blue-400/60',
          underline: 'bg-blue-400/40'
        };
      case 'pink':
        return {
          bg: 'bg-pink-100/80',
          border: 'border-pink-200/50',
          hover: 'hover:bg-pink-200/80',
          title: 'text-pink-800',
          subtitle: 'text-pink-600',
          page: 'text-pink-700',
          sparkle: 'text-pink-400/60',
          underline: 'bg-pink-400/40'
        };
      case 'purple':
        return {
          bg: 'bg-purple-100/80',
          border: 'border-purple-200/50',
          hover: 'hover:bg-purple-200/80',
          title: 'text-purple-800',
          subtitle: 'text-purple-600',
          page: 'text-purple-700',
          sparkle: 'text-purple-400/60',
          underline: 'bg-purple-400/40'
        };
      case 'amber':
        return {
          bg: 'bg-amber-100/80',
          border: 'border-amber-200/50',
          hover: 'hover:bg-amber-200/80',
          title: 'text-amber-800',
          subtitle: 'text-amber-600',
          page: 'text-amber-700',
          sparkle: 'text-amber-400/60',
          underline: 'bg-amber-400/40'
        };
      case 'red':
        return {
          bg: 'bg-red-100/80',
          border: 'border-red-200/50',
          hover: 'hover:bg-red-200/80',
          title: 'text-red-800',
          subtitle: 'text-red-600',
          page: 'text-red-700',
          sparkle: 'text-red-400/60',
          underline: 'bg-red-400/40'
        };
      default:
        return {
          bg: 'bg-gray-100/80',
          border: 'border-gray-200/50',
          hover: 'hover:bg-gray-200/80',
          title: 'text-gray-800',
          subtitle: 'text-gray-600',
          page: 'text-gray-700',
          sparkle: 'text-gray-400/60',
          underline: 'bg-gray-400/40'
        };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut"
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.6,
          ease: "easeOut"
        }}
        className="relative max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto w-full z-10"
      >
        {/* Paper texture background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-lg transform rotate-1 shadow-lg"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 rounded-lg transform -rotate-1 shadow-lg"></div>

        {/* Main Notebook Page */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-lg p-6 sm:p-8 md:p-10 shadow-xl border-l-4 border-red-300/40 z-10 max-h-[92vh] overflow-y-auto"
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

          {/* Title - Daftar Isi */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.4, 
              duration: 0.5
            }}
            className="text-center mb-8 relative"
          >
            <div
              className="text-2xl sm:text-3xl md:text-4xl text-red-600 font-bold mb-2 transform -rotate-1"
              style={{
                fontFamily: "Kalam, cursive",
                textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
              }}
            >
              Daftar Isi
            </div>
            <div
              className="text-sm sm:text-base text-orange-700 mb-4 transform rotate-1"
              style={{ fontFamily: "Kalam, cursive" }}
            >
              Table of Contents
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="w-32 h-0.5 bg-red-400/60 mx-auto transform rotate-1"
            ></motion.div>
            <div className="absolute -top-2 -right-4 transform rotate-12 text-red-400/60 text-sm">
              ✏️
            </div>
          </motion.div>

          {/* Couple Names */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="text-center mb-8"
          >
            <div
              className="text-lg sm:text-xl text-red-700 font-bold mb-1"
              style={{ fontFamily: "Kalam, cursive" }}
            >
              Bagas Prasetyadi
            </div>
            <div className="text-red-600 text-base font-bold mb-1">&</div>
            <div
              className="text-lg sm:text-xl text-red-700 font-bold mb-2"
              style={{ fontFamily: "Kalam, cursive" }}
            >
              Fajri Zulia Ramdhani
            </div>
            <div
              className="text-sm text-orange-600"
              style={{ fontFamily: "Kalam, cursive" }}
            >
              24 Desember 2025
            </div>
          </motion.div>

          {/* Table of Contents Items */}
          <div className="space-y-4 mb-8">
            {tableOfContents.map((item, index) => {
              const themeColors = getThemeColors(item.colorTheme);
              return (
                <motion.button
                  key={item.section}
                  onClick={() => onNavigateToSection(item.section)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: 0.6 + (index * 0.1), 
                    duration: 0.4
                  }}
                  whileHover={{
                    scale: 1.02,
                    rotate: index % 2 === 0 ? 1 : -1,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full text-left p-4 rounded-lg border-2 shadow-md relative transition-all duration-200 transform ${
                    index % 2 === 0 ? 'rotate-1' : '-rotate-1'
                  } ${themeColors.bg} ${themeColors.border} ${themeColors.hover}`}
                  style={{ borderStyle: "dashed" }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <div
                          className={`text-base sm:text-lg font-bold ${themeColors.title}`}
                          style={{ fontFamily: "Kalam, cursive" }}
                        >
                          {item.title}
                        </div>
                        <div
                          className={`text-xs sm:text-sm ${themeColors.subtitle}`}
                          style={{ fontFamily: "Kalam, cursive" }}
                        >
                          {item.subtitle}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`text-lg font-bold ${themeColors.page}`}
                      style={{ fontFamily: "Kalam, cursive" }}
                    >
                      {item.page}
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className={`absolute -top-1 -right-1 ${themeColors.sparkle} text-xs transform rotate-12`}>
                    ✨
                  </div>
                  
                  {/* Hand-drawn underline */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8 + (index * 0.1), duration: 0.3 }}
                    className={`absolute bottom-2 left-4 right-16 h-0.5 ${themeColors.underline} transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}
                  ></motion.div>
                </motion.button>
              );
            })}
          </div>

          {/* Back Button */}
          <motion.button
            onClick={onBackToCover}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 1.0, 
              duration: 0.4
            }}
            whileHover={{
              scale: 1.05,
              y: -5,
              rotate: -2,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            className="relative w-full bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 text-sm sm:text-base transform -rotate-1 border-2 border-orange-500/30"
            style={{
              fontFamily: "Kalam, cursive",
              textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
            }}
          >
            Back to Cover 📖
            <div className="absolute -top-2 -left-2 text-yellow-300 text-xs animate-pulse">
              ✨
            </div>
          </motion.button>

          {/* Scattered doodles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="absolute -top-4 left-1/4 text-orange-400/60 text-xs transform rotate-45"
          >
            ♡
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute -bottom-4 right-1/4 text-red-400/60 text-xs transform -rotate-12"
          >
            💕
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default WeddingInvitation;
