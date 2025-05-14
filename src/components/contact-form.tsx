import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";

interface ContactFormProps {
  preselectedService?: string;
}

export default function ContactForm({
  preselectedService = "",
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: preselectedService,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    // Map form field names to state properties
    const fieldMap: Record<string, string> = {
      from_name: "name",
      from_email: "email",
      message: "message",
    };

    const stateKey = fieldMap[name] || name;
    setFormData((prev) => ({ ...prev, [stateKey]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // We're using hardcoded public key now, so no need to check for it
      if (!import.meta.env.VITE_EMAILJS_TEMPLATE_ID) {
        console.warn("EmailJS Template ID is not configured, using fallback");
      }

      // Initialize EmailJS with your public key
      emailjs.init("Cr5DF6euURjveltPn");

      // Create a form data object with the recipient email
      const formElement = e.currentTarget;

      // Send email using EmailJS with hardcoded values
      const response = await emailjs.send(
        "service_9cgjse2",
        "template_7yvvvxj",
        {
          from_name: formData.name,
          from_email: formData.email,
          service_interest: formData.service,
          message: formData.message,
          to_email: "bytefixers2024@gmail.com",
        },
      );

      console.log("Email sent successfully:", response);

      toast({
        title: "Email sent!",
        description: "Your message has been sent successfully!",
      });

      setFormData({
        name: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (error: any) {
      console.error("Failed to send email:", error);

      // Provide more specific error messages based on the error type
      let errorMessage = "Failed to send email. Please try again later.";

      if (error.message) {
        if (error.message.includes("Public Key")) {
          errorMessage =
            "EmailJS Public Key is not configured. Please contact the administrator.";
        } else if (error.message.includes("Template ID")) {
          errorMessage =
            "EmailJS Template ID is not configured. Please contact the administrator.";
        } else if (
          error.status === 400 ||
          error.status === 401 ||
          error.status === 403
        ) {
          errorMessage =
            "Authentication error with email service. Please contact the administrator.";
        } else if (error.status === 429) {
          errorMessage = "Too many requests. Please try again later.";
        }
      }

      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="bg-background rounded-xl shadow-lg p-6 border border-gray-100"
      id="contact"
    >
      <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="service">Service Interest</Label>
          <Select
            value={formData.service}
            onValueChange={handleServiceChange}
            name="service"
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="laptop-repair">Laptop Repair</SelectItem>
              <SelectItem value="ai-ml">AI/ML Projects</SelectItem>
              <SelectItem value="iot">IoT Hardware</SelectItem>
              <SelectItem value="web-dev">Web Development</SelectItem>
              <SelectItem value="ui-ux">UI/UX Design</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us about your project or requirements"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
          />
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
