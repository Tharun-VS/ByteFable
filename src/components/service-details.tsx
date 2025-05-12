import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Laptop,
  Lightbulb,
  Smartphone,
  Code,
  Palette,
} from "lucide-react";

interface ServiceDetailsProps {
  service?: {
    id: string;
    title: string;
    description: string;
    icon: string;
    benefits: string[];
    process: { title: string; description: string }[];
    caseStudies?: { title: string; description: string }[];
  };
  onContactClick?: (serviceId: string) => void;
}

const ServiceDetails = ({
  service,
  onContactClick = () => {},
}: ServiceDetailsProps) => {
  const [expanded, setExpanded] = useState(true);

  // Default service data if none is provided
  const defaultService = {
    id: "web-dev",
    title: "Web Development",
    description:
      "Professional web development services tailored to your business needs. We create responsive, modern websites that drive results and provide an exceptional user experience.",
    icon: "code",
    benefits: [
      "Responsive design that works on all devices",
      "SEO-friendly architecture",
      "Fast loading speeds",
      "Secure and scalable solutions",
      "Ongoing maintenance and support",
    ],
    process: [
      {
        title: "Discovery",
        description: "We learn about your business goals and requirements",
      },
      {
        title: "Planning",
        description: "Creating a roadmap and technical specifications",
      },
      {
        title: "Design",
        description: "Crafting the visual elements and user experience",
      },
      {
        title: "Development",
        description: "Building the website with clean, efficient code",
      },
      {
        title: "Testing",
        description: "Ensuring everything works perfectly across all devices",
      },
      { title: "Launch", description: "Deploying your website to the world" },
    ],
    caseStudies: [
      {
        title: "E-commerce Platform",
        description:
          "Built a custom shopping experience that increased sales by 45%",
      },
      {
        title: "Corporate Website",
        description:
          "Redesigned a company website that improved lead generation by 60%",
      },
    ],
  };

  const activeService = service || defaultService;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "laptop":
        return <Laptop className="h-6 w-6" />;
      case "lightbulb":
        return <Lightbulb className="h-6 w-6" />;
      case "smartphone":
        return <Smartphone className="h-6 w-6" />;
      case "code":
        return <Code className="h-6 w-6" />;
      case "palette":
        return <Palette className="h-6 w-6" />;
      default:
        return <Code className="h-6 w-6" />;
    }
  };

  return (
    <Card className="w-full max-w-6xl mx-auto bg-white shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-lg">
            {getIcon(activeService.icon)}
          </div>
          <CardTitle className="text-2xl">{activeService.title}</CardTitle>
        </div>
        <CardDescription className="text-white/90 text-lg mt-2">
          {activeService.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-6 space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            Key Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeService.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Clock className="h-5 w-5 text-blue-500" />
            Our Process
          </h3>
          <div className="space-y-4">
            {activeService.process.map((step, index) => (
              <div key={index} className="relative pl-8 pb-4">
                {index !== activeService.process.length - 1 && (
                  <div className="absolute left-3 top-3 bottom-0 w-0.5 bg-gray-200"></div>
                )}
                <div className="absolute left-0 top-1 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-bold text-sm">
                  {index + 1}
                </div>
                <h4 className="font-medium text-lg">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {activeService.caseStudies && activeService.caseStudies.length > 0 && (
          <>
            <Separator />
            <div>
              <h3 className="text-xl font-semibold mb-4">Case Studies</h3>
              <Accordion type="single" collapsible className="w-full">
                {activeService.caseStudies.map((study, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {study.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-600">{study.description}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </>
        )}
      </CardContent>

      <CardFooter className="bg-gray-50 p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-gray-600 text-center sm:text-left">
          Ready to get started with our {activeService.title.toLowerCase()}{" "}
          services?
        </p>
        <Button
          onClick={() => {
            console.log("Button clicked, service ID:", activeService.id);
            onContactClick(activeService.id);
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6"
        >
          Contact Us About This Service <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceDetails;
