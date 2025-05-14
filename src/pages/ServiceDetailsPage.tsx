import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ServiceDetails from "@/components/service-details";
import { Container } from "@/components/ui/container";
import { Toaster } from "@/components/ui/toaster";

const ServiceDetailsPage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  // This would typically come from an API or database
  const services = [
    {
      id: "laptop-repair",
      title: "Laptop Repair",
      description:
        "Professional repair services for all laptop brands with quick turnaround times.",
      icon: "laptop",
      image:
        "https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=800&q=80",
      benefits: [
        "Fast diagnosis and repair",
        "Certified technicians",
        "Genuine replacement parts",
        "90-day warranty on repairs",
        "Data recovery services",
      ],
      process: [
        {
          title: "Diagnosis",
          description: "We identify the exact issue with your device",
        },
        {
          title: "Quote",
          description: "We provide a transparent cost estimate",
        },
        { title: "Repair", description: "Our technicians fix the problem" },
        {
          title: "Testing",
          description: "We ensure everything works perfectly",
        },
        { title: "Return", description: "Your device is returned good as new" },
      ],
      caseStudies: [
        {
          title: "Business Fleet Repair",
          description:
            "Maintained and repaired 50+ laptops for a local business",
        },
        {
          title: "Data Recovery",
          description: "Recovered critical data from a water-damaged laptop",
        },
      ],
    },
    {
      id: "ai-ml",
      title: "AI/ML Projects",
      description:
        "Custom AI and machine learning solutions tailored to your business needs.",
      icon: "lightbulb",
      image:
        "https://images.unsplash.com/photo-1677442135136-760c813770c6?w=800&q=80",
      benefits: [
        "Custom AI model development",
        "Data analysis and preparation",
        "Machine learning integration",
        "Ongoing model training",
        "Performance monitoring",
      ],
      process: [
        {
          title: "Requirements",
          description: "Understanding your business needs",
        },
        {
          title: "Data Collection",
          description: "Gathering and preparing training data",
        },
        {
          title: "Model Development",
          description: "Building and training the AI model",
        },
        {
          title: "Integration",
          description: "Implementing the solution in your systems",
        },
        {
          title: "Monitoring",
          description: "Ensuring optimal performance over time",
        },
      ],
      caseStudies: [
        {
          title: "Predictive Analytics",
          description:
            "Developed a sales forecasting model that improved accuracy by 35%",
        },
        {
          title: "Image Recognition",
          description:
            "Created a custom vision system for manufacturing quality control",
        },
      ],
    },
    {
      id: "iot",
      title: "IoT Hardware",
      description:
        "Innovative IoT hardware solutions to automate and enhance your operations.",
      icon: "smartphone",
      image:
        "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80",
      benefits: [
        "Custom hardware design",
        "Seamless connectivity",
        "Real-time monitoring",
        "Energy-efficient solutions",
        "Scalable architecture",
      ],
      process: [
        {
          title: "Concept",
          description: "Defining the IoT solution requirements",
        },
        {
          title: "Design",
          description: "Creating hardware and software specifications",
        },
        {
          title: "Prototyping",
          description: "Building and testing initial versions",
        },
        {
          title: "Production",
          description: "Manufacturing the final hardware",
        },
        {
          title: "Deployment",
          description: "Installing and configuring the system",
        },
      ],
      caseStudies: [
        {
          title: "Smart Factory",
          description: "Implemented IoT sensors that reduced downtime by 40%",
        },
        {
          title: "Agricultural Monitoring",
          description:
            "Developed soil sensors that optimized irrigation and increased crop yield",
        },
      ],
    },
    {
      id: "web-dev",
      title: "Web Development",
      description:
        "Modern, responsive websites and web applications built with the latest technologies.",
      icon: "code",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
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
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      description:
        "User-centered design that creates intuitive and engaging digital experiences.",
      icon: "palette",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      benefits: [
        "User-centered design approach",
        "Intuitive navigation and interactions",
        "Consistent visual language",
        "Accessibility compliance",
        "Data-driven design decisions",
      ],
      process: [
        {
          title: "Research",
          description: "Understanding your users and their needs",
        },
        {
          title: "Wireframing",
          description: "Creating the structural foundation",
        },
        { title: "Prototyping", description: "Building interactive models" },
        {
          title: "Visual Design",
          description: "Crafting the final look and feel",
        },
        {
          title: "User Testing",
          description: "Validating the design with real users",
        },
        {
          title: "Handoff",
          description: "Providing assets and specifications for development",
        },
      ],
      caseStudies: [
        {
          title: "Mobile App Redesign",
          description:
            "Increased user engagement by 75% through intuitive interface design",
        },
        {
          title: "SaaS Platform UX",
          description:
            "Reduced customer support tickets by 50% with improved user flows",
        },
      ],
    },
  ];

  const service = services.find((s) => s.id === serviceId);

  const handleContactClick = (serviceId: string) => {
    navigate("/contact", { state: { serviceId } });
    console.log("Navigating to contact with serviceId:", serviceId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12 relative">
        <div className="absolute inset-0 z-0 opacity-5">
          <img
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80"
            alt="Service details background"
            className="w-full h-full object-cover"
          />
        </div>
        <Container className="relative z-10">
          {service ? (
            <ServiceDetails
              service={service}
              onContactClick={handleContactClick}
            />
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold">Service not found</h2>
              <p className="mt-4">The requested service could not be found.</p>
            </div>
          )}
        </Container>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default ServiceDetailsPage;
