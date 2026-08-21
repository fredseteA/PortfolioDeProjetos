import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Remember QRCode — Plataforma de Memoriais Digitais",
      description:
        "Plataforma SaaS completa para criação de memoriais digitais, unindo B2C (famílias homenageando entes queridos), B2B (parcerias com funerárias e cemitérios via sistema de afiliados) e um painel admin com analytics em tempo real. Cada memorial publicado recebe um QR Code exclusivo, que pode ser gravado em uma placa física de aço inox para o túmulo. Construído com Next.js e Firebase, com pagamentos via Mercado Pago (webhooks idempotentes), comissões em 3 níveis e suporte bilíngue PT/EN.",
      image: "/remember.png",
      link: "https://www.rememberqr.online/",
      tags: ["Next.js", "TypeScript", "Firebase", "Mercado Pago", "SaaS"],
    },
    {
      title: "Pão de Queijo Mineiro — Loja Virtual",
      description:
        "Vitrine digital de uma marca artesanal de pão de queijo nascida em Iguatama, Minas Gerais. O site conta a história da receita de família por trás da marca e funciona como loja virtual, com catálogo de produtos, carrinho de compras e finalização de pedidos direto pelo WhatsApp — unindo identidade visual acolhedora a uma experiência de compra simples e funcional.",
      image: "/pao-de-queijo.png",
      link: "https://paodequeijomineiro.vercel.app/",
      tags: ["React", "E-commerce", "WhatsApp"],
    },
    {
      title: "Luna Finance — Planejamento Financeiro Pessoal",
      description:
        "App de planejamento financeiro pessoal, mobile-first, que ajuda a entender para onde vai o dinheiro, simular o crescimento de investimentos e definir metas reais. Não é um app de banco nem rastreia transações automaticamente — é uma ferramenta de simulação e consciência financeira. Inclui dashboard de patrimônio, simulação de investimentos (CDI, Selic, CDB, FIIs) com IR regressivo real, metas, cenários comparativos e alertas inteligentes.",
      image: "/luna-finance.png",
      link: "https://luna-finance-theta.vercel.app/",
      tags: ["React", "Simulação Financeira", "Mobile-first"],
    },
    {
      title: "Portfólio de Arquitetura (DNC)",
      description:
        "Site institucional desenvolvido para simular o portfólio de um estúdio de arquitetura, como projeto do curso de Front-End da DNC. Apresenta um layout elegante e responsivo, focado em destacar projetos visuais, serviços e contato, com conteúdo bilíngue (PT/EN) e boas práticas modernas de desenvolvimento front-end.",
      image: "/arquitetura.png",
      link: "https://dnc-arq-fred.vercel.app/",
      tags: ["React", "JavaScript", "Bilíngue"],
    },
  ];

  return (
    <section id="projetos" className="py-20">
      <div className="container mx-auto px-6">
        <span className="text-sm font-semibold tracking-widest text-accent uppercase">
          Portfólio
        </span>
        <h2 className="text-4xl font-bold text-foreground mt-2 mb-4">
          Projetos
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Uma seleção de projetos que construí do zero — do backend à interface —
          cobrindo SaaS, e-commerce, finanças pessoais e sites institucionais.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;