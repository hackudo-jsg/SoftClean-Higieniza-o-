import { createFileRoute } from "@tanstack/react-router";
import { CityPage } from "@/components/softclean/city-page";

export const Route = createFileRoute("/higienizacao-em-nova-lacerda")({
  head: () => ({
    meta: [
      { title: "Higienização de Estofados em Nova Lacerda, MT | SoftClean" },
      { name: "description", content: "Consulte a SoftClean para orçamento de limpeza de sofá, poltronas, cadeiras estofadas, colchões e interior automotivo em Nova Lacerda, MT. Atendimento sujeito à agenda." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Higienização de Estofados em Nova Lacerda, MT | SoftClean" },
      { property: "og:description", content: "Solicite orçamento para higienização de estofados e interiores automotivos em Nova Lacerda, Mato Grosso. Consulte disponibilidade pelo WhatsApp." },
      { property: "og:locale", content: "pt_BR" },
    ],
    links: [{ rel: "canonical", href: "https://softclean-higienizacao.vercel.app/higienizacao-em-nova-lacerda" }],
  }),
  component: () => <CityPage city="Nova Lacerda" headline="Higienização de estofados em Nova Lacerda" intro="Em Nova Lacerda, você pode consultar a SoftClean para orçamento de higienização de sofás, poltronas, cadeiras estofadas e colchões, além da limpeza interna de veículos. Conte qual peça precisa de cuidado e envie fotos pelo WhatsApp; a equipe confirma a possibilidade de atendimento conforme a agenda." />,
});
