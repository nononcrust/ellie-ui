"use client";

import { menu } from "@/configs/menu";
import { useIsScrollTop } from "@/hooks/use-is-scroll-top";
import { cn } from "@/lib/utils";
import * as DialogPrimitives from "@radix-ui/react-dialog";
import { MenuIcon, XIcon } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconButton } from "../ui/icon-button";

const HIDDEN_ROUTES = ["/search"];

export const Header = () => {
  const pathname = usePathname();
  const { isScrollTop } = useIsScrollTop();

  return (
    <header
      className={cn(
        "sticky top-0 z-10 flex h-[56px] w-full items-center justify-between border-b bg-background px-2 transition-colors",
        HIDDEN_ROUTES.includes(pathname) && "hidden",
        isScrollTop ? "border-transparent" : "border-border",
      )}
    >
      <div />
      <MobileMenu />
    </header>
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
        <DialogPrimitives.Content className="fixed inset-0 z-50 flex flex-col bg-background">
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
            className="flex flex-col gap-6 overflow-y-auto p-4 scrollbar-hide"
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
  return <span className="font-medium text-subtle">{title}</span>;
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
