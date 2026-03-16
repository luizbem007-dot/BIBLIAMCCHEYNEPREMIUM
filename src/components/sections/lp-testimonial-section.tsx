"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Sempre que eu chegava em Levítico ou Números, a leitura ficava pesada e eu desistia. Com esse método, eu leio o Antigo e o Novo Testamento no mesmo dia. Tudo faz sentido agora!",
    name: "João Paulo",
    role: "34 anos",
  },
  {
    id: 2,
    text: "Eu carregava culpa por não liderar minha casa. O plano diário tirou o peso de 'inventar' o que ler. Voltei a fazer o devocional com minha família.",
    name: "Marcos Silva",
    role: "Pai de família",
  },
  {
    id: 3,
    text: "A minha maior desculpa era o tempo. Quando vi que levava só 15 minutinhos para ler as 4 porções, percebi que o problema era falta de organização.",
    name: "Ana Clara",
    role: "Empresária",
  },
  {
    id: 4,
    text: "O Espírito Santo usa a leitura dos Evangelhos para explicar o Antigo Testamento no mesmo dia. É surreal a conexão.",
    name: "Lucas Ferreira",
    role: "Universitário",
  },
  {
    id: 5,
    text: "A pior sensação era fechar o ano sabendo que eu tinha falhado na leitura de novo. Esse método curou a minha inconstância. A leitura é tão fluida que você não quer parar.",
    name: "Sarah Ribeiro",
    role: "Professora",
  },
  {
    id: 6,
    text: "Tenho 15 anos de convertido e nunca tinha lido a Bíblia de capa a capa. Em 1 ano seguindo o plano, eu li tudo e ainda repeti o Novo Testamento.",
    name: "Roberto Almeida",
    role: "52 anos",
  },
];

export function LPTestimonialSection() {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
            A inconstância ficou no passado.
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Veja o que acontece quando cristãos comuns deixam a força bruta de
            lado e passam a usar o método certo:
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="break-inside-avoid bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-xs font-semibold text-blue-700">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
