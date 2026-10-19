import { createFileRoute } from "@tanstack/react-router";
import { CityPage } from "@/components/softclean/city-page";
export const Route = createFileRoute("/higienizacao-em-conquista-do-oeste")({
  head: () => ({
    meta: [
      { title: "Higienização de Estofados em Conquista d’Oeste – SoftClean" },
      { name: "description", content: "Procura higienização de estofados em Conquista d’Oeste, MT? Consulte a SoftClean para limpeza de sofás, poltronas, cadeiras, colchões e interiores automotivos. Atendimento sujeito à disponibilidade." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Higienização de Estofados em Conquista d’Oeste – SoftClean" },
      { property: "og:description", content: "Procura higienização de estofados em Conquista d’Oeste, MT? Consulte a SoftClean para limpeza de sofás, poltronas, cadeiras, colchões e interiores automotivos. Atendimento sujeito à disponibilidade." },
      { property: "og:locale", content: "pt_BR" },
    ],
    links: [{ rel: "canonical", href: "https://softclean-higienizacao.vercel.app/higienizacao-em-conquista-do-oeste" }],
  }),
  component: () => <CityPage city="Conquista d'Oeste" headline="Higienização de estofados em Conquista d'Oeste" intro="A SoftClean recebe pedidos de orçamento para higienização de sofás, poltronas, cadeiras estofadas e colchões, além de limpeza interna de veículos em Conquista d'Oeste, Mato Grosso. Envie fotos e informe o tipo de superfície pelo WhatsApp para iniciar a avaliação. A disponibilidade de atendimento é confirmada conforme agenda." />,
});
