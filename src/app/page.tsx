import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Maintenance from "@/components/Maintenance";
import NavBar from "@/components/NavBar";
import Service from "@/components/Service";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="relative">
      <NavBar />
      <main className="w-full relative">
        <Hero />
        <About />
        <Maintenance />
        <Service />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}
