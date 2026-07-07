import { Link } from "react-router-dom";

function Bookmarks() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">

      <h1 className="text-4xl font-bold mb-6">
        ⭐ Bookmarks
      </h1>

      <div className="bg-white shadow-lg rounded-xl p-10 text-center w-[500px]">

        <div className="text-6xl mb-4">
          ⭐
        </div>

        <h2 className="text-2xl font-semibold mb-3">
          No Bookmarks Yet
        </h2>

        <p className="text-gray-600 mb-6">
          Save your favourite questions here.
          <br />
          This feature will be available after login.
        </p>

        <Link
          to="/login"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Login
        </Link>

      </div>

    </div>
  );
}

export default Bookmarks;