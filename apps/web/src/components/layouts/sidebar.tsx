"use client";

import { menu } from "@/configs/menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  return (
    <aside className="bg-background scrollbar-hide fixed left-0 top-14 hidden h-[calc(100vh-3.5rem)] min-w-[15rem] flex-col overflow-y-auto py-12 md:flex">
      <nav className="flex flex-col gap-6 px-6">
        {menu.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarSubtitle key={group.title} title={group.title} />
            {group.items.map((item) => (
              <SidebarItem key={item.title} title={item.title} href={item.href} />
            ))}
          </SidebarGroup>
        ))}
      </nav>
    </aside>
  );
};

type SidebarItemProps = {
  title: string;
  href: string;
};

const SidebarItem = ({ title, href }: SidebarItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "hover:bg-background-hover flex h-8 items-center rounded-lg px-3 text-sm font-medium",
        isActive && "bg-background-hover hover:bg-background-hover font-semibold",
      )}
    >
      {title}
    </Link>
  );
};

type SidebarSubtitleProps = {
  title: string;
};

const SidebarSubtitle = ({ title }: SidebarSubtitleProps) => {
  return <span className="text-subtle px-3 text-[0.8125rem] font-medium">{title}</span>;
};

const SidebarGroup = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col">{children}</div>;
};
