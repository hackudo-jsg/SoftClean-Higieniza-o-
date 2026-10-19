import { createFileRoute } from "@tanstack/react-router";
import { CityPage } from "@/components/softclean/city-page";
export const Route = createFileRoute("/higienizacao-em-nova-lacerda")({
  head: () => ({
    meta: [
      { title: "Higienização de Estofados em Nova Lacerda – SoftClean" },
      { name: "description", content: "Procura higienização de estofados em Nova Lacerda, MT? Consulte a SoftClean para limpeza de sofás, poltronas, cadeiras, colchões e interiores automotivos. Atendimento sujeito à disponibilidade." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Higienização de Estofados em Nova Lacerda – SoftClean" },
      { property: "og:description", content: "Procura higienização de estofados em Nova Lacerda, MT? Consulte a SoftClean para limpeza de sofás, poltronas, cadeiras, colchões e interiores automotivos. Atendimento sujeito à disponibilidade." },
      { property: "og:locale", content: "pt_BR" },
    ],
    links: [{ rel: "canonical", href: "https://softclean-higienizacao.higgsfield.app/higienizacao-em-nova-lacerda" }],
  }),
  component: () => <CityPage city="Nova Lacerda" headline="Higienização de estofados em Nova Lacerda" intro="A SoftClean recebe pedidos de orçamento para limpeza de sofás, poltronas, cadeiras estofadas e colchões, além da higienização interna de veículos em Nova Lacerda, Mato Grosso. Envie fotos e informe o tipo de superfície pelo WhatsApp para iniciar a avaliação. A disponibilidade de atendimento é confirmada conforme agenda." />,
});
