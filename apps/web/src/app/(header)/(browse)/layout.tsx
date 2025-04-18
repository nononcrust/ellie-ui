import { Sidebar } from "@/components/layouts/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <div className="md:pl-[15rem]">{children}</div>
    </>
  );
}
