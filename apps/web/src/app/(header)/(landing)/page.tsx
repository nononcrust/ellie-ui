import { Examples } from "./_components/exmaples";
import { Hero } from "./_components/hero";

export default function LandingPage() {
  return (
    <div className="to-background min-h-dvh bg-gradient-to-t from-neutral-100 dark:from-neutral-900">
      <main className="container pb-16">
        <Hero />
        <Examples />
      </main>
    </div>
  );
}
