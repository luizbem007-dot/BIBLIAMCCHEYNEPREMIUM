"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen } from "lucide-react";

const tabs = [
  {
    id: 1,
    label: "Gênesis 1: A Criação",
    text: "O seu devocional começa nas fundações da fé. Você contempla a criação do mundo e entende o princípio do plano perfeito de Deus.",
    emoji: "🌍",
  },
  {
    id: 2,
    label: "Mateus 1: O Evangelho",
    text: "No mesmo dia, você avança para o Novo Testamento e contempla a nova criação em Cristo. A Palavra se conecta na sua mente.",
    emoji: "✝️",
  },
  {
    id: 3,
    label: "Esdras 1: A Restauração",
    text: "A terceira porção traz o retorno do povo cativo. Uma leitura viva, direto da Palavra, que renova a esperança em dias difíceis.",
    emoji: "🕊️",
  },
  {
    id: 4,
    label: "Atos 1: A Igreja",
    text: "Você fecha a leitura vendo o poder do Espírito Santo no nascimento da Igreja, trazendo o avivamento para dentro do seu quarto.",
    emoji: "🔥",
  },
];

export function LPTabsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
            O Método da Sincronização Testamentária
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Veja na prática como o Espírito Santo conecta os textos e Deus
            ministra diretamente ao seu coração todos os dias:{" "}
            <strong className="text-gray-700">EXEMPLO DO DIA 1</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Tabs Left */}
          <div className="flex flex-col gap-3">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`relative text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activeTab === index
                    ? "bg-white border-blue-200 shadow-md shadow-blue-100/50"
                    : "bg-white/50 border-gray-100 hover:bg-white hover:border-gray-200"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl mt-0.5">{tab.emoji}</span>
                  <div>
                    <p
                      className={`font-semibold text-sm mb-1 ${
                        activeTab === index
                          ? "text-blue-600"
                          : "text-gray-700"
                      }`}
                    >
                      {tab.label}
                    </p>
                    <AnimatePresence mode="wait">
                      {activeTab === index && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-sm text-gray-500 leading-relaxed"
                        >
                          {tab.text}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                {activeTab === index && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute left-0 top-3 bottom-3 w-1 bg-blue-600 rounded-full"
                     transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Visual Right */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col items-center justify-center min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <span className="text-6xl mb-6 block">
                  {tabs[activeTab].emoji}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {tabs[activeTab].label}
                </h3>
                <p className="text-gray-500 leading-relaxed max-w-sm mx-auto">
                  {tabs[activeTab].text}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm text-blue-600 font-medium">
                  <BookOpen className="size-4" />
                  Porção {activeTab + 1} de 4
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
