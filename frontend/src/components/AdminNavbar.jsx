import { Link, useNavigate } from "react-router-dom";

function AdminNavbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">
        Admin Panel
      </h1>

      <div className="flex gap-6 items-center">

        <Link
          to="/admin"
          className="hover:text-yellow-400"
        >
          Dashboard
        </Link>

        <Link
          to="/admin/add-question"
          className="hover:text-yellow-400"
        >
          Add Question
        </Link>

        <button
          onClick={logout}
          className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>

      </div>
    </nav>
  );
}

export default AdminNavbar;