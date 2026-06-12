export default function Card({ title, description }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
      <h2 className="text-xl font-bold mb-3">{title}</h2>

      <p className="text-gray-600">{description}</p>
    </div>
  );
}