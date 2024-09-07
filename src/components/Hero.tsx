import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Hero = () => {
  const text = "Bem-vindo ao Sítio do Miro";
  const subText = "Descubra a magia da natureza";
  const buttonText = "Saiba Mais";

  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  // Handle scroll position for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({
      y: scrollY * 0.3, // Parallax effect multiplier
    });
  }, [scrollY, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="relative h-screen bg-cover bg-center overflow-hidden flex items-center justify-center px-4">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('./imgs/hero.jpg')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10" />

      {/* Parallax Content */}
      <motion.div
        className="relative z-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }} // Parallax effect
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          variants={itemVariants}>
          {text}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-200 mb-8"
          variants={itemVariants}>
          {subText}
        </motion.p>
        <motion.a
          href="#more-info"
          className="inline-block bg-yellow-400 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-yellow-300 hover:scale-105"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          {buttonText}
        </motion.a>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-green-800 to-transparent opacity-30 z-10" />
      <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-20 z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-400 rounded-full blur-3xl opacity-20 z-10" />
    </section>
  );
};

export default Hero;
