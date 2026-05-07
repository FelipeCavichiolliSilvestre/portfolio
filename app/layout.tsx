import type { Metadata } from "next";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/Tooltip";
import { Toaster } from "@/components/ui/Sonner";

export const metadata: Metadata = {
  title: "Felipe Silvestre | Desenvolvedor Fullstack",
  description:
    "Sou Felipe Cavichiolli Silvestre, um desenvolvedor fullstack. Seja bem vindo ao meu portfólio!",
  openGraph: {
    type: "website",
    url: "https://felipesilvestre.dev",
    title: "Felipe Silvestre | Desenvolvedor Fullstack",
    description:
      "Sou Felipe Cavichiolli Silvestre, um desenvolvedor fullstack. Seja bem vindo ao meu portfólio!",
    images: [
      {
        url: "https://felipesilvestre.dev/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster />
      </body>
    </html>
  );
}
