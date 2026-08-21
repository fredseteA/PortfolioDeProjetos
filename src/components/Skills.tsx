import { Code2, Layers, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Linguagens",
    icon: Code2,
    items: ["C++", "TypeScript", "JavaScript", "Python", "Java", "C"],
  },
  {
    title: "Frameworks & Ferramentas",
    icon: Layers,
    items: ["Qt / QML / Qt Widgets", "React", "Next.js", "FastAPI", "Firebase", "Git", "CMake", "SFML"],
  },
  {
    title: "Sistemas & Dados",
    icon: Database,
    items: ["Linux (Yocto)", "Proxmox", "SQL / Bancos relacionais"],
  },
  {
    title: "Práticas",
    icon: Wrench,
    items: ["Debugging & root-cause analysis", "Refatoração", "Code review", "Algoritmos & estruturas de dados", "Trabalho ágil"],
  },
];

const Skills = () => {
  return (
    <section id="tecnologias" className="py-20 bg-card/40">
      <div className="container mx-auto px-6">
        <span className="text-sm font-semibold tracking-widest text-accent uppercase">
          Stack
        </span>
        <h2 className="text-4xl font-bold text-foreground mt-2 mb-12">
          Tecnologias
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map(({ title, icon: Icon, items }) => (
            <div
              key={title}
              className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4 transition-colors hover:border-primary/60"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-foreground" />
                </div>
                <h3 className="font-bold text-card-foreground">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;