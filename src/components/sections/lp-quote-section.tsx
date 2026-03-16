"use client";

import { motion } from "motion/react";

export function LPQuoteSection() {
  return (
    <section className="w-full py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10 md:p-14">
          <svg
            className="size-10 text-blue-200 mx-auto mb-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          <blockquote className="text-lg md:text-xl lg:text-2xl text-gray-700 italic leading-relaxed mb-8 font-light">
            &ldquo;Eu não conheço nenhum outro método que seja tão bem-sucedido
            em levar a pessoa a ler toda a Bíblia e a ter uma visão panorâmica
            dela. Usei o método de McCheyne por mais de 50 anos e, para mim, ele
            é o melhor que existe.&rdquo;
          </blockquote>

          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <span className="text-xl font-semibold text-gray-600">DM</span>
            </div>
            <div>
              <p className="font-semibold text-gray-900">
                D. Martyn Lloyd-Jones
              </p>
              <p className="text-sm text-gray-500">
                Teólogo e um dos maiores pregadores do século XX
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
