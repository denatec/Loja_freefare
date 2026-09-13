"use client";
import "../src/app/globals.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Navbar() {
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const sections = ["inicio", "recargas", "marketplace"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (const id of sections) {
        const section = document.getElementById(id);

        if (!section) continue;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (id: string) => {
    setActive(id);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* =================================================
            LOGO — ESQUERDA
        ================================================== */}
        <Link href="/" className="brand">
          <div className="brand-icon">
            <Image
              src="/images/logo.png"
              alt="Xuxadas Shop"
              width={50}
              height={50}
              className="brand-logo"
              priority
            />
          </div>

          <div className="brand-name">
            <span className="brand-green">XUXADAS</span>

            <span className="brand-yellow">SHOP</span>
          </div>
        </Link>

        {/* =================================================
            MENU — CENTRO
        ================================================== */}
        <nav className="menu">
          <button
            type="button"
            onClick={() => handleClick("inicio")}
            className={`nav-link nav-home ${
              active === "inicio" ? "active-home" : ""
            }`}
          >
            INÍCIO
          </button>

          <button
            type="button"
            onClick={() => handleClick("recargas")}
            className={`nav-link nav-recharges ${
              active === "recargas" ? "active-recharges" : ""
            }`}
          >
            RECARGAS
          </button>

          <button
            type="button"
            onClick={() => handleClick("marketplace")}
            className={`nav-link nav-marketplace ${
              active === "marketplace" ? "active-marketplace" : ""
            }`}
          >
            MARKETPLACE
          </button>
        </nav>

        {/* =================================================
            AÇÕES — DIREITA
        ================================================== */}
        <div className="nav-actions">
          <Link href="/login" className="login-btn">
            LOGIN
          </Link>

          <Link href="../src/app/login" className="register-btn">
            CRIAR CONTA
          </Link>
        </div>
      </div>
    </header>
  );
}
