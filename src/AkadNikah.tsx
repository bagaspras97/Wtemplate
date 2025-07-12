import { motion } from "framer-motion";

interface AkadNikahProps {
  readonly onNavigateToSection: (section: string) => void;
}

function AkadNikah({  onNavigateToSection }: AkadNikahProps) {
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
          className="absolute top-8 left-8 text-green-400/50 text-lg transform rotate-12"
        >
          🕌
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 0.7 }}
          className="absolute top-8 right-8 text-amber-400/50 transform -rotate-12"
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
          className="absolute bottom-8 right-8 text-green-400/50 transform -rotate-45"
        >
          🤲
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
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-amber-50 to-yellow-50 rounded-lg transform rotate-1 shadow-lg"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-orange-50 to-amber-50 rounded-lg transform -rotate-1 shadow-lg"></div>

        {/* Main Notebook Page */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
          className="relative bg-gradient-to-br from-green-50 via-orange-50 to-yellow-50 rounded-lg p-6 sm:p-8 md:p-10 shadow-xl border-l-4 border-green-300/40 z-10 max-h-[95vh] overflow-y-auto"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "20px 25px",
            backgroundPosition: "0 0, 0 5px",
          }}
        >
          {/* Notebook holes */}
          <div className="absolute left-2 top-4 flex flex-col space-y-8">
            <div className="w-3 h-3 bg-white border-2 border-green-300/50 rounded-full shadow-inner"></div>
            <div className="w-3 h-3 bg-white border-2 border-green-300/50 rounded-full shadow-inner"></div>
            <div className="w-3 h-3 bg-white border-2 border-green-300/50 rounded-full shadow-inner"></div>
            <div className="w-3 h-3 bg-white border-2 border-green-300/50 rounded-full shadow-inner"></div>
          </div>

          {/* Hand-drawn doodle borders */}
          <div className="absolute top-3 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-green-400/60 to-transparent transform -rotate-1"></div>
          <div className="absolute bottom-3 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-green-400/60 to-transparent transform rotate-1"></div>
          <div className="absolute top-6 bottom-6 left-3 w-0.5 bg-gradient-to-b from-transparent via-green-400/60 to-transparent transform rotate-1"></div>
          <div className="absolute top-6 bottom-6 right-3 w-0.5 bg-gradient-to-b from-transparent via-green-400/60 to-transparent transform -rotate-1"></div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              delay: 0.6, 
              duration: 0.8,
              type: "spring",
              stiffness: 150 
            }}
            className="text-center mb-8 relative"
          >
            <div className="text-4xl sm:text-5xl mb-4">🕌</div>
            <div
              className="text-2xl sm:text-3xl md:text-4xl text-green-600 font-bold mb-2 transform -rotate-1"
              style={{
                fontFamily: "Kalam, cursive",
                textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
              }}
            >
              Akad Nikah
            </div>
            <div
              className="text-sm sm:text-base text-green-700 mb-4 transform rotate-1"
              style={{ fontFamily: "Kalam, cursive" }}
            >
              Sacred Wedding Ceremony
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="w-32 h-0.5 bg-green-400/60 mx-auto transform rotate-1"
            ></motion.div>
            <div className="absolute -top-2 -right-4 transform rotate-12 text-green-400/60 text-sm">
              ✏️
            </div>
          </motion.div>

          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mb-8"
          >
            {/* Date & Time Card */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: -5 }}
              animate={{ opacity: 1, x: 0, rotate: 1 }}
              transition={{ delay: 1.4, duration: 0.6, type: "spring", stiffness: 100 }}
              className="bg-green-100/80 border-2 border-green-200/50 rounded-lg p-6 mb-6 transform rotate-1 shadow-md relative"
              style={{ borderStyle: "dashed" }}
            >
              <div className="text-center">
                <div
                  className="text-lg sm:text-xl text-green-800 font-bold mb-2"
                  style={{ fontFamily: "Kalam, cursive" }}
                >
                  📅 Tanggal & Waktu
                </div>
                <div
                  className="text-2xl sm:text-3xl text-green-700 font-bold mb-2"
                  style={{ fontFamily: "Kalam, cursive" }}
                >
                  Selasa, 24 Desember 2025
                </div>
                <div
                  className="text-lg sm:text-xl text-green-600"
                  style={{ fontFamily: "Kalam, cursive" }}
                >
                  Pukul 08.00 - 10.00 WIB
                </div>
              </div>
              <div className="absolute -top-1 -right-1 text-green-400/60 text-xs transform rotate-12">
                ✨
              </div>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className="absolute bottom-2 left-4 right-4 h-0.5 bg-green-400/40 transform rotate-1"
              ></motion.div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 5 }}
              animate={{ opacity: 1, x: 0, rotate: -1 }}
              transition={{ delay: 1.6, duration: 0.6, type: "spring", stiffness: 100 }}
              className="bg-amber-100/80 border-2 border-amber-200/50 rounded-lg p-6 mb-6 transform -rotate-1 shadow-md relative"
              style={{ borderStyle: "dashed" }}
            >
              <div className="text-center">
                <div
                  className="text-lg sm:text-xl text-amber-800 font-bold mb-3"
                  style={{ fontFamily: "Kalam, cursive" }}
                >
                  📍 Lokasi Akad Nikah
                </div>
                <div
                  className="text-xl sm:text-2xl text-amber-700 font-bold mb-2"
                  style={{ fontFamily: "Kalam, cursive" }}
                >
                  Masjid Al-Ikhlas
                </div>
                <div
                  className="text-sm sm:text-base text-amber-600 leading-relaxed"
                  style={{ fontFamily: "Kalam, cursive" }}
                >
                  Jl. Kemerdekaan No. 123<br />
                  Kelurahan Sejahtera, Kecamatan Bahagia<br />
                  Jakarta Selatan 12345
                </div>
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.0 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-2 px-6 rounded-full shadow-md transition-all duration-300 text-sm transform rotate-1"
                  style={{ fontFamily: "Kalam, cursive" }}
                  onClick={() => window.open('https://maps.google.com', '_blank')}
                >
                  📍 Lihat Maps
                </motion.button>
              </div>
              <div className="absolute -top-1 -left-1 text-amber-400/60 text-xs transform -rotate-12">
                🕌
              </div>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.8, duration: 0.5 }}
                className="absolute bottom-2 left-4 right-4 h-0.5 bg-amber-400/40 transform -rotate-1"
              ></motion.div>
            </motion.div>

            {/* Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6, type: "spring", stiffness: 100 }}
              className="relative mb-6"
            >
              <div className="relative mx-auto max-w-md">
                <div className="relative w-full h-48 sm:h-64 bg-white p-4 shadow-xl transform rotate-1 border-2 border-gray-200/50 rounded-lg">
                  <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-50 overflow-hidden rounded-md shadow-inner flex items-center justify-center">
                    <div className="text-center text-green-600">
                      <div className="text-4xl mb-2">🕌</div>
                      <div
                        className="text-sm font-medium"
                        style={{ fontFamily: "Kalam, cursive" }}
                      >
                        Foto Masjid Al-Ikhlas
                      </div>
                    </div>
                  </div>
                  
                  {/* Caption */}
                  <div className="text-center mt-2">
                    <div
                      className="text-xs text-green-700 font-medium"
                      style={{ fontFamily: "Kalam, cursive" }}
                    >
                      Tempat berlangsungnya akad nikah
                    </div>
                  </div>
                </div>

                {/* Corner Tape Effects */}
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-yellow-200/80 transform rotate-45 shadow-md"></div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-200/80 transform -rotate-45 shadow-md"></div>
              </div>
            </motion.div>

            {/* Islamic Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.6 }}
              className="bg-green-50/80 border-2 border-green-200/50 rounded-lg p-6 transform rotate-1 shadow-md relative"
              style={{ borderStyle: "dashed" }}
            >
              <div className="text-center">
                <div
                  className="text-base sm:text-lg text-green-700 italic mb-3 leading-relaxed"
                  style={{ fontFamily: "Kalam, cursive" }}
                >
                  "Dan di antara tanda-tanda-Nya adalah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu merasa tenteram kepadanya, dan Dia menjadikan diantaramu rasa kasih dan sayang."
                </div>
                <div
                  className="text-sm text-green-600 font-bold"
                  style={{ fontFamily: "Kalam, cursive" }}
                >
                  - QS. Ar-Rum: 21 -
                </div>
              </div>
              <div className="absolute -top-1 -right-1 text-green-400/60 text-sm transform rotate-12">
                🤲
              </div>
            </motion.div>
          </motion.div>



          {/* Floating Navigation Buttons */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
            {/* Previous Button - Back to Cover */}
            <motion.button
              onClick={() => onNavigateToSection('cover')}
              initial={{ opacity: 0, x: -50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ 
                delay: 2.4, 
                duration: 0.6,
                type: "spring",
                stiffness: 150 
              }}
              whileHover={{
                scale: 1.1,
                x: -5,
                rotate: -5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
              className="relative bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 text-white font-bold p-3 rounded-full shadow-lg transition-all duration-300 transform rotate-3 border-2 border-orange-500/30 mb-4"
              style={{
                fontFamily: "Kalam, cursive",
                textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
              }}
              title="Kembali ke Cover"
            >
              <span className="text-lg">🏠</span>
              <div className="absolute -top-1 -right-1 text-yellow-300 text-xs animate-pulse">
                ✨
              </div>
            </motion.button>
          </div>

          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
            {/* Next Button - To Resepsi */}
            <motion.button
              onClick={() => onNavigateToSection('resepsi')}
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ 
                delay: 2.6, 
                duration: 0.6,
                type: "spring",
                stiffness: 150 
              }}
              whileHover={{
                scale: 1.1,
                x: 5,
                rotate: 5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
              className="relative bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white font-bold p-3 rounded-full shadow-lg transition-all duration-300 transform -rotate-3 border-2 border-blue-500/30"
              style={{
                fontFamily: "Kalam, cursive",
                textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
              }}
              title="Lanjut ke Resepsi"
            >
              <span className="text-lg">🏛️</span>
              <div className="absolute -top-1 -left-1 text-yellow-300 text-xs animate-pulse">
                ✨
              </div>
            </motion.button>
          </div>

          {/* Scattered doodles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4 }}
            className="absolute -top-4 left-1/4 text-green-400/60 text-xs transform rotate-45"
          >
            🕌
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6 }}
            className="absolute -bottom-4 right-1/4 text-amber-400/60 text-xs transform -rotate-12"
          >
            ♡
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default AkadNikah;
