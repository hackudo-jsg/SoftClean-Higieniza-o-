import { createFileRoute } from "@tanstack/react-router";
import { CityPage } from "@/components/softclean/city-page";

export const Route = createFileRoute("/higienizacao-em-conquista-do-oeste")({
  head: () => ({
    meta: [
      { title: "Higienização de Estofados em Conquista d’Oeste, MT | SoftClean" },
      { name: "description", content: "Peça orçamento para higienização de sofás, poltronas, cadeiras, colchões e interiores automotivos em Conquista d’Oeste, MT. Atendimento mediante confirmação de disponibilidade." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Higienização de Estofados em Conquista d’Oeste, MT | SoftClean" },
      { property: "og:description", content: "Consulte orçamento de higienização de estofados e interior automotivo em Conquista d’Oeste, Mato Grosso. Fale com a SoftClean pelo WhatsApp." },
      { property: "og:locale", content: "pt_BR" },
    ],
    links: [{ rel: "canonical", href: "https://softclean-higienizacao.vercel.app/higienizacao-em-conquista-do-oeste" }],
  }),
  component: () => <CityPage city="Conquista d'Oeste" headline="Higienização de estofados em Conquista d'Oeste" intro="A SoftClean recebe consultas de orçamento para higienização de estofados e interiores automotivos em Conquista d'Oeste, MT. Informe se precisa cuidar de sofá, poltronas, cadeiras, colchões ou bancos do veículo e, se possível, envie fotos para iniciar a avaliação. A disponibilidade é confirmada antes do agendamento." />,
});
