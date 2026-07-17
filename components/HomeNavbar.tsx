import { AtSignIcon, AwardIcon, CodeIcon, HamburgerIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import {
  MenuList,
  MenuListItem,
  MenuListSeparator,
} from "@/components/ui/MenuList";
import { Navbar, NavbarLogo } from "@/components/ui/Navbar";

function HomeNavbar() {
  return (
    <Navbar className="inline-flex justify-between items-center">
      <NavbarLogo />

      <nav>
        <ul className="hidden md:inline-flex justify-between items-center gap-8">
          <li>
            <Button asChild>
              <a href="#projetos">
                <CodeIcon />
                Projetos
              </a>
            </Button>
          </li>

          <li>
            <Button asChild>
              <a href="#experiencia">
                <AwardIcon />
                Experiência
              </a>
            </Button>
          </li>

          <li>
            <Button asChild>
              <a href="#contato">
                <AtSignIcon />
                Contato
              </a>
            </Button>
          </li>
        </ul>

        <Popover>
          <PopoverTrigger asChild>
            <Button size="icon" className="md:hidden" aria-label="Abrir Menu">
              <HamburgerIcon />
            </Button>
          </PopoverTrigger>

          <PopoverContent
            side="bottom"
            align="end"
            className="text-main-foreground p-1"
          >
            <MenuList>
              <MenuListItem asChild>
                <a href="#projetos">
                  <CodeIcon />
                  Projetos
                </a>
              </MenuListItem>

              <MenuListSeparator />

              <MenuListItem asChild>
                <a href="#experiencia">
                  <AwardIcon />
                  Experiência
                </a>
              </MenuListItem>

              <MenuListSeparator />

              <MenuListItem asChild>
                <a href="#contato">
                  <AtSignIcon />
                  Contato
                </a>
              </MenuListItem>
            </MenuList>
          </PopoverContent>
        </Popover>
      </nav>
    </Navbar>
  );
}

export { HomeNavbar };
