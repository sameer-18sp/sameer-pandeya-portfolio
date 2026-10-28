import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import FeaturedProject from "@/components/FeaturedProject";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <FeaturedProject />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
