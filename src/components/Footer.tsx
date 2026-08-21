import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-muted-foreground" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Meu contato</p>
                <p className="text-sm font-semibold text-foreground">+55 22 992080811</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-muted-foreground" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Email</p>
                <a
                  href="mailto:frederico.luna06@gmail.com"
                  className="text-sm font-semibold text-foreground hover:text-accent transition-colors"
                >
                  frederico.luna06@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/fredseteA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/fredericol/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        <p className="text-xs text-muted-foreground text-center mt-8">
          © {new Date().getFullYear()} Frederico de Freitas Luna. Feito com React e muito café.
        </p>
      </div>
    </footer>
  );
};

export default Footer;