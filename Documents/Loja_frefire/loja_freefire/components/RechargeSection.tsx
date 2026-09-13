"use client";

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
  return (
    <section
      id="recargas"
      className="
        relative
        scroll-mt-24
        overflow-hidden
        bg-transparent
        px-4
        py-20
      "
    >
      <div className="mx-auto max-w-[1500px]">

        {/* TÍTULO */}
        <div className="mb-12 text-center">
          <span
            className="
              inline-flex
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
                to-orange-400
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
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
            xl:grid-cols-5
          "
        >
          {packages.map((item) => (
            <article
              key={item.name}
              className={`
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                p-5
                transition-all
                duration-300
                hover:-translate-y-2

                ${
                  item.featured
                    ? `
                      border-orange-500/50
                      bg-transparent
                      hover:border-orange-400
                      hover:shadow-xl
                      hover:shadow-orange-500/10
                    `
                    : `
                      border-white/[0.08]
                      bg-transparent
                      hover:border-purple-500/40
                      hover:shadow-xl
                      hover:shadow-purple-500/10
                    `
                }
              `}
            >

              {/* BRILHO */}
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
                  duration-300
                  group-hover:opacity-100
                  ${
                    item.featured
                      ? "bg-orange-500/20"
                      : "bg-purple-500/15"
                  }
                `}
              />

              {/* DIAMANTES */}
              <div className="relative flex items-center gap-3">
                <div className="text-4xl">
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

                    <span className="text-sm text-slate-500">
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
                  text-slate-300
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
                        bg-orange-500
                        text-black
                        hover:bg-orange-400
                        hover:shadow-lg
                        hover:shadow-orange-500/20
                      `
                      : `
                        bg-gradient-to-r
                        from-purple-600
                        to-purple-500
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}