import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="inicio"
      className="
        relative
        min-h-[700px]
        overflow-hidden
        bg-[#050816]
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/images/freefire-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-[#050816]/70 to-[#050816]/30" />

        <div className="absolute inset-0 bg-[#050816]/40" />
      </div>

      {/* CONTEÚDO */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[620px]
          max-w-[1500px]
          items-center
          px-6
          py-16
          sm:px-8
          lg:px-16
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            items-center
            gap-12
            lg:grid-cols-2
          "
        >
          {/* TEXTO */}
          <div
            className="
              flex
              flex-col
              items-center
              text-center
              lg:items-start
              lg:text-left
            "
          >
            {/* BADGE */}
            <div
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-purple-500/30
                bg-purple-500/10
                px-4
                py-2
                text-sm
                font-semibold
                text-purple-300
              "
            >
              💎 Recarga de Diamantes
            </div>

            {/* TÍTULO */}
            <h1
              className="
                text-4xl
                font-black
                leading-[0.95]
                tracking-tight
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Recarregue seus
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-purple-400
                  via-pink-400
                  to-orange-400
                  bg-clip-text
                  text-transparent
                "
              >
                Diamantes
              </span>

              <br />

              <span className="text-white">
                no FREE FIRE
              </span>
            </h1>

            {/* DESCRIÇÃO */}
            <p
              className="
                mt-6
                max-w-xl
                text-base
                leading-relaxed
                text-slate-300
                sm:text-lg
              "
            >
              Compre diamantes Free Fire de forma rápida,
              segura e com os melhores preços em Kwanzas.
            </p>

            {/* BOTÕES */}
            <div
              className="
                mt-8
                flex
                flex-wrap
                justify-center
                gap-4
                lg:justify-start
              "
            >
              <Link
                href="#recargas"
                className="
                  rounded-lg
                  bg-gradient-to-r
                  from-purple-600
                  to-purple-500
                  px-7
                  py-4
                  font-bold
                  text-white
                  shadow-lg
                  shadow-purple-500/30
                  transition
                  hover:-translate-y-1
                  hover:shadow-purple-500/50
                "
              >
                💎 Comprar Diamantes
              </Link>

              <Link
                href="#marketplace"
                className="
                  rounded-lg
                  border
                  border-blue-500/50
                  bg-blue-500/10
                  px-7
                  py-4
                  font-bold
                  text-blue-400
                  transition
                  hover:bg-blue-500/20
                "
              >
                Marketplace
              </Link>
            </div>
          </div>

          {/* LOGIN ID */}
          <div
            className="
              flex
              w-full
              justify-center
              lg:justify-end
            "
          >
            <div
              className="
                w-full
                max-w-[420px]
                rounded-2xl
                border
                border-purple-500/30
                bg-[#090512]/80
                p-6
                shadow-2xl
                shadow-purple-900/30
                backdrop-blur-xl
                sm:p-7
              "
            >
              <h2 className="text-center text-2xl font-bold">
                Faça login com teu ID
              </h2>

              <p className="mt-2 text-center text-sm text-slate-400">
                Informe o seu ID do Free Fire para continuar.
              </p>

              {/* INPUT */}
              <div className="mt-6">
                <label className="mb-2 block text-sm text-slate-400">
                  ID do Free Fire
                </label>

                <input
                  type="text"
                  placeholder="Digite o ID do Free Fire"
                  className="
                    w-full
                    rounded-lg
                    border
                    border-white/10
                    bg-black/40
                    px-4
                    py-4
                    text-white
                    outline-none
                    placeholder:text-slate-500
                    focus:border-purple-500
                    focus:ring-2
                    focus:ring-purple-500/20
                  "
                />
              </div>

              {/* BOTÕES LOGIN */}
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button
                  className="
                    rounded-lg
                    bg-gradient-to-r
                    from-purple-600
                    to-orange-500
                    px-4
                    py-3
                    font-bold
                    text-white
                    transition
                    hover:brightness-110
                  "
                >
                  🔑 Fazer Login
                </button>

                <button
                  className="
                    rounded-lg
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-3
                    font-bold
                    text-white
                    transition
                    hover:bg-white/10
                  "
                >
                  🔍 Verificar ID
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}