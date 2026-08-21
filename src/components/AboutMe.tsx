const AboutMe = () => {
  const timeline = [
    {
      year: "2022",
      description:
        "Em 2022, eu ainda era estudante do ensino médio, começando a descobrir meu interesse pela área de tecnologia. Foi nesse período que passei a considerar seriamente seguir um caminho profissional em informática e cogitei prestar o processo seletivo para o curso técnico em Informática do Instituto Federal. Esse ano marcou o início da minha curiosidade por programação, computadores e desenvolvimento, mesmo sem ainda ter dado meus primeiros passos formais na área.",
    },
    {
      year: "2023",
      description:
        "Em 2023, dei meu primeiro passo concreto rumo à carreira que desejava ao ingressar no curso técnico em Informática do IFF. Durante esse ano, tive contato com fundamentos essenciais de programação, redes, hardware e lógica computacional. Foi um período de muita descoberta, em que percebi que realmente gostava de construir soluções e entender como sistemas funcionam. Esse ano consolidou minha decisão de seguir profissionalmente no mundo da tecnologia.",
    },
    {
      year: "2024",
      description:
        "Em 2024, continuei avançando no curso técnico e aprofundei ainda mais meus conhecimentos em desenvolvimento. Nesse período, comecei a planejar minha entrada no ensino superior na área de programação e a visualizar meu futuro como desenvolvedor. No final do ano, iniciei um curso de front-end, que abriu portas para novas tecnologias e reforçou minha vontade de trabalhar com desenvolvimento web. Esse ano marcou a transição entre aprendizado técnico e preparação para a faculdade.",
    },
    {
      year: "2025",
      description:
        "Já em 2025, entrei oficialmente no ensino superior cursando Engenharia de Software na UTFPR, dando início a uma nova fase mais avançada da minha formação. Concluí o curso de front-end que havia iniciado no ano anterior e comecei a atuar como estagiário de Suporte de TI e, na sequência, de Suporte e Desenvolvimento em Java, vivenciando na prática o ambiente profissional e aplicando os conhecimentos acumulados ao longo desses anos.",
    },
    {
      year: "2026",
      description:
        "Em 2026, ingressei na CISS S.A. como Estagiário de Engenharia de Software na CISSLive Software Factory, atuando com C++, Qt/QML e Qt Widgets em um sistema de PDV embarcado em Linux. Tenho aprofundado meus conhecimentos em arquitetura de software, testes e boas práticas de engenharia, sempre conciliando o trabalho com meus projetos pessoais e a graduação em Engenharia de Software.",
    },
  ];

  return (
    <section id="sobre" className="py-20">
      <div className="container mx-auto px-6">
        <span className="text-sm font-semibold tracking-widest text-accent uppercase">
          Jornada
        </span>
        <h2 className="text-4xl font-bold text-foreground mt-2 mb-16">
          Sobre mim
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {timeline.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {item.year}
                </h3>
                <div className="w-16 h-1 bg-gradient-primary rounded-full mx-auto" />
              </div>
              <p className="text-sm text-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;