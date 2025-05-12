import React from "react";
import Header from "@/components/header";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Toaster } from "@/components/ui/toaster";
import { useLocation } from "react-router-dom";

const ContactPage = () => {
  const location = useLocation();
  const { serviceId } = location.state || {};

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="bg-background py-16 md:py-24">
          <Container>
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold tracking-tight mb-4">
                  Contact Us
                </h2>
                <p className="text-xl text-muted-foreground">
                  Get in touch with our team to discuss your tech needs
                  {serviceId && ` - ${serviceId}`}
                </p>
              </div>
              <ContactForm preselectedService={serviceId} />
            </div>
          </Container>
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default ContactPage;
