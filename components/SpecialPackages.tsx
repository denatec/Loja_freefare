"use client";

import { useEffect, useRef, useState } from "react";

const packages = [
  {
    name: "ECONÔMICO",
    diamonds: "47",
    oldPrice: "500 Kz",
    price: "475 Kz",
  },
  {
    name: "SEMANAL",
    diamonds: "340",
    oldPrice: "2.500 Kz",
    price: "2.375 Kz",
  },
  {
    name: "MENSAL",
    diamonds: "1.800",
    oldPrice: "11.000 Kz",
    price: "10.450 Kz",
  },
  {
    name: "PASSE DE NÍVEL",
    diamonds: "1.210",
    oldPrice: "5.500 Kz",
    price: "5.225 Kz",
  },
  {
    name: "BOOYAH PASS",
    diamonds: "1.210",
    oldPrice: "1.500 Kz",
    price: "1.425 Kz",
  },
];

export function SpecialPackages() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="pacotes"
      className="
        relative
        scroll-mt-24
        overflow-hidden
        bg-transparent
        px-4
        py-20
        sm:px-6
        lg:px-8
      "
    >
      <div className="relative z-10 mx-auto max-w-[1500px]">

        {/* ========================= */}
        {/* TÍTULO */}
        {/* ========================= */}

        <div className="mb-12 text-center">
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-purple-500/30
              bg-purple-500/5
              px-5
              py-2
              text-sm
              font-bold
              text-purple-400
              backdrop-blur-sm
            "
          >
            ⭐ Assinaturas & Passes
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              text-white
              sm:text-5xl
            "
          >
            Pacotes{" "}
            <span
              className="
                bg-gradient-to-r
                from-purple-400
                via-yellow-400
                to-green-400
                bg-clip-text
                text-transparent
              "
            >
              Especiais
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              text-slate-400
              sm:text-base
            "
          >
            Assinaturas semanais, mensais e passes exclusivos
            para dominar o Free Fire!
          </p>
        </div>

        {/* ========================= */}
        {/* PACOTES */}
        {/* ========================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-5
          "
        >
          {packages.map((item, index) => (
            <article
              key={item.name}
              style={{
                transitionDelay: isVisible
                  ? `${index * 120}ms`
                  : "0ms",
              }}
              className={`
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-gradient-to-br
                from-purple-500/10
                via-blue-500/5
                to-green-500/10
                p-5
                backdrop-blur-md
                transform
                transition-all
                duration-700
                ease-out

                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-16 opacity-0"
                }

                hover:-translate-y-2
                hover:border-purple-400/30
                hover:shadow-xl
                hover:shadow-purple-500/10
              `}
            >
              {/* ========================= */}
              {/* BRILHO ROXO */}
              {/* ========================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-32
                  w-32
                  rounded-full
                  bg-purple-500/15
                  blur-3xl
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* ========================= */}
              {/* BRILHO AZUL */}
              {/* ========================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-1/3
                  top-1/2
                  h-24
                  w-24
                  rounded-full
                  bg-blue-500/10
                  blur-3xl
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* ========================= */}
              {/* BRILHO VERDE */}
              {/* ========================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-16
                  -left-16
                  h-32
                  w-32
                  rounded-full
                  bg-green-500/10
                  blur-3xl
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* ========================= */}
              {/* CONTEÚDO */}
              {/* ========================= */}

              <div className="relative z-10">

                {/* DIAMANTES */}
                <div className="flex items-center gap-3">
                  <span
                    className="
                      text-4xl
                      drop-shadow-lg
                    "
                  >
                    💎
                  </span>

                  <span
                    className="
                      text-3xl
                      font-black
                      text-purple-400
                    "
                  >
                    {item.diamonds}
                  </span>
                </div>

                {/* NOME */}
                <h3
                  className="
                    mt-6
                    text-lg
                    font-bold
                    text-white
                  "
                >
                  {item.name}
                </h3>

                {/* ATENÇÃO */}
                <div
                  className="
                    mt-5
                    rounded-lg
                    border
                    border-red-500/30
                    bg-red-500/5
                    p-3
                    text-center
                    text-sm
                    font-bold
                    text-red-300
                    backdrop-blur-sm
                  "
                >
                  ⚠️ Atenção: Como funciona?
                </div>

                {/* PREÇO */}
                <div className="mt-5">
                  <span
                    className="
                      text-sm
                      text-slate-500
                      line-through
                    "
                  >
                    {item.oldPrice}
                  </span>

                  <div
                    className="
                      mt-1
                      text-2xl
                      font-black
                      text-green-400
                    "
                  >
                    {item.price}
                  </div>
                </div>

                {/* BOTÃO */}
                <button
                  type="button"
                  className="
                    relative
                    mt-5
                    w-full
                    rounded-lg
                    bg-gradient-to-r
                    from-purple-600
                    via-blue-600
                    to-green-500
                    py-3
                    font-bold
                    text-white
                    transition-all
                    duration-300
                    hover:brightness-110
                    hover:shadow-lg
                    hover:shadow-purple-500/20
                  "
                >
                  Comprar
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* ========================= */}
        {/* RODAPÉ */}
        {/* ========================= */}

        <p
          className="
            mt-10
            text-center
            text-sm
            text-slate-500
          "
        >
          💬 Não encontrou o que procura?{" "}
          <span className="font-bold text-purple-400">
            Fale conosco para um pacote personalizado!
          </span>
        </p>
      </div>
    </section>
  );
}