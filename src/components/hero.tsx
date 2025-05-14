import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function Hero() {
  return (
    <div className="bg-background py-12 md:py-24 lg:py-32 xl:py-40 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80"
          alt="Tech background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <Container>
        <div className="flex flex-col items-center text-center space-y-8 relative z-10">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Professional ByteFable Services
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
