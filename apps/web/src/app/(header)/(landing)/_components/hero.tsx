import { TransitionMount } from "@/components/shared/transition-mount";
import { cn } from "@/lib/utils";
import { ChipButton } from "@ellie-ui/core";
import { PawPrintIcon } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="flex flex-col py-16 md:items-center">
      <TransitionMount>
        <h1 className={cn("text-main relative w-fit text-5xl font-extrabold")}>
          Ellie UI
          <PawPrintIcon className="fill-primary-light stroke-primary-light absolute -right-8 -top-1 size-6" />
        </h1>
      </TransitionMount>
      <TransitionMount delay={0.2}>
        <p className="text-subtle mt-2 text-xl font-medium">모던 웹을 위한 컴포넌트 라이브러리</p>
      </TransitionMount>
      <TransitionMount delay={0.4}>
        <div className="mt-6 flex items-center gap-3">
          <ChipButton
            className="to-primary h-11 bg-gradient-to-r from-sky-500 px-6 text-base shadow-xl"
            asChild
          >
            <Link href="/docs/button">시작하기</Link>
          </ChipButton>
          <ChipButton className="h-11 px-6 text-base" variant="secondary" asChild>
            <Link href="/components/button">컴포넌트 둘러보기</Link>
          </ChipButton>
        </div>
      </TransitionMount>
    </section>
  );
};
