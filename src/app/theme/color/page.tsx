import { cn } from "@/lib/utils";

export default function ColorPage() {
  return (
    <main className="mx-auto my-8 w-full max-w-4xl px-4">
      <h2 className="mt-6 text-2xl font-semibold">Semantic Color</h2>
      <span className="text-subtle">
        역할과 맥락에 따라 색상을 분류하여 일관성있는 테마를 유지합니다.
      </span>
      <div className="mt-6 flex flex-col gap-8">
        <SemanticColorGroup title="Primary">
          <SemanticColor name="lighter" className="bg-primary-lighter" />
          <SemanticColor name="light" className="bg-primary-light" />
          <SemanticColor name="default" className="bg-primary" />
          <SemanticColor name="dark" className="bg-primary-dark" />
          <SemanticColor name="darker" className="bg-primary-darker" />
        </SemanticColorGroup>
        <SemanticColorGroup title="Secondary">
          <SemanticColor name="default" className="bg-secondary" />
          <SemanticColor name="dark" className="bg-secondary-dark" />
        </SemanticColorGroup>
        <SemanticColorGroup title="Neutral">
          <SemanticColor name="default" className="bg-neutral" />
          <SemanticColor name="dark" className="bg-neutral-dark" />
        </SemanticColorGroup>
        <SemanticColorGroup title="Background">
          <SemanticColor name="default" className="bg-background border-border border" />
          <SemanticColor name="100" className="bg-background-100" />
          <SemanticColor name="200" className="bg-background-200 border-border border" />
        </SemanticColorGroup>
        <SemanticColorGroup title="Outline">
          <SemanticColor name="border" className="bg-border" />
          <SemanticColor name="placeholder" className="bg-placeholder" />
        </SemanticColorGroup>
        <SemanticColorGroup title="Text">
          <SemanticColor name="main" className="bg-main" />
          <SemanticColor name="sub" className="bg-sub" />
          <SemanticColor name="subtle" className="bg-subtle" />
        </SemanticColorGroup>
        <SemanticColorGroup title="Status">
          <SemanticColor name="success" className="bg-success" />
          <SemanticColor name="warning" className="bg-warning" />
          <SemanticColor name="error" className="bg-error" />
        </SemanticColorGroup>
      </div>
      <div className="mt-16">
        <h2 className="mt-6 text-2xl font-semibold">Color Token</h2>
        <div className="mt-6 mb-4 flex items-center">
          <span className="text-subtle text-[13px] font-medium">Token</span>
          <span className="text-subtle ml-[150px] text-[13px] font-medium">Value</span>
        </div>
        <div className="flex flex-col gap-8">
          <ColorTokenGroup>
            <ColorToken name="color-primary-50" className="bg-blue-50" value="#EFF6FF" />
            <ColorToken name="color-primary-100" className="bg-blue-100" value="#DBEAFE" />
            <ColorToken name="color-primary-200" className="bg-blue-200" value="#BFDBFF" />
            <ColorToken name="color-primary-300" className="bg-blue-300" value="#8EC6FF" />
            <ColorToken name="color-primary-400" className="bg-blue-400" value="#50A2FF" />
            <ColorToken name="color-primary-500" className="bg-blue-500" value="#2C7FFF" />
            <ColorToken name="color-primary-600" className="bg-blue-600" value="#165DFB" />
            <ColorToken name="color-primary-700" className="bg-blue-700" value="#1447E6" />
            <ColorToken name="color-primary-800" className="bg-blue-800" value="#193CB8" />
            <ColorToken name="color-primary-900" className="bg-blue-900" value="#1C398E" />
          </ColorTokenGroup>
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
      </div>
    </main>
  );
}

type SemanticColorGroupProps = {
  title: string;
  children: React.ReactNode;
};

const SemanticColorGroup = ({ title, children }: SemanticColorGroupProps) => {
  return (
    <div className="flex flex-col">
      <span className="font-semibold">{title}</span>
      <div className="mt-4 flex flex-wrap gap-4">{children}</div>
    </div>
  );
};

type SemanticColorProps = {
  className: string;
  name: string;
};

const SemanticColor = ({ className, name }: SemanticColorProps) => {
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
