"use client";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import { Typography } from "@/components/ui/Typography";
import Image from "next/image";
import { RefreshCwIcon } from "lucide-react";

import { useState } from "react";

const definitions = [
  "Indivíduo que transforma café em código.",
  "Um misto de detetive, vítima e criminoso.",
  "Alguém que diz “isso é simples” e depois desaparece por 6 horas.",
  "Profissional que alterna entre “sou um gênio” e “não sei fazer nada” diariamente.",
  "Alguém que já tentou centralizar uma div e falhou.",
  "“Funciona na minha máquina.”",
  "Um especialista em máquinas mas aprendiz em interações humanas.",
  "Ser humano que tem opiniões fortes sobre editores de texto.",
  "Alguém que resolve problemas complexos criando sistemas ainda mais complexos.",
  "Pessoa que acha que refatorar é uma forma válida de procrastinação.",
  "Profissional que resolve problemas difíceis e cria problemas inéditos.",
];

function getRandomDefinitions() {
  const shuffled = [...definitions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.floor(Math.random() * 2) + 2);
}

export function HeroBanner() {
  const [definitions, setDefinitions] = useState<string[]>(
    getRandomDefinitions(),
  );

  return (
    <Container
      className="bg-background flex justify-between items-center flex-col md:flex-row gap-12 md:h-125 py-8"
      asChild
    >
      <section>
        <Typography variant="h4" weight="regular">
          Olá! Eu sou <br />
          <Typography
            asChild
            variant="d2"
            weight="extrabold"
            className="text-main"
          >
            <span>Felipe Silvestre,</span>
          </Typography>
          <br />
          um{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <Typography
                asChild
                variant="h4"
                weight="bold"
                className="underline text-main"
              >
                <span>pro·gra·ma·dor</span>
              </Typography>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="px-4 py-6 w-75 sm:w-100">
              <div className="flex flex-row justify-between items-center">
                <Typography variant="h4" className="mb-2">
                  Pro·gra·ma·dor
                </Typography>

                <Button
                  variant="noShadow"
                  size="icon"
                  onClick={() => setDefinitions(getRandomDefinitions())}
                >
                  <RefreshCwIcon />
                </Button>
              </div>

              <Typography variant="p3" className="text-light-foreground">
                s.m.
              </Typography>

              <ol className="list-inside list-decimal my-2">
                {definitions.map((definition, index) => (
                  <li key={index}>{definition}</li>
                ))}
              </ol>
            </TooltipContent>
          </Tooltip>{" "}
          que ama o que faz e faz bem o que ama.
        </Typography>

        <div className="flex-none lg:flex lg:flex-1 lg:justify-center">
          <Image
            width={400}
            height={400}
            src="/avatar.png"
            alt="Uma ilustração de uma pessoa com cabelos longos e moletom verde dentro de uma estrela estilziada"
            unoptimized
            className="w-75 lg:w-90"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </section>
    </Container>
  );
}
