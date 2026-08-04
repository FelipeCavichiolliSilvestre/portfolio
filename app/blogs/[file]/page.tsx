import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { globby } from "globby";
import { Metadata } from "next";
import path from "path";

export default async function Page({ params }: PageProps<"/blogs/[file]">) {
  const { file } = await params;
  const { default: BlogContent, metadata } = await import(
    `@/content/blog/${file}.mdx`
  );

  return (
    <Container>
      <main className="max-w-3xl m-auto">
        <article>
          <div className="my-5 py-5 border-b-4">
            <Typography variant="h1" className="mb-2" asChild>
              <h1>{metadata.title}</h1>
            </Typography>
            <Typography variant="s1" weight="thin" className="mb-3">
              {metadata.description}
            </Typography>
            <Typography variant="p3" className="text-right">
              {new Intl.DateTimeFormat("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              }).format(new Date(metadata.publishedAt))}
            </Typography>
          </div>

          <BlogContent />
        </article>
      </main>
    </Container>
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/blogs/[file]">): Promise<Metadata> {
  const file = (await params).file;
  const { metadata } = await import(`@/content/blog/${file}.mdx`);

  const title = `${metadata.title} | Felipe Silvestre`;
  const description = metadata.description;
  const publishedTime = metadata.publishedAt;

  return {
    title,
    description,
    openGraph: {
      type: "article",
      publishedTime,
      authors: "Felipe Cavichiolli Silvestre",
      url: `https://felipesilvestre.dev/blogs/${file}`,
      title,
      description,
    },
  };
}

export async function generateStaticParams() {
  const files = await globby(["content/blog/*.mdx"]);
  const fileNames = files.map((file) => path.parse(file).name);

  return fileNames.map((name) => ({
    file: name,
  }));
}

export const dynamicParams = false;
