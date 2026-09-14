"use client";

import {
  ChevronLeft,
  ChevronRight,
  Gem,
  MoreHorizontal,
  TrendingUp,
} from "lucide-react";

const orders = [
  {
    date: "31/08/2026, 15:58:56",
    name: "Astro7000",
    nick: "Djoka45002",
    id: "9370695048",
    package: "Bronze (100+20)",
    price: "1.235 Kz",
    method: "FC",
    status: "Concluído",
  },
  {
    date: "31/08/2026, 01:05:32",
    name: "Rafael Shibiro",
    nick: "LkRafael0107",
    id: "10564588569",
    package: "Silver (310+62)",
    price: "3.545 Kz",
    method: "FC",
    status: "Concluído",
  },
  {
    date: "30/08/2026, 23:20:23",
    name: "faby bb",
    nick: "5Sr",
    id: "445532676",
    package: "Bronze (100+20)",
    price: "1.235 Kz",
    method: "FC",
    status: "Cancelado",
  },
  {
    date: "30/08/2026, 23:19:05",
    name: "fby bb",
    nick: "5Sr",
    id: "445532676",
    package: "Mini Pack (65+13)",
    price: "855 Kz",
    method: "FC",
    status: "Concluído",
  },
  {
    date: "30/08/2026, 22:18:19",
    name: "Nélio",
    nick: "Anônimo",
    id: "811998330",
    package: "Bronze (100+20)",
    price: "1.235 Kz",
    method: "FC",
    status: "Concluído",
  },
  {
    date: "30/08/2026, 20:07:18",
    name: "Alfredo Sassa",
    nick: "whitesmaster",
    id: "1516150342",
    package: "Mini Pack (65+13)",
    price: "855 Kz",
    method: "FC",
    status: "Concluído",
  },
  {
    date: "30/08/2026, 00:15:02",
    name: "Emanuel Pina",
    nick: "mandarra.x2",
    id: "8011758348",
    package: "Mini Pack (65+13)",
    price: "855 Kz",
    method: "FC",
    status: "Concluído",
  },
  {
    date: "30/08/2026, 00:13:46",
    name: "Emanuel Pina",
    nick: "mandarra.x2",
    id: "8011758348",
    package: "Bronze (100+20)",
    price: "1.235 Kz",
    method: "FC",
    status: "Concluído",
  },
  {
    date: "29/08/2026, 19:50:01",
    name: "Aguilsom",
    nick: "AgRau77",
    id: "9737820800",
    package: "Gold (520+104)",
    price: "5.035 Kz",
    method: "FC",
    status: "Concluído",
  },
  {
    date: "28/08/2026, 18:19:00",
    name: "Afonso",
    nick: "Gag",
    id: "555383655",
    package: "Mini Pack (65+13)",
    price: "855 Kz",
    method: "FC",
    status: "Cancelado",
  },
  {
    date: "27/08/2026, 18:12:20",
    name: "Carlos Miguel",
    nick: "Carlitos",
    id: "789452123",
    package: "Silver (310+62)",
    price: "3.545 Kz",
    method: "FC",
    status: "Concluído",
  },
  {
    date: "27/08/2026, 16:43:12",
    name: "João Pedro",
    nick: "JP23",
    id: "654789321",
    package: "Bronze (100+20)",
    price: "1.235 Kz",
    method: "FC",
    status: "Concluído",
  },
  {
    date: "27/08/2026, 14:21:05",
    name: "Mateus",
    nick: "Mates",
    id: "951357456",
    package: "Mini Pack (65+13)",
    price: "855 Kz",
    method: "FC",
    status: "Cancelado",
  },
  {
    date: "27/08/2026, 11:15:42",
    name: "Daniel",
    nick: "Dani",
    id: "852963741",
    package: "Gold (520+104)",
    price: "5.035 Kz",
    method: "FC",
    status: "Concluído",
  },
  {
    date: "26/08/2026, 22:40:31",
    name: "Fernando",
    nick: "Fera10",
    id: "741258963",
    package: "Bronze (100+20)",
    price: "1.235 Kz",
    method: "FC",
    status: "Concluído",
  },
];

