import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggle }) => {
  return (
    <motion.div
      className="border-b border-[#6C6C6C] border-opacity-20 mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}>
      <button
        onClick={toggle}
        className="w-full flex justify-between items-center p-4 focus:outline-none bg-[#E5ECE0] rounded-t-lg hover:bg-[#F5B341] transition-colors duration-300">
        <span className="text-lg font-medium text-[#6C6C6C]">{question}</span>
        {isOpen ? (
          <ChevronUpIcon className="w-6 h-6 text-[#63BB4B]" />
        ) : (
          <ChevronDownIcon className="w-6 h-6 text-[#63BB4B]" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-[#E5ECE0] rounded-b-lg">
            <div className="p-4 text-[#6C6C6C]">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface FAQProps {
  id: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC<FAQProps> = ({ id }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Quais tipos de eventos podem ser realizados no Sítio do Miro?",
      answer:
        "O Sítio do Miro é ideal para diversos tipos de eventos, como casamentos, aniversários, festas corporativas, eventos esportivos, confraternizações e muito mais.",
    },
    {
      question: "Qual é a capacidade do Sítio do Miro?",
      answer:
        "A capacidade do Sítio do Miro varia de acordo com o tipo de evento e a configuração do espaço. Podemos acomodar eventos de diferentes tamanhos, desde pequenas reuniões até grandes festas.",
    },
    {
      question: "O Sítio do Miro oferece serviços de alimentação e bebidas?",
      answer:
        "Sim, oferecemos serviços de buffet e bar, com opções personalizadas para atender às suas necessidades e preferências.",
    },
    {
      question: "O Sítio do Miro possui estacionamento próprio?",
      answer:
        "Sim, contamos com um amplo estacionamento para acomodar os veículos dos seus convidados.",
    },
    {
      question: "O Sítio do Miro é acessível para pessoas com deficiência?",
      answer:
        "Sim, o Sítio do Miro possui instalações acessíveis para pessoas com deficiência.",
    },
    {
      question:
        "O Sítio do Miro possui áreas externas para eventos ao ar livre?",
      answer:
        "Sim, oferecemos áreas externas como jardins, terraços e áreas verdes para eventos ao ar livre.",
    },
    {
      question: "O Sítio do Miro possui equipamentos de som e iluminação?",
      answer:
        "Sim, podemos fornecer equipamentos de som e iluminação para o seu evento, de acordo com suas necessidades.",
    },
    {
      question: "Como posso reservar o Sítio do Miro para um evento?",
      answer:
        'Para reservar o Sítio do Miro, entre em contato conosco através do <a href="tel:+5511999999999">número de telefone</a> ou <a href="mailto:email@exemplo.com">e-mail</a>. Podemos agendar uma visita para conhecer o espaço e discutir os detalhes do seu evento.',
    },
    {
      question: "O Sítio do Miro oferece serviços de decoração?",
      answer:
        "Sim, podemos oferecer serviços de decoração para personalizar o espaço e criar o ambiente ideal para o seu evento.",
    },
    {
      question: "O Sítio do Miro possui políticas de cancelamento e reembolso?",
      answer:
        "Sim, contamos com políticas de cancelamento e reembolso claras. Consulte-nos para obter mais detalhes.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div id={id} className="faq bg-[#E5ECE0] py-8 px-4">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-green-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}>
          Perguntas frequentes
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className=" mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggle={() => toggleFAQ(index)}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;