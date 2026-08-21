const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <span className="inline-block text-sm font-semibold tracking-widest text-accent uppercase mb-4">
            Desenvolvedor Full-Stack
          </span>
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Oi! Eu sou o Frederico Luna
          </h1>
          <div className="text-lg text-muted-foreground mb-8 leading-relaxed flex flex-col gap-4">
            <p>Pode me chamar de Fred.</p>
            <p>
              Sempre fui aquele cara curioso por tecnologia, desmontando tudo pra
              entender como funcionava.
              Com o tempo, essa curiosidade virou caminho: comecei no Técnico em
              Informática, estudei bastante, dei aulas de informática e hoje sigo
              firme na graduação de Engenharia de Software pela UTFPR.
            </p>
            <p>
              Minha transição do Suporte Técnico para o Desenvolvimento foi
              natural: descobri no front-end a chance de transformar ideias em
              interfaces vivas e no back-end a lógica que dá alma aos sistemas.
              Hoje trabalho como estagiário de Engenharia de Software na CISS,
              desenvolvendo em C++/Qt/QML, e sigo mergulhando cada vez mais no
              universo da programação para fortalecer minha lógica e visão de
              arquitetura.
            </p>
            <p>
              Aqui neste portfólio você vai encontrar alguns dos meus projetos —
              cada um carregando um pedaço da minha jornada, da curiosidade
              inicial até o código mais polido. Fique à vontade para explorar; a
              casa é sua. 🚀💻
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projetos"
              className="px-8 py-3 bg-gradient-primary text-foreground font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              Ver projetos
            </a>
            <a
              href="#sobre"
              className="px-8 py-3 border border-border text-foreground font-medium rounded-full hover:border-accent hover:text-accent transition-colors"
            >
              Saber mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;