import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/dashboard"
          className="text-2xl font-bold"
        >
          Placement Preparation Hub 🚀
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">

          <Link
            to="/dashboard"
            className="hover:text-gray-200 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/bookmarks"
            className="hover:text-gray-200 transition"
          >
            Bookmarks
          </Link>

          <Link
            to="/companies"
            className="hover:text-gray-200 transition"
          >
            Companies
          </Link>

          <span className="font-semibold">
            👋 {user?.name}
          </span>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition"
          >
            Logout
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;