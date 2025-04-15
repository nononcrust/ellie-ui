import { cn } from "@/lib/utils";
import { ChipButton } from "@ellie-ui/core";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="flex flex-col py-16 md:items-center">
      <h1
        className={cn(
          "w-fit text-5xl font-extrabold",
          "bg-clip-text text-transparent",
          "to-main from-sub bg-gradient-to-r",
        )}
      >
        Ellie UI
      </h1>
      <p className="text-subtle mt-2 text-xl font-medium">모던 웹을 위한 컴포넌트 라이브러리</p>
      <div className="mt-6 flex items-center gap-3">
        <ChipButton
          className="to-primary h-[44px] bg-gradient-to-r from-sky-500 px-6 text-base shadow-xl"
          asChild
        >
          <Link href="/docs">시작하기</Link>
        </ChipButton>
        <ChipButton className="h-[44px] px-6 text-base" variant="secondary" asChild>
          <Link href="/components/button">컴포넌트 둘러보기</Link>
        </ChipButton>
      </div>
    </section>
  );
};
