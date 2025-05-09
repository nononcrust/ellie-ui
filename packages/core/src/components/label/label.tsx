import { cn } from "@/lib/utils";
import { Label as LabelPrimitives } from "radix-ui";

type LabelProps = React.ComponentPropsWithRef<typeof LabelPrimitives.Root>;

const Label = ({ className, children, ...props }: LabelProps) => {
  return (
    <LabelPrimitives.Root className={cn("w-fit text-sm font-medium", className)} {...props}>
      {children}
    </LabelPrimitives.Root>
  );
};

export { Label };
