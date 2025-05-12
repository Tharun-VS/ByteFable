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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        service_interest: formData.service,
        message: formData.message,
        to_email: "bytefixers2024@gmail.com",
      };

      // Initialize EmailJS (should ideally be done in a useEffect or app initialization)
      emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key

      // Send email using EmailJS
      const response = await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your actual EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your actual EmailJS template ID
        templateParams,
      );

      console.log("Email sent successfully:", response);

      toast({
        title: "Email sent!",
        description: "Your message has been sent to bytefixers2024@gmail.com",
      });

      setFormData({
        name: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        title: "Error",
        description: "Failed to send email. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background" id="contact">
      <form onSubmit={handleSubmit} className="space-y-6">
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
          <Select value={formData.service} onValueChange={handleServiceChange}>
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
