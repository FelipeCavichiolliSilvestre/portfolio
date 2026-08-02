import type { MDXComponents } from "mdx/types";
import { Typography } from "./components/ui/Typography";

const components: MDXComponents = {
  h1: ({ children }) => (
    <Typography variant="h1" className="mb-4 text-center" asChild>
      <h2>{children}</h2>
    </Typography>
  ),
  h2: ({ children }) => (
    <Typography variant="h4" className="mb-4 mt-4" asChild>
      <h2>{children}</h2>
    </Typography>
  ),
  h3: ({ children }) => (
    <Typography variant="h6" className="mb-3 mt-2" asChild>
      <h3>{children}</h3>
    </Typography>
  ),
  p: ({ children }) => (
    <Typography variant="p1" weight="thin" className="mb-4">
      {children}
    </Typography>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
