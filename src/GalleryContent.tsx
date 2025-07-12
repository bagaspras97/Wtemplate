import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import usImage from "./assets/us.jpeg";
import image16 from "./assets/16.webp";
import image6 from "./assets/6.jpeg";
import image7 from "./assets/7.jpeg";
import image8 from "./assets/8.jpeg";
import image9 from "./assets/9.jpeg";
import image10 from "./assets/10.jpeg";
import image11 from "./assets/11.jpeg";
import image12 from "./assets/12.jpeg";
import image13 from "./assets/13.jpeg";
import image14 from "./assets/14.jpeg";
import image15 from "./assets/15.jpeg";

interface GalleryContentProps {
  onImageViewerChange?: (isOpen: boolean) => void;
}

// Sample gallery images - you can replace with actual photo paths
const galleryImages = [
  {
    id: 1,
    src: usImage,
    alt: "Our sweet moment",
    category: "couple",
    title: "Sweet Memories"
  },
  {
    id: 2,
    src: image16,
    alt: "Romantic moment",
    category: "couple",
    title: "Love Story"
  },
  {
    id: 3,
    src: image6,
    alt: "Together forever",
    category: "couple", 
    title: "Forever Together"
  },
  {
    id: 4,
    src: image7,
    alt: "Engagement photos",
    category: "engagement",
    title: "Engagement Day"
  },
  {
    id: 5,
    src: image8,
    alt: "Pre-wedding shoot",
    category: "prewedding",
    title: "Pre-Wedding Session"
  },
  {
    id: 6,
    src: image9,
    alt: "Family photos",
    category: "family",
    title: "With Family"
  },
  {
    id: 7,
    src: image10,
    alt: "With friends",
    category: "friends",
    title: "Best Friends"
  },
  {
    id: 8,
    src: image11,
    alt: "Our journey",
    category: "journey",
    title: "Our Journey"
  },
  {
    id: 9,
    src: image12,
    alt: "Romantic engagement",
    category: "engagement",
    title: "Romantic Engagement"
  },
  {
    id: 10,
    src: image13,
    alt: "Pre-wedding bliss",
    category: "prewedding",
    title: "Pre-Wedding Bliss"
  },
  {
    id: 11,
    src: image14,
    alt: "Love celebration",
    category: "couple",
    title: "Love Celebration"
  },
  {
    id: 12,
    src: image15,
    alt: "Family gathering",
    category: "family",
    title: "Family Gathering"
  }
];


const categories = [
  { id: "all", name: "All Photos", emoji: "📷" },
  { id: "couple", name: "Couple", emoji: "💕" },
  { id: "engagement", name: "Engagement", emoji: "💍" },
  { id: "prewedding", name: "Pre-Wedding", emoji: "🌸" },
  { id: "family", name: "Family", emoji: "👨‍👩‍👧‍👦" },
  { id: "friends", name: "Friends", emoji: "👥" },
  { id: "journey", name: "Journey", emoji: "✈️" }
];

function GalleryContent({ onImageViewerChange }: GalleryContentProps = {}) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Notify parent when image viewer state changes
  useEffect(() => {
    if (onImageViewerChange) {
      onImageViewerChange(selectedImage !== null);
    }
  }, [selectedImage, onImageViewerChange]);

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openImageViewer = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeImageViewer = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[nextIndex].id);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
      const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
      setSelectedImage(filteredImages[prevIndex].id);
    }
  };

  const selectedImageData = galleryImages.find(img => img.id === selectedImage);

  return (
    <>
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-center mb-8 relative"
      >
        <div className="text-4xl sm:text-5xl mb-4">📸</div>
        <div
          className="text-2xl sm:text-3xl md:text-4xl text-amber-600 font-bold mb-2 transform -rotate-1"
          style={{
            fontFamily: "Kalam, cursive",
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          Our Gallery
        </div>
        <div
          className="text-sm sm:text-base text-amber-700 mb-4 transform rotate-1"
          style={{ fontFamily: "Kalam, cursive" }}
        >
          Capturing Beautiful Moments
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-32 h-0.5 bg-amber-400/60 mx-auto transform rotate-1"
        ></motion.div>
        <div className="absolute -top-2 -right-4 transform rotate-12 text-amber-400/60 text-sm">
          ✏️
        </div>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-3 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 transform ${
                selectedCategory === category.id
                  ? "bg-amber-500 text-white shadow-md scale-105 rotate-1"
                  : "bg-amber-100 text-amber-700 hover:bg-amber-200 -rotate-1"
              }`}
              style={{ fontFamily: "Kalam, cursive" }}
            >
              <span className="mr-1">{category.emoji}</span>
              {category.name}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Photo Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8"
      >
        <AnimatePresence>
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.4,
                layout: { duration: 0.3 }
              }}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1 }}
              className="cursor-pointer"
              onClick={() => openImageViewer(image.id)}
            >
              <div className="bg-white p-2 rounded-lg shadow-md transform hover:shadow-lg transition-all duration-300 relative">
                <div className="aspect-square overflow-hidden rounded-md">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/300x300/FFA500/FFFFFF?text=${encodeURIComponent(image.title)}`;
                    }}
                  />
                </div>
                
                {/* Polaroid label */}
                <div
                  className="text-center mt-2 text-xs text-amber-700 font-medium"
                  style={{ fontFamily: "Kalam, cursive" }}
                >
                  {image.title}
                </div>
                
                {/* Corner tape */}
                <div className="absolute -top-1 -left-1 w-4 h-4 bg-yellow-200/80 transform rotate-45"></div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-200/80 transform -rotate-45"></div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-amber-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <div className="text-white text-2xl">🔍</div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Image Viewer Modal */}
      <AnimatePresence>
        {selectedImage && selectedImageData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeImageViewer}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeImageViewer}
                className="absolute -top-2 -right-2 z-10 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
              >
                ✕
              </button>

              {/* Navigation buttons */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-white transition-colors"
                  >
                    ‹
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-white transition-colors"
                  >
                    ›
                  </button>
                </>
              )}

              {/* Image */}
              <div className="bg-white p-4 rounded-lg shadow-2xl">
                <img
                  src={selectedImageData.src}
                  alt={selectedImageData.alt}
                  className="max-w-full max-h-[70vh] object-contain mx-auto rounded"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/800x600/FFA500/FFFFFF?text=${encodeURIComponent(selectedImageData.title)}`;
                  }}
                />
                
                {/* Image title */}
                <div
                  className="text-center mt-4 text-lg text-amber-700 font-bold"
                  style={{ fontFamily: "Kalam, cursive" }}
                >
                  {selectedImageData.title}
                </div>
              </div>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {filteredImages.findIndex(img => img.id === selectedImage) + 1} / {filteredImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
        className="absolute -top-4 left-1/4 text-amber-400/60 text-xs transform rotate-45"
      >
        📷
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute -bottom-4 right-1/4 text-amber-400/60 text-xs transform -rotate-12"
      >
        🌟
      </motion.div>
    </>
  );
}

export default GalleryContent;
