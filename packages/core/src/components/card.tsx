import { cn } from "@/lib/utils";

type CardProps = React.ComponentPropsWithRef<"div">;

export const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "border-border bg-background shadow-xs flex flex-col rounded-[0.75rem] border p-6",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
