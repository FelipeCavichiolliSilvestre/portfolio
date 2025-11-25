import { AtSignIcon, CodeIcon, HamburgerIcon } from "lucide-react";
import { Typography } from "@/components/ui/Typography";
import { Container } from "@/components/ui/Container";
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

function Navbar() {
  return (
    <Container
      className="bg-background h-24 inline-flex justify-between items-center border-b-4"
      asChild
    >
      <header>
        <Typography variant="h3" weight="extrabold" asChild>
          <h1 className="text-main">
            Felipe <span className="hidden sm:inline-block">Silvestre</span>
          </h1>
        </Typography>

        <div className="hidden md:inline-flex justify-between items-center gap-8">
          <Button asChild>
            <a href="#projetos">
              <CodeIcon />
              Projetos
            </a>
          </Button>

          <Button asChild>
            <a href="#contato">
              <AtSignIcon />
              Contato
            </a>
          </Button>
        </div>

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
                <a href="#contato">
                  <AtSignIcon />
                  Contato
                </a>
              </MenuListItem>
            </MenuList>
          </PopoverContent>
        </Popover>
      </header>
    </Container>
  );
}

export { Navbar };
