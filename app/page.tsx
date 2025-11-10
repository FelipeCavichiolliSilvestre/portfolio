import { GithubIcon, LinkedinIcon } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { HeroBanner } from "@/components/HeroBanner";
import { Marquee } from "@/components/ui/Marquee";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactCard } from "@/components/ContactCard";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroBanner />

      <span id="projetos" />
      <Marquee items={Array(14).fill("Projetos")} />

      <Container
        className="cyan-theme bg-background flex flex-row flex-wrap justify-center items-stretch gap-8 lg:gap-16 lg:gap-y-8 py-8"
        asChild
      >
        <section>
          <div className="w-full sm:w-[calc(50%-(var(--spacing)*8/2))] md:w-[calc(33.33%-(var(--spacing)*8*2/3))] lg:w-[calc(33.33%-(var(--spacing)*16*2/3))]">
            <ProjectCard
              title="Yet Another Todo"
              description="Um projeto de uma lista de afazeres com colaboração em tempo real utilizando Websockets e API REST. Feito com React + NestJS + SocketIO."
              bannerSrc="/yat-banner.png"
              bannerAlt="Uma captura de tela referente ao projeto 'Yet Another Todo'"
              githubLink="https://github.com/FelipeCavichiolliSilvestre/yat"
              projectLink="https://yat.felipesilvestre.dev/login"
            />
          </div>
          <div className="w-full sm:w-[calc(50%-(var(--spacing)*8/2))] md:w-[calc(33.33%-(var(--spacing)*8*2/3))] lg:w-[calc(33.33%-(var(--spacing)*16*2/3))]">
            <ProjectCard
              title="Game of Life"
              description="Um dos meus primeiros projetos. Simula o jogo da vida de John Conway, ao mesmo tempo que permite a alteração nas regras básicas de reprodução e sobrevivência."
              bannerSrc="/game-of-life-banner.png"
              bannerAlt="Uma captura de tela referente ao projeto 'Game of Life'"
              githubLink="https://github.com/FelipeCavichiolliSilvestre/GameOfLife"
              projectLink="https://life.felipesilvestre.dev"
            />
          </div>
          <div className="w-full sm:w-[calc(50%-(var(--spacing)*8/2))] md:w-[calc(33.33%-(var(--spacing)*8*2/3))] lg:w-[calc(33.33%-(var(--spacing)*16*2/3))]">
            <ProjectCard
              title="Portfólio"
              description="Você está aqui! Esta página em estilo neo-brutalismo teve seu design criado utilizando Figma e foi codificado utlizando NextJS + Shadcn + Tailwind CSS."
              bannerSrc="/portfolio-banner.png"
              bannerAlt="Uma captura de tela referente ao projeto 'Portfolio'"
              githubLink="https://github.com/FelipeCavichiolliSilvestre/portfolio"
              projectLink="#top"
            />
          </div>
        </section>
      </Container>

      <span id="contato" />
      <Marquee items={Array(14).fill("Contato")} />

      <Container
        className="violet-theme bg-background flex flex-col justify-center items-center py-12 gap-6"
        asChild
      >
        <section>
          <ContactCard />

          <div className="inline-flex flex-row gap-4">
            <Button size="icon" asChild>
              <a
                href="https://github.com/FelipeCavichiolliSilvestre"
                target="_blank"
              >
                <GithubIcon />
              </a>
            </Button>
            <Button size="icon">
              <a
                href="https://www.linkedin.com/in/felipe-silvestre-004aa2216"
                target="_blank"
              >
                <LinkedinIcon />
              </a>
            </Button>
          </div>
        </section>
      </Container>
    </>
  );
}
