export const consultant = {
  id: "felipe-soares",
  name: "Felipe Soares",
  role: "Sócio e Consultor Financeiro da ES11 Capital",
  whatsapp: "https://wa.me/5511971244859?text=Olá%2C%20Felipe.%20Acessei%20seu%20perfil%20no%20site%20da%20ES11%20e%20gostaria%20de%20conversar%20sobre%20meu%20planejamento%20patrimonial.",
  profileUrl: "https://www.es11capital.com.br/consultores/felipe-soares",
  image: "/felipe-soares-retrato.webp",
};

export const specialties = [
  { number: "01", title: "Construção e expansão patrimonial", text: "Estratégias para investidores, empresários e famílias que desejam ampliar patrimônio com visão de longo prazo." },
  { number: "02", title: "Planejamento para investidores e empresários", text: "Análise de aquisições, liquidez, capacidade financeira e caminhos para crescer preservando caixa." },
  { number: "03", title: "Planejamento de contemplação", text: "Estratégias de participação e lance acompanhadas de perto, sem promessa de prazo específico." },
];

export const decisions = [
  "Adquirir imóveis e formar patrimônio imobiliário",
  "Planejar a compra de imóvel comercial",
  "Diversificar ativos e preservar liquidez",
  "Planejar a compra de veículos, frota ou equipamentos",
  "Estruturar uma aquisição futura ou expansão empresarial",
  "Avaliar consórcio, financiamento ou crédito",
  "Transformar renda em patrimônio",
];

export const faq = [
  ["A primeira conversa tem custo?", "Não. A primeira conversa é um diagnóstico consultivo para entender seu objetivo e avaliar os caminhos que podem fazer sentido."],
  ["O atendimento pode ser realizado on-line?", "Sim. O atendimento pode acontecer on-line, com a mesma abordagem consultiva e personalizada."],
  ["Você atende clientes fora de São Paulo?", "Sim. O atendimento pode ser realizado para clientes em todo o Brasil."],
  ["Preciso saber qual produto quero contratar?", "Não. A conversa começa pelo objetivo e pela sua realidade, não por uma solução previamente definida."],
  ["Você atende investidores e empresas?", "Sim. Investidores, empresários, profissionais liberais, famílias e empresas fazem parte dos públicos atendidos."],
  ["Quais informações preciso preparar?", "Basta ter clareza sobre seu objetivo e um panorama do seu momento financeiro. A partir daí, a análise é conduzida em conjunto."],
  ["O atendimento continua depois da contratação?", "Quando uma estratégia é colocada em prática, o acompanhamento faz parte do atendimento para apoiar os próximos passos."],
  ["Existe garantia de contemplação?", "Não. A ES11 não trabalha com promessa de contemplação em data específica. O atendimento busca uma estratégia compatível com o objetivo, o prazo e a capacidade financeira de cada cliente."],
];

export type Article = { slug: string; category: string; title: string; excerpt: string; subtitle: string; publishedAt: string; updatedAt: string; readingTime: string; image: string; imageAlt: string; paragraphs: string[] };

