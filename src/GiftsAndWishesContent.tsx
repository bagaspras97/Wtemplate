import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function GiftsAndWishesContent() {
  const [activeTab, setActiveTab] = useState<"gifts" | "wishes" | "viewWishes">("gifts");
  const [wishForm, setWishForm] = useState({
    name: "",
    message: "",
    attending: ""
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Gift options with bank details
  const giftOptions = [
    {
      id: 1,
      type: "Bank Transfer",
      icon: "🏦",
      details: {
        bankName: "Bank BCA",
        accountNumber: "1234567890",
        accountName: "Bagas Prasetyadi"
      },
      color: "blue"
    },
    {
      id: 2,
      type: "Bank Transfer",
      icon: "💳",
      details: {
        platform: "Bank Mandiri",
        phoneNumber: "081234567890",
        accountName: "Fajri Zulia Ramdhani"
      },
      color: "green"
    },
  ];

  // Sample wishes from guests
  const sampleWishes = [
    {
      id: 1,
      name: "Andi & Sari",
      message: "Selamat untuk kalian berdua! Semoga pernikahan kalian dipenuhi dengan kebahagiaan, cinta yang tak terbatas, dan keberkahan dari Yang Maha Kuasa. Bahagia selalu! 💕",
      attending: "hadir",
      date: "2 hari yang lalu"
    },
    {
      id: 2,
      name: "Keluarga Besar Wijaya",
      message: "Barakallahu lakuma wa baraka alaikuma wa jamaʿa bainakuma fi khair. Semoga Allah SWT memberikan keberkahan dalam hidup berumah tangga kalian. Aamiin.",
      attending: "hadir",
      date: "3 hari yang lalu"
    },
    {
      id: 3,
      name: "Teman Kampus",
      message: "Wah akhirnya! Dari jaman kuliah udah kelihatan kalian cocok banget. Semoga langgeng sampai kakek nenek ya! Selamat menempuh hidup baru 🎉",
      attending: "hadir",
      date: "5 hari yang lalu"
    },
    {
      id: 4,
      name: "Mbak Rina",
      message: "Selamat ya dek! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Jangan lupa undang kakak kalau ada acara syukuran ya 😊",
      attending: "tidak-hadir",
      date: "1 minggu yang lalu"
    },
    {
      id: 5,
      name: "Tim Kantor",
      message: "Congratulations Bagas & Fajri! Wishing you both a lifetime of love, laughter, and endless happiness. Can't wait to celebrate with you! 🥳",
      attending: "hadir",
      date: "1 minggu yang lalu"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "from-blue-50 to-sky-100",
        border: "border-blue-200/50",
        text: "text-blue-700",
        accent: "text-blue-600",
        button: "from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600"
      },
      green: {
        bg: "from-green-50 to-emerald-100",
        border: "border-green-200/50",
        text: "text-green-700",
        accent: "text-green-600",
        button: "from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
      },
      amber: {
        bg: "from-amber-50 to-yellow-100",
        border: "border-amber-200/50",
        text: "text-amber-700",
        accent: "text-amber-600",
        button: "from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600"
      },
      purple: {
        bg: "from-purple-50 to-violet-100",
        border: "border-purple-200/50",
        text: "text-purple-700",
        accent: "text-purple-600",
        button: "from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600"
      },
      red: {
        bg: "from-red-50 to-pink-100",
        border: "border-red-200/50",
        text: "text-red-700",
        accent: "text-red-600",
        button: "from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.red;
  };

  const handleWishSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the wish to a backend
    console.log("Wish submitted:", wishForm);
    alert("Terima kasih atas ucapan dan doa yang indah! 💕");
    setWishForm({ name: "", message: "", attending: "" });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Berhasil disalin ke clipboard!");
  };

  return (
    <>
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-center mb-8 relative"
      >
        <div className="text-4xl sm:text-5xl mb-4">🎁</div>
        <div
          className="text-2xl sm:text-3xl md:text-4xl text-red-600 font-bold mb-2 transform -rotate-1"
          style={{
            fontFamily: "Kalam, cursive",
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          Gifts & Wishes
        </div>
        <div
          className="text-sm sm:text-base text-red-700 mb-4 transform rotate-1"
          style={{ fontFamily: "Kalam, cursive" }}
        >
          Your Blessings Mean Everything
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-32 h-0.5 bg-red-400/60 mx-auto transform rotate-1"
        ></motion.div>
        <div className="absolute -top-2 -right-4 transform rotate-12 text-red-400/60 text-sm">
          ✏️
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex justify-center mb-8"
      >
        <div className="bg-white rounded-full p-1 shadow-md border-2 border-gray-200/50 flex flex-wrap justify-center">
          <button
            onClick={() => setActiveTab("gifts")}
            className={`px-3 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 transform ${
              activeTab === "gifts"
                ? "bg-red-500 text-white shadow-md scale-105 rotate-1"
                : "text-red-600 hover:bg-red-50 -rotate-1"
            }`}
            style={{ fontFamily: "Kalam, cursive" }}
          >
            🎁 Gifts
          </button>
          <button
            onClick={() => setActiveTab("wishes")}
            className={`px-3 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 transform ${
              activeTab === "wishes"
                ? "bg-red-500 text-white shadow-md scale-105 rotate-1"
                : "text-red-600 hover:bg-red-50 -rotate-1"
            }`}
            style={{ fontFamily: "Kalam, cursive" }}
          >
            💌 Send
          </button>
          <button
            onClick={() => setActiveTab("viewWishes")}
            className={`px-3 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 transform ${
              activeTab === "viewWishes"
                ? "bg-red-500 text-white shadow-md scale-105 rotate-1"
                : "text-red-600 hover:bg-red-50 -rotate-1"
            }`}
            style={{ fontFamily: "Kalam, cursive" }}
          >
            � View Wishes
          </button>
        </div>
      </motion.div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {activeTab === "gifts" && (
          <motion.div
            key="gifts"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {/* Gift Introduction */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-200/40 rounded-lg p-6 transform rotate-1 shadow-sm relative mb-6"
            >
              <div className="text-center">
                <div className="text-2xl mb-3">💝</div>
                <div
                  className="text-base sm:text-lg text-rose-700 leading-relaxed"
                  style={{ fontFamily: "Kalam, cursive" }}
                >
                  Kehadiran Anda di hari bahagia kami sudah merupakan anugerah terindah.
                  Namun jika Anda ingin memberikan hadiah, kami akan sangat berterima kasih.
                </div>
              </div>
              <div className="absolute -top-1 -right-1 text-rose-400/60 text-xs transform rotate-12">
                🌸
              </div>
            </motion.div>

            {/* Gift Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {giftOptions.map((gift, index) => {
                const colors = getColorClasses(gift.color);
                
                return (
                  <motion.div
                    key={gift.id}
                    initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -2 : 2 }}
                    animate={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? 1 : -1 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                    className="relative"
                  >
                    <div
                      className={`bg-gradient-to-br ${colors.bg} p-4 sm:p-6 rounded-lg border-2 ${colors.border} transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} shadow-md relative`}
                      style={{ borderStyle: "dashed" }}
                    >
                      {/* Gift Type Header */}
                      <div className="text-center mb-4">
                        <div className="text-2xl sm:text-3xl mb-2">{gift.icon}</div>
                        <h3
                          className={`text-lg sm:text-xl font-bold ${colors.accent} transform ${index % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}
                          style={{ fontFamily: "Kalam, cursive" }}
                        >
                          {gift.type}
                        </h3>
                      </div>

                      {/* Gift Details */}
                      <div className="space-y-2 mb-4">
                        {Object.entries(gift.details).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center">
                            <span
                              className={`text-xs sm:text-sm ${colors.text} font-medium capitalize`}
                              style={{ fontFamily: "Kalam, cursive" }}
                            >
                              {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
                            </span>
                            <span
                              className={`text-xs sm:text-sm ${colors.accent} font-bold`}
                              style={{ fontFamily: "Kalam, cursive" }}
                            >
                              {value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Copy Button */}
                      {(gift.details.accountNumber || gift.details.phoneNumber) && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => copyToClipboard(gift.details.accountNumber || gift.details.phoneNumber || "")}
                          className={`w-full bg-gradient-to-r ${colors.button} text-white font-bold py-2 px-4 rounded-full shadow-md transition-all duration-300 text-sm`}
                          style={{ fontFamily: "Kalam, cursive" }}
                        >
                          📋 Copy Details
                        </motion.button>
                      )}

                      {/* Decorative elements */}
                      <div className={`absolute -top-1 -right-1 text-xs transform rotate-12 ${colors.accent}/60`}>
                        ✨
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {activeTab === "wishes" && (
          <motion.div
            key="wishes"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Wishes Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-pink-50 to-rose-100 border-2 border-pink-200/50 rounded-lg p-6 transform rotate-1 shadow-md relative"
              style={{ borderStyle: "dashed" }}
            >
              <div className="text-center mb-6">
                <div className="text-3xl mb-3">💌</div>
                <h3
                  className="text-xl sm:text-2xl font-bold text-pink-600 mb-2 transform -rotate-1"
                  style={{ fontFamily: "Kalam, cursive" }}
                >
                  Send Your Wishes
                </h3>
                <p
                  className="text-sm sm:text-base text-pink-700"
                  style={{ fontFamily: "Kalam, cursive" }}
                >
                  Kirimkan ucapan dan doa terbaik untuk kami
                </p>
              </div>

              <form onSubmit={handleWishSubmit} className="space-y-4">
                {/* Name Input */}
                <div>
                  <label
                    className="block text-sm font-medium text-pink-700 mb-2 transform rotate-1"
                    style={{ fontFamily: "Kalam, cursive" }}
                  >
                    Nama Anda
                  </label>
                  <input
                    type="text"
                    value={wishForm.name}
                    onChange={(e) => setWishForm({ ...wishForm, name: e.target.value })}
                    className="w-full px-4 py-2 border-2 border-pink-200/50 rounded-lg focus:border-pink-400 focus:outline-none bg-white/80 transform -rotate-1"
                    style={{ fontFamily: "Kalam, cursive" }}
                    placeholder="Tulis nama Anda..."
                    required
                  />
                </div>

                {/* Attendance */}
                <div>
                  <label
                    className="block text-sm font-medium text-pink-700 mb-2 transform rotate-1"
                    style={{ fontFamily: "Kalam, cursive" }}
                  >
                    Kehadiran
                  </label>
                  <select
                    value={wishForm.attending}
                    onChange={(e) => setWishForm({ ...wishForm, attending: e.target.value })}
                    className="w-full px-4 py-2 border-2 border-pink-200/50 rounded-lg focus:border-pink-400 focus:outline-none bg-white/80 transform -rotate-1"
                    style={{ fontFamily: "Kalam, cursive" }}
                    required
                  >
                    <option value="">Pilih kehadiran...</option>
                    <option value="hadir">Akan hadir</option>
                    <option value="tidak-hadir">Tidak dapat hadir</option>
                    <option value="belum-pasti">Belum pasti</option>
                  </select>
                </div>

                {/* Message Input */}
                <div>
                  <label
                    className="block text-sm font-medium text-pink-700 mb-2 transform rotate-1"
                    style={{ fontFamily: "Kalam, cursive" }}
                  >
                    Ucapan & Doa
                  </label>
                  <textarea
                    value={wishForm.message}
                    onChange={(e) => setWishForm({ ...wishForm, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2 border-2 border-pink-200/50 rounded-lg focus:border-pink-400 focus:outline-none bg-white/80 transform -rotate-1 resize-none"
                    style={{ fontFamily: "Kalam, cursive" }}
                    placeholder="Tulis ucapan dan doa terbaik untuk kami..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-3 px-6 rounded-full shadow-md transition-all duration-300 transform rotate-1"
                  style={{ fontFamily: "Kalam, cursive" }}
                >
                  💕 Kirim Ucapan
                </motion.button>
              </form>

              {/* Decorative elements */}
              <div className="absolute -top-1 -right-1 text-pink-400/60 text-xs transform rotate-12">
                💖
              </div>
              <div className="absolute -bottom-1 -left-1 text-rose-400/60 text-xs transform -rotate-12">
                🌹
              </div>
            </motion.div>
          </motion.div>
        )}

        {activeTab === "viewWishes" && (
          <motion.div
            key="viewWishes"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            {/* Wishes Header */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200/40 rounded-lg p-6 transform rotate-1 shadow-sm relative mb-6"
            >
              <div className="text-center">
                <div className="text-3xl mb-3">📖</div>
                <h3
                  className="text-xl sm:text-2xl font-bold text-purple-600 mb-2 transform -rotate-1"
                  style={{ fontFamily: "Kalam, cursive" }}
                >
                  Guest Wishes
                </h3>
                <p
                  className="text-sm sm:text-base text-purple-700"
                  style={{ fontFamily: "Kalam, cursive" }}
                >
                  Ucapan indah dari teman-teman dan keluarga
                </p>
              </div>
              <div className="absolute -top-1 -right-1 text-purple-400/60 text-xs transform rotate-12">
                💫
              </div>
            </motion.div>

            {/* Sample Wishes */}
            <div className="space-y-4">
              {sampleWishes.map((wish, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={wish.id}
                    initial={{ opacity: 0, x: isEven ? -30 : 30, rotate: isEven ? -2 : 2 }}
                    animate={{ opacity: 1, x: 0, rotate: isEven ? 1 : -1 }}
                    transition={{
                      delay: 0.3 + index * 0.1,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="relative"
                  >
                    <div
                      className={`bg-gradient-to-br from-white to-gray-50 p-4 sm:p-6 rounded-lg border-2 border-gray-200/50 transform ${isEven ? 'rotate-1' : '-rotate-1'} shadow-md relative`}
                      style={{ borderStyle: "dashed" }}
                    >
                      {/* Wish Header */}
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4
                            className={`text-base sm:text-lg font-bold text-gray-700 transform ${isEven ? '-rotate-1' : 'rotate-1'}`}
                            style={{ fontFamily: "Kalam, cursive" }}
                          >
                            {wish.name}
                          </h4>
                          <div className="flex items-center space-x-2 mt-1">
                            <span
                              className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                wish.attending === "hadir"
                                  ? "bg-green-100 text-green-700"
                                  : wish.attending === "tidak-hadir"
                                  ? "bg-red-100 text-red-700"
                                  : "bg-yellow-100 text-yellow-700"
                              }`}
                              style={{ fontFamily: "Kalam, cursive" }}
                            >
                              {wish.attending === "hadir" ? "✅ Hadir" : 
                               wish.attending === "tidak-hadir" ? "❌ Tidak hadir" : "⏳ Belum pasti"}
                            </span>
                          </div>
                        </div>
                        <span
                          className="text-xs text-gray-500"
                          style={{ fontFamily: "Kalam, cursive" }}
                        >
                          {wish.date}
                        </span>
                      </div>

                      {/* Wish Message */}
                      <div
                        className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 bg-gray-50/50 p-3 rounded-lg transform rotate-1"
                        style={{ fontFamily: "Kalam, cursive" }}
                      >
                        "{wish.message}"
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute -top-1 -right-1 text-xs transform rotate-12 text-purple-400/60">
                        ✨
                      </div>
                      {isEven && (
                        <div className="absolute -top-1 -left-1 text-xs transform -rotate-12 text-pink-400/60">
                          💕
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* More wishes indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center mt-6"
            >
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200/40 rounded-lg p-4 transform -rotate-1 shadow-sm relative">
                <div
                  className="text-sm sm:text-base text-blue-700 font-medium"
                  style={{ fontFamily: "Kalam, cursive" }}
                >
                  💌 Ada {sampleWishes.length} ucapan untuk kalian
                </div>
                <div className="absolute -top-1 -left-1 text-blue-400/60 text-xs transform -rotate-12">
                  🌟
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scattered doodles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
        className="absolute -top-4 left-1/4 text-red-400/60 text-xs transform rotate-45"
      >
        🎁
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute -bottom-4 right-1/4 text-pink-400/60 text-xs transform -rotate-12"
      >
        💌
      </motion.div>
    </>
  );
}

export default GiftsAndWishesContent;
