"use client";

import { motion } from "motion/react";
import { Play } from "lucide-react";
import Link from "next/link";
import { VSLVideoPlayer } from "@/components/ui/vsl-video-player";

export function LPHeroSection() {
  return (
    <section id="hero" className="w-full relative">
      <div className="relative flex flex-col items-center w-full px-6">
        <div className="relative z-10 pt-28 pb-8 max-w-3xl mx-auto w-full flex flex-col gap-8 items-center justify-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border border-amber-200 bg-amber-50 text-amber-800 rounded-full text-sm h-8 px-4 flex items-center gap-2 font-medium"
          >
            🔥 O Método Usado por Charles Spurgeon
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center justify-center gap-5"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-semibold tracking-tight text-balance text-center text-gray-900 leading-tight">
              Leia a Bíblia Inteira em 1 Ano, Investindo Apenas 15 Minutos por
              Dia
            </h1>
            <p className="text-base md:text-lg text-center text-gray-500 font-normal text-balance leading-relaxed max-w-2xl">
              O método histórico que conecta o Antigo e o Novo Testamento,
              fazendo você experimentar diariamente uma verdadeira transformação
              em sua vida.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 flex-wrap justify-center"
          >
            <Link
              href="#oferta"
              className="bg-blue-600 h-11 flex items-center justify-center text-sm font-semibold tracking-wide rounded-full text-white px-7 shadow-lg shadow-blue-600/25 hover:bg-blue-700 transition-all ease-out active:scale-95"
            >
              QUERO AGORA
            </Link>
            <Link
              href="#video"
              className="h-11 flex items-center justify-center gap-2 px-6 text-sm font-medium text-gray-700 rounded-full transition-all ease-out active:scale-95 bg-white border border-gray-200 hover:bg-gray-50 shadow-sm"
            >
              <Play className="size-4 fill-gray-700" />
              Assistir ao Vídeo
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Video Section */}
      <div id="video" className="relative px-6 mt-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative size-full shadow-2xl rounded-3xl overflow-hidden max-w-4xl mx-auto"
        >
          <VSLVideoPlayer src="/Pra Rê - Devocional-cópia.webm" />
        </motion.div>
      </div>
    </section>
  );
}
