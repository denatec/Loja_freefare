"use client";
import Link from "next/link";
export function Footer() {
  return (
    <footer className="relative z-10 w-full overflow-hidden border-t border-white/10 bg-[#080d1f]">
      {" "}
      <div className="mx-auto w-full max-w-[1450px] px-6 py-16">
        {" "}
        {/* PARTE PRINCIPAL */}{" "}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {" "}
          {/* LOGO / DESCRIÇÃO */}{" "}
          <div className="lg:col-span-2">
            {" "}
            <Link
              href="/"
              className="inline-flex items-center gap-3 transition-opacity hover:opacity-80"
            >
              {" "}
              {/* ÍCONE */}{" "}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/40 bg-transparent text-2xl shadow-lg shadow-purple-500/10">
                {" "}
                💎{" "}
              </div>{" "}
              {/* NOME */}{" "}
              <div>
                {" "}
                <h2 className="text-2xl font-black tracking-wide brand-green">
                  {" "}
                  XUXADAS <span className="text-white"> SHOP</span>{" "}
                </h2>{" "}
                <p className="text-xs font-medium tracking-widest text-slate-500">
                  {" "}
                  GAMING STORE{" "}
                </p>{" "}
              </div>{" "}
            </Link>{" "}
            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              {" "}
              A sua loja de confiança para recargas de diamantes, passes e
              produtos para Free Fire. Rápido, seguro e com os melhores preços
              em Kwanzas.{" "}
            </p>{" "}
            {/* REDES SOCIAIS */}{" "}
            <div className="mt-7 flex items-center gap-3">
              {" "}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-transparent text-sm font-bold text-slate-400 transition-all hover:border-blue-500/50 hover:text-blue-400"
              >
                {" "}
                f{" "}
              </a>{" "}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-transparent text-sm font-bold text-slate-400 transition-all hover:border-pink-500/50 hover:text-pink-400"
              >
                {" "}
                ◎{" "}
              </a>{" "}
              <a
                href="#"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-transparent text-sm font-bold text-slate-400 transition-all hover:border-green-500/50 hover:text-green-400"
              >
                {" "}
                ☎{" "}
              </a>{" "}
              <a
                href="#"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-transparent text-sm font-bold text-slate-400 transition-all hover:border-white/40 hover:text-white"
              >
                {" "}
                ♪{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
          {/* NAVEGAÇÃO */}{" "}
          <div>
            {" "}
            <h3 className="mb-5 text-sm font-black uppercase tracking-wider text-white">
              {" "}
              Navegação{" "}
            </h3>{" "}
            <ul className="space-y-3">
              {" "}
              <li>
                {" "}
                <Link
                  href="#inicio"
                  className="text-sm text-slate-400 transition-colors hover:text-purple-400"
                >
                  {" "}
                  Início{" "}
                </Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <Link
                  href="#recargas"
                  className="text-sm text-slate-400 transition-colors hover:text-purple-400"
                >
                  {" "}
                  Recargas{" "}
                </Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <Link
                  href="#pacotes"
                  className="text-sm text-slate-400 transition-colors hover:text-purple-400"
                >
                  {" "}
                  Pacotes{" "}
                </Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <Link
                  href="#marketplace"
                  className="text-sm text-slate-400 transition-colors hover:text-purple-400"
                >
                  {" "}
                  Marketplace{" "}
                </Link>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          {/* SUPORTE */}{" "}
          <div>
            {" "}
            <h3 className="mb-5 text-sm font-black uppercase tracking-wider text-white">
              {" "}
              Suporte{" "}
            </h3>{" "}
            <ul className="space-y-3">
              {" "}
              <li>
                {" "}
                <Link
                  href="/pedidos"
                  className="text-sm text-slate-400 transition-colors hover:text-purple-400"
                >
                  {" "}
                  Meus pedidos{" "}
                </Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <Link
                  href="/perfil"
                  className="text-sm text-slate-400 transition-colors hover:text-purple-400"
                >
                  {" "}
                  Minha conta{" "}
                </Link>{" "}
              </li>{" "}
              <li>
                {" "}
                <a
                  href="#"
                  className="text-sm text-slate-400 transition-colors hover:text-purple-400"
                >
                  {" "}
                  Central de ajuda{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a
                  href="#"
                  className="text-sm text-slate-400 transition-colors hover:text-purple-400"
                >
                  {" "}
                  Fale conosco{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
        {/* LINHA */} <div className="my-10 h-px bg-white/10" />{" "}
        {/* PARTE INFERIOR */}{" "}
        <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          {" "}
          <p className="text-xs text-slate-500">
            {" "}
            © {new Date().getFullYear()} Faby Shop. Todos os direitos
            reservados.{" "}
          </p>{" "}
          <div className="flex flex-wrap justify-center gap-6">
            {" "}
            <a
              href="#"
              className="text-xs text-slate-500 transition-colors hover:text-purple-400"
            >
              {" "}
              Termos de uso{" "}
            </a>{" "}
            <a
              href="#"
              className="text-xs text-slate-500 transition-colors hover:text-purple-400"
            >
              {" "}
              Política de privacidade{" "}
            </a>{" "}
            <a
              href="#"
              className="text-xs text-slate-500 transition-colors hover:text-purple-400"
            >
              {" "}
              Política de reembolso{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* BRILHO DECORATIVO */}{" "}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[100px]" />{" "}
    </footer>
  );
}
