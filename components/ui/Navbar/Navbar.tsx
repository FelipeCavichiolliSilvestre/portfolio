import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui//Typography";
import { Breakpoint, cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import Link from "next/link";

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

const navbarLogoSpanVariants = cva("hidden", {
  variants: {
    expandAt: {
      xs: "xs:inline-block",
      sm: "sm:inline-block",
      md: "md:inline-block",
      lg: "lg:inline-block",
      xl: "xl:inline-block",
    },
  },
  defaultVariants: {
    expandAt: "xs",
  },
});

export type NavbarLogoProps = {
  expandAt?: Breakpoint;
};

function NavbarLogo({ expandAt }: NavbarLogoProps) {
  return (
    <Typography
      variant="h3"
      weight="extrabold"
      className="text-main select-none"
      asChild
    >
      <h1>
        <Link href="/">
          Felipe{" "}
          <span className={cn(navbarLogoSpanVariants({ expandAt }))}>
            Silvestre
          </span>
        </Link>
      </h1>
    </Typography>
  );
}

export { Navbar, NavbarLogo };
