import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Clients } from "@/components/site/Clients";
import { Pillars } from "@/components/site/Pillars";
import { Portfolio } from "@/components/site/Portfolio";
import { Manifesto } from "@/components/site/Manifesto";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const Index = () => (
  <>
    <a
      href="#trabajo"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:border focus:border-foreground focus:bg-background focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase"
    >
      Saltar al contenido
    </a>
    <Nav />
    <main id="main" className="min-h-screen bg-background text-foreground">
      <Hero />
      <Clients />
      <Pillars />
      <Portfolio />
      <Manifesto />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Index;
