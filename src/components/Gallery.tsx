import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

// Define types for component props
interface GalleryProps {
  id: string;
}


const Gallery: React.FC<GalleryProps> = ({ id }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const images: string[] = [
    "/sitio-do-miro/imgs/img1.jpg",
    "/sitio-do-miro/imgs/img2.jpg",
    "/sitio-do-miro/imgs/img3.jpg",
    "/sitio-do-miro/imgs/img4.jpg",
    "/sitio-do-miro/imgs/img5.jpg",
    "/sitio-do-miro/imgs/img6.jpg",
  ];

  const openImage = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const prevImage = () => {
    if (currentIndex === null) return;
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const nextImage = () => {
    if (currentIndex === null) return;
    const newIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <div id={id} className="gallery bg-[#E5ECE0] pb-10 px-4 sm:px-6">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-green-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          Galeria
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-w-16 aspect-h-9"
              onClick={() => openImage(image, index)}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}>
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
        {/* More Pictures Button */}
        <div className="flex justify-center mt-8">
          <a
            href="https://www.facebook.com/sitiodomiro/photos_by"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#63BB4B] text-white rounded-full hover:bg-green-700 transition-colors duration-300">
            Acesse mais fotos em nosso Facebook
          </a>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <motion.button
              onClick={prevImage}
              className="absolute left-4 text-green-800 p-2 rounded-full hover:bg-[#F5B341] transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <ChevronLeftIcon className="w-8 h-8" />
            </motion.button>
            <motion.img
              src={selectedImage}
              alt="Selected"
              className="w-auto h-auto max-w-[90%] max-h-[90vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.button
              onClick={nextImage}
              className="absolute right-4 text-green-800 p-2 rounded-full hover:bg-[#F5B341] transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <ChevronRightIcon className="w-8 h-8" />
            </motion.button>
            <motion.button
              onClick={closeImage}
              className="absolute top-4 right-4 text-green-800 p-2 rounded-full hover:bg-[#F5B341] transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              <XMarkIcon className="w-6 h-6" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
