import { motion } from "framer-motion";

function Resepsi() {
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
            className="absolute rounded-full bg-gradient-to-br from-white/20 to-blue-100/30 shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.02)]"
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
          className="absolute top-8 left-8 text-blue-400/50 text-lg transform rotate-12"
        >
          🏛️
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 0.7 }}
          className="absolute top-8 right-8 text-purple-400/50 transform -rotate-12"
        >
          🎉
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 0.9 }}
          className="absolute bottom-8 left-8 text-pink-400/50 transform rotate-45"
        >
          💐
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1.1 }}
          className="absolute bottom-8 right-8 text-blue-400/50 transform -rotate-45"
        >
          🎊
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-lg transform rotate-1 shadow-lg"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 rounded-lg transform -rotate-1 shadow-lg"></div>

        {/* Main Notebook Page */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
          className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-lg p-6 sm:p-8 md:p-10 shadow-xl border-l-4 border-blue-300/40 z-10 max-h-[95vh] overflow-y-auto"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "20px 25px",
            backgroundPosition: "0 0, 0 5px",
          }}
        >
          {/* Notebook holes */}
          <div className="absolute left-2 top-4 flex flex-col space-y-8">
            <div className="w-3 h-3 bg-white border-2 border-blue-300/50 rounded-full shadow-inner"></div>
            <div className="w-3 h-3 bg-white border-2 border-blue-300/50 rounded-full shadow-inner"></div>
            <div className="w-3 h-3 bg-white border-2 border-blue-300/50 rounded-full shadow-inner"></div>
            <div className="w-3 h-3 bg-white border-2 border-blue-300/50 rounded-full shadow-inner"></div>
          </div>

          {/* Hand-drawn doodle borders */}
          <div className="absolute top-3 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent transform -rotate-1"></div>
          <div className="absolute bottom-3 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent transform rotate-1"></div>
          <div className="absolute top-6 bottom-6 left-3 w-0.5 bg-gradient-to-b from-transparent via-blue-400/60 to-transparent transform rotate-1"></div>
          <div className="absolute top-6 bottom-6 right-3 w-0.5 bg-gradient-to-b from-transparent via-blue-400/60 to-transparent transform -rotate-1"></div>

          {/* Title */}
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
            <div className="text-4xl sm:text-5xl mb-4">🏛️</div>
            <div
              className="text-2xl sm:text-3xl md:text-4xl text-blue-600 font-bold mb-2 transform -rotate-1"
              style={{
                fontFamily: "Kalam, cursive",
                textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
              }}
            >
              Resepsi
            </div>
            <div
              className="text-sm sm:text-base text-blue-700 mb-4 transform rotate-1"
              style={{ fontFamily: "Kalam, cursive" }}
            >
              Wedding Reception & Celebration
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="w-32 h-0.5 bg-blue-400/60 mx-auto transform rotate-1"
            ></motion.div>
            <div className="absolute -top-2 -right-4 transform rotate-12 text-blue-400/60 text-sm">
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
              transition={{
                delay: 1.4,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
              className="bg-blue-100/80 border-2 border-blue-200/50 rounded-lg p-6 mb-6 transform rotate-1 shadow-md relative"
              style={{ borderStyle: "dashed" }}
            >
              <div className="text-center">
                <div
                  className="text-lg sm:text-xl text-blue-800 font-bold mb-2"
                  style={{ fontFamily: "Kalam, cursive" }}
                >
                  📅 Tanggal & Waktu
                </div>
                <div
                  className="text-2xl sm:text-3xl text-blue-700 font-bold mb-2"
                  style={{ fontFamily: "Kalam, cursive" }}
                >
                  Selasa, 24 Desember 2025
                </div>
                <div
                  className="text-lg sm:text-xl text-blue-600"
                  style={{ fontFamily: "Kalam, cursive" }}
                >
                  Pukul 18.00 - 21.00 WIB
                </div>
              </div>
              <div className="absolute -top-1 -right-1 text-blue-400/60 text-xs transform rotate-12">
                🎉
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 5 }}
              animate={{ opacity: 1, x: 0, rotate: -1 }}
              transition={{
                delay: 1.6,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
              className="bg-purple-100/80 border-2 border-purple-200/50 rounded-lg p-6 mb-6 transform -rotate-1 shadow-md relative"
              style={{ borderStyle: "dashed" }}
            >
              <div className="text-center">
                <div
                  className="text-lg sm:text-xl text-purple-800 font-bold mb-3"
                  style={{ fontFamily: "Kalam, cursive" }}
                >
                  📍 Lokasi Resepsi
                </div>
                <div
                  className="text-xl sm:text-2xl text-purple-700 font-bold mb-2"
                  style={{ fontFamily: "Kalam, cursive" }}
                >
                  Gedung Serbaguna Bahagia
                </div>
                <div
                  className="text-sm sm:text-base text-purple-600 leading-relaxed"
                  style={{ fontFamily: "Kalam, cursive" }}
                >
                  Jl. Celebration Boulevard No. 456
                  <br />
                  Kelurahan Gembira, Kecamatan Suka Cita
                  <br />
                  Jakarta Selatan 12567
                </div>
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.0 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-6 rounded-full shadow-md transition-all duration-300 text-sm transform rotate-1"
                  style={{ fontFamily: "Kalam, cursive" }}
                  onClick={() =>
                    window.open("https://maps.google.com", "_blank")
                  }
                >
                  📍 Lihat Maps
                </motion.button>
              </div>
              <div className="absolute -top-1 -left-1 text-purple-400/60 text-xs transform -rotate-12">
                🏛️
              </div>
            </motion.div>

            {/* Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: 1.8,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
              className="relative mb-6"
            >
              <div className="relative mx-auto max-w-md">
                <div className="relative w-full h-48 sm:h-64 bg-white p-4 shadow-xl transform rotate-1 border-2 border-gray-200/50 rounded-lg">
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-50 overflow-hidden rounded-md shadow-inner flex items-center justify-center">
                    <div className="text-center text-blue-600">
                      <div className="text-4xl mb-2">🏛️</div>
                      <div
                        className="text-sm font-medium"
                        style={{ fontFamily: "Kalam, cursive" }}
                      >
                        Foto Gedung Resepsi
                      </div>
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="text-center mt-2">
                    <div
                      className="text-xs text-blue-700 font-medium"
                      style={{ fontFamily: "Kalam, cursive" }}
                    >
                      Tempat perayaan resepsi pernikahan
                    </div>
                  </div>
                </div>

                {/* Corner Tape Effects */}
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-yellow-200/80 transform rotate-45 shadow-md"></div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-200/80 transform -rotate-45 shadow-md"></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Scattered doodles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
            className="absolute -top-4 left-1/4 text-blue-400/60 text-xs transform rotate-45"
          >
            🎉
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.0 }}
            className="absolute -bottom-4 right-1/4 text-purple-400/60 text-xs transform -rotate-12"
          >
            💐
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Resepsi;
