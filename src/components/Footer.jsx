import React from "react";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaFacebookF, href: "https://www.facebook.com/sitiodomiro" },
    { icon: FaInstagram, href: "https://www.instagram.com/sitiodomiro" },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/1234567890?text=Olá! Gostaria de saber mais sobre o Sitio do Miro.",
    },
  ];

  return (
    <footer className="bg-[#E5ECE0] text-[#6C6C6C] py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between ">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-green-800">Sítio do Miro</h3>
            <p className="text-sm">
              Rua Belchior de Moraes, 1000
              <br />
              Jardim São Paulo, Embu-Guaçu - SP
            </p>
            <p className="text-sm">
              Telefone:{" "}
              <a
                href="tel:+11234567890"
                className="hover:text-[#F5B341] transition-colors duration-300">
                (123) 456-7890
              </a>
            </p>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-green-800">
              Redes sociais
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-[#63BB4B] text-[#E5ECE0] p-2 rounded-full hover:bg-[#F5B341] transition-colors duration-300">
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-[#6C6C6C] opacity-30"></div>

        {/* Copyright */}
        <div className="text-center text-sm">
          <p>
            &copy; {currentYear} Sítio do Miro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
