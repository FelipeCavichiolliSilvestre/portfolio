import { cn } from "@/lib/utils";

function Timeline({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      className={cn(
        "w-full relative before:absolute before:left-5 before:md:left-[50%] before:-translate-x-1/2 before:w-4 before:h-full before:bg-white before:border-2 before:rounded-full before:-z-1 z-0",
        className,
      )}
      {...props}
    />
  );
}

function TimelineItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      className={cn(
        "flex flex-row md:odd:flex-row md:even:flex-row-reverse md:even:[&>.flex]:flex-row-reverse items-center justify-left md:justify-center py-12 gap-6 md:before:flex-1",
        className,
      )}
      {...props}
    />
  );
}

function TimelineBullet({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "size-10 bg-main border-2 rounded-full flex justify-center items-center",
        className,
      )}
      {...props}
    />
  );
}

function TimelineContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex flex-1", className)} {...props} />;
}

export { Timeline, TimelineItem, TimelineBullet, TimelineContent };
