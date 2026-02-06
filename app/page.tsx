import {
  GithubIcon,
  LinkedinIcon,
  BriefcaseBusinessIcon,
  GraduationCapIcon,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { HeroBanner } from "@/components/HeroBanner";
import { Marquee } from "@/components/ui/Marquee";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactCard } from "@/components/ContactCard";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Typography } from "@/components/ui/Typography";
import {
  Timeline,
  TimelineBullet,
  TimelineContent,
  TimelineItem,
} from "@/components/ui/Timeline";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
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

        <span id="experiencia" />
        <Marquee items={Array(14).fill("Experiência")} />
        <Container
          className="violet-theme bg-background py-12 flex flex-row"
          asChild
        >
          <section>
            <Timeline>
              <TimelineItem>
                <TimelineBullet>
                  <BriefcaseBusinessIcon />
                </TimelineBullet>

                <TimelineContent>
                  <Card className="max-w-xl bg-white">
                    <CardHeader className="flex flex-col sm:flex-row justify-between items-start">
                      <div className="flex-1">
                        <CardTitle>Mervil Transportes</CardTitle>
                        <CardDescription className="text-light-foreground">
                          Programador de Software - Freelance
                        </CardDescription>
                      </div>
                      <Typography
                        variant="p3"
                        className="text-light-foreground"
                      >
                        09/23 - 11/25
                      </Typography>
                    </CardHeader>
                    <CardContent>
                      Após minha saída da Mervil como estagiário, ainda mantive
                      relações profissionais com a empresa fornecendo serviços
                      de forma esporádica. <br />
                      De maneira geral eram tarefas mais simples como correções
                      de <i>bugs</i>, pequenas melhorias, suporte técnico, etc.
                    </CardContent>
                  </Card>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineBullet>
                  <GraduationCapIcon />
                </TimelineBullet>

                <TimelineContent>
                  <Card className="max-w-xl bg-white">
                    <CardHeader className="flex flex-col sm:flex-row justify-between items-start">
                      <div className="flex-1">
                        <CardTitle>FATEC</CardTitle>
                        <CardDescription className="text-light-foreground">
                          Análise e Desenvolvimento de Sistemas
                        </CardDescription>
                      </div>
                      <Typography
                        variant="p3"
                        className="text-light-foreground"
                      >
                        02/23 - 12/25
                      </Typography>
                    </CardHeader>
                    <CardContent>
                      Cursei Análise e Desenvolvimento de Sistemas na FATEC,
                      onde tive contato com projetos mais complexos, trabalhando
                      ideias do início ao fim e aprendendo como estruturar
                      soluções.
                    </CardContent>
                  </Card>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineBullet>
                  <BriefcaseBusinessIcon />
                </TimelineBullet>

                <TimelineContent>
                  <Card className="max-w-xl bg-white">
                    <CardHeader className="flex flex-col sm:flex-row justify-between items-start">
                      <div className="flex-1">
                        <CardTitle>Mervil Transportes</CardTitle>
                        <CardDescription className="text-light-foreground">
                          Programador de Software - Estágio
                        </CardDescription>
                      </div>
                      <Typography
                        variant="p3"
                        className="text-light-foreground"
                      >
                        06/22 - 08/23
                      </Typography>
                    </CardHeader>
                    <CardContent>
                      Meu primeiro trabalho, desafiador mas gratificante. Éramos
                      uma equipe de duas pessoas resolvendo problemas reais de
                      uma empresa que reconhece a importância da tecnologia.
                      <br />
                      Tinhamos bastante liberdade técnica e responsabilidades,
                      então durante meu tempo na Mervil aprendi muito sobre
                      arquitetura de software, redes, manutenção de servidor e
                      levantamento de requisitos.
                    </CardContent>
                  </Card>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineBullet>
                  <GraduationCapIcon />
                </TimelineBullet>

                <TimelineContent>
                  <Card className="max-w-xl bg-white">
                    <CardHeader className="flex flex-col sm:flex-row justify-between items-start">
                      <div className="flex-1">
                        <CardTitle>ETEC</CardTitle>
                        <CardDescription className="text-light-foreground">
                          Análise e Desenvolvimento de Sistemas
                        </CardDescription>
                      </div>
                      <Typography
                        variant="p3"
                        className="text-light-foreground"
                      >
                        02/20 - 12/22
                      </Typography>
                    </CardHeader>
                    <CardContent>
                      Cursei o ensino técnico em Análise e Desenvolvimento de
                      Sistemas na ETEC, onde dei meus primeiros passos em
                      desenvolvimento de software, aprendi a estudar sozinho e
                      descobri de meu interesse pela área de tecnologia. (O
                      plano inicial era ser legista criminal).
                    </CardContent>
                  </Card>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </section>
        </Container>

        <span id="contato" />
        <Marquee items={Array(14).fill("Contato")} />

        <Container
          className="pink-theme bg-background flex flex-col justify-center items-center py-12 gap-6"
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
              <Button size="icon" asChild>
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
      </main>
    </>
  );
}
