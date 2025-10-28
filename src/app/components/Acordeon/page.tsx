"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = [
    {
      title: "Qual a diferença entre a Absolute e uma contabilidade tradicional?",
      content:
        "Na Absolute, unimos consultoria e tecnologia para ir além da entrega de guias. Transformamos dados em informações estratégicas que ajudam o empresário a tomar decisões seguras e enxergar resultados reais.",
    },
    {
      title: "Como sei qual serviço minha empresa realmente precisa?",
      content:
        "Tailwind é uma biblioteca de utilitários CSS que torna a criação de layouts rápida, responsiva e fácil de manter.",
    },
    {
      title: "A Absolute atende empresas de qualquer porte e segmento?",
      content:
        "Sim! Next.js pode consumir APIs do WordPress (via REST ou GraphQL) e renderizar os dados dinamicamente.",
    },
  ];

  return (
    <div className="w-full max-w-[650px]">
      {items.map((item, index) => (
        <div
          key={index}
          className="max-w-[650px] min-w-[650px] border border-gray-200 rounded-lg mb-2 overflow-hidden"
        >
          <button
            onClick={() =>
              setActiveIndex(activeIndex === index ? null : index)
            }
            className="w-full flex justify-between items-center px-4 py-3 font-montserrat text-[16px] font-bold leading-6 text-[var(--primary-four)] hover:bg-gray-50"
          >
            {item.title}
            <motion.span
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="text-[var(--primary-four)]" />
            </motion.span>
          </button>

          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="px-5 pb-4 font-montserrat text-[16px] font-normal leading-6 text-[var(--color-black)]"
              >
                {item.content}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
