"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Navbar() {
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      const inicio = document.getElementById("inicio");
      const recargas = document.getElementById("recargas");
      const marketplace = document.getElementById("marketplace");

      if (!inicio || !recargas || !marketplace) {
        return;
      }

      const inicioTop = inicio.offsetTop;
      const recargasTop = recargas.offsetTop;
      const marketplaceTop = marketplace.offsetTop;

      if (scrollPosition >= marketplaceTop) {
        setActive("marketplace");
      } else if (scrollPosition >= recargasTop) {
        setActive("recargas");
      } else if (scrollPosition >= inicioTop) {
        setActive("inicio");
      } else {
        setActive("inicio");
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (id: string) => {
    setActive(id);

    const section = document.getElementById(id);

    if (!section) {
      return;
    }

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* =================================================
            LOGO
        ================================================== */}

        <Link href="/" className="brand">
          <div className="brand-icon">
            <Image
              src="/img/IMG-20260831-WA0004-removebg-preview.png"
              alt="Xuxadas Shop"
              width={50}
              height={50}
              className="brand-logo"
              priority
            />
          </div>

          <div className="brand-name">
            <span className="brand-green">
              XUXADAS
            </span>

            <span className="brand-white">
              SHOP
            </span>
          </div>
        </Link>

        {/* =================================================
            MENU
        ================================================== */}

        <nav className="menu">

          {/* INÍCIO */}

          <button
            type="button"
            onClick={() => handleClick("inicio")}
            className={`nav-link nav-home ${
              active === "inicio"
                ? "active-home"
                : ""
            }`}
          >
            INÍCIO
          </button>

          {/* RECARGAS */}

          <button
            type="button"
            onClick={() => handleClick("recargas")}
            className={`nav-link nav-recharges ${
              active === "recargas"
                ? "active-recharges"
                : ""
            }`}
          >
            RECARGAS
          </button>

             {/* Especiais */}

          <button
            type="button"
            onClick={() => handleClick("pacotes")}
            className={`nav-link nav-recharges ${
              active === "pacotes"
                ? "active-recharges"
                : ""
            }`}
          >
            PACOTES ESPECIAIS
          </button>

          {/* MARKETPLACE */}

          <button
            type="button"
            onClick={() => handleClick("marketplace")}
            className={`nav-link nav-marketplace ${
              active === "marketplace"
                ? "active-marketplace"
                : ""
            }`}
          >
            MARKETPLACE
          </button>

        </nav>

        {/* =================================================
            AÇÕES
        ================================================== */}

        <div className="nav-actions">

          <Link
            href="/login"
            className="login-btn"
          >
            LOGIN
          </Link>

          <Link
            href="/cadastro"
            className="register-btn"
          >
            CRIAR CONTA
          </Link>

        </div>

      </div>
    </header>
  );
}
