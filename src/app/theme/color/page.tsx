import { cn } from "@/lib/utils";

export default function ColorPage() {
  return (
    <main className="mx-auto my-8 w-full max-w-4xl px-4">
      <div className="flex flex-col gap-8">
        <ColorGroup title="Primary">
          <Color name="lighter" className="bg-primary-lighter" />
          <Color name="light" className="bg-primary-light" />
          <Color name="default" className="bg-primary" />
          <Color name="dark" className="bg-primary-dark" />
          <Color name="darker" className="bg-primary-darker" />
          <Color name="neutral" className="bg-neutral" />
        </ColorGroup>
        <ColorGroup title="Secondary">
          <Color name="default" className="bg-secondary" />
          <Color name="dark" className="bg-secondary-dark" />
        </ColorGroup>
        <ColorGroup title="Background">
          <Color name="default" className="bg-background border-border border" />
          <Color name="100" className="bg-background-100" />
          <Color name="200" className="bg-background-200 border-border border" />
        </ColorGroup>
        <ColorGroup title="Outline">
          <Color name="border" className="bg-border" />
          <Color name="placeholder" className="bg-placeholder" />
        </ColorGroup>
        <ColorGroup title="Text">
          <Color name="main" className="bg-main" />
          <Color name="sub" className="bg-sub" />
          <Color name="subtle" className="bg-subtle" />
        </ColorGroup>
        <ColorGroup title="Status">
          <Color name="success" className="bg-success" />
          <Color name="warning" className="bg-warning" />
          <Color name="error" className="bg-error" />
        </ColorGroup>
      </div>
      <div className="mt-16">
        <ColorTokenGroup>
          <ColorToken name="color-neutral-50" className="bg-neutral-50" value="#FAFAFA" />
          <ColorToken name="color-neutral-100" className="bg-neutral-100" value="#F5F5F5" />
          <ColorToken name="color-neutral-200" className="bg-neutral-200" value="#E5E5E5" />
          <ColorToken name="color-neutral-300" className="bg-neutral-300" value="#D4D4D4" />
          <ColorToken name="color-neutral-400" className="bg-neutral-400" value="#A1A1A1" />
          <ColorToken name="color-neutral-500" className="bg-neutral-500" value="#737373" />
          <ColorToken name="color-neutral-600" className="bg-neutral-600" value="#525252" />
          <ColorToken name="color-neutral-700" className="bg-neutral-700" value="#404040" />
          <ColorToken name="color-neutral-800" className="bg-neutral-800" value="#262626" />
          <ColorToken name="color-neutral-900" className="bg-neutral-900" value="#171717" />
        </ColorTokenGroup>
      </div>
    </main>
  );
}

type ColorGroupProps = {
  title: string;
  children: React.ReactNode;
};

const ColorGroup = ({ title, children }: ColorGroupProps) => {
  return (
    <div className="flex flex-col">
      <span className="font-semibold">{title}</span>
      <div className="mt-4 flex gap-4">{children}</div>
    </div>
  );
};

type ColorProps = {
  className: string;
  name: string;
};

const Color = ({ className, name }: ColorProps) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className={cn("size-16 rounded-2xl", className)} />
      <span className="text-[13px] font-medium">{name}</span>
    </div>
  );
};

type ColorTokenGroupProps = {
  children: React.ReactNode;
};

const ColorTokenGroup = ({ children }: ColorTokenGroupProps) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};

type ColorTokenProps = {
  className: string;
  name: string;
  value: string;
};

const ColorToken = ({ className, name, value }: ColorTokenProps) => {
  return (
    <div className="flex items-center">
      <div className={cn("mr-2 size-5 rounded-full", className)} />
      <span className="w-[160px] text-[15px] font-medium">{name}</span>
      <span className="text-[15px] font-medium">{value}</span>
    </div>
  );
};
