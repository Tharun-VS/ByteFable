import React from "react";
import { Container } from "@/components/ui/container";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow">
        <Hero />

        <section id="services" className="py-16 bg-muted/30">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-2">
                Our Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We offer a comprehensive range of tech services to meet your
                business and personal needs.
              </p>
            </div>
            <Services />
          </Container>
        </section>

        <section id="about" className="py-16">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                  About Our Tech Services
                </h2>
                <p className="text-muted-foreground mb-6">
                  With years of experience in the tech industry, our team of
                  experts is dedicated to providing top-notch solutions tailored
                  to your specific needs. We combine technical expertise with
                  creative thinking to deliver exceptional results.
                </p>
                <p className="text-muted-foreground mb-6">
                  Whether you need laptop repairs, custom AI/ML solutions, IoT
                  hardware development, professional web development, or UI/UX
                  design services, we have the skills and knowledge to bring
                  your vision to life.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-muted/50 p-4 rounded-lg text-center">
                    <h3 className="text-2xl font-bold">500+</h3>
                    <p className="text-sm text-muted-foreground">
                      Projects Completed
                    </p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg text-center">
                    <h3 className="text-2xl font-bold">98%</h3>
                    <p className="text-sm text-muted-foreground">
                      Client Satisfaction
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1581092921461-eab10380ed66?w=800&q=80"
                    alt="Tech workspace"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                  <p className="text-primary-foreground font-bold text-center">
                    10+ Years Experience
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="testimonials" className="py-16 bg-muted/30">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-2">
                What Our Clients Say
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our clients have to
                say about our services.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "CEO, TechStart",
                  image:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
                  quote:
                    "The team delivered an exceptional AI solution that has transformed our business operations. Highly recommended!",
                },
                {
                  name: "Michael Chen",
                  role: "CTO, InnovateCorp",
                  image:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
                  quote:
                    "Their laptop repair service saved us thousands in replacement costs. Fast, reliable, and professional.",
                },
                {
                  name: "Emily Rodriguez",
                  role: "Design Director, CreativeHub",
                  image:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
                  quote:
                    "The UI/UX design work completely transformed our app. User engagement has increased by 200% since the redesign.",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-background p-6 rounded-lg shadow-md"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground">
                    "{testimonial.quote}"
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="contact" className="py-16">
          <Container>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                  Get In Touch
                </h2>
                <p className="text-muted-foreground mb-6">
                  Ready to start your next tech project or need help with an
                  existing one? Fill out the form and our team will get back to
                  you within 24 hours.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <span>contact@techservices.com</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <span>123 Tech Street, San Francisco, CA 94107</span>
                  </div>
                </div>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
