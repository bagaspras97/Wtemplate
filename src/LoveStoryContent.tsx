import { motion } from "framer-motion";
import { useEffect } from "react";

function LoveStoryContent() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const loveStoryMilestones = [
    {
      id: 1,
      date: "2020",
      title: "First Meeting",
      description: "Kami pertama kali bertemu di kampus. Mata bertemu mata, dan sejak itu dunia terasa berbeda.",
      emoji: "👀",
      color: "pink"
    },
    {
      id: 2,
      date: "2021",
      title: "First Date",
      description: "Kencan pertama yang canggung tapi manis. Kopi dingin, obrolan hangat, dan tawa yang tak terhenti.",
      emoji: "☕",
      color: "amber"
    },
    {
      id: 3,
      date: "2022",
      title: "Becoming Official",
      description: "Hari dimana kami memutuskan untuk menjalani perjalanan ini bersama. Janji untuk saling mendukung.",
      emoji: "💕",
      color: "red"
    },
    {
      id: 4,
      date: "2023",
      title: "Growing Together",
      description: "Melewati suka dan duka bersama. Belajar dari kesalahan, tumbuh menjadi versi terbaik diri kami.",
      emoji: "🌱",
      color: "green"
    },
    {
      id: 5,
      date: "2024",
      title: "The Proposal",
      description: "Momen yang paling ditunggu-tunggu. Dengan hati bergetar, kami memutuskan untuk melangkah ke jenjang berikutnya.",
      emoji: "💍",
      color: "purple"
    },
    {
      id: 6,
      date: "2025",
      title: "Forever Begins",
      description: "Dan sekarang, kami siap memulai babak baru dalam hidup. Bersama selamanya, dalam suka dan duka.",
      emoji: "💒",
      color: "blue"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      pink: {
        bg: "from-pink-50 to-rose-100",
        border: "border-pink-200/50",
        text: "text-pink-700",
        accent: "text-pink-600"
      },
      amber: {
        bg: "from-amber-50 to-yellow-100",
        border: "border-amber-200/50",
        text: "text-amber-700",
        accent: "text-amber-600"
      },
      red: {
        bg: "from-red-50 to-pink-100",
        border: "border-red-200/50",
        text: "text-red-700",
        accent: "text-red-600"
      },
      green: {
        bg: "from-green-50 to-emerald-100",
        border: "border-green-200/50",
        text: "text-green-700",
        accent: "text-green-600"
      },
      purple: {
        bg: "from-purple-50 to-violet-100",
        border: "border-purple-200/50",
        text: "text-purple-700",
        accent: "text-purple-600"
      },
      blue: {
        bg: "from-blue-50 to-indigo-100",
        border: "border-blue-200/50",
        text: "text-blue-700",
        accent: "text-blue-600"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.pink;
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
        <div className="text-4xl sm:text-5xl mb-4">💝</div>
        <div
          className="text-2xl sm:text-3xl md:text-4xl text-purple-600 font-bold mb-2 transform -rotate-1"
          style={{
            fontFamily: "Kalam, cursive",
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          Our Love Story
        </div>
        <div
          className="text-sm sm:text-base text-purple-700 mb-4 transform rotate-1"
          style={{ fontFamily: "Kalam, cursive" }}
        >
          Journey of Two Hearts
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-32 h-0.5 bg-purple-400/60 mx-auto transform rotate-1"
        ></motion.div>
        <div className="absolute -top-2 -right-4 transform rotate-12 text-purple-400/60 text-sm">
          ✏️
        </div>
      </motion.div>

      {/* Love Story Timeline */}
      <div className="space-y-6 mb-8">
        {loveStoryMilestones.map((milestone, index) => {
          const colors = getColorClasses(milestone.color);
          const isEven = index % 2 === 0;
          
          return (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, x: isEven ? -30 : 30, rotate: isEven ? -2 : 2 }}
              animate={{ opacity: 1, x: 0, rotate: isEven ? 1 : -1 }}
              transition={{
                delay: 0.2 + index * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              className="relative"
            >
              <div
                className={`bg-gradient-to-br ${colors.bg} p-4 sm:p-6 rounded-lg border-2 ${colors.border} transform ${isEven ? 'rotate-1' : '-rotate-1'} shadow-md relative`}
                style={{ borderStyle: "dashed" }}
              >
                {/* Timeline connector */}
                {index < loveStoryMilestones.length - 1 && (
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-purple-300/50"></div>
                )}

                {/* Date badge */}
                <div className={`inline-block bg-white px-3 py-1 rounded-full text-xs font-bold ${colors.accent} mb-3 transform ${isEven ? '-rotate-1' : 'rotate-1'} shadow-sm`}>
                  {milestone.date}
                </div>

                {/* Content */}
                <div className="flex items-start space-x-3">
                  <div className="text-2xl sm:text-3xl flex-shrink-0">
                    {milestone.emoji}
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-lg sm:text-xl font-bold ${colors.accent} mb-2 transform ${isEven ? 'rotate-1' : '-rotate-1'}`}
                      style={{ fontFamily: "Kalam, cursive" }}
                    >
                      {milestone.title}
                    </h3>
                    <p
                      className={`text-sm sm:text-base ${colors.text} leading-relaxed`}
                      style={{ fontFamily: "Kalam, cursive" }}
                    >
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className={`absolute -top-1 -right-1 text-xs transform rotate-12 ${colors.accent}/60`}>
                  ✨
                </div>
                {isEven && (
                  <div className="absolute -top-1 -left-1 text-xs transform -rotate-12 text-yellow-400/60">
                    💫
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Love Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center mb-8"
      >
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200/40 rounded-lg p-6 transform rotate-1 shadow-sm relative">
          <div className="text-2xl mb-3">💖</div>
          <div
            className="text-base sm:text-lg text-purple-700 italic leading-relaxed mb-4"
            style={{ fontFamily: "Kalam, cursive" }}
          >
            "Cinta sejati bukan tentang menemukan seseorang yang sempurna,<br />
            tetapi tentang melihat kesempurnaan dalam ketidaksempurnaan seseorang"
          </div>
          <div
            className="text-sm text-purple-600 font-bold"
            style={{ fontFamily: "Kalam, cursive" }}
          >
            - Bagas & Zulia -
          </div>
          <div className="absolute -top-1 -right-1 text-purple-400/60 text-xs transform rotate-12">
            💕
          </div>
        </div>
      </motion.div>

      {/* Wedding Countdown */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="text-center"
      >
        <div className="bg-gradient-to-r from-rose-100 to-pink-100 border-2 border-rose-200/50 rounded-lg p-4 transform -rotate-1 shadow-md relative">
          <div className="text-lg mb-2">💒</div>
          <div
            className="text-sm sm:text-base text-rose-800 font-bold mb-1"
            style={{ fontFamily: "Kalam, cursive" }}
          >
            Dan cerita cinta kami berlanjut...
          </div>
          <div
            className="text-lg sm:text-xl text-rose-700 font-bold"
            style={{ fontFamily: "Kalam, cursive" }}
          >
            24 Desember 2025
          </div>
          <div className="absolute -top-1 -left-1 text-rose-400/60 text-xs transform -rotate-12">
            💐
          </div>
        </div>
      </motion.div>

      {/* Scattered doodles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute -top-4 left-1/4 text-purple-400/60 text-xs transform rotate-45"
      >
        💝
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute -bottom-4 right-1/4 text-pink-400/60 text-xs transform -rotate-12"
      >
        💖
      </motion.div>
    </>
  );
}

export default LoveStoryContent;
