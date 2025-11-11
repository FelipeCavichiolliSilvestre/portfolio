import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      font: ["display", "header", "body"],
      text: ["d1", "d2", "h1", "h2", "h3", "h4", "h5", "h6", "p1", "p2", "p3"],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
