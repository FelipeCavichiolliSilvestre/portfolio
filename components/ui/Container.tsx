import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const containerVariants = cva(["w-full px-4 sm:px-8 md:px-6 lg:px-24"], {
  variants: {},
  defaultVariants: {},
});

function Container({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof containerVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      data-slot="div"
      className={cn(containerVariants({ className }))}
      {...props}
    />
  );
}

export { Container, containerVariants };
