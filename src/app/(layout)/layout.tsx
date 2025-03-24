import { Header } from "@/components/layouts/header";
import { Sidebar } from "@/components/layouts/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="md:pl-[240px]">{children}</div>
    </>
  );
}
