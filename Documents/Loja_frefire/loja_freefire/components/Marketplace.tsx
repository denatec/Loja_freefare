const products = [
  {
    title: "PC GAMER RS 3600 + 16GB + RX580",
    price: "700.000 Kz",
    image: "/images/product1.jpg",
  },
  {
    title: "CONTA FF ✅ PRIME 6 + 277P Nº248",
    price: "43.000 Kz",
    image: "/images/product2.jpg",
  },
  {
    title: "CONTA DISPONÍVEL ✅ +1020P PRIME",
    price: "450.000 Kz",
    image: "/images/product3.jpg",
  },
  {
    title: "CONTA FREE FIRE +1040P",
    price: "330.000 Kz",
    image: "/images/product4.jpg",
  },
  {
    title: "CONTA FREE FIRE +730 PEITOS",
    price: "96.000 Kz",
    image: "/images/product5.jpg",
  },
  {
    title: "PC GAMER XEON + RX580 + 32GB RAM",
    price: "590.000 Kz",
    image: "/images/product6.jpg",
  },
];

export function Marketplace() {
  return (
    <section
      id="marketplace"
      className="
        relative
        scroll-mt-24
        border-t
        border-white/5
        bg-transparent
        px-4
        py-20
      "
    >
      <div className="mx-auto max-w-[1500px]">

        {/* =========================================
            TÍTULO
        ========================================= */}

        <div className="mb-12 text-center">

          <span
            className="
              mb-3
              inline-block
              rounded-full
              border
              border-blue-500/30
              bg-blue-500/10
              px-4
              py-1
              text-xs
              font-bold
              uppercase
              tracking-wider
              text-blue-400
            "
          >
            🛒 Marketplace
          </span>

          <h2
            className="
              text-4xl
              font-black
              text-white
              sm:text-5xl
            "
          >
            Market
            <span className="text-blue-500">
              place
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-slate-400
            "
          >
            A nossa comunidade vende aqui.
            Encontra as melhores oportunidades!
          </p>

        </div>


        {/* =========================================
            PRODUTOS
        ========================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-6
          "
        >

          {products.map((product) => (
            <article
              key={product.title}
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-blue-500/40
                bg-[#101020]/85
                p-4
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-400
                hover:bg-[#111125]/90
                hover:shadow-xl
                hover:shadow-blue-500/10
              "
            >

              {/* =========================================
                  IMAGEM
              ========================================= */}

              <div
                className="
                  relative
                  h-[180px]
                  overflow-hidden
                  rounded-xl
                  bg-black/60
                "
              >

                <img
                  src={product.image}
                  alt={product.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

                {/* Overlay da imagem */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/50
                    via-transparent
                    to-transparent
                  "
                />

              </div>


              {/* =========================================
                  TÍTULO
              ========================================= */}

              <h3
                className="
                  mt-5
                  min-h-[55px]
                  text-center
                  text-sm
                  font-bold
                  uppercase
                  leading-relaxed
                  text-blue-400
                "
              >
                {product.title}
              </h3>


              {/* =========================================
                  PREÇO
              ========================================= */}

              <p
                className="
                  mt-8
                  text-center
                  text-2xl
                  font-black
                  text-white
                "
              >
                {product.price}
              </p>


              {/* =========================================
                  BOTÃO
              ========================================= */}

              <button
                type="button"
                className="
                  mt-6
                  w-full
                  rounded-lg
                  bg-gradient-to-r
                  from-blue-500
                  to-blue-700
                  py-3
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:brightness-110
                  hover:shadow-lg
                  hover:shadow-blue-500/20
                "
              >
                Ver Produto
              </button>


              {/* =========================================
                  AÇÕES
              ========================================= */}

              <div
                className="
                  mt-4
                  flex
                  justify-between
                  border-t
                  border-white/10
                  pt-3
                  text-xs
                  text-slate-500
                "
              >
                <span>♡ 0</span>

                <span>💬 0</span>

                <span>🔗</span>
              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}