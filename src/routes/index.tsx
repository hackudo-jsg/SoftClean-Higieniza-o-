import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type CSSProperties, type FormEvent } from "react";

const WA = "https://wa.me/5565992323005?text=Ol%C3%A1%21%20Encontrei%20a%20SoftClean%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Higienização de Estofados em Pontes e Lacerda – SoftClean" },
      { property: "og:title", content: "Higienização de Estofados em Pontes e Lacerda – SoftClean" },
      { name: "description", content: "Precisa de higienização de estofados em Pontes e Lacerda, MT? A SoftClean atende sofás, poltronas, cadeiras, colchões e interiores automotivos. Orçamento pelo WhatsApp; consulte atendimento em Nova Lacerda e Conquista d’Oeste." },
      { property: "og:description", content: "Higienização de sofás, poltronas, cadeiras, colchões e interiores automotivos em Pontes e Lacerda, MT. Peça orçamento à SoftClean pelo WhatsApp." },
      { name: "keywords", content: "higienização de estofados, limpeza de sofá, limpeza de estofados, higienização automotiva, Pontes e Lacerda, Nova Lacerda, Conquista d'Oeste, Mato Grosso" },
      { property: "og:locale", content: "pt_BR" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "google-site-verification", content: "ED9BjCOqn6MyKEBL6XuVnMiiBLWUxvTcX5uBiOGf86A" },
    ],
    links: [{ rel: "canonical", href: "https://softclean-higienizacao.vercel.app/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const [scroll, setScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [reviews, setReviews] = useState<Array<{ id: number; name: string; city: string; stars: number; comment: string; photos: string[]; created_at: string }>>([]);
  const [reviewName, setReviewName] = useState("");
  const [reviewStars, setReviewStars] = useState(5);
  const [reviewComment, setReviewComment] = useState("");
  const [reviewCity, setReviewCity] = useState("");
  const [reviewPhotos, setReviewPhotos] = useState<string[]>([]);
  const [reviewPhotoNames, setReviewPhotoNames] = useState<string[]>([]);
  const [reviewStatus, setReviewStatus] = useState("");
  const [reviewBusy, setReviewBusy] = useState(false);

  useEffect(() => {
    fetch("/api/reviews").then((r) => r.ok ? r.json() : Promise.reject()).then((data) => setReviews(Array.isArray(data.reviews) ? data.reviews : [])).catch(() => {});
    let frame = 0;
    const onScroll = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        setScroll(Math.min(1, window.scrollY / max));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    nodes.forEach((node) => observer.observe(node));
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <main className="sc-site" style={{ "--scroll-progress": scroll } as CSSProperties}>
      <div className="sc-progress" aria-hidden="true"><span style={{ transform: `scaleX(${scroll})` }} /></div>
      <header className="sc-nav">
        <a href="#inicio" className="sc-brand" aria-label="SoftClean Higienização — início">
          <span className="sc-brand-logo"><img src="/assets/softclean/logo-transparent.webp" alt="" width="180" height="92" fetchPriority="high" /></span>
        </a>
        <button className="sc-menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}><span/><span/></button>
        <nav className={menuOpen ? "sc-links is-open" : "sc-links"} aria-label="Navegação principal">
          <a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a><a href="#processo" onClick={() => setMenuOpen(false)}>Como funciona</a><a href="#regiao" onClick={() => setMenuOpen(false)}>Região atendida</a>
          <a className="sc-nav-cta" href={WA} target="_blank" rel="noreferrer">Pedir orçamento <span>↗</span></a>
        </nav>
      </header>

      <section className="sc-hero" id="inicio">
        <div className="sc-hero-image" style={{ transform: `translate3d(0, ${scroll * 24}px, 0) scale(${1.02 + scroll * 0.025})` }} aria-hidden="true" /><div className="sc-hero-orbit sc-orbit-one" aria-hidden="true"/><div className="sc-hero-orbit sc-orbit-two" aria-hidden="true"/><div className="sc-hero-spark sc-spark-one" aria-hidden="true">✦</div><div className="sc-hero-spark sc-spark-two" aria-hidden="true">✧</div>
        <div className="sc-hero-wash" aria-hidden="true" />
        <div className="sc-hero-content">
          <p className="sc-eyebrow"><span/> CUIDADO PROFISSIONAL COM SEUS ESTOFADOS</p>
          <h1>Higienização de estofados em <em>Pontes e Lacerda.</em></h1>
          <p className="sc-hero-tagline">Mais cuidado, mais conforto, mais limpeza.</p>
          <p className="sc-hero-copy">A SoftClean oferece higienização de estofados em Pontes e Lacerda, MT, incluindo limpeza de sofás, poltronas, cadeiras estofadas e colchões, além da higienização interna de veículos. Atendimento residencial e comercial; consulte a disponibilidade para Nova Lacerda e Conquista d'Oeste.</p>
          <div className="sc-hero-actions"><a className="sc-button sc-button-green" href={WA} target="_blank" rel="noreferrer">Solicitar orçamento <span>↗</span></a><a className="sc-text-link" href="#servicos">Conheça os serviços <span>↓</span></a></div>
        </div>
        <div className="sc-hero-bottom"><span>SOFTCLEAN · HIGIENIZAÇÃO</span><span>MT, BRASIL <b>↘</b></span></div>
        <div className="sc-scroll-cue"><span/> ROLE PARA DESCOBRIR</div>
      </section>

      <section className="sc-intro sc-section" data-reveal>
        <div className="sc-intro-label"><span className="sc-number">01</span><span>O cuidado faz diferença</span></div>
        <div className="sc-intro-copy"><h2>Limpeza que vai além da <em>aparência.</em></h2><p>Seu sofá faz parte da rotina. Os bancos acompanham cada viagem. A SoftClean cuida desses espaços com atenção aos tecidos, às superfícies e aos detalhes.</p><a className="sc-inline-link" href={WA} target="_blank" rel="noreferrer">Converse com a SoftClean <span>↗</span></a></div>
      </section>

      <section className="sc-services sc-section" id="servicos">
        <div className="sc-section-heading" data-reveal><div><p className="sc-eyebrow sc-eyebrow-dark">SERVIÇOS</p><h2>Cuidado certo para<br/><em>cada superfície.</em></h2></div><p>Precisa de limpeza de sofá em Pontes e Lacerda? A SoftClean atende sofás, poltronas, cadeiras estofadas, colchões e interiores automotivos. Consulte a disponibilidade para Nova Lacerda e Conquista d'Oeste e peça seu orçamento.</p></div>
        <div className="sc-service-grid sc-service-grid-two">
          <article className="sc-service-card sc-service-main" data-reveal><div className="sc-service-art sc-art-illustration"><img src="/assets/softclean/estofados.svg" alt="Ilustração de sofá para serviço de higienização de estofados da SoftClean em Pontes e Lacerda" loading="lazy" width="900" height="620"/><span className="sc-art-index">01 / RESIDENCIAL</span><span className="sc-art-line"/></div><div className="sc-service-info"><span>01 — CASA & CONFORTO</span><h3>Sofás e estofados</h3><p>Higienização de sofás, poltronas, cadeiras estofadas e colchões em Pontes e Lacerda. A SoftClean avalia o tecido e as condições da peça para orientar o orçamento e o atendimento residencial ou comercial.</p><a href={WA} target="_blank" rel="noreferrer" aria-label="Solicitar orçamento para sofás e estofados">Pedir orçamento <b>↗</b></a></div></article>
          <article className="sc-service-card" data-reveal><div className="sc-service-art sc-art-illustration"><img src="/assets/softclean/automotivo.svg" alt="Ilustração de automóvel para serviço de higienização interna de veículos em Pontes e Lacerda" loading="lazy" width="900" height="620"/><span className="sc-art-index">02 / AUTOMOTIVO</span><span className="sc-art-line"/></div><div className="sc-service-info"><span>02 — CUIDADO AUTOMOTIVO</span><h3>Interior de veículos</h3><p>Higienização interna de veículos em Pontes e Lacerda: bancos, teto, carpetes e outras superfícies estofadas, conforme avaliação do material e das condições do interior.</p><a href={WA} target="_blank" rel="noreferrer" aria-label="Solicitar orçamento para higienização interna de veículos">Pedir orçamento <b>↗</b></a></div></article>
        </div>
        <p className="sc-service-note">Cada orçamento é personalizado. Envie fotos pelo WhatsApp e conte sua cidade para agilizar a avaliação.</p>
      </section>

      <section className="sc-home-service sc-section" data-reveal><p className="sc-eyebrow sc-eyebrow-dark">CUIDADO ONDE VOCÊ ESTÁ</p><h2>Seu estofado renovado,<br/><em>no conforto da sua casa.</em></h2><p>Atendimento residencial e comercial, com cuidado profissional para sofás, estofados e interiores automotivos. Chame a SoftClean e solicite seu orçamento.</p><a className="sc-button sc-button-green" href={WA} target="_blank" rel="noreferrer">Agendar atendimento <span>↗</span></a></section>

      <section className="sc-reviews sc-section" id="avaliacoes" data-reveal>
        <div className="sc-reviews-heading"><div><p className="sc-eyebrow sc-eyebrow-dark">A EXPERIÊNCIA DE QUEM CONTRATA</p><h2>Uma boa limpeza<br/><em>se sente nos detalhes.</em></h2></div><div className="sc-rating-summary"><strong>{reviews.length ? (reviews.reduce((sum, r) => sum + r.stars, 0) / reviews.length).toFixed(1).replace(".", ",") : "—"}</strong><span className={reviews.length ? "sc-stars" : "sc-stars sc-stars-empty"} aria-label={reviews.length ? "Avaliações de clientes" : "Ainda sem avaliações"}>{reviews.length ? "★★★★★" : "☆☆☆☆☆"}</span><small>{reviews.length ? `${reviews.length} avaliação(ões) de clientes` : "Seja a primeira pessoa a avaliar"}</small></div></div>
        {reviews.length ? <div className="sc-review-grid">{reviews.slice(0, 6).map((review) => <article className="sc-review-card" key={review.id}><div className="sc-stars" aria-label={`${review.stars} de 5 estrelas`}>{"★".repeat(review.stars)}{"☆".repeat(5-review.stars)}</div><p>{review.comment || "Atendimento avaliado pelo cliente."}</p><div className="sc-review-author"><span className="sc-review-avatar">{review.name.trim().charAt(0).toUpperCase()}</span><div><strong>{review.name}</strong><small>{review.city || "Cliente SoftClean"}</small></div></div>{review.photos?.length ? <div className="sc-review-photos">{review.photos.map((photo, index) => <a href={photo} target="_blank" rel="noreferrer" key={index} aria-label={`Abrir foto ${index + 1} enviada por ${review.name}`}><img src={photo} alt={`Foto de serviço enviada por ${review.name}`} loading="lazy" width="120" height="90"/></a>)}</div> : null}</article>)}</div> : <div className="sc-review-empty"><span className="sc-stars">★★★★★</span><h3>Sua opinião pode ser a primeira.</h3><p>Estamos abrindo este espaço para avaliações reais de quem já contratou a SoftClean. Conte como foi sua experiência.</p></div>}
        <div className="sc-review-form-wrap"><div><p className="sc-eyebrow sc-eyebrow-dark">AVALIE NOSSO SERVIÇO</p><h3>Como foi sua experiência?</h3><p>Envie sua avaliação real. Seu nome, cidade, comentário e fotos escolhidas ficarão visíveis publicamente após o envio.</p></div><form className="sc-review-form" onSubmit={async (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setReviewStatus(""); setReviewBusy(true); try { const response = await fetch("/api/reviews", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: reviewName, city: reviewCity, stars: reviewStars, comment: reviewComment, photos: reviewPhotos }) }); const data = await response.json(); if (!response.ok) throw new Error(data.error || "Não foi possível enviar sua avaliação."); setReviews((current) => [data.review, ...current]); setReviewName(""); setReviewCity(""); setReviewStars(5); setReviewComment(""); setReviewPhotos([]); setReviewPhotoNames([]); setReviewStatus("Obrigado! Sua avaliação foi publicada."); } catch (error) { setReviewStatus(error instanceof Error ? error.message : "Erro ao enviar. Tente novamente."); } finally { setReviewBusy(false); } }}><label htmlFor="review-name">Seu nome</label><input id="review-name" value={reviewName} onChange={(e) => setReviewName(e.target.value)} maxLength={60} minLength={2} required placeholder="Ex.: Mariana Silva"/><label htmlFor="review-city">Cidade <span>(opcional)</span></label><input id="review-city" value={reviewCity} onChange={(e) => setReviewCity(e.target.value)} maxLength={80} placeholder="Ex.: Pontes e Lacerda - MT"/><label>Nota do serviço</label><div className="sc-star-picker" role="radiogroup" aria-label="Escolha de uma a cinco estrelas">{[1,2,3,4,5].map((n) => <button type="button" key={n} className={n <= reviewStars ? "is-selected" : ""} aria-label={`${n} estrela${n > 1 ? "s" : ""}`} aria-pressed={reviewStars === n} onClick={() => setReviewStars(n)}>★</button>)}</div><label htmlFor="review-comment">Comentário <span>(opcional)</span></label><textarea id="review-comment" value={reviewComment} onChange={(e) => setReviewComment(e.target.value)} maxLength={500} rows={4} placeholder="Conte brevemente como foi o atendimento..."/><label htmlFor="review-photos">Fotos do serviço <span>(opcional · até 3 imagens)</span></label><input id="review-photos" type="file" accept="image/jpeg,image/png,image/webp" multiple onChange={async (e) => { const files = Array.from(e.target.files ?? []).slice(0, 3); const optimized = await Promise.all(files.map((file) => new Promise<string>((resolve, reject) => { const img = new Image(); const reader = new FileReader(); reader.onload = () => { img.onload = () => { const scale = Math.min(1, 1200 / Math.max(img.naturalWidth, img.naturalHeight)); const canvas = document.createElement("canvas"); canvas.width = Math.max(1, Math.round(img.naturalWidth * scale)); canvas.height = Math.max(1, Math.round(img.naturalHeight * scale)); const ctx = canvas.getContext("2d"); if (!ctx) { reject(new Error("Não foi possível preparar as fotos.")); return; } ctx.drawImage(img, 0, 0, canvas.width, canvas.height); resolve(canvas.toDataURL("image/jpeg", 0.72)); }; img.onerror = () => reject(new Error("Não foi possível ler uma das fotos.")); img.src = String(reader.result); }; reader.onerror = () => reject(new Error("Não foi possível ler as fotos.")); reader.readAsDataURL(file); }))); setReviewPhotos(optimized); setReviewPhotoNames(files.map((f) => f.name)); }} /><small className="sc-upload-help">As fotos são reduzidas automaticamente antes do envio. Não envie imagens com dados pessoais visíveis.</small>{reviewPhotoNames.length ? <div className="sc-review-preview">{reviewPhotoNames.map((name, i) => <span key={`${name}-${i}`}>{name}</span>)}</div> : null}<button className="sc-button sc-button-green" type="submit" disabled={reviewBusy}>{reviewBusy ? "Enviando…" : "Publicar avaliação"} <span>↗</span></button>{reviewStatus && <p className="sc-review-status" role="status">{reviewStatus}</p>}</form></div>
      </section>

      <section className="sc-process sc-section" id="processo">
        <div className="sc-process-heading" data-reveal><p className="sc-eyebrow">DO PRIMEIRO CONTATO AO CUIDADO FINAL</p><h2>Simples para você.<br/><em>Cuidadoso em cada etapa.</em></h2></div>
        <div className="sc-steps"><article data-reveal><span>01</span><h3>Conte o que precisa</h3><p>Envie uma mensagem e, se possível, fotos do estofado ou do interior do veículo.</p></article><article data-reveal><span>02</span><h3>Receba seu orçamento</h3><p>Avaliamos o serviço solicitado e combinamos os detalhes do atendimento.</p></article><article data-reveal><span>03</span><h3>Agende o cuidado</h3><p>Defina o melhor horário e tire suas dúvidas antes da higienização.</p></article></div>
      </section>

      <section className="sc-region sc-section" id="regiao" data-reveal>
        <div className="sc-region-top"><span className="sc-number">03</span><p className="sc-eyebrow sc-eyebrow-dark">ATENDIMENTO REGIONAL · MATO GROSSO</p></div>
        <h2>Mais perto de você,<br/><em>na região oeste de MT.</em></h2>
        <p className="sc-region-copy">A SoftClean recebe pedidos de orçamento para higienização de estofados e interiores automotivos em Pontes e Lacerda, Nova Lacerda e Conquista d'Oeste, Mato Grosso. Entre em contato para confirmar a disponibilidade de atendimento em sua cidade.</p>
        <div className="sc-city-list"><a href="/higienizacao-em-pontes-e-lacerda">Pontes e Lacerda <span>↗</span></a><a href="/higienizacao-em-nova-lacerda">Nova Lacerda <span>↗</span></a><a href="/higienizacao-em-conquista-do-oeste">Conquista d'Oeste <span>↗</span></a></div>
      </section>

      <section className="sc-faq sc-section" data-reveal><div><p className="sc-eyebrow sc-eyebrow-dark">DÚVIDAS FREQUENTES</p><h2>Antes de agendar.</h2></div><div className="sc-faq-list"><details><summary>Como peço um orçamento? <span>+</span></summary><p>Toque em qualquer botão de WhatsApp, informe a cidade, o tipo de estofado e envie fotos para ajudar na avaliação.</p></details><details><summary>Vocês atendem residências e empresas? <span>+</span></summary><p>Sim! A SoftClean realiza atendimento residencial e comercial. Higienizamos estofados em casas, apartamentos, escritórios e outros ambientes comerciais. Chame no WhatsApp para informar sua cidade e solicitar um orçamento.</p></details><details><summary>Quanto tempo demora a higienização? <span>+</span></summary><p>O tempo varia conforme o tamanho, o material e as condições do estofado. A SoftClean confirma a previsão ao avaliar o serviço.</p></details><details><summary>Vocês atendem carros? <span>+</span></summary><p>Sim, você pode consultar orçamento para bancos, teto, carpetes e outros estofados do interior automotivo.</p></details></div></section>

      <section className="sc-contact" id="contato" data-reveal><div className="sc-contact-mark" aria-hidden="true">S<span>.</span></div><div className="sc-contact-copy"><p className="sc-eyebrow">SEU ESTOFADO MERECE ESSE CUIDADO</p><h2>Vamos cuidar<br/>do seu <em>espaço?</em></h2><p>Conte para nós o que precisa de higienização e peça seu orçamento sem compromisso.</p><a className="sc-button sc-button-white" href={WA} target="_blank" rel="noreferrer">Falar com a SoftClean <span>↗</span></a></div></section>

      <footer className="sc-footer"><a href="#inicio" className="sc-brand sc-brand-footer"><span className="sc-brand-logo"><img src="/assets/softclean/logo-transparent.webp" alt="SoftClean Higienização" width="180" height="92" loading="lazy"/></span></a><p>Atendimento no conforto da sua casa · Pontes e Lacerda · Nova Lacerda · Conquista d'Oeste</p><div className="sc-footer-bottom"><span>© {new Date().getFullYear()} SoftClean Higienização</span><span>Pontes e Lacerda · Nova Lacerda · Conquista d'Oeste — MT</span><a href={WA} target="_blank" rel="noreferrer">WhatsApp ↗</a></div></footer>
      <a className="sc-whatsapp-float" href={WA} target="_blank" rel="noreferrer" aria-label="Falar com a SoftClean pelo WhatsApp"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.2A12.5 12.5 0 0 0 5.3 22.1L3.5 28.5l6.6-1.7A12.5 12.5 0 1 0 16 3.2Zm0 22.5a10 10 0 0 1-5.1-1.4l-.4-.2-3.9 1 1-3.8-.3-.4A10 10 0 1 1 16 25.7Zm5.5-7.5c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8.2 8.2 0 0 1-2.5-1.5 9.4 9.4 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.4.3-.6s0-.4 0-.6-.7-1.7-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.8 1.2 3.2 1.4 3.4 2.4 3.7 5.9 5.1c.8.3 1.4.5 1.9.6.8.2 1.5.2 2.1.1.7-.1 1.8-.7 2.1-1.4s.3-1.3.2-1.4-.3-.2-.6-.4Z"/></svg></a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"LocalBusiness","name":"SoftClean Higienização","description":"Higienização de estofados em Pontes e Lacerda, MT: limpeza de sofás, poltronas, cadeiras estofadas, colchões e interiores automotivos. Atendimento residencial e comercial mediante agendamento.","url":"https://softclean-higienizacao.vercel.app/","telephone":"+55 65 99232-3005","serviceType":["Higienização de estofados","Limpeza de sofás","Higienização interna de veículos"],"areaServed":[{"@type":"City","name":"Pontes e Lacerda","containedInPlace":{"@type":"State","name":"Mato Grosso"}},{"@type":"City","name":"Nova Lacerda","containedInPlace":{"@type":"State","name":"Mato Grosso"}},{"@type":"City","name":"Conquista d'Oeste","containedInPlace":{"@type":"State","name":"Mato Grosso"}}],"priceRange":"Sob orçamento"}) }} />
    </main>
  );
}
