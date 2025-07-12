import { motion } from "framer-motion";
import { useEffect } from "react";

function ResepsiContent() {
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
          transition={{ delay: 0.4, duration: 0.6 }}
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
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-8"
      >
        {/* Date & Time Card */}
        <motion.div
          initial={{ opacity: 0, x: -30, rotate: -3 }}
          animate={{ opacity: 1, x: 0, rotate: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
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
          initial={{ opacity: 0, x: 30, rotate: 3 }}
          animate={{ opacity: 1, x: 0, rotate: -1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
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
              Jl. Celebration Boulevard No. 456<br />
              Kelurahan Gembira, Kecamatan Suka Cita<br />
              Jakarta Selatan 12567
            </div>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-6 rounded-full shadow-md transition-all duration-300 text-sm transform rotate-1"
              style={{ fontFamily: "Kalam, cursive" }}
              onClick={() => window.open('https://maps.google.com', '_blank')}
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
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
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

      {/* Decorative Celebration Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="text-center mb-8"
      >
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200/40 rounded-lg p-6 transform -rotate-1 shadow-sm relative">
          <div className="text-2xl mb-3">🎊</div>
          <div
            className="text-base sm:text-lg text-blue-700 italic leading-relaxed"
            style={{ fontFamily: "Kalam, cursive" }}
          >
            "Mari bergembira dan merayakan<br />
            cinta yang telah dipersatukan"
          </div>
          <div className="absolute -top-1 -right-1 text-blue-400/60 text-xs transform rotate-12">
            💫
          </div>
        </div>
      </motion.div>

      {/* Scattered doodles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute -top-4 left-1/4 text-blue-400/60 text-xs transform rotate-45"
      >
        🎉
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute -bottom-4 right-1/4 text-purple-400/60 text-xs transform -rotate-12"
      >
        💐
      </motion.div>
    </>
  );
}

export default ResepsiContent;
