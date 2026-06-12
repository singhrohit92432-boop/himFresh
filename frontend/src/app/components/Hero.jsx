export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-600 via-emerald-500 to-yellow-400 text-white py-24 px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Fresh From The Himalayas
      </h1>

      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
        Discover authentic Himalayan food products delivered directly from mountain farmers to your doorstep.
      </p>

      <button className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
        Shop Now
      </button>
    </section>
  );
}