import { link } from "@/configs/link";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-center py-12">
      <span className="text-subtle text-sm">
        © 2025. Built by{" "}
        <Link className="underline" href={link.github}>
          nonon
        </Link>
      </span>
    </footer>
  );
};
