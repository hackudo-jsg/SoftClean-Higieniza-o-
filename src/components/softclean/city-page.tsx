import { Link } from "@tanstack/react-router";

const WHATSAPP = "https://wa.me/5565992323005?text=Ol%C3%A1%21%20Gostaria%20de%20um%20or%C3%A7amento%20de%20higieniza%C3%A7%C3%A3o%20de%20estofados.";

type CityPageProps = {
  city: string;
  headline: string;
  intro: string;
};

export function CityPage({ city, headline, intro }: CityPageProps) {
  return (
    <main className="sc-site sc-city-page">
      <header className="sc-nav">
        <a href="/" className="sc-brand" aria-label="SoftClean Higienização — início">
          <span className="sc-brand-logo"><img src="/assets/softclean/logo-transparent.webp" alt="SoftClean Higienização" width="180" height="92" /></span>
        </a>
        <nav className="sc-links sc-city-nav" aria-label="Navegação principal">
          <a href="/">Início</a>
          <a href="#servicos">Serviços</a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="sc-nav-cta">Pedir orçamento <span>↗</span></a>
        </nav>
      </header>

      <section className="sc-city-hero">
        <div className="sc-city-hero-image" aria-hidden="true" />
        <div className="sc-city-hero-content">
          <p className="sc-eyebrow"><span /> SOFTCLEAN HIGIENIZAÇÃO · MATO GROSSO</p>
          <h1>{headline}</h1>
          <p>{intro}</p>
          <a className="sc-button sc-button-green" href={WHATSAPP} target="_blank" rel="noreferrer">Pedir orçamento pelo WhatsApp <span>↗</span></a>
        </div>
      </section>

      <section className="sc-city-content sc-section">
        <p className="sc-eyebrow sc-eyebrow-dark">ATENDIMENTO NA SUA REGIÃO</p>
        <h2>Higienização de estofados em <em>{city}.</em></h2>
        <p>A SoftClean recebe solicitações de orçamento para cuidar de estofados residenciais, comerciais e interiores automotivos. O primeiro passo é entender qual peça precisa de higienização, o tipo de revestimento e as condições observadas. O atendimento em {city} é confirmado conforme disponibilidade e agenda.</p>

        <div className="sc-city-services" id="servicos">
          <article><span>01</span><h3>Sofás e estofados</h3><p>Consulte orçamento para sofás, poltronas, cadeiras estofadas e colchões. Informe, se souber, o tipo de tecido e envie fotos para ajudar na avaliação inicial.</p></article>
          <article><span>02</span><h3>Higienização automotiva interna</h3><p>Consulte a higienização de bancos, teto, carpetes e outras superfícies internas do veículo. O serviço indicado depende do material e das condições de cada parte.</p></article>
          <article><span>03</span><h3>Atendimento residencial e comercial</h3><p>Informe se o serviço é para sua casa, apartamento, escritório ou outro espaço comercial para que a equipe entenda melhor sua necessidade.</p></article>
        </div>

        <div className="sc-city-detail">
          <h2>Como solicitar um orçamento em <em>{city}</em></h2>
          <ol>
            <li><strong>Conte o que precisa de cuidado.</strong> Diga se é sofá, colchão, poltrona, cadeira estofada ou interior de veículo.</li>
            <li><strong>Envie fotos pelo WhatsApp.</strong> Imagens gerais e de perto ajudam a entender o item; elas não substituem a avaliação do material.</li>
            <li><strong>Confirme os detalhes.</strong> O orçamento e a disponibilidade são combinados diretamente com a SoftClean antes do agendamento.</li>
          </ol>
          <p>O orçamento pode variar conforme o tipo e o tamanho da peça, o material, as condições do estofado e o serviço solicitado. Não é necessário saber o nome exato do tecido para entrar em contato: descreva o que você tem e envie fotos.</p>
          <a className="sc-button sc-button-green" href={WHATSAPP} target="_blank" rel="noreferrer">Consultar atendimento em {city} <span>↗</span></a>
        </div>

        <div className="sc-city-detail sc-city-faq">
          <h2>Dúvidas frequentes</h2>
          <details><summary>Como saber se meu sofá pode ser higienizado? <span>+</span></summary><p>Envie fotos e informe, se souber, o material e as condições da peça. A indicação do procedimento deve considerar o revestimento; quando houver dúvida, é importante avaliar o material antes de iniciar.</p></details>
          <details><summary>Posso pedir orçamento sem saber o tipo de tecido? <span>+</span></summary><p>Sim. Envie fotos gerais e de perto pelo WhatsApp e descreva a peça. A identificação por foto é apenas uma referência inicial, não uma garantia do tipo de tecido.</p></details>
          <details><summary>A SoftClean atende residências e empresas? <span>+</span></summary><p>Sim, a SoftClean recebe pedidos para atendimento residencial e comercial. Informe o local, a cidade e quais itens precisam de higienização para confirmar a disponibilidade.</p></details>
          <details><summary>O atendimento em {city} é garantido para qualquer data? <span>+</span></summary><p>A disponibilidade depende da agenda. Entre em contato antes de contar com uma data específica e confirme os detalhes diretamente com a SoftClean.</p></details>
        </div>

        <div className="sc-city-other">
          <h3>Veja as outras cidades atendidas sob consulta</h3>
          <p><a href="/higienizacao-em-pontes-e-lacerda">Pontes e Lacerda</a><a href="/higienizacao-em-nova-lacerda">Nova Lacerda</a><a href="/higienizacao-em-conquista-do-oeste">Conquista d'Oeste</a></p>
          <a href="/" className="sc-inline-link">Voltar ao site principal <span>↗</span></a>
        </div>
      </section>

      <footer className="sc-footer">
        <a href="/" className="sc-brand sc-brand-footer"><span className="sc-brand-logo"><img src="/assets/softclean/logo-transparent.webp" alt="SoftClean Higienização" width="180" height="92" loading="lazy" /></span></a>
        <p>Mais cuidado, mais conforto, mais limpeza.</p>
        <div className="sc-footer-bottom"><span>© {new Date().getFullYear()} SoftClean Higienização</span><span>{city} — Mato Grosso</span><a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp ↗</a></div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `Higienização de estofados em ${city}`,
        "description": `Orçamento para higienização de sofás, poltronas, cadeiras estofadas, colchões e interiores automotivos em ${city}, Mato Grosso. Atendimento sujeito à disponibilidade.`,
        "serviceType": ["Higienização de estofados", "Limpeza de sofás", "Higienização interna de veículos"],
        "provider": { "@type": "LocalBusiness", "name": "SoftClean Higienização", "url": "https://softclean-higienizacao.vercel.app/", "telephone": "+55 65 99232-3005" },
        "areaServed": { "@type": "City", "name": city, "containedInPlace": { "@type": "State", "name": "Mato Grosso" } }
      }) }} />
    </main>
  );
}
