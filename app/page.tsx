const whatsappUrl =
  "https://wa.me/5511971244859?text=Olá%2C%20Felipe!%20Gostaria%20de%20conversar%20sobre%20planejamento%20patrimonial.";

const specialties = [
  {
    number: "01",
    title: "Construção e expansão patrimonial",
    text: "Estratégias para transformar objetivos em ativos, renda e crescimento sustentável.",
  },
  {
    number: "02",
    title: "Planejamento para empresários",
    text: "Decisões que respeitam o fluxo de caixa, preservam liquidez e ampliam possibilidades.",
  },
  {
    number: "03",
    title: "Estratégias de contemplação",
    text: "Caminhos estruturados para organizar sua aquisição com clareza, prazo e responsabilidade.",
  },
];

const processSteps = [
  ["01", "Escuta", "Você compartilha o que deseja construir, adquirir ou estruturar."],
  ["02", "Diagnóstico", "Analisamos objetivos, momento financeiro, prazo e prioridades."],
  ["03", "Cenários", "Comparamos caminhos e seus impactos para uma decisão mais consciente."],
  ["04", "Estratégia", "Desenhamos um planejamento possível, alinhado ao seu momento."],
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <nav className="nav container" aria-label="Navegação principal">
          <a className="brand" href="#inicio" aria-label="Felipe Soares, ES11 Capital">
            <img src="/es11-logo.png" alt="ES11 Capital" />
            <span>FELIPE SOARES</span>
          </a>
          <div className="nav-links">
            <a href="#especialidades">Especialidades</a>
            <a href="#atendimento">Atendimento</a>
            <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
              Agendar conversa <span aria-hidden="true">↗</span>
            </a>
          </div>
        </nav>

        <div className="hero-grid container">
          <div className="hero-copy">
            <p className="eyebrow"><span /> ESTRATÉGIA PATRIMONIAL</p>
            <h1>Patrimônio se constrói com <em>clareza.</em></h1>
            <p className="lead">
              Estratégias personalizadas para pessoas e empresas que desejam crescer com inteligência,
              preservação de caixa e visão de longo prazo.
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href={whatsappUrl} target="_blank" rel="noreferrer">
                Conversar com Felipe <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#atendimento">Conhecer meu atendimento <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-credentials" aria-label="Informações de atendimento">
              <p><strong>São Paulo, SP</strong><br />atendimento em todo o Brasil</p>
              <p><strong>ES11 Capital</strong><br />estratégia, patrimônio e independência</p>
            </div>
          </div>
          <div className="portrait-frame">
            <div className="portrait-glow" />
            <img className="portrait" src="/felipe-soares-retrato.webp" alt="Felipe Soares" />
            <div className="portrait-note"><span>F</span><p>Felipe Soares<br /><small>ES11 Capital</small></p></div>
            <div className="hero-statement">Planejamento que<br /><em>ganha direção.</em></div>
          </div>
        </div>
        <div className="hero-line" />
      </section>

      <section className="intro section container">
        <p className="eyebrow dark"><span /> QUEM SOU</p>
        <div className="intro-grid">
          <h2>Uma conversa bem conduzida pode mudar a direção do seu patrimônio.</h2>
          <div>
            <p>Sou sócio da ES11 Capital e atuo com estratégias patrimoniais voltadas para pessoas e empresas que desejam construir patrimônio de forma inteligente.</p>
            <p>Minha trajetória começou na área comercial, onde desenvolvi uma visão consultiva focada em entender os objetivos de cada cliente e encontrar as melhores soluções. Hoje, ajudo clientes a transformar planejamento financeiro em crescimento patrimonial por meio de estratégias personalizadas.</p>
          </div>
        </div>
      </section>

      <section className="specialties section" id="especialidades">
        <div className="container">
          <div className="section-heading split-heading">
            <div><p className="eyebrow dark"><span /> ESPECIALIDADES</p><h2>Estratégia para cada<br />próximo passo.</h2></div>
            <p>Um planejamento patrimonial começa com o entendimento do seu momento — e não com uma solução pronta.</p>
          </div>
          <div className="specialty-grid">
            {specialties.map((item) => (
              <article className="specialty-card" key={item.number}>
                <span className="card-number">{item.number}</span>
                <div className="card-line" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="card-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="audience section container">
        <div className="audience-accent" />
        <div className="audience-copy">
          <p className="eyebrow dark"><span /> PARA QUEM É</p>
          <h2>Para quem trata o futuro como um projeto.</h2>
          <p>Atendo principalmente empresários, profissionais liberais, investidores e famílias que desejam construir patrimônio, adquirir imóveis ou veículos de forma estratégica, preservando o caixa e planejando o crescimento financeiro no longo prazo.</p>
          <a className="text-link dark-link" href={whatsappUrl} target="_blank" rel="noreferrer">Quero estruturar meu próximo passo <span aria-hidden="true">↗</span></a>
        </div>
        <div className="audience-list" aria-label="Perfis atendidos">
          <p><span>01</span> Empresários</p>
          <p><span>02</span> Profissionais liberais</p>
          <p><span>03</span> Investidores</p>
          <p><span>04</span> Famílias</p>
        </div>
      </section>

      <section className="method section" id="atendimento">
        <div className="container">
          <div className="method-top"><p className="eyebrow"><span /> FORMA DE ATENDIMENTO</p><p>Estratégico, próximo e didático.</p></div>
          <h2>Antes de qualquer solução,<br /><em>entendemos o cenário.</em></h2>
          <p className="method-intro">Antes de apresentar qualquer caminho, busco entender seus objetivos, sua realidade financeira e seus planos futuros. Assim, o planejamento nasce alinhado ao que importa para você.</p>
          <div className="process-grid">
            {processSteps.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="difference section container">
        <div className="difference-quote">“</div>
        <div>
          <p className="eyebrow dark"><span /> O DIFERENCIAL</p>
          <h2>Não é sobre apresentar um produto. É sobre construir uma estratégia que faça sentido para você.</h2>
        </div>
        <p className="difference-copy">Meu compromisso é oferecer um atendimento consultivo e personalizado, acompanhando sua evolução e ajudando na tomada de decisões com mais segurança.</p>
      </section>

      <section className="cta-section">
        <div className="cta-panel container">
          <p className="eyebrow"><span /> O PRÓXIMO PASSO É SEU</p>
          <h2>Objetivos claros.<br /><em>Resultados concretos.</em></h2>
          <p>Construir patrimônio não acontece por acaso. Se você tem um objetivo, mas ainda não sabe qual é o melhor caminho para alcançá-lo, vamos analisar sua situação e montar um planejamento para o seu momento.</p>
          <a className="button button-gold" href={whatsappUrl} target="_blank" rel="noreferrer">Agendar uma conversa <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <footer>
        <div className="container footer-grid">
          <div><a className="brand footer-brand" href="#inicio"><img src="/es11-logo.png" alt="ES11 Capital" /><span>FELIPE SOARES</span></a><p>Estratégia, patrimônio<br />e independência.</p></div>
          <div><p className="footer-label">CONTATO</p><a href={whatsappUrl} target="_blank" rel="noreferrer">(11) 97124-4859</a><p>São Paulo, SP · Brasil</p></div>
          <div><p className="footer-label">SOCIAL</p><a href="https://www.instagram.com/felipennsoares/" target="_blank" rel="noreferrer">@felipennsoares ↗</a><a href="https://www.instagram.com/es11capital/" target="_blank" rel="noreferrer">@es11capital ↗</a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Felipe Soares · ES11 Capital</span><span>Atendimento consultivo e personalizado. Não há promessa de resultado ou prazo de contemplação.</span></div>
      </footer>
    </main>
  );
}
