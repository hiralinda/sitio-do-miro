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
    // ... (other FAQ items remain the same)
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