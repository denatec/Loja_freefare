"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  BarChart3,
  Bell,
  Folder,
  ImageIcon,
  LayoutDashboard,
  LogOut,
  Settings,
  ShoppingBag,
  Users,
  Newspaper,
  Tags,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
    color: "green",
  },
  {
    title: "Notícias",
    href: "/admin/noticias",
    icon: Newspaper,
    color: "green",
  },
  {
    title: "Categorias",
    href: "/admin/categorias",
    icon: Tags,
    color: "yellow",
  },
  {
    title: "Publicidade",
    href: "/admin/publicidade",
    icon: ImageIcon,
    color: "yellow",
  },
  {
    title: "Utilizadores",
    href: "/admin/utilizadores",
    icon: Users,
    color: "blue",
  },
  {
    title: "Marketplace",
    href: "/admin/marketplace",
    icon: ShoppingBag,
    color: "blue",
  },
  {
    title: "Notificações",
    href: "/admin/notificacoes",
    icon: Bell,
    color: "green",
  },
  {
    title: "Relatórios",
    href: "/admin/relatorios",
    icon: BarChart3,
    color: "yellow",
  },
  {
    title: "Configurações",
    href: "/admin/configuracoes",
    icon: Settings,
    color: "blue",
  },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-white/10 bg-[#050505] text-white">
      {/* =====================================================
          LOGO
      ====================================================== */}
      <div className="flex h-20 items-center border-b border-white/10 px-6">
        <Link
          href="/admin"
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-green-500/40 bg-black shadow-[0_0_18px_rgba(34,197,94,0.15)]">
            <span className="text-sm font-black italic text-green-500">
              XS
            </span>
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-lg font-black tracking-wide text-green-500">
              XUXADAS
            </span>

            <span className="text-xs font-bold tracking-[0.25em] text-yellow-400">
              SHOP
            </span>

            <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.2em] text-white/40">
              Administração
            </span>
          </div>
        </Link>
      </div>

      {/* =====================================================
          PERFIL
      ====================================================== */}
      <div className="mx-4 mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 text-sm font-bold text-green-400 ring-1 ring-green-500/20">
            A
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">
              Administrador
            </p>

            <p className="truncate text-xs text-white/40">
              Painel de controle
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          MENU
      ====================================================== */}
      <nav className="mt-6 flex-1 overflow-y-auto px-4 pb-6">
        <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
          Menu principal
        </p>

        <div className="space-y-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;

            const isActive =
              pathname === item.href ||
              (item.href !== "/admin" &&
                pathname.startsWith(`${item.href}/`));

            const colorClasses = {
              green: {
                text: "text-green-400",
                bg: "bg-green-500/10",
                border: "border-green-500/20",
                active: "bg-green-500/10",
                hover: "hover:bg-green-500/[0.07]",
              },

              yellow: {
                text: "text-yellow-400",
                bg: "bg-yellow-500/10",
                border: "border-yellow-500/20",
                active: "bg-yellow-500/10",
                hover: "hover:bg-yellow-500/[0.07]",
              },

              blue: {
                text: "text-blue-400",
                bg: "bg-blue-500/10",
                border: "border-blue-500/20",
                active: "bg-blue-500/10",
                hover: "hover:bg-blue-500/[0.07]",
              },
            } as const;

            const colors = colorClasses[item.color as keyof typeof colorClasses];

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  group
                  relative
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  px-3
                  py-3
                  transition-all
                  duration-200

                  ${
                    isActive
                      ? `${colors.active} ${colors.border}`
                      : `border-transparent ${colors.hover}`
                  }
                `}
              >
                {/* INDICADOR LATERAL */}
                {isActive && (
                  <span
                    className={`
                      absolute
                      left-0
                      top-1/2
                      h-6
                      w-1
                      -translate-y-1/2
                      rounded-r-full
                      ${colors.text.replace("text-", "bg-")}
                    `}
                  />
                )}

                {/* ÍCONE */}
                <div
                  className={`
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    transition-all
                    duration-200

                    ${
                      isActive
                        ? `${colors.bg} ${colors.text}`
                        : "bg-white/[0.03] text-white/50 group-hover:text-white"
                    }
                  `}
                >
                  <Icon size={17} strokeWidth={1.8} />
                </div>

                {/* TEXTO */}
                <span
                  className={`
                    text-sm
                    font-medium
                    transition-colors
                    duration-200
                    ${
                      isActive
                        ? "text-white"
                        : "text-white/60 group-hover:text-white"
                    }
                  `}
                >
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* =====================================================
          RODAPÉ DA SIDEBAR
      ====================================================== */}
      <div className="border-t border-white/10 p-4">
        <Link
          href="/"
          className="mb-2 flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-white/50 transition hover:bg-white/[0.04] hover:text-white"
        >
          <Folder size={17} strokeWidth={1.8} />

          <span>Ver site</span>
        </Link>

        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-white/50 transition hover:bg-red-500/10 hover:text-red-400"
        >
          <LogOut size={17} strokeWidth={1.8} />

          <span>Terminar sessão</span>
        </button>
      </div>
    </aside>
  );
}