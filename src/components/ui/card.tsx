import { cn } from "@/lib/utils";

type CardProps = React.ComponentPropsWithRef<"div">;

export const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "border-border flex flex-col rounded-[12px] border bg-background p-4 shadow-sm",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
