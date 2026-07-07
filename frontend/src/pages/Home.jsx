import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">
          Crack Your Dream Placement 🚀
        </h1>

        <p className="text-xl text-gray-600">
          Practice DSA, Aptitude, CS Fundamentals & Company Questions
        </p>

        <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </>
  );
}

export default Home;