import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface ContactProps {
  id?: string;
}

interface SocialLink {
  icon: IconType;
  href: string;
  color: string;
}

const Contact: React.FC<ContactProps> = ({ id = "contact" }) => {
  const socialLinks: SocialLink[] = [
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/sitiodomiro",
      color: "#63BB4B",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/sitiodomiro/",
      color: "#63BB4B",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/1234567890?text=Olá! Gostaria de saber mais sobre o Sitio do Miro.",
      color: "#63BB4B",
    },
  ];

  return (
    <section id={id} className="contact">
      <div className="bg-[#E5ECE0] py-10 px-4">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center text-green-800 mb-12">
            Contato e Localização
          </motion.h2>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Google Map Section */}
            <motion.div
              className="w-full md:w-1/2 h-96 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.2514798883144!2d-46.83145122460691!3d-23.845202178605806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfb52a6d382553%3A0xff04a8d6a670800a!2sR.%20Belchior%20de%20Moraes%2C%201000%20-%20Jardim%20Sao%20Paulo%2C%20Embu-Gua%C3%A7u%20-%20SP%2C%2006900-000!5e0!3m2!1sen!2sbr!4v1725374719667!5m2!1sen!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Google Maps"></iframe>
            </motion.div>
            {/* Contact Information and Social Media Icons Section */}
            <motion.div
              className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}>
              <p className="text-[#6C6C6C] mb-6 text-center">
                Rua Belchior de Moraes, 1000 - Jardim São Paulo, Embu-Guaçu -
                SP, 06900-000
                <br />
                <br />
                Email: sitiodomiro@gmail.com
                <br />
                <br />
                Telefone: (123) 456-7890
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map(({ icon: Icon, href, color }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-[${color}] text-white p-3 rounded-full hover:bg-[#F5B341] transition-colors duration-300`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;