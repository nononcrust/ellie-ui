import { Avatar as AvatarBase } from "@base-ui-components/react";
import { cn } from "../../lib/utils";

type AvatarProps = AvatarBase.Root.Props;

const Avatar = ({ className, children, ...props }: AvatarProps) => {
  return (
    <AvatarBase.Root
      className={cn("flex size-10 shrink-0 overflow-hidden rounded-full", className)}
      {...props}
    >
      {children}
    </AvatarBase.Root>
  );
};

type AvatarImageProps = AvatarBase.Image.Props;

const AvatarImage = ({ className, ...props }: AvatarImageProps) => {
  return <AvatarBase.Image className={cn("aspect-square h-full w-full", className)} {...props} />;
};

type AvatarFallbackProps = AvatarBase.Fallback.Props;

const AvatarFallback = ({ className, ...props }: AvatarFallbackProps) => {
  return (
    <AvatarBase.Fallback
      className={cn(
        "bg-background-100 text-main flex h-full w-full items-center justify-center rounded-[inherit]",
        className,
      )}
      {...props}
    />
  );
};

Avatar.Image = AvatarImage;
Avatar.Fallback = AvatarFallback;

export { Avatar };
