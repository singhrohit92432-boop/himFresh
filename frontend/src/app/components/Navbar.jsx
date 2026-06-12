import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white px-4 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0 overflow-x-hidden">
      
      <h1 className="text-2xl font-bold text-center sm:text-left">
        HimFresh
      </h1>

      <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-sm sm:text-base">
        
        <Link href="/" className="hover:text-yellow-300">
          Home
        </Link>

        <Link href="/about" className="hover:text-yellow-300">
          About
        </Link>

        <Link href="/login" className="hover:text-yellow-300">
          Login
        </Link>

        <Link href="/dashboard" className="hover:text-yellow-300">
          Dashboard
        </Link>

      </div>
    </nav>
  );
}