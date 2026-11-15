import { Button, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-ink-900 py-32 text-center text-white">
      <Container>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-400">404</p>
        <h1 className="mt-3 text-4xl font-extrabold">This route went off the map.</h1>
        <p className="mt-4 text-white/70">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/">Back to Home</Button>
          <Button href="/contact" variant="ghost-light">Contact Us</Button>
        </div>
      </Container>
    </section>
  );
}
