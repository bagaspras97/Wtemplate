import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [showInvitation, setShowInvitation] = useState(false)
  const [floatingHearts, setFloatingHearts] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    // Generate floating hearts
    const hearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5
    }))
    setFloatingHearts(hearts)
  }, [])

  const coverVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8, y: -50 }
  }

  const heartVariants = {
    float: {
      y: [-10, -20, -10],
      x: [-2, 2, -2],
      rotate: [0, 5, 0],
      scale: [1, 1.1, 1]
    }
  }

  const renderCover = () => (
    <motion.div
      variants={coverVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col items-center justify-center h-full text-center relative px-4 overflow-hidden"
    >
      {/* Floating Literary Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingHearts.slice(0, 8).map((heart, index) => (
          <motion.div
            key={heart.id}
            className="absolute text-amber-200/20 text-sm sm:text-base pointer-events-none"
            style={{
              left: `${Math.max(5, Math.min(95, heart.x))}%`,
              top: `${Math.max(5, Math.min(95, heart.y))}%`,
            }}
            variants={heartVariants}
            animate="float"
            transition={{
              duration: 8 + heart.delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: heart.delay
            }}
          >
            {['�', '✒️', '📝', '📚', '🖋️', '📜', '✨', '💫'][index % 8]}
          </motion.div>
        ))}
      </div>

      {/* Book Cover Design */}
      <motion.div
        initial={{ opacity: 0, rotateY: -90 }}
        animate={{ opacity: 1, rotateY: 0 }}
        transition={{ delay: 0.3, duration: 1.2, type: "spring", stiffness: 100 }}
        className="relative perspective-1000"
      >
        {/* Book Shadow */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/10 to-gray-900/20 rounded-r-lg transform translate-x-2 translate-y-2 blur-sm"></div>
        
        {/* Main Book Cover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
          className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 rounded-lg p-8 sm:p-10 md:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.8)] max-w-sm sm:max-w-md md:max-w-xl mx-auto border-l-4 border-amber-600/30 relative z-10"
        >
          {/* Book Spine Details */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-600/40 to-amber-700/40 rounded-l-lg"></div>
          <div className="absolute left-1 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500/30 to-amber-600/30"></div>
          
          {/* Decorative Corner Elements */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-amber-400/40 rounded-tl-lg"></div>
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-amber-400/40 rounded-tr-lg"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-amber-400/40 rounded-bl-lg"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-amber-400/40 rounded-br-lg"></div>

          {/* Book Title Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mb-6 sm:mb-8"
          >
            <div className="text-xs sm:text-sm text-amber-700 font-medium tracking-[0.3em] uppercase mb-2 font-serif">
              A Love Story
            </div>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-4"></div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-serif text-amber-900 font-bold tracking-wide">
              "Our Beginning"
            </h2>
          </motion.div>

          {/* Couple Photo as Book Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, type: "spring", stiffness: 120 }}
            className="relative mb-6 sm:mb-8"
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-lg overflow-hidden border-4 border-amber-200/50 shadow-[0_8px_16px_rgba(0,0,0,0.1)] bg-gradient-to-br from-amber-50 to-orange-50">
              <img 
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=400&fit=crop&crop=faces"
                alt="Bagas & Fajri"
                className="w-full h-full object-cover sepia-[0.2]"
              />
            </div>
            
            {/* Literary Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 120 }}
              className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10"
            >
              <div className="w-full h-full bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center shadow-md border-2 border-amber-200/50">
                <span className="text-sm sm:text-base">📖</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: 20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 1.4, type: "spring", stiffness: 120 }}
              className="absolute -bottom-2 -left-2 w-6 h-6 sm:w-8 sm:h-8"
            >
              <div className="w-full h-full bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center shadow-md border-2 border-orange-200/50">
                <span className="text-xs sm:text-sm">✒️</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Authors Section (Names) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-center mb-6 sm:mb-8"
          >
            <div className="text-xs sm:text-sm text-amber-700 font-medium tracking-[0.2em] uppercase mb-3 font-serif">
              Written by
            </div>
            
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, type: "spring", stiffness: 100 }}
              className="text-2xl sm:text-3xl md:text-4xl font-serif text-amber-900 font-bold mb-2 sm:mb-3 tracking-wide"
            >
              Bagas Prasetyadi
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="flex items-center justify-center mb-2 sm:mb-3"
            >
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
              <span className="mx-3 text-amber-600 text-base sm:text-lg">♡</span>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, type: "spring", stiffness: 100 }}
              className="text-2xl sm:text-3xl md:text-4xl font-serif text-amber-900 font-bold tracking-wide"
            >
              Fajri Zulia Ramdhani
            </motion.h1>
          </motion.div>

          {/* Publication Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0 }}
            className="text-center mb-6 sm:mb-8"
          >
            <div className="text-xs sm:text-sm text-amber-700 font-medium tracking-[0.15em] uppercase mb-2 font-serif">
              Published
            </div>
            <div className="text-lg sm:text-xl md:text-2xl font-serif text-amber-800 font-bold mb-4 sm:mb-6">
              December 24, 2025
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              className="text-amber-700 font-light leading-relaxed text-sm sm:text-base max-w-xs mx-auto italic font-serif"
            >
              "A tale of two hearts becoming one, written in the stars and sealed with love."
            </motion.p>
          </motion.div>

          {/* Dedication Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4 }}
            className="text-center mb-6 sm:mb-8"
          >
            <div className="text-xs sm:text-sm text-amber-700 font-medium tracking-[0.15em] uppercase mb-2 font-serif">
              Dedicated to
            </div>
            <div className="text-sm sm:text-base font-serif text-amber-800 font-medium bg-gradient-to-r from-amber-50 to-orange-50 px-4 py-2 rounded-lg border border-amber-200/50 shadow-inner">
              Our Beloved Family & Friends
            </div>
          </motion.div>

          {/* Read More Button */}
          <motion.button
            onClick={() => setShowInvitation(true)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6 }}
            whileHover={{ 
              scale: 1.02, 
              y: -2,
              boxShadow: "0 15px 30px rgba(0,0,0,0.15)"
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-medium py-3 sm:py-4 px-6 sm:px-8 rounded-lg shadow-[0_8px_20px_rgba(217,119,6,0.3)] transition-all duration-300 text-sm sm:text-base font-serif"
          >
            Open & Read More
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Bottom Publisher Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
        className="mt-6 sm:mt-8 text-center"
      >
        <div className="text-xs sm:text-sm text-amber-600 font-medium tracking-[0.2em] uppercase font-serif">
          Wedding Invitation
        </div>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-2"></div>
      </motion.div>
    </motion.div>
  )

  const renderInvitation = () => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="flex flex-col items-center justify-center h-screen text-center space-y-4 sm:space-y-6 px-4 overflow-y-auto"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-8 md:p-12 shadow-[inset_0_8px_16px_rgba(255,255,255,0.6),inset_0_-8px_16px_rgba(0,0,0,0.05),0_25px_50px_rgba(0,0,0,0.1)] max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto my-4"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-800 font-light mb-4 sm:mb-6 md:mb-8">
          Wedding Invitation
        </h2>

        {/* Photo Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-4 sm:mb-6 md:mb-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-[inset_0_4px_8px_rgba(255,255,255,0.4),inset_0_-4px_8px_rgba(0,0,0,0.08)]"
            >
              <img 
                src="https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=300&h=200&fit=crop&crop=faces"
                alt="Bagas & Fajri - Moment 1"
                className="w-full h-24 sm:h-28 md:h-32 object-cover rounded-lg sm:rounded-xl"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-[inset_0_4px_8px_rgba(255,255,255,0.4),inset_0_-4px_8px_rgba(0,0,0,0.08)]"
            >
              <img 
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=300&h=200&fit=crop&crop=faces"
                alt="Bagas & Fajri - Moment 2"
                className="w-full h-24 sm:h-28 md:h-32 object-cover rounded-lg sm:rounded-xl"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-gradient-to-br from-green-100 to-teal-100 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-[inset_0_4px_8px_rgba(255,255,255,0.4),inset_0_-4px_8px_rgba(0,0,0,0.08)] sm:col-span-2 lg:col-span-1"
            >
              <img 
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=300&h=200&fit=crop&crop=faces"
                alt="Bagas & Fajri - Moment 3"
                className="w-full h-24 sm:h-28 md:h-32 object-cover rounded-lg sm:rounded-xl"
              />
            </motion.div>
          </div>
        </motion.div>
        
        <div className="space-y-4 sm:space-y-6 text-gray-700">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            We are delighted to invite you to join us as we exchange vows and celebrate our love story.
          </p>
          
          <div className="space-y-3 sm:space-y-4">
            <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-[inset_0_4px_8px_rgba(255,255,255,0.4),inset_0_-4px_8px_rgba(0,0,0,0.08)]">
              <h3 className="text-lg sm:text-xl font-medium text-gray-800 mb-1 sm:mb-2">📅 Date & Time</h3>
              <p className="text-sm sm:text-base text-gray-600">December 24, 2025 • 2:00 PM</p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-[inset_0_4px_8px_rgba(255,255,255,0.4),inset_0_-4px_8px_rgba(0,0,0,0.08)]">
              <h3 className="text-lg sm:text-xl font-medium text-gray-800 mb-1 sm:mb-2">📍 Venue</h3>
              <p className="text-sm sm:text-base text-gray-600">To be announced</p>
            </div>
          </div>
        </div>
        
        <motion.button
          onClick={() => setShowInvitation(false)}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 sm:mt-8 bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 text-gray-800 font-medium py-2.5 px-5 sm:py-3 sm:px-6 rounded-full shadow-[inset_0_4px_8px_rgba(255,255,255,0.3),inset_0_-4px_8px_rgba(0,0,0,0.1),0_12px_24px_rgba(0,0,0,0.15)] transition-all duration-300 text-sm sm:text-base"
        >
          Back to Cover
        </motion.button>
      </motion.div>
    </motion.div>
  )

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Soft Paper-like Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={`bg-shape-${i}`}
            className="absolute rounded-full bg-gradient-to-br from-white/20 to-amber-100/30 shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.02)]"
            animate={{
              x: [0, Math.random() * 15 - 7.5],
              y: [0, Math.random() * 15 - 7.5],
              scale: [1, 1.01, 1],
            }}
            transition={{
              duration: Math.random() * 40 + 30,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              width: `${Math.random() * 60 + 30}px`,
              height: `${Math.random() * 60 + 30}px`,
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
            }}
          />
        ))}
      </div>

      {/* Literary Elements Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left Book */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute top-6 left-6 sm:top-12 sm:left-12 w-8 h-8 sm:w-12 sm:h-12"
        >
          <div className="w-full h-full bg-gradient-to-br from-amber-100 to-orange-100 rounded-sm flex items-center justify-center opacity-50 shadow-md">
            <span className="text-xs sm:text-sm">📚</span>
          </div>
        </motion.div>

        {/* Top Right Quill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute top-6 right-6 sm:top-12 sm:right-12 w-6 h-6 sm:w-10 sm:h-10"
        >
          <div className="w-full h-full bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center opacity-50 shadow-md">
            <span className="text-xs sm:text-sm">🖋️</span>
          </div>
        </motion.div>

        {/* Bottom Left Scroll */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ delay: 2.1, duration: 1 }}
          className="absolute bottom-6 left-6 sm:bottom-12 sm:left-12 w-6 h-6 sm:w-10 sm:h-10"
        >
          <div className="w-full h-full bg-gradient-to-br from-red-100 to-amber-100 rounded-full flex items-center justify-center opacity-50 shadow-md">
            <span className="text-xs sm:text-sm">📜</span>
          </div>
        </motion.div>

        {/* Bottom Right Inkwell */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ delay: 2.4, duration: 1 }}
          className="absolute bottom-6 right-6 sm:bottom-12 sm:right-12 w-4 h-4 sm:w-8 sm:h-8"
        >
          <div className="w-full h-full bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center opacity-50 shadow-md">
            <span className="text-xs sm:text-sm">🖊️</span>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full w-full">
        <AnimatePresence mode="wait">
          {!showInvitation ? renderCover() : renderInvitation()}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App
