import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    ComponentDemo,
  };
}

const ComponentDemo = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex min-h-[240px] items-center justify-center">{children}</div>;
};
