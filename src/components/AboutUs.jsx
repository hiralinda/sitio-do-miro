import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

// Custom hook for intersection observer
const useInView = (options) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isInView];
};

const AboutUs = ({ id }) => {
  const text = "Seu refúgio em Embu-Guaçu";
  const description =
    "Procurando por um lugar para relaxar e se divertir com a família e os amigos? No Sítio do Miro você encontra tudo isso e muito mais! Nossa completa infraestrutura, com piscina, churrasqueira, campo de futebol e área de jogos, garante momentos inesquecíveis em meio à natureza. A poucos quilômetros de São Paulo, o Sítio do Miro é a opção perfeita para quem busca tranquilidade e aventura.";

  const [ref, isInView] = useInView({ threshold: 0.1 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  return (
    <section
      id={id}
      ref={ref}
      className="relative py-10 overflow-hidden min-h-screen flex items-center bg-[#E5ECE0]">
      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text content */}
          <motion.div className="space-y-6" variants={fadeInUp}>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-green-800 leading-tight"
              variants={fadeInUp}>
              {text}
            </motion.h2>
            <motion.p className="text-lg text-[#6C6C6C]" variants={fadeInUp}>
              {description}
            </motion.p>
            <motion.a
              href="#contact"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#63BB4B] text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors duration-300 items-center space-x-2">
              <span>Agende sua visita</span>
            </motion.a>
          </motion.div>

          {/* Image collage */}
          <motion.div className="grid grid-cols-2 gap-4" variants={fadeInUp}>
            <motion.img
              src="/imgs/about1.jpg"
              alt="Sítio do Miro 1"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              variants={fadeInUp}
            />
            <motion.img
              src="/imgs/about2.jpg"
              alt="Sítio do Miro 2"
              className="w-full h-48 object-cover rounded-lg shadow-lg mt-8"
              variants={fadeInUp}
            />
            <motion.img
              src="/imgs/about3.jpg"
              alt="Sítio do Miro 3"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
              variants={fadeInUp}
            />
            <motion.img
              src="/imgs/about4.jpg"
              alt="Sítio do Miro 4"
              className="w-full h-64 object-cover rounded-lg shadow-lg -mt-8"
              variants={fadeInUp}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
