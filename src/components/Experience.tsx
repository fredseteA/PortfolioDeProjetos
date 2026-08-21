import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Estagiário de Engenharia de Software",
    company: "CISS S.A. — CISSLive Software Factory",
    period: "Abr 2026 – Presente",
    location: "Dois Vizinhos, PR",
    bullets: [
      "Desenvolve e mantém o CISSBox, produto de ponto de venda (PDV) da empresa para o varejo, em C++ com Qt/QML e Qt Widgets.",
      "Implementa novas funcionalidades, corrige defeitos e melhora continuamente uma aplicação desktop em produção usada por clientes do varejo.",
      "Atua com integrações de banco de dados e componentes da distribuição Linux embarcada baseada em Yocto que sustenta o produto.",
    ],
    current: true,
  },
  {
    role: "Estagiário de Suporte e Desenvolvimento",
    company: "CELL Corporação Tecnológica",
    period: "Nov 2025 – Abr 2026",
    location: "Dois Vizinhos, PR",
    bullets: [
      "Suporte técnico para um sistema de gestão comercial utilizado por lojas e empresas de diversos segmentos.",
      "Concluiu um treinamento interno em Java, construindo fundamentos de programação para transição a um cargo de desenvolvimento.",
    ],
    current: false,
  },
  {
    role: "Estagiário de Suporte de TI",
    company: "The3 Soluções em Tecnologia",
    period: "Jun 2025 – Ago 2025",
    location: "Campos dos Goytacazes, RJ",
    bullets: [
      "Suporte técnico para computadores, redes e impressoras.",
    ],
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experiencia" className="py-20">
      <div className="container mx-auto px-6">
        <span className="text-sm font-semibold tracking-widest text-accent uppercase">
          Trajetória
        </span>
        <h2 className="text-4xl font-bold text-foreground mt-2 mb-12">
          Experiência
        </h2>

        <div className="relative max-w-3xl">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border" aria-hidden="true" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12">
                <div
                  className={`absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center border ${
                    exp.current
                      ? "bg-gradient-primary border-transparent"
                      : "bg-card border-border"
                  }`}
                >
                  <Briefcase size={14} className="text-foreground" />
                </div>

                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/60 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="text-lg font-bold text-card-foreground">{exp.role}</h3>
                    {exp.current && (
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent/20 text-accent border border-accent/40">
                        Atual
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-muted-foreground mb-3">{exp.company}</p>

                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} /> {exp.location}
                    </span>
                  </div>

                  <ul className="flex flex-col gap-2">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="text-sm text-foreground leading-relaxed flex gap-2">
                        <span className="text-accent mt-1.5 shrink-0">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;