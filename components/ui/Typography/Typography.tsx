import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const typographyVariants = cva("", {
  variants: {
    variant: {
      d1: "text-d1 font-display",
      d2: "text-d2 font-display",
      h1: "text-h1 font-header",
      h2: "text-h2 font-header",
      h3: "text-h3 font-header",
      h4: "text-h4 font-header",
      h5: "text-h5 font-header",
      h6: "text-h6 font-header",
      p1: "text-p1 font-body",
      p2: "text-p2 font-body",
      p3: "text-p3 font-body",
    },
    weight: {
      thin: "",
      regular: "",
      bold: "",
      extrabold: "",
    },
  },
  compoundVariants: [
    {
      variant: ["d1", "d2", "h1", "h2", "h3", "h4", "h5", "h6"],
      weight: "regular",
      class: "font-medium",
    },
    {
      variant: ["d1", "d2", "h1", "h2", "h3", "h4", "h5", "h6"],
      weight: "bold",
      class: "font-bold",
    },
    {
      variant: ["d1", "d2", "h1", "h2", "h3", "h4", "h5", "h6"],
      weight: "extrabold",
      class: "font-black",
    },
    {
      variant: ["p1", "p2", "p3"],
      weight: "regular",
      class: "font-medium",
    },
    {
      variant: ["p1", "p2", "p3"],
      weight: "thin",
      class: "font-light",
    },
    {
      variant: ["p1", "p2", "p3"],
      weight: "bold",
      class: "font-bold",
    },
  ],
  defaultVariants: {
    variant: "p2",
    weight: "regular",
  },
});

type TextTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

export type TypographyProps<Tag extends TextTags> = {
  as?: Tag;
} & React.ComponentProps<Tag> &
  VariantProps<typeof typographyVariants> & {
    asChild?: boolean;
  };

export function Typography({
  className,
  variant,
  weight,
  asChild = false,
  ...props
}: React.ComponentProps<"p"> &
  VariantProps<typeof typographyVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "p";

  return (
    <Comp
      data-slot="p"
      className={cn(typographyVariants({ variant, weight, className }))}
      {...props}
    />
  );
}
