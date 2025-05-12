import Header from "./header";
import Hero from "./hero";
import Services from "./services";
import Footer from "./footer";
import { Toaster } from "@/components/ui/toaster";

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default Home;
