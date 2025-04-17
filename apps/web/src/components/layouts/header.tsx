"use client";

import { link } from "@/configs/link";
import { menu } from "@/configs/menu";
import { cn } from "@/lib/utils";
import { IconButton } from "@ellie-ui/core";
import { useIsScrollTop } from "@ellie-ui/core/hooks";
import { MenuIcon, XIcon } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog as DialogPrimitives } from "radix-ui";
import React from "react";
import { ThemeToggleButton } from "../theme/theme-toggle-button";

const HIDDEN_ROUTES = ["/search"];

export const Header = () => {
  const pathname = usePathname();
  const { isScrollTop } = useIsScrollTop();

  return (
    <header
      className={cn(
        "bg-background sticky top-0 z-10 flex h-[56px] w-full items-center justify-between border-b px-2 pl-5 transition-colors",
        HIDDEN_ROUTES.includes(pathname) && "hidden",
        isScrollTop ? "border-transparent" : "border-border",
        "bg-background/70 backdrop-blur-sm",
        "md:border-border mx-auto md:top-4 md:max-w-[640px] md:rounded-full md:border",
      )}
    >
      <div className="flex items-center">
        <Link className="flex items-center gap-2" href="/">
          <span className="from-primary size-[18px] rounded-full bg-gradient-to-r to-sky-300" />
          <span className="font-bold">Ellie UI</span>
        </Link>
        <nav className="ml-8 flex items-center gap-4">
          <Link
            className="text-sub hover:text-main text-[14px] font-medium transition-colors"
            href="/docs"
          >
            Docs
          </Link>
          <Link
            className={cn("text-sub hover:text-main text-[14px] font-medium transition-colors")}
            href="/components/button"
          >
            Examples
          </Link>
        </nav>
      </div>
      <div className="mr-1 flex items-center gap-1">
        <Github />
        <Storybook />
        <ThemeToggleButton />
        <MobileMenu />
      </div>
    </header>
  );
};

const Storybook = () => {
  return (
    <IconButton aria-label="스토리북" variant="ghost" asChild size="small">
      <Link href={link.storybook} target="_blank">
        <StorybookLogo />
      </Link>
    </IconButton>
  );
};

const StorybookLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={20}
      height={20}
      viewBox="-31.5 0 319 319"
      version="1.1"
      preserveAspectRatio="xMidYMid"
    >
      <defs>
        <path
          d="M9.87245893,293.324145 L0.0114611411,30.5732167 C-0.314208957,21.8955842 6.33948896,14.5413918 15.0063196,13.9997149 L238.494389,0.0317105427 C247.316188,-0.519651867 254.914637,6.18486163 255.466,15.0066607 C255.486773,15.339032 255.497167,15.6719708 255.497167,16.0049907 L255.497167,302.318596 C255.497167,311.157608 248.331732,318.323043 239.492719,318.323043 C239.253266,318.323043 239.013844,318.317669 238.774632,318.306926 L25.1475605,308.712253 C16.8276309,308.338578 10.1847994,301.646603 9.87245893,293.324145 L9.87245893,293.324145 Z"
          id="path-1"
        />
      </defs>
      <g>
        <mask id="mask-2" fill="white">
          <use xlinkHref="#path-1" />
        </mask>
        <use fill="#1B1F23" fillRule="nonzero" xlinkHref="#path-1" />
        <path
          d="M188.665358,39.126973 L190.191903,2.41148534 L220.883535,0 L222.205755,37.8634126 C222.251771,39.1811466 221.22084,40.2866846 219.903106,40.3327009 C219.338869,40.3524045 218.785907,40.1715096 218.342409,39.8221376 L206.506729,30.4984116 L192.493574,41.1282444 C191.443077,41.9251106 189.945493,41.7195021 189.148627,40.6690048 C188.813185,40.2267976 188.6423,39.6815326 188.665358,39.126973 Z M149.413703,119.980309 C149.413703,126.206975 191.355678,123.222696 196.986019,118.848893 C196.986019,76.4467826 174.234041,54.1651411 132.57133,54.1651411 C90.9086182,54.1651411 67.5656805,76.7934542 67.5656805,110.735941 C67.5656805,169.85244 147.345341,170.983856 147.345341,203.229219 C147.345341,212.280549 142.913138,217.654777 133.162291,217.654777 C120.456641,217.654777 115.433477,211.165914 116.024438,189.103298 C116.024438,184.317101 67.5656805,182.824962 66.0882793,189.103298 C62.3262146,242.56887 95.6363019,257.990394 133.753251,257.990394 C170.688279,257.990394 199.645341,238.303123 199.645341,202.663511 C199.645341,139.304202 118.683759,141.001326 118.683759,109.604526 C118.683759,96.8760922 128.139127,95.178968 133.753251,95.178968 C139.662855,95.178968 150.300143,96.2205679 149.413703,119.980309 Z"
          fill="#FFFFFF"
          fillRule="nonzero"
          mask="url(#mask-2)"
        />
      </g>
    </svg>
  );
};

const Github = () => {
  return (
    <IconButton aria-label="깃허브" variant="ghost" asChild size="small">
      <Link href={link.repository} target="_blank">
        <GithubLogo className="w-5" />
      </Link>
    </IconButton>
  );
};

const GithubLogo = (props: React.ComponentPropsWithRef<"svg">) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="none" {...props}>
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
