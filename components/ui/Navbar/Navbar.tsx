import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui//Typography";
import { cn } from "@/lib/utils";

function Navbar({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <Container
      className={cn("bg-background h-24 border-b-4", className)}
      asChild
      {...props}
    >
      <header>{children}</header>
    </Container>
  );
}

function NavbarLogo({}) {
  return (
    <Typography variant="h3" weight="extrabold" asChild>
      <h1 className="text-main">
        Felipe <span className="hidden sm:inline-block">Silvestre</span>
      </h1>
    </Typography>
  );
}

export { Navbar, NavbarLogo };
