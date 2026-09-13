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
  return (
    <section
      id="pacotes"
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
                to-orange-400
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
              text-slate-400
            "
          >
            Assinaturas semanais, mensais e passes exclusivos
            para dominar o Free Fire!
          </p>
        </div>

        {/* PACOTES */}
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
          {packages.map((item) => (
            <article
              key={item.name}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.08]
                bg-transparent
                p-5
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-purple-500/40
                hover:shadow-xl
                hover:shadow-purple-500/10
              "
            >

              {/* BRILHO */}
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
                  duration-300
                  group-hover:opacity-100
                "
              />

              {/* DIAMANTES */}
              <div className="relative flex items-center gap-3">
                <span className="text-4xl">
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
                  relative
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
                  relative
                  mt-5
                  rounded-lg
                  border
                  border-red-500/40
                  bg-transparent
                  p-3
                  text-center
                  text-sm
                  font-bold
                  text-red-300
                "
              >
                ⚠️ Atenção: Como funciona?
              </div>

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
                  to-purple-500
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
            </article>
          ))}
        </div>

        {/* RODAPÉ */}
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