import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function Hero() {
  return (
    <div className="bg-background py-12 md:py-24 lg:py-32 xl:py-40">
      <Container>
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Professional Tech Services
            <br />
            <span className="text-primary">For Your Business</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-[800px]">
            Expert solutions for laptop repair, AI/ML projects, IoT hardware,
            web development, and UI/UX design.
          </p>
          <Button size="lg" className="mt-6" asChild>
            <a href="/contact">Get Started</a>
          </Button>
        </div>
      </Container>
    </div>
  );
}
