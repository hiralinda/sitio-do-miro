import { useState } from "react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const navItems = [
    { label: "Sobre nós", href: "#about" },
    { label: "O que celebramos", href: "#celebrate" },
    { label: "Detalhes", href: "#more-info" },
    { label: "Galeria", href: "#gallery" },
    { label: "Contato", href: "#contact" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#E5ECE0] p-2 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <img src="./dist/logo.png" alt="Logo" className="w-50 h-10"></img>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#6C6C6C] hover:text-[#63BB4B] focus:outline-none">
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-y-4 md:space-y-0 md:space-x-4 absolute md:relative top-full md:top-0 left-0 w-full md:w-auto bg-[#E5ECE0] md:bg-transparent p-4 md:p-0`}>
          {navItems.map((item, index) => (
            <li key={index} className="text-[#6C6C6C] hover:text-[#63BB4B]">
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
