import { Container } from "@/components/ui/container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Laptop, Brain, Cpu, Code, Palette, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function ServiceCard({ title, description, icon }: ServiceCardProps) {
  // Convert title to URL-friendly format for routing
  const serviceId = title.toLowerCase().replace(/\s+/g, "-");

  // Map titles to the correct IDs that match what's in ServiceDetailsPage
  const idMap: Record<string, string> = {
    "Laptop Repair": "laptop-repair",
    "AI/ML Projects": "ai-ml",
    "IoT Hardware": "iot",
    "Web Development": "web-dev",
    "UI/UX Design": "ui-ux",
  };

  const mappedServiceId = idMap[title] || serviceId;

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter className="mt-auto pt-4">
        <Button variant="outline" className="w-full" asChild>
          <Link to={`/services/${mappedServiceId}`}>
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function Services() {
  const services = [
    {
      title: "Laptop Repair",
      description:
        "Professional repair services for all laptop brands with quick turnaround times.",
      icon: <Laptop className="h-6 w-6 text-primary" />,
    },
    {
      title: "AI/ML Projects",
      description:
        "Custom AI and machine learning solutions tailored to your business needs.",
      icon: <Brain className="h-6 w-6 text-primary" />,
    },
    {
      title: "IoT Hardware",
      description:
        "Innovative IoT hardware solutions to automate and enhance your operations.",
      icon: <Cpu className="h-6 w-6 text-primary" />,
    },
    {
      title: "Web Development",
      description:
        "Modern, responsive websites and web applications built with the latest technologies.",
      icon: <Code className="h-6 w-6 text-primary" />,
    },
    {
      title: "UI/UX Design",
      description:
        "User-centered design that creates intuitive and engaging digital experiences.",
      icon: <Palette className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <div className="bg-muted/50 py-16 md:py-24" id="services">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            Comprehensive tech solutions to help your business thrive in the
            digital age
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
