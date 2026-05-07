import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-base border-2 border-border px-2.5 py-0.5 text-xs font-base w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] overflow-hidden",
  {
    variants: {
      color: {
        default: "bg-main text-main-foreground",
        neutral: "bg-secondary-background text-foreground",
        green: "bg-chart-1 text-main-foreground",
        blue: "bg-chart-2 text-main-foreground",
        purple: "bg-chart-3 text-main-foreground",
        pink: "bg-chart-4 text-main-foreground",
        yellow: "bg-chart-5 text-main-foreground",
      },
    },
    defaultVariants: {
      color: "default",
    },
  },
);

function Badge({
  className,
  color,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ color }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
