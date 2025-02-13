"use client";

import { link } from "@/configs/link";
import { menu } from "@/configs/menu";
import { useIsScrollTop } from "@/hooks/use-is-scroll-top";
import { cn } from "@/lib/utils";
import * as DialogPrimitives from "@radix-ui/react-dialog";
import { MenuIcon, XIcon } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ThemeToggleButton } from "../theme/theme-toggle-button";
import { IconButton } from "../ui/icon-button";

const HIDDEN_ROUTES = ["/search"];

export const Header = () => {
  const pathname = usePathname();
  const { isScrollTop } = useIsScrollTop();

  return (
    <header
      className={cn(
        "bg-background sticky top-0 z-10 flex h-[56px] w-full items-center justify-between border-b px-2 pl-4 transition-colors",
        HIDDEN_ROUTES.includes(pathname) && "hidden",
        isScrollTop ? "border-transparent" : "border-border",
      )}
    >
      <div>
        <MobileMenu />
      </div>
      <div className="mr-1 flex items-center gap-2">
        <ThemeToggleButton />
        <Github />
      </div>
    </header>
  );
};

const Github = () => {
  return (
    <IconButton className="rounded-full" aria-label="깃허브" variant="ghost" asChild size="small">
      <Link href={link.github}>
        <GithubLogo className="w-5" />
      </Link>
    </IconButton>
  );
};

const GithubLogo = (props: React.ComponentPropsWithRef<"svg">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1024"
      height="1024"
      viewBox="0 0 1024 1024"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
        transform="scale(64)"
        className="fill-[#1b1f23] dark:fill-white"
      />
    </svg>
  );
};

const MobileMenu = () => {
  return (
    <DialogPrimitives.Root>
      <DialogPrimitives.Trigger asChild>
        <IconButton aria-label="메뉴" variant="ghost" className="md:hidden">
          <MenuIcon />
        </IconButton>
      </DialogPrimitives.Trigger>
      <DialogPrimitives.Portal>
        <DialogPrimitives.Overlay />
        <DialogPrimitives.Content className="bg-background fixed inset-0 z-50 flex flex-col">
          <DialogPrimitives.Title className="sr-only">메뉴</DialogPrimitives.Title>
          <DialogPrimitives.Description className="sr-only">메뉴</DialogPrimitives.Description>
          <div className="flex justify-end px-2 py-2.5">
            <DialogPrimitives.Close asChild>
              <IconButton variant="ghost" className="" aria-label="닫기">
                <XIcon />
              </IconButton>
            </DialogPrimitives.Close>
          </div>
          <motion.nav
            initial={{ opacity: 0, transform: "translateY(-16px)" }}
            animate={{ opacity: 1, transform: "translateY(0)" }}
            className="scrollbar-hide flex flex-col gap-6 overflow-y-auto p-4"
          >
            {menu.map((group) => (
              <MobileMenuGroup key={group.title}>
                <MobileMenuSubtitle title={group.title} />
                {group.items.map((item) => (
                  <MobileMenuItem key={item.title} title={item.title} href={item.href} />
                ))}
              </MobileMenuGroup>
            ))}
          </motion.nav>
        </DialogPrimitives.Content>
      </DialogPrimitives.Portal>
    </DialogPrimitives.Root>
  );
};

const MobileMenuSubtitle = ({ title }: { title: string }) => {
  return <span className="text-subtle font-medium">{title}</span>;
};

type MobileMenuItemProps = {
  title: string;
  href: string;
};

const MobileMenuItem = ({ title, href }: MobileMenuItemProps) => {
  return (
    <DialogPrimitives.Close asChild>
      <Link href={href} className="py-3 font-semibold">
        {title}
      </Link>
    </DialogPrimitives.Close>
  );
};

const MobileMenuGroup = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col">{children}</div>;
};
