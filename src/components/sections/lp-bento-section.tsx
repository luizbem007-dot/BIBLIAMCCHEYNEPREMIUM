"use client";

import { motion } from "motion/react";
import { Zap, Focus, Map, Clock } from "lucide-react";

const benefits = [
  {
    id: 1,
    icon: <Zap className="size-6 text-blue-600" />,
    title: "Leitura Dinâmica e Sem Travas",
    text: "Em vez de passar semanas preso em livros densos, o método intercala 4 gêneros diferentes por dia. A leitura fica leve e te prende do início ao fim.",
  },
  {
    id: 2,
    icon: <Focus className="size-6 text-blue-600" />,
    title: "Foco Total, Zero Distrações",
    text: "Sem notificações de celular apitando e sem notas intermináveis. É um texto limpo, feito exclusivamente para o seu momento com Deus.",
  },
  {
    id: 3,
    icon: <Map className="size-6 text-blue-600" />,
    title: 'O Fim do "O Que Ler Hoje?"',
    text: "O mapa já está pronto. Você apenas abre na data do dia, segue as 4 porções exatas e constrói um hábito impossível de abandonar.",
  },
  {
    id: 4,
    icon: <Clock className="size-6 text-blue-600" />,
    title: "Apenas 15 Minutos Diários",
    text: "Esqueça a força bruta. É um método leve, feito para a rotina corrida, entregando a porção perfeita de alimento para a sua mente cansada.",
  },
];

export function LPBentoSection() {
  return (
    <section id="beneficios" className="w-full py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
            O Segredo Por Trás do Método
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Há mais de 180 anos, homens de Deus usam este método para vencer a
            inconstância e receber todos os dias uma porção viva da Palavra e uma
            verdadeira transformação na sua vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-lg hover:shadow-gray-100/80 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {benefit.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
