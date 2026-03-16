"use client";

import { motion } from "motion/react";
import { Check, ShieldCheck } from "lucide-react";
import Link from "next/link";

const deliverables = [
  "Plano histórico de 365 dias integrado",
  "Método da Sincronização Testamentária (4 leituras)",
  "Sem notas de rodapé (foco na Palavra)",
  "Tradução ACF fiel aos originais",
];

export function LPOfferSection() {
  return (
    <section id="oferta" className="w-full py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
            A Sua Transformação Começa Hoje.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Pricing Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl border border-gray-100 shadow-lg shadow-gray-100/80 p-8 md:p-10"
          >
            <p className="text-sm font-medium text-blue-600 mb-2">
              Bíblia Devocional McCheyne
            </p>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-4xl md:text-5xl font-bold text-gray-900">
                R$ 99
              </span>
              <span className="text-lg text-gray-400">,00</span>
            </div>

            <ul className="space-y-4 mb-8">
              {deliverables.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="size-3 text-green-600" strokeWidth={3} />
                  </div>
                  <span className="text-sm text-gray-600">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="#"
              className="w-full bg-blue-600 h-12 flex items-center justify-center text-sm font-bold tracking-wide rounded-xl text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 transition-all ease-out active:scale-[0.98]"
            >
              SIM, QUERO GARANTIR POR R$ 99
            </Link>
          </motion.div>

          {/* Guarantee Shield */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10 flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
              <ShieldCheck className="size-10 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Risco Zero: Garantia Incondicional de 30 Dias
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-md">
              Siga o plano por 30 dias. Se a sua compreensão da Bíblia não ficar
              mais clara e a sua disciplina não mudar, nós devolvemos 100% do
              seu dinheiro. Sem burocracia.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
