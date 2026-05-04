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
import { Badge, badgeVariants } from "@/components/ui/Badge";
import { VariantProps } from "class-variance-authority";

type ProjectCardProps = {
  title: string;
  tags?: Tag[];
  description: string;
  bannerSrc: string;
  bannerAlt: string;
  githubLink: string;
  projectLink: string;
};

type Tag = {
  label: string;
  color: Exclude<VariantProps<typeof badgeVariants>["color"], null>;
};

function ProjectCard(props: ProjectCardProps) {
  const {
    bannerAlt,
    bannerSrc,
    title,
    tags,
    description,
    githubLink,
    projectLink,
  } = props;

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
        <CardTitle className="pb-0.5">{title}</CardTitle>

        <div className="flex gap-2">
          {tags?.map(({ label, color }) => (
            <Badge key={label} color={color}>
              {label}
            </Badge>
          ))}
        </div>
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
