import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  detailsContent?: string;
  onLearnMore?: () => void;
}

const ServiceCard = ({
  title = "Service Title",
  description = "Brief description of the service offering and its benefits to potential clients.",
  icon = (
    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
      Icon
    </div>
  ),
  detailsContent = "More detailed information about this service would appear here. This includes the process, benefits, and what clients can expect when they choose this service.",
  onLearnMore = () => {},
}: ServiceCardProps) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="w-full max-w-sm h-full flex flex-col transition-all duration-300 hover:shadow-lg bg-white">
      <CardHeader className="pb-2">
        <div className="flex justify-center mb-4">{icon}</div>
        <CardTitle className="text-xl font-bold text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-center mb-4">
          {description}
        </CardDescription>

        {expanded && (
          <div className="mt-4 text-sm text-muted-foreground animate-in fade-in-50 duration-300">
            {detailsContent}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col gap-2 pt-2">
        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-2"
          onClick={toggleExpand}
        >
          {expanded ? "Show Less" : "Learn More"}
          {expanded ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
        <Button className="w-full" onClick={onLearnMore}>
          Contact Us
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
