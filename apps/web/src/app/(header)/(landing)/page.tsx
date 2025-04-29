import { Examples } from "./_components/exmaples";
import { Footer } from "./_components/Footer";
import { Hero } from "./_components/hero";

export default function LandingPage() {
  return (
    <div className="to-background min-h-dvh bg-gradient-to-t from-neutral-100 dark:from-neutral-900">
      <main className="container">
        <Hero />
        <Examples />
        <Footer />
      </main>
    </div>
  );
}
