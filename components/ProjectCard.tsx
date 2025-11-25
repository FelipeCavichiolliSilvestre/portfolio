import { GithubIcon, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

type ProjectCardProps = {
  title: string;
  description: string;
  bannerSrc: string;
  bannerAlt: string;
  githubLink: string;
  projectLink: string;
};

function ProjectCard(props: ProjectCardProps) {
  const { bannerAlt, bannerSrc, title, description, githubLink, projectLink } =
    props;

  return (
    <Card className="bg-white w-full h-full">
      <Image
        src={bannerSrc}
        alt={bannerAlt}
        width={1600}
        height={800}
        unoptimized
        className="w-full -mt-6 aspect-2"
      />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="inline-flex gap-4 justify-end items-end grow">
        <Button
          size="icon"
          asChild
          aria-label={`Abrir repositório do projeto ${title} no GitHub`}
        >
          <a href={githubLink} target="_blank">
            <GithubIcon />
          </a>
        </Button>
        <Button asChild aria-label={`Visitar ${title}`}>
          <a
            href={projectLink}
            target={projectLink.startsWith("#") ? "_self" : "_blank"}
          >
            Visitar{projectLink === "#top" ? "?" : ""}
            <SquareArrowOutUpRight />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

export { ProjectCard };
