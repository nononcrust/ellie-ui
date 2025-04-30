import notFound from "@/assets/images/not-found.png";

export default function NotFound() {
  return (
    <main className="flex h-dvh items-center justify-center">
      <img src={notFound.src} width={280} height={280} alt="404" />
    </main>
  );
}
