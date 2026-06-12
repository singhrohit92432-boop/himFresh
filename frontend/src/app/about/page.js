export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-6">

      <div className="bg-white/80 backdrop-blur-md max-w-2xl w-full p-8 rounded-2xl shadow-xl">

        <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
          About Us
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Welcome to <span className="text-purple-600 font-semibold">HimFresh</span>
        </p>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          
          <div className="p-4 rounded-xl bg-blue-50 border-l-4 border-blue-500">
            We are building a modern platform focused on simplicity, speed, and user experience.
          </div>

          <div className="p-4 rounded-xl bg-green-50 border-l-4 border-green-500">
            Our goal is to provide fresh and high-quality digital solutions with clean UI design.
          </div>

          <div className="p-4 rounded-xl bg-purple-50 border-l-4 border-purple-500">
            This project is designed as part of a learning journey in full-stack development.
          </div>

        </div>

        <div className="mt-6 text-center">
          <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-lg hover:scale-105 transition">
            Learn More
          </button>
        </div>

      </div>

    </div>
  );
}