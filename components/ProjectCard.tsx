import {
  GithubIcon,
  SquareArrowOutUpRightIcon,
  NewspaperIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
  banner: {
    src: string;
    alt: string;
  };
  sourceCodeLink?: string;
  demoLink?: string;
  blogLink?: string;
};

type Tag = {
  label: string;
  color: Exclude<VariantProps<typeof badgeVariants>["color"], null>;
};

function ProjectCard(props: ProjectCardProps) {
  const {
    banner,
    title,
    tags,
    description,
    sourceCodeLink: githubLink,
    demoLink: projectLink,
    blogLink,
  } = props;

  return (
    <Card className="bg-white w-full h-full">
      <Image
        src={banner.src}
        alt={banner.alt}
        width={1600}
        height={800}
        unoptimized
        className="w-full -mt-6 aspect-2 border-b border-black"
      />
      <CardHeader>
        <CardTitle className="pb-0.5">{title}</CardTitle>

        <div className="flex flex-wrap gap-2">
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
        {githubLink !== undefined && (
          <Button
            size="icon"
            asChild
            aria-label={`Abrir repositório do projeto ${title} no GitHub`}
          >
            <a href={githubLink} target="_blank">
              <GithubIcon />
            </a>
          </Button>
        )}
        {blogLink !== undefined && (
          <Button
            size={projectLink === undefined ? "default" : "icon"}
            asChild
            aria-label={`Leia mais sobre ${title}`}
          >
            <Link href={blogLink}>
              <NewspaperIcon />
              {projectLink === undefined ? "Sobre" : ""}
            </Link>
          </Button>
        )}
        {projectLink !== undefined && (
          <Button asChild aria-label={`Visitar ${title}`}>
            <a
              href={projectLink}
              target={projectLink.startsWith("#") ? "_self" : "_blank"}
            >
              Visitar{projectLink === "#top" ? "?" : ""}
              <SquareArrowOutUpRightIcon />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export { ProjectCard };
