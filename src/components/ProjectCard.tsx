import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: string[];
}

const ProjectCard = ({ title, description, image, link, tags = [] }: ProjectCardProps) => {
  return (
    <div className="group bg-card border border-border rounded-xl p-6 flex flex-col gap-4 transition-all duration-300 hover:border-primary/60 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_hsl(var(--primary)/0.45)]">
      <div className="aspect-video bg-muted rounded-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="text-xl font-bold text-card-foreground text-center">
        {title}
      </h3>

      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center justify-center gap-1 px-6 py-2 bg-gradient-primary text-foreground font-medium rounded-full hover:opacity-90 transition-opacity text-center text-sm"
      >
        Acessar projeto
        <ArrowUpRight size={16} />
      </a>
    </div>
  );
};

export default ProjectCard;