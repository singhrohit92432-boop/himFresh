export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">HimFresh</h1>

      <div className="flex gap-6">
        <a href="/" className="hover:text-yellow-300">Home</a>
        <a href="/about" className="hover:text-yellow-300">About</a>
        <a href="/login" className="hover:text-yellow-300">Login</a>
        <a href="/dashboard" className="hover:text-yellow-300">Dashboard</a>
      </div>
    </nav>
  );
}