export const articles: Article[] = [
  { slug: "investidores-planejamento", category: "Planejamento patrimonial", title: "Como investidores podem utilizar planejamento para ampliar patrimônio", excerpt: "Crescer patrimônio exige conectar objetivo, prazo, liquidez e capacidade de execução.", subtitle: "Planejamento transforma decisões isoladas em um caminho coerente de longo prazo.", publishedAt: "2026-07-20", updatedAt: "2026-07-20", readingTime: "6 min de leitura", image: "/felipe-soares-es11.webp", imageAlt: "Felipe Soares em reunião na ES11 Capital", paragraphs: ["Para ampliar patrimônio com consistência, não basta olhar para uma oportunidade isolada. É preciso conectar objetivos, horizonte de tempo, liquidez e capacidade financeira.", "Um planejamento bem construído permite comparar cenários antes da decisão. Dessa forma, a aquisição de um ativo pode ser avaliada junto de outras prioridades e do impacto que ela terá sobre o caixa.", "O objetivo não é encontrar uma fórmula pronta. É construir uma estratégia que faça sentido para o momento do investidor e possa evoluir com ele."] },
  { slug: "empresarios-caixa", category: "Preservação de caixa", title: "Como empresários podem adquirir ativos sem comprometer todo o caixa", excerpt: "Uma aquisição precisa considerar o ativo desejado e a saúde do fluxo de caixa da operação.", subtitle: "Ativos estratégicos podem ser planejados sem perder de vista a liquidez da empresa.", publishedAt: "2026-07-18", updatedAt: "2026-07-20", readingTime: "5 min de leitura", image: "/felipe-soares-es11.webp", imageAlt: "Ambiente de atendimento da ES11 Capital", paragraphs: ["A aquisição de um imóvel, veículo, equipamento ou frota pode apoiar o crescimento da empresa. Mas a decisão precisa considerar também o fluxo de caixa que sustenta a operação.", "Antes de escolher um caminho, vale avaliar prazo, custo, capacidade de pagamento e o impacto de cada alternativa sobre o capital de giro.", "Quando a análise acontece antes da contratação, o empresário ganha clareza para escolher um caminho compatível com suas prioridades e com o ritmo do negócio."] },
  { slug: "imovel-consorcio", category: "Aquisições estratégicas", title: "O que avaliar antes de adquirir um imóvel com consórcio", excerpt: "Antes de escolher uma ferramenta, é importante entender objetivo, prazo, liquidez e cenários possíveis.", subtitle: "Consórcio pode ser uma ferramenta, mas a estratégia vem antes do produto.", publishedAt: "2026-07-15", updatedAt: "2026-07-20", readingTime: "7 min de leitura", image: "/felipe-soares-retrato.webp", imageAlt: "Felipe Soares, consultor financeiro da ES11 Capital", paragraphs: ["Um imóvel pode representar moradia, expansão, renda ou preservação patrimonial. Por isso, a decisão começa pela finalidade que o ativo terá dentro do planejamento.", "Consórcio, financiamento e compra à vista produzem impactos diferentes sobre prazo e liquidez. A comparação precisa partir da realidade financeira de quem vai adquirir.", "Não existe promessa de contemplação em data específica. O trabalho consultivo busca avaliar estratégias de participação e lance compatíveis com o objetivo e a capacidade financeira do cliente."] },
  { slug: "objetivos-plano", category: "Construção patrimonial", title: "Como transformar objetivos em um plano de longo prazo", excerpt: "Um objetivo ganha força quando se transforma em etapas, prioridades e decisões que conversam entre si.", subtitle: "Planejamento patrimonial começa com clareza sobre o que você deseja construir.", publishedAt: "2026-07-12", updatedAt: "2026-07-20", readingTime: "5 min de leitura", image: "/felipe-soares-retrato.webp", imageAlt: "Felipe Soares em retrato profissional", paragraphs: ["Construir patrimônio não acontece por acaso. O primeiro passo é definir o que se deseja adquirir, preservar ou ampliar e qual prazo faz sentido para esse objetivo.", "A partir daí, é possível organizar prioridades, olhar para a liquidez disponível e comparar alternativas de execução.", "Um plano de longo prazo não elimina ajustes. Ele cria uma direção para que as decisões seguintes sejam tomadas com mais consistência."] },
  { slug: "papel-da-liquidez", category: "Liquidez", title: "O papel da liquidez em uma estratégia de investimento", excerpt: "Liquidez é parte da estratégia porque preserva margem de decisão ao longo do caminho.", subtitle: "Preservar caixa não significa deixar de construir patrimônio.", publishedAt: "2026-07-09", updatedAt: "2026-07-20", readingTime: "6 min de leitura", image: "/felipe-soares-es11.webp", imageAlt: "Felipe Soares trabalhando na ES11 Capital", paragraphs: ["Liquidez representa capacidade de responder a imprevistos e oportunidades. Por isso, ela precisa ser considerada ao lado do objetivo de crescimento patrimonial.", "Comprometer todo o caixa em uma única decisão pode limitar escolhas futuras. Avaliar cenários ajuda a entender qual equilíbrio faz sentido para cada realidade.", "A estratégia adequada não é a mesma para todos. Ela depende de prazo, capacidade financeira, prioridades e tolerância a diferentes cenários."] },
  { slug: "planejar-aquisicoes", category: "Aquisições", title: "Como planejar imóveis, veículos e equipamentos", excerpt: "Planejar uma aquisição futura permite comparar caminhos antes de assumir um compromisso.", subtitle: "A melhor decisão começa antes da assinatura de qualquer contrato.", publishedAt: "2026-07-05", updatedAt: "2026-07-20", readingTime: "6 min de leitura", image: "/felipe-soares-es11.webp", imageAlt: "Reunião de planejamento na ES11 Capital", paragraphs: ["Imóveis, veículos e equipamentos têm funções diferentes, mas compartilham uma pergunta central: qual impacto essa aquisição terá sobre o patrimônio e o caixa?", "Planejar com antecedência abre espaço para avaliar prazo, recursos disponíveis, alternativas de crédito e a importância do ativo para o objetivo final.", "A análise consultiva organiza essas variáveis para que a escolha seja feita com clareza, responsabilidade e visão de longo prazo."] },
];

export const getArticle = (slug: string) => articles.find((article) => article.slug === slug);