export function OrdersTable() {
  return (
    <section className="w-full">
      {/* =====================================================
          CABEÇALHO
      ====================================================== */}
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.7)]" />

            <h1 className="text-2xl font-black tracking-tight text-white">
              Pedidos
            </h1>
          </div>

          <p className="mt-1 text-sm text-white/40">
            Gerencie os pedidos realizados pelos clientes.
          </p>
        </div>

        <button
          type="button"
          className="
            inline-flex
            items-center
            gap-2
            rounded-lg
            border
            border-white/10
            bg-white/[0.03]
            px-4
            py-2.5
            text-sm
            font-semibold
            text-white/70
            transition
            hover:border-green-500/30
            hover:bg-green-500/5
            hover:text-green-400
          "
        >
          <TrendingUp size={16} />
          Atualizar
        </button>
      </div>

      {/* =====================================================
          ABAS
      ====================================================== */}
      <div className="mb-4 flex flex-wrap items-center gap-2 border-b border-white/10 pb-3">
        <button
          type="button"
          className="
            rounded-lg
            bg-green-500/10
            px-4
            py-2
            text-xs
            font-bold
            text-green-400
          "
        >
          Pedidos
        </button>

        <button
          type="button"
          className="
            rounded-lg
            px-4
            py-2
            text-xs
            font-bold
            text-white/40
            transition
            hover:bg-white/[0.04]
            hover:text-white
          "
        >
          Dep. Fê
        </button>

        <button
          type="button"
          className="
            rounded-lg
            px-4
            py-2
            text-xs
            font-bold
            text-white/40
            transition
            hover:bg-white/[0.04]
            hover:text-white
          "
        >
          Gestão Fê
        </button>

        <button
          type="button"
          className="
            rounded-lg
            px-4
            py-2
            text-xs
            font-bold
            text-blue-400
            transition
            hover:bg-blue-500/10
          "
        >
          Marketplace
        </button>

        <button
          type="button"
          className="
            rounded-lg
            px-4
            py-2
            text-xs
            font-bold
            text-yellow-400
            transition
            hover:bg-yellow-500/10
          "
        >
          Ganhos
        </button>
      </div>

      {/* =====================================================
          TABELA
      ====================================================== */}
      <div
        className="
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-[#0b0b16]
          shadow-[0_20px_60px_rgba(0,0,0,0.25)]
        "
      >
        {/* ===================================================
            ÁREA COM ROLAGEM
        ==================================================== */}
        <div
          className="
            max-h-[520px]
            overflow-auto
            scrollbar-thin
            scrollbar-track-transparent
            scrollbar-thumb-white/10
          "
        >
          <table className="w-full min-w-[1100px] border-collapse">
            {/* =================================================
                CABEÇALHO FIXO
            ================================================== */}
            <thead className="sticky top-0 z-20">
              <tr className="border-b border-white/10 bg-[#11111d]">
                <th className="whitespace-nowrap px-5 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-purple-400">
                  Data
                </th>

                <th className="whitespace-nowrap px-5 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-purple-400">
                  Cliente (Nome / Nick)
                </th>

                <th className="whitespace-nowrap px-5 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-purple-400">
                  ID Free Fire
                </th>

                <th className="whitespace-nowrap px-5 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-purple-400">
                  Pacote
                </th>

                <th className="whitespace-nowrap px-5 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-purple-400">
                  Preço
                </th>

                <th className="whitespace-nowrap px-5 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-purple-400">
                  Método
                </th>

                <th className="whitespace-nowrap px-5 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-purple-400">
                  Status
                </th>

                <th className="whitespace-nowrap px-5 py-4 text-center text-[11px] font-bold uppercase tracking-wider text-purple-400">
                  Ações
                </th>
              </tr>
            </thead>

            {/* =================================================
                LINHAS
            ================================================== */}
            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={`${order.id}-${index}`}
                  className="
                    border-b
                    border-white/[0.06]
                    transition-colors
                    duration-200
                    hover:bg-white/[0.025]
                  "
                >
                  {/* DATA */}
                  <td className="whitespace-nowrap px-5 py-4">
                    <span className="text-xs font-semibold text-white/70">
                      {order.date}
                    </span>
                  </td>

                  {/* CLIENTE */}
                  <td className="px-5 py-4">
                    <div className="min-w-[160px]">
                      <p className="text-sm font-bold text-white">
                        {order.name}
                      </p>

                      <p className="mt-0.5 text-[11px] text-white/40">
                        {order.nick}
                      </p>
                    </div>
                  </td>

                  {/* ID FREE FIRE */}
                  <td className="px-5 py-4">
                    <span
                      className="
                        inline-flex
                        rounded-md
                        border
                        border-yellow-500/30
                        bg-yellow-500/10
                        px-2.5
                        py-1
                        font-mono
                        text-xs
                        font-bold
                        text-yellow-400
                      "
                    >
                      {order.id}
                    </span>
                  </td>

                  {/* PACOTE */}
                  <td className="px-5 py-4">
                    <span className="whitespace-nowrap text-xs font-semibold text-white/70">
                      {order.package}
                    </span>
                  </td>

                  {/* PREÇO */}
                  <td className="whitespace-nowrap px-5 py-4">
                    <span className="text-sm font-bold text-white">
                      {order.price}
                    </span>
                  </td>

                  {/* MÉTODO */}
                  <td className="px-5 py-4">
                    <div className="inline-flex items-center gap-1.5">
                      <Gem
                        size={14}
                        className="text-cyan-400"
                      />

                      <span className="text-xs font-semibold text-cyan-300">
                        {order.method}
                      </span>
                    </div>
                  </td>

                  {/* STATUS */}
                  <td className="px-5 py-4">
                    <span
                      className={`
                        inline-flex
                        rounded-full
                        px-3
                        py-1
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-wide
                        ${
                          order.status === "Concluído"
                            ? "bg-green-500/15 text-green-400 ring-1 ring-green-500/20"
                            : "bg-red-500/15 text-red-400 ring-1 ring-red-500/20"
                        }
                      `}
                    >
                      {order.status}
                    </span>
                  </td>

                  {/* AÇÕES */}
                  <td className="px-5 py-4 text-center">
                    <button
                      type="button"
                      aria-label={`Ações do pedido ${order.id}`}
                      className="
                        inline-flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-lg
                        text-white/35
                        transition
                        hover:bg-white/5
                        hover:text-white
                      "
                    >
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* =====================================================
            PAGINAÇÃO
        ====================================================== */}
        <div className="flex flex-col gap-3 border-t border-white/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            Mostrando 1–10 de 124 pedidos
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="
                inline-flex
                items-center
                gap-1
                rounded-lg
                border
                border-white/10
                bg-white/[0.03]
                px-3
                py-2
                text-xs
                font-bold
                text-white/60
                transition
                hover:bg-white/[0.06]
                hover:text-white
              "
            >
              <ChevronLeft size={14} />
              Anterior
            </button>

            <span
              className="
                rounded-lg
                border
                border-purple-500/30
                bg-purple-500/10
                px-3
                py-2
                text-xs
                font-bold
                text-purple-300
              "
            >
              Página 1
            </span>

            <button
              type="button"
              className="
                inline-flex
                items-center
                gap-1
                rounded-lg
                border
                border-green-500/20
                bg-green-500/10
                px-3
                py-2
                text-xs
                font-bold
                text-green-400
                transition
                hover:bg-green-500/15
              "
            >
              Próxima
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}