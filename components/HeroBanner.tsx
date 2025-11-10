import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import Image from "next/image";

export function HeroBanner() {
  return (
    <Container
      className="bg-background flex justify-between items-center flex-col md:flex-row gap-12 md:h-125 py-8"
      asChild
    >
      <section>
        <div>
          <Typography variant="h4">Olá! Eu sou</Typography>
          <Typography variant="d2" weight="bold">
            <span className="text-main">Felipe Silvestre,</span>
          </Typography>
          <Typography variant="h4">
            um{" "}
            <span className="text-main font-bold underline">
              pro·gra·ma·dor
            </span>{" "}
            que ama o que faz e faz bem o que ama.
          </Typography>
        </div>

        <div className="flex-none lg:flex lg:flex-1 lg:justify-center">
          <Image
            width={400}
            height={400}
            src="/avatar.png"
            alt="Uma ilustração de uma pessoa com cabelos longos e moletom verde dentro de uma estrela estilziada"
            unoptimized
            className="w-75 lg:w-90"
          ></Image>
        </div>
      </section>
    </Container>
  );
}
