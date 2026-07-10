"use client";

import ProtectedRoute from "../components/ProtectedRoute";
export default function Dashboard() {
  return (
  <ProtectedRoute>
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">

      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        Dashboard
      </h1>

      <p className="text-gray-600 mb-8">
        Welcome back! Here’s your colorful overview.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-xl font-semibold">Users</h2>
          <p className="mt-2 text-blue-100">1,240 active users</p>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-emerald-700 text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-xl font-semibold">Revenue</h2>
          <p className="mt-2 text-green-100">₹45,000 this month</p>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-xl font-semibold">Orders</h2>
          <p className="mt-2 text-purple-100">320 new orders</p>
        </div>

      </div>

      <div className="mt-10 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Recent Activity
        </h2>

        <ul className="space-y-3 text-gray-700">
          <li>🔵 User John signed up</li>
          <li>🟢 Order #1024 placed</li>
          <li>🟣 Payment received</li>
          <li>🟡 New support ticket created</li>
        </ul>
      </div>

      </div>
  </ProtectedRoute>
  );
}