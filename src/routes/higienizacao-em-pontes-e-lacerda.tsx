import { createFileRoute } from "@tanstack/react-router";
import { CityPage } from "@/components/softclean/city-page";

export const Route = createFileRoute("/higienizacao-em-pontes-e-lacerda")({
  head: () => ({
    meta: [
      { title: "Higienização de Estofados em Pontes e Lacerda, MT | SoftClean" },
      { name: "description", content: "Peça orçamento de higienização de sofás, poltronas, cadeiras, colchões e interiores automotivos em Pontes e Lacerda, MT. Atendimento residencial e comercial sob consulta." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Higienização de Estofados em Pontes e Lacerda, MT | SoftClean" },
      { property: "og:description", content: "Orçamento para higienização de estofados e interiores automotivos em Pontes e Lacerda, Mato Grosso. Consulte a disponibilidade pelo WhatsApp." },
      { property: "og:locale", content: "pt_BR" },
    ],
    links: [{ rel: "canonical", href: "https://softclean-higienizacao.vercel.app/higienizacao-em-pontes-e-lacerda" }],
  }),
  component: () => <CityPage city="Pontes e Lacerda" headline="Higienização de estofados em Pontes e Lacerda" intro="Precisa cuidar do sofá, das poltronas, das cadeiras estofadas ou dos colchões? A SoftClean recebe pedidos de orçamento em Pontes e Lacerda, MT, e também para higienização interna de veículos. Envie fotos pelo WhatsApp para iniciar a avaliação e confirme a disponibilidade antes de agendar." />,
});
