"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  return (
    <aside className="sticky left-0 top-0 w-[240px]">
      <nav className="flex flex-col gap-1 p-6 pt-12">
        <SidebarItem title="Home" href="/" />
        <SidebarItem title="Button" href="/button" />
        <SidebarItem title="Input" href="/input" />
        <SidebarItem title="Select" href="/select" />
        <SidebarItem title="Checkbox" href="/checkbox" />
        <SidebarItem title="Radio Group" href="/radio-group" />
        <SidebarItem title="Date Picker" href="/date-picker" />
        <SidebarItem title="Switch" href="/switch" />
        <SidebarItem title="Textarea" href="/textarea" />
        <SidebarItem title="Chip" href="/chip" />
        <SidebarItem title="Avatar" href="/avatar" />
        <SidebarItem title="Dialog" href="/dialog" />
        <SidebarItem title="Badge" href="/badge" />
        <SidebarItem title="Skeleton" href="/skeleton" />
        <SidebarItem title="Dropdown Menu" href="/dropdown-menu" />
        <SidebarItem title="Popover" href="/popover" />
        <SidebarItem title="Tooltip" href="/tooltip" />
        <SidebarItem title="Form" href="/form" />
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
        "flex h-8 items-center rounded-lg px-3 text-sm font-medium hover:bg-background-hover",
        isActive && "bg-background-hover font-semibold hover:bg-background-hover",
      )}
    >
      {title}
    </Link>
  );
};
