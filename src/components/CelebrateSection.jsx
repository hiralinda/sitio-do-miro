import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const CelebrationItem = ({ src, title, description, delay, onClick }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="rounded-lg overflow-hidden shadow-lg bg-[#E5ECE0] cursor-pointer group"
      onClick={onClick}>
      <div className="relative overflow-hidden">
        <img
          src={src}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-[#63BB4B] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-[#6C6C6C] group-hover:text-[#63BB4B] transition-colors duration-300">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const CelebrateSection = ({ id }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const celebrations = [
    {
      src: "https://images.unsplash.com/photo-1481066717861-4775e000c88a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Casamentos",
      description:
        'Diga "sim" em um lugar mágico! O Sítio do Miro oferece um cenário natural exuberante para celebrar o seu amor. Com uma infraestrutura completa e personalizada, seu casamento será inesquecível. Entre em contato e realize o sonho de um casamento perfeito.',
    },
    {
      src: "https://images.unsplash.com/photo-1608790672275-309c02d888ff?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Aniversários",
      description:
        "Seu aniversário, sua festa! No Sítio do Miro, você tem um espaço versátil para personalizar a sua comemoração. Do churrasco à piscina, crie momentos únicos e divertidos com quem você ama.",
    },
    {
      src: "https://images.unsplash.com/photo-1634501087922-c01c76ed66d6?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Eventos esportivos",
      description:
        "Seu evento esportivo, nosso campo! O Sítio do Miro oferece um espaço amplo e equipado para a prática de diversas modalidades esportivas. Alugue agora e garanta um dia de muito esporte e diversão!",
    },
    {
      src: "https://images.unsplash.com/photo-1472739841375-d0ea9f0cb6a6?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "E muito mais!",
      description:
        "Seu evento, sua regra! Celebre qualquer ocasião no Sítio do Miro.",
    },
  ];

  return (
    <motion.section
      id={id}
      ref={ref}
      className="celebrate py-10 px-4 sm:px-6 bg-[#E5ECE0]">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-12 text-green-800">
          Nós celebramos
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {celebrations.map((item, index) => (
            <CelebrationItem
              key={index}
              src={item.src}
              title={item.title}
              delay={index * 0.2 + 0.4}
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>
      </div>

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="bg-[#E5ECE0]">
          <DialogHeader>
            <DialogTitle className="text-[#6C6C6C] text-center">
              {selectedItem?.title}
            </DialogTitle>
            <DialogDescription className="text-[#6C6C6C]">
              {selectedItem?.description}
            </DialogDescription>
          </DialogHeader>
          <img
            src={selectedItem?.src}
            alt={selectedItem?.title}
            className="w-full h-64 object-cover rounded-md"
          />
        </DialogContent>
      </Dialog>
    </motion.section>
  );
};

export default CelebrateSection;
