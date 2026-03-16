"use client";

export function LPFooterSection() {
  return (
    <footer className="w-full py-10 px-6 border-t border-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Bíblia Devocional McCheyne. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}
