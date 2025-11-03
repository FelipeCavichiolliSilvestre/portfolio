import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Felipe Silvestre | Desenvolvedor Fullstack",
  description:
    "Sou Felipe Cavichiolli Silvestre, um desenvolvedor fullstack. Seja bem vindo ao meu portfólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
