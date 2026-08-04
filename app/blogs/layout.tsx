import { Navbar, NavbarLogo } from "@/components/ui/Navbar";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { HomeIcon } from "lucide-react";

export default function RootLayout({ children }: LayoutProps<"/blogs">) {
  return (
    <>
      <Navbar>
        <div className="h-full w-full flex justify-between items-center max-w-3xl m-auto">
          <NavbarLogo expandAt="sm" />

          <Button
            size="icon"
            asChild
            aria-label="Navegar para a página inicial"
          >
            <Link href="/">
              <HomeIcon />
            </Link>
          </Button>
        </div>
      </Navbar>

      {children}
    </>
  );
}
