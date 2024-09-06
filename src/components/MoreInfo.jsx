import React from "react";
import { motion } from "framer-motion";
import { Box, Briefcase, Compass } from "lucide-react";

const MoreInfo = ({ id }) => {
  const information = [
    {
      title: "O que oferecemos",
      icon: Box,
      details: [
        {
          topic: "Localização privilegiada",
          description:
            "Situado em Embu-Guaçu, o Sítio do Miro proporciona fácil acesso para você e seus convidados, além de estar próximo a diversos hotéis e restaurantes.",
        },
        {
          topic: "Espaços versáteis",
          description:
            "Contamos com diversos espaços ao ar livre e cobertos, perfeitos para a cerimônia, coquetel e festa. Você poderá personalizar cada ambiente de acordo com o seu estilo e tema.",
        },
        {
          topic: "Infraestrutura completa",
          description:
            "Nossa estrutura inclui: Piscina, churrasqueira, campo de futebol, mesas de jogos, cozinha industrial, estacionamento amplo e banheiros",
        },
      ],
    },
    {
      title: "Serviços adicionais disponíveis",
      icon: Briefcase,
      details: [
        {
          topic: "Organização completa do evento",
          description:
            "Nossa equipe especializada cuida de todos os detalhes da sua festa, desde a decoração até a escolha do cardápio, garantindo que tudo saia perfeito.",
        },
        {
          topic: "Personalização",
          description:
            "Trabalhamos com você para criar um evento único e exclusivo, que reflita a sua personalidade e o seu estilo.",
        },
        {
          topic: "Parcerias",
          description:
            "Contamos com uma rede de parceiros confiáveis, como decoradores, fotógrafos, cinegrafistas, bandas e DJs, para que você tenha tudo o que precisa para o seu evento.",
        },
      ],
    },
    {
      title: "Por que escolher o Sítio do Miro?",
      icon: Compass,
      details: [
        {
          topic: "Tranquilidade e contato com a natureza",
          description:
            "Um ambiente relaxante e acolhedor, perfeito para celebrar um momento tão especial.",
        },
        {
          topic: "Conforto e praticidade",
          description:
            "Toda a infraestrutura necessária para que você e seus convidados aproveitem ao máximo",
        },
        {
          topic: "Equipe profissional",
          description:
            "Uma equipe dedicada e experiente que cuida de todos os detalhes.",
        },
      ],
    },
  ];

  return (
    <div id={id} className="more-info bg-[#E5ECE0] py-10">
      <div className="max-w-7xl mx-auto md:px-6 sm:px-6 ">
        {information.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="mb-10">
            <div className="flex items-center mb-8">
              <item.icon className="w-10 h-10 mr-4 text-[#63BB4B]" />
              <h2 className="text-3xl font-bold text-green-800">
                {item.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {item.details.map((detail, detailIndex) => (
                <motion.div
                  key={detailIndex}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-2xl">
                  <h3 className="text-xl font-bold mb-4 text-[#63BB4B]">
                    {detail.topic}
                  </h3>
                  <p className="text-gray-700">{detail.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MoreInfo;
