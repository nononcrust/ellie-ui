import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { cn } from "./lib/utils";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    ComponentDemo,
  };
}

const ComponentDemo = ({ children, className, ...props }: React.ComponentPropsWithRef<"div">) => {
  return (
    <div
      className={cn(
        "bg-background flex items-center justify-center rounded-lg py-[3rem]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
