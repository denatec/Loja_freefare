"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log({
      email,
      password,
    });

    // Aqui futuramente vais ligar ao teu sistema de autenticação.
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07030f] text-white">
      {/* =====================================================
          FUNDO
      ===================================================== */}

      <div className="absolute inset-0">
        {/* Gradiente de fundo */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_35%,rgba(125,35,180,0.15),transparent_45%)]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_80%_50%,rgba(255,75,0,0.08),transparent_35%)]
          "
        />

        {/* Conteúdo falso ao fundo para criar o efeito da referência */}
        <div className="absolute inset-0 opacity-[0.18] blur-[5px]">
          <div className="mx-auto max-w-6xl px-6 pt-20">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-black">
                💎 FABY <span className="text-orange-500">SHOP</span>
              </div>

              <div className="flex gap-8 text-sm font-bold text-zinc-500">
                <span>INÍCIO</span>
                <span>RECARGAS</span>
                <span>MARKETPLACE</span>
                <span>MEU PERFIL</span>
              </div>
            </div>

            <div className="mt-32 grid grid-cols-2 gap-10">
              <div>
                <h1 className="text-7xl font-black">
                  Recarregue seus
                  <br />
                  <span className="text-purple-500">
                    Diamantes
                  </span>
                </h1>

                <p className="mt-8 text-xl text-zinc-400">
                  A melhor loja de recargas de diamantes
                  Free Fire de Angola.
                </p>
              </div>

              <div className="rounded-3xl border border-purple-500/20 bg-white/5 p-8">
                <div className="h-12 rounded-lg bg-white/10" />
                <div className="mt-5 h-12 rounded-lg bg-white/10" />
                <div className="mt-5 h-12 rounded-full bg-purple-500/30" />
              </div>
            </div>
          </div>
        </div>

        {/* Escurecimento */}
        <div className="absolute inset-0 bg-[#05020c]/65" />
      </div>

      {/* =====================================================
          LOGIN
      ===================================================== */}

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">
        <div className="login-card relative w-full max-w-[400px]">
          {/* =================================================
              BORDA ANIMADA
          ================================================= */}

          <div className="login-border-glow" />

          {/* =================================================
              CONTEÚDO DO MODAL
          ================================================= */}

          <div className="login-card-content">
            {/* Botão fechar */}
            <Link
              href="/"
              aria-label="Fechar"
              className="
                absolute
                right-6
                top-5
                z-20
                text-2xl
                font-bold
                leading-none
                text-zinc-500
                transition
                duration-200
                hover:text-white
              "
            >
              ×
            </Link>

            {/* Título */}
            <div className="text-center">
              <h1
                className="
                  text-[25px]
                  font-black
                  tracking-tight
                  text-[#f3efff]
                  sm:text-[27px]
                "
              >
                Entrar na Lojinha
              </h1>

              <p className="mt-3 text-[13px] text-zinc-400">
                Faça login para acumular pontos!
              </p>
            </div>

            {/* =================================================
                FORMULÁRIO
            ================================================= */}

            <form
              onSubmit={handleSubmit}
              className="mt-10"
            >
              {/* E-MAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="
                    mb-2
                    block
                    text-[13px]
                    font-medium
                    text-zinc-400
                  "
                >
                  E-mail
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  placeholder="Digite o seu e-mail"
                  autoComplete="email"
                  required
                  className="
                    h-[48px]
                    w-full
                    rounded-[10px]
                    border
                    border-white/10
                    bg-[#eaf1ff]
                    px-4
                    text-[15px]
                    text-black
                    outline-none
                    placeholder:text-zinc-500
                    transition
                    duration-200
                    focus:border-purple-500
                    focus:ring-2
                    focus:ring-purple-500/20
                  "
                />
              </div>

              {/* SENHA */}
              <div className="mt-6">
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="
                      text-[13px]
                      font-medium
                      text-zinc-400
                    "
                  >
                    Senha
                  </label>

                  <Link
                    href="/recuperar-senha"
                    className="
                      text-[11px]
                      text-purple-400
                      underline
                      transition
                      hover:text-purple-300
                    "
                  >
                    Esqueceu a senha?
                  </Link>
                </div>

                <div className="relative">
                  <input
                    id="password"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    value={password}
                    onChange={(event) =>
                      setPassword(event.target.value)
                    }
                    placeholder="Digite a sua senha"
                    autoComplete="current-password"
                    required
                    className="
                      h-[48px]
                      w-full
                      rounded-[10px]
                      border
                      border-white/10
                      bg-[#eaf1ff]
                      px-4
                      pr-12
                      text-[15px]
                      text-black
                      outline-none
                      placeholder:text-zinc-500
                      transition
                      duration-200
                      focus:border-purple-500
                      focus:ring-2
                      focus:ring-purple-500/20
                    "
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    aria-label={
                      showPassword
                        ? "Ocultar senha"
                        : "Mostrar senha"
                    }
                    className="
                      absolute
                      right-4
                      top-1/2
                      -translate-y-1/2
                      text-zinc-400
                      transition
                      hover:text-purple-500
                    "
                  >
                    {showPassword ? "◉" : "○"}
                  </button>
                </div>
              </div>

              {/* BOTÃO LOGIN */}
              <button
                type="submit"
                className="
                  login-button
                  mt-10
                  h-[50px]
                  w-full
                  rounded-full
                  bg-gradient-to-r
                  from-[#8734e8]
                  to-[#a72cda]
                  text-[15px]
                  font-bold
                  text-white
                  transition
                  duration-300
                  hover:scale-[1.01]
                  hover:shadow-[0_0_25px_rgba(153,51,230,0.35)]
                  active:scale-[0.98]
                "
              >
                LOGIN
              </button>
            </form>

            {/* =================================================
                CRIAR CONTA
            ================================================= */}

            <div className="mt-7 text-center">
              <span className="text-[14px] font-semibold text-zinc-500">
                Não tem conta?{" "}
              </span>

              <Link
                href="/cadastro"
                className="
                  text-[15px]
                  font-bold
                  text-purple-400
                  underline
                  decoration-1
                  underline-offset-2
                  transition
                  hover:text-purple-300
                "
              >
                CRIAR CONTA
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}