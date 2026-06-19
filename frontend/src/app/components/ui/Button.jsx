/**
 * Button Component
 * Props:
 * - children: Button text/content
 */






export default function Button({ children }) {
  return (
    <button className="bg-green-600 text-white px-4 py-2 rounded">
      {children}
    </button>
  );
}