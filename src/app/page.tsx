import About from "@/components/About";
import Hero from "@/components/Hero";
import Maintenance from "@/components/Maintenance";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="relative">
      <NavBar />
      <main className="w-full relative">
        <Hero />
        <About />
        <Maintenance />
      </main>
    </div>
  );
}
