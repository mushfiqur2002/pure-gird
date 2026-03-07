import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Maintenance from "@/components/Maintenance";
import NavBar from "@/components/NavBar";
import Service from "@/components/Service";
import Testimonials from "@/components/Testimonials";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div className="relative">
      <NavBar />

      <main className="w-full relative">

        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="maintenance">
          <Maintenance />
        </section>

        <section id="services">
          <Service />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <Footer />

      </main>
    </div>
  );
}