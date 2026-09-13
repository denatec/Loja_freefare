import AnimatedBackground from "@/../components/AnimatedBackground";
import HeroSlide from "@/../components/heroslide";
import { Hero } from "@/../components/hero";
import { RechargeSection } from "@/../components/RechargeSection";
import { SpecialPackages } from "@/../components/SpecialPackages";
import { Marketplace } from "@/../components/Marketplace";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#050816] via-[#080d1f] to-[#050816]">
      
      {/* FUNDO GLOBAL */}
      <AnimatedBackground />

      {/* =====================================================
          INÍCIO
          Âncora: #inicio
      ====================================================== */}
      <section
        id="inicio"
        className="relative z-10 scroll-mt-24"
      >
        {/* Slide principal */}
        <HeroSlide />

        {/* Conteúdo do Hero */}
        <Hero />
      </section>

      {/* =====================================================
          RECARGAS
          Âncora: #recargas
      ====================================================== */}
      <section
        id="recargas"
        className="relative z-10 scroll-mt-24"
      >
        <RechargeSection />
      </section>

      {/* =====================================================
          PACOTES ESPECIAIS
          Âncora: #pacotes
      ====================================================== */}
      <section
        id="pacotes"
        className="relative z-10 scroll-mt-24"
      >
        <SpecialPackages />
      </section>

      {/* =====================================================
          MARKETPLACE
          Âncora: #marketplace
      ====================================================== */}
      <section
        id="marketplace"
        className="relative z-10 scroll-mt-24"
      >
        <Marketplace />
      </section>

    </main>
  );
}