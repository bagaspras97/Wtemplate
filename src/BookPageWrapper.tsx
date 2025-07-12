import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";

interface BookPageWrapperProps {
  children: ReactNode;
  currentPage: string;
  onNavigateTo: (section: string) => void;
  themeColor?: 'red' | 'green' | 'blue' | 'purple' | 'pink' | 'amber';
  hideNavigation?: boolean;
}

function BookPageWrapper({ 
  children, 
  currentPage, 
  onNavigateTo, 
  themeColor = 'red',
  hideNavigation = false 
}: BookPageWrapperProps) {
  
  // Define color themes for different sections
  const colorThemes = {
    red: {
      gradient: 'from-amber-50 via-orange-50 to-yellow-50',
      paperGradient1: 'from-orange-50 via-amber-50 to-yellow-50',
      paperGradient2: 'from-red-50 via-orange-50 to-amber-50',
      border: 'border-red-300/40',
      lines: 'rgba(239, 68, 68, 0.1)',
      holes: 'border-red-300/50',
      doodleBorders: 'via-red-400/60',
      bg: 'from-yellow-50 via-orange-50 to-red-50'
    },
    green: {
      gradient: 'from-green-50 via-orange-50 to-yellow-50',
      paperGradient1: 'from-green-50 via-amber-50 to-yellow-50',
      paperGradient2: 'from-emerald-50 via-orange-50 to-amber-50',
      border: 'border-green-300/40',
      lines: 'rgba(34, 197, 94, 0.1)',
      holes: 'border-green-300/50',
      doodleBorders: 'via-green-400/60',
      bg: 'from-yellow-50 via-orange-50 to-red-50'
    },
    blue: {
      gradient: 'from-blue-50 via-purple-50 to-pink-50',
      paperGradient1: 'from-blue-50 via-purple-50 to-pink-50',
      paperGradient2: 'from-indigo-50 via-blue-50 to-purple-50',
      border: 'border-blue-300/40',
      lines: 'rgba(59, 130, 246, 0.1)',
      holes: 'border-blue-300/50',
      doodleBorders: 'via-blue-400/60',
      bg: 'from-yellow-50 via-orange-50 to-red-50'
    },
    purple: {
      gradient: 'from-purple-50 via-pink-50 to-rose-50',
      paperGradient1: 'from-purple-50 via-pink-50 to-rose-50',
      paperGradient2: 'from-violet-50 via-purple-50 to-pink-50',
      border: 'border-purple-300/40',
      lines: 'rgba(147, 51, 234, 0.1)',
      holes: 'border-purple-300/50',
      doodleBorders: 'via-purple-400/60',
      bg: 'from-yellow-50 via-orange-50 to-red-50'
    },
    pink: {
      gradient: 'from-pink-50 via-rose-50 to-orange-50',
      paperGradient1: 'from-pink-50 via-rose-50 to-orange-50',
      paperGradient2: 'from-rose-50 via-pink-50 to-red-50',
      border: 'border-pink-300/40',
      lines: 'rgba(236, 72, 153, 0.1)',
      holes: 'border-pink-300/50',
      doodleBorders: 'via-pink-400/60',
      bg: 'from-yellow-50 via-orange-50 to-red-50'
    },
    amber: {
      gradient: 'from-amber-50 via-yellow-50 to-orange-50',
      paperGradient1: 'from-amber-50 via-yellow-50 to-orange-50',
      paperGradient2: 'from-yellow-50 via-amber-50 to-orange-50',
      border: 'border-amber-300/40',
      lines: 'rgba(245, 158, 11, 0.1)',
      holes: 'border-amber-300/50',
      doodleBorders: 'via-amber-400/60',
      bg: 'from-yellow-50 via-orange-50 to-red-50'
    }
  };

  const theme = colorThemes[themeColor];

  // Navigation mapping
  const navigationMap: Record<string, { prev?: string, next?: string }> = {
    invitation: { prev: 'cover' },
    akad: { prev: 'invitation', next: 'resepsi' },
    resepsi: { prev: 'akad', next: 'profiles' },
    profiles: { prev: 'resepsi', next: 'gallery' },
    gallery: { prev: 'profiles', next: 'lovestory' },
    lovestory: { prev: 'gallery', next: 'gifts' },
    gifts: { prev: 'lovestory', next: 'closing' },
    closing: { prev: 'gifts' }
  };

  // Page number mapping
  const pageNumbers: Record<string, string> = {
    akad: '1',
    resepsi: '2', 
    profiles: '3',
    gallery: '4',
    lovestory: '5',
    gifts: '6',
    closing: '7'
  };

  const currentNav = navigationMap[currentPage] || {};
  const pageNumber = pageNumbers[currentPage];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`flex flex-col items-center justify-center min-h-screen text-center relative px-4 py-8 overflow-y-auto bg-gradient-to-br ${theme.bg}`}
    >
      {/* Hand-drawn Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={`bg-shape-${i}-${currentPage}`}
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

      {/* Floating Navigation Buttons */}
      {!hideNavigation && (
        <AnimatePresence>
          {currentNav.prev && (
            <motion.div 
              className="fixed top-1/2 left-2 sm:left-4 transform -translate-y-1/2 z-30"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                onClick={() => onNavigateTo(currentNav.prev!)}
                whileHover={{
                  scale: 1.1,
                  x: -5,
                  rotate: -5,
                }}
                whileTap={{ scale: 0.9 }}
                className="bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white font-bold p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 transform rotate-3 border-2 border-slate-400/40"
                style={{
                  fontFamily: "Kalam, cursive",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                }}
                title="Previous Page"
              >
                <span className="text-sm sm:text-lg">⬅️</span>
                <div className="absolute -top-1 -right-1 text-yellow-300 text-xs animate-pulse">
                  ✨
                </div>
              </motion.button>
            </motion.div>
          )}

          {currentNav.next && (
            <motion.div 
              className="fixed top-1/2 right-2 sm:right-4 transform -translate-y-1/2 z-30"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ delay: 0.7 }}
            >
              <motion.button
                onClick={() => onNavigateTo(currentNav.next!)}
                whileHover={{
                  scale: 1.1,
                  x: 5,
                  rotate: 5,
                }}
                whileTap={{ scale: 0.9 }}
                className="bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white font-bold p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 transform -rotate-3 border-2 border-slate-400/40"
                style={{
                  fontFamily: "Kalam, cursive",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                }}
                title="Next Page"
              >
                <span className="text-sm sm:text-lg">➡️</span>
                <div className="absolute -top-1 -left-1 text-yellow-300 text-xs animate-pulse">
                  ✨
                </div>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Page Number Display */}
      {pageNumber && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div
            className="relative inline-block bg-white/80 backdrop-blur-sm border-2 border-gray-300/40 rounded-full px-4 py-2 shadow-lg transform rotate-1"
            style={{
              fontFamily: "Kalam, cursive",
            }}
          >
            <span className="text-sm md:text-lg font-bold text-gray-700">Page {pageNumber}</span>
            <div className="absolute -top-1 -right-1 text-yellow-400 text-xs animate-pulse">
              ✨
            </div>
          </div>
        </motion.div>
      )}

      {/* Paper Texture Layers - Smooth Color Transition */}
      <div className="relative max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto w-full z-10">
        {/* Paper texture background layers with theme color transitions */}
        <motion.div 
          key={`paper1-${currentPage}`}
          className={`absolute inset-0 bg-gradient-to-br ${theme.paperGradient1} rounded-lg transform rotate-1 shadow-lg`}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div 
          key={`paper2-${currentPage}`}
          className={`absolute inset-0 bg-gradient-to-br ${theme.paperGradient2} rounded-lg transform -rotate-1 shadow-lg`}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        />

        {/* Main Notebook Page */}
        <div
          className={`relative bg-gradient-to-br ${theme.gradient} rounded-lg p-6 sm:p-8 md:p-10 shadow-xl border-l-4 ${theme.border} z-10 max-h-[92vh] overflow-y-auto`}
          style={{
            backgroundImage: `
              linear-gradient(to right, ${theme.lines} 1px, transparent 1px),
              linear-gradient(to bottom, ${theme.lines} 1px, transparent 1px)
            `,
            backgroundSize: "20px 25px",
            backgroundPosition: "0 0, 0 5px",
          }}
        >
          {/* Notebook holes */}
          <div className="absolute left-2 top-4 flex flex-col space-y-8">
            {[...Array(4)].map((_, i) => (
              <div 
                key={i}
                className={`w-3 h-3 bg-white border-2 ${theme.holes} rounded-full shadow-inner`}
              />
            ))}
          </div>

          {/* Hand-drawn doodle borders */}
          <div className={`absolute top-3 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent ${theme.doodleBorders} to-transparent transform -rotate-1`} />
          <div className={`absolute bottom-3 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent ${theme.doodleBorders} to-transparent transform rotate-1`} />
          <div className={`absolute top-6 bottom-6 left-3 w-0.5 bg-gradient-to-b from-transparent ${theme.doodleBorders} to-transparent transform rotate-1`} />
          <div className={`absolute top-6 bottom-6 right-3 w-0.5 bg-gradient-to-b from-transparent ${theme.doodleBorders} to-transparent transform -rotate-1`} />

          {/* Content Animation - Smooth Fade */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default BookPageWrapper;
