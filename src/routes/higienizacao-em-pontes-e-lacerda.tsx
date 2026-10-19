import { createFileRoute } from "@tanstack/react-router";
import { CityPage } from "@/components/softclean/city-page";
export const Route = createFileRoute("/higienizacao-em-pontes-e-lacerda")({
  head: () => ({
    meta: [
      { title: "Higienização de Estofados em Pontes e Lacerda – SoftClean" },
      { name: "description", content: "Precisa de limpeza de sofá em Pontes e Lacerda, MT? A SoftClean oferece orçamento para sofás, poltronas, cadeiras, colchões e interiores automotivos. Consulte disponibilidade e fale pelo WhatsApp." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Higienização de Estofados em Pontes e Lacerda – SoftClean" },
      { property: "og:description", content: "Precisa de limpeza de sofá em Pontes e Lacerda, MT? A SoftClean oferece orçamento para sofás, poltronas, cadeiras, colchões e interiores automotivos. Consulte disponibilidade e fale pelo WhatsApp." },
      { property: "og:locale", content: "pt_BR" },
    ],
    links: [{ rel: "canonical", href: "https://softclean-higienizacao.higgsfield.app/higienizacao-em-pontes-e-lacerda" }],
  }),
  component: () => <CityPage city="Pontes e Lacerda" headline="Higienização de estofados em Pontes e Lacerda" intro="A SoftClean oferece orçamento para higienização de sofás, poltronas, cadeiras estofadas e colchões, além da limpeza interna de veículos em Pontes e Lacerda, Mato Grosso. Informe o tipo de tecido ou superfície e envie fotos pelo WhatsApp para iniciar a avaliação. O atendimento residencial e comercial é confirmado conforme disponibilidade e agenda." />,
});
