import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

function MenuList({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input"
      className={cn("flex flex-col", className)}
      {...props}
    />
  );
}

function MenuListItem({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      data-slot="input"
      className={cn(
        "inline-flex items-center justify-start gap-2 text-sm font-base [&_svg]:size-4 px-2 py-1.5",
        "cursor-default select-none",
        "rounded-base border-2 border-transparent outline-hidden transition-colors hover:border-border focus:border-border data-disabled:pointer-events-none data-disabled:opacity-5",
        className
      )}
      {...props}
    />
  );
}

function MenuListSeparator({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span className={cn("-mx-1 my-1 h-0.5 bg-border", className)} {...props} />
  );
}

export { MenuList, MenuListItem, MenuListSeparator };
