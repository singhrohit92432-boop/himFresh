"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
  setTimeout(() => {
    router.push("/login");
  }, 2000);
}
  }, [router]);

  return children;
}