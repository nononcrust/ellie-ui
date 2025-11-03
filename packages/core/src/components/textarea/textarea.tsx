import { cn } from "../../lib/utils";

type TextareaProps = React.ComponentPropsWithRef<"textarea"> & {
  invalid?: boolean;
};

const Textarea = ({ className, invalid, ...props }: TextareaProps) => {
  return (
    <textarea
      className={cn(
        "border-border text-main bg-background shadow-xs flex min-h-[5rem] w-full rounded-md border px-3 py-2 text-sm",
        "field-sizing-content",
        "focus-visible:focus-input-ring",
        "disabled:pointer-events-none disabled:opacity-50",
        "read-only:bg-background-100",
        invalid && "focus-visible:focus-input-ring-error border-error",
        className,
      )}
      aria-invalid={invalid}
      {...props}
    />
  );
};

export { Textarea };
