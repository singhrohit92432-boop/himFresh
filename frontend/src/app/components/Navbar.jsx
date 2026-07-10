"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <nav
      className={`px-4 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0 overflow-x-hidden ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-green-600 text-white"
      }`}
    >
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

        <Link href="/dashboard" className="hover:text-yellow-300">
          Dashboard
        </Link>

        <Link href="/showcase" className="hover:text-yellow-300">
          Showcase
        </Link>

        {isLoggedIn ? (
          <button
            onClick={logout}
            className="hover:text-yellow-300"
          >
            Logout
          </button>
        ) : (
          <Link href="/login" className="hover:text-yellow-300">
            Login
          </Link>
        )}

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="hover:text-yellow-300"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </nav>
  );
}