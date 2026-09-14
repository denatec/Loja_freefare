"use client";

import { useEffect, useRef, useState } from "react";

const packages = [
  {
    name: "MINI PACK",
    diamonds: "65",
    bonus: "+13",
    oldPrice: "900 Kz",
    price: "855 Kz",
  },
  {
    name: "BRONZE",
    diamonds: "100",
    bonus: "+20",
    oldPrice: "1.300 Kz",
    price: "1.235 Kz",
  },
  {
    name: "SILVER",
    diamonds: "310",
    bonus: "+62",
    oldPrice: "3.700 Kz",
    price: "3.515 Kz",
    featured: true,
  },
  {
    name: "GOLD",
    diamonds: "520",
    bonus: "+104",
    oldPrice: "5.300 Kz",
    price: "5.035 Kz",
  },
  {
    name: "PLATINUM",
    diamonds: "1.060",
    bonus: "+212",
    oldPrice: "11.000 Kz",
    price: "10.450 Kz",
  },
  {
    name: "DIAMOND",
    diamonds: "2.180",
    bonus: "+436",
    oldPrice: "21.500 Kz",
    price: "20.425 Kz",
  },
  {
    name: "LEGEND",
    diamonds: "5.600",
    bonus: "+1.120",
    oldPrice: "52.000 Kz",
    price: "49.400 Kz",
  },
  {
    name: "ULTIMATE",
    diamonds: "22.400",
    bonus: "+4.480",
    oldPrice: "220.000 Kz",
    price: "209.000 Kz",
  },
];

export function RechargeSection() {
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
      id="recargas"
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
        {/* TÍTULO */}
        <div className="mb-12 text-center">
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-purple-500/30
              bg-transparent
              px-5
              py-2
              text-sm
              font-bold
              text-purple-400
            "
          >
            💎 Recarga de Diamantes
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
            Escolha sua{" "}
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
              Recarga
            </span>
          </h2>

          <p className="mt-4 text-slate-400">
            Diamantes entregues na hora, com os melhores preços em Kwanzas!
          </p>
        </div>

        {/* PACOTES */}
        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
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
                transform
                overflow-hidden
                rounded-2xl
                border
                p-5
                backdrop-blur-xl
                transition-all
                duration-700
                ease-out

                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-16 opacity-0"
                }

                hover:-translate-y-2

                ${
                  item.featured
                    ? `
                      border-orange-400/50
                      bg-gradient-to-br
                      from-orange-500/20
                      via-yellow-500/10
                      to-purple-500/15
                      hover:border-orange-300
                      hover:shadow-xl
                      hover:shadow-orange-500/10
                    `
                    : `
                      border-white/10
                      bg-gradient-to-br
                      from-purple-500/15
                      via-blue-500/10
                      to-green-500/15
                      hover:border-purple-400/40
                      hover:shadow-xl
                      hover:shadow-purple-500/10
                    `
                }
              `}
            >
              {/* BRILHO DO CARD */}
              <div
                className={`
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-32
                  w-32
                  rounded-full
                  blur-3xl
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100

                  ${
                    item.featured
                      ? "bg-yellow-400/30"
                      : "bg-purple-500/25"
                  }
                `}
              />

              {/* BRILHO VERDE */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-16
                  -left-16
                  h-32
                  w-32
                  rounded-full
                  bg-green-500/20
                  blur-3xl
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* CONTEÚDO */}
              <div className="relative z-10">
                {/* DIAMANTES */}
                <div className="flex items-center gap-3">
                  <div className="text-4xl drop-shadow-lg">
                    💎
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className="
                          text-3xl
                          font-black
                          text-purple-400
                        "
                      >
                        {item.diamonds}
                      </span>

                      <span className="text-sm text-green-400">
                        {item.bonus}
                      </span>
                    </div>
                  </div>
                </div>

                {/* NOME */}
                <h3
                  className="
                    relative
                    mt-5
                    text-lg
                    font-bold
                    text-slate-200
                  "
                >
                  {item.name}
                </h3>

                {/* PREÇO */}
                <div className="relative mt-5">
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
                  className={`
                    relative
                    mt-6
                    w-full
                    rounded-lg
                    px-4
                    py-3
                    font-bold
                    transition-all
                    duration-300

                    ${
                      item.featured
                        ? `
                          bg-gradient-to-r
                          from-yellow-400
                          to-orange-500
                          text-black
                          hover:brightness-110
                          hover:shadow-lg
                          hover:shadow-orange-500/20
                        `
                        : `
                          bg-gradient-to-r
                          from-purple-600
                          via-blue-600
                          to-green-500
                          text-white
                          hover:brightness-110
                          hover:shadow-lg
                          hover:shadow-purple-500/20
                        `
                    }
                  `}
                >
                  Comprar
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
