import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="grid md:grid-cols-3 gap-6 p-8 bg-gray-100">
        <Card
          title="Organic Honey"
          description="Pure Himalayan honey collected from natural sources."
        />

        <Card
          title="Mountain Spices"
          description="Fresh and aromatic spices from Himalayan farms."
        />

        <Card
          title="Herbal Tea"
          description="Healthy herbal tea blends from the mountains."
        />
      </section>

      <Footer />
    </>
  );
}