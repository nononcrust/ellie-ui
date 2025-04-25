import { cn } from "@/lib/utils";

type TextareaProps = React.ComponentPropsWithRef<"textarea">;

export const Textarea = ({ className, ["aria-invalid"]: ariaInvalid, ...props }: TextareaProps) => {
  return (
    <textarea
      className={cn(
        "border-border text-main bg-background shadow-xs flex min-h-[5rem] w-full rounded-md border px-3 py-2 text-sm",
        "focus-visible:focus-input-ring",
        "disabled:pointer-events-none disabled:opacity-50",
        "read-only:bg-background-100",
        ariaInvalid && "focus-visible:focus-input-ring-error border-error",
        className,
      )}
      aria-invalid={ariaInvalid}
      {...props}
    />
  );
};
