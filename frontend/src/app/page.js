"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";

export default function Home() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="overflow-x-hidden">

      <Navbar />
      <Hero />

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-8 py-8 bg-gray-100">

        {loading ? (
          <p>Loading...</p>
        ) : (
          products.map((product) => (
            <Card
              key={product.id}
              title={product.name}
              description={`Price: ₹${product.price}`}
            />
          ))
        )}

      </section>

      <Footer />

    </div>
  );
}