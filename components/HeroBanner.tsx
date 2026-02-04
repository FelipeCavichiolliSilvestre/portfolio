import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { QuirkyProgrammerSoCrazyOMG } from "@/components/QuirkyDictionary";
import Image from "next/image";

export function HeroBanner() {
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
          um <QuirkyProgrammerSoCrazyOMG /> que ama o que faz e faz bem o que
          ama.
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
