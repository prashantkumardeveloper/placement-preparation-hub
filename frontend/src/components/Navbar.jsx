import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center bg-blue-600 text-white px-8 py-4 shadow">
      <h1 className="text-2xl font-bold">
        Placement Preparation Hub 🚀
      </h1>

      <div className="flex items-center gap-5">
        <span className="font-semibold">
          Welcome, {user?.name}
        </span>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;