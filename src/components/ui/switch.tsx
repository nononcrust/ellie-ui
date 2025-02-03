import { cn } from "@/lib/utils";
import * as SwitchPrimitives from "@radix-ui/react-switch";

type SwitchProps = React.ComponentPropsWithRef<typeof SwitchPrimitives.Root>;

export const Switch = ({ className, ...props }: SwitchProps) => {
  return (
    <SwitchPrimitives.Root
      className={cn(
        "peer inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-100",
        "data-[state=unchecked]:bg-border",
        "data-[state=checked]:border-primary data-[state=checked]:bg-primary",
        "disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none block size-5 rounded-full bg-background shadow-xs",
          "data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
          "transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
        )}
      />
    </SwitchPrimitives.Root>
  );
};
