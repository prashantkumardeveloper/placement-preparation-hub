import { Link } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">

      <AdminNavbar />

      <div className="max-w-6xl mx-auto p-10">

        <h1 className="text-4xl font-bold mb-8">
          Welcome Admin 👨‍💻
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          <Link
            to="/admin/add-question"
            className="bg-blue-600 text-white rounded-xl p-8 shadow-lg hover:scale-105 transition"
          >
            <h2 className="text-2xl font-bold">
              Add Question
            </h2>

            <p className="mt-3">
              Insert new interview questions
            </p>
          </Link>

          <div className="bg-green-600 text-white rounded-xl p-8 shadow-lg">

            <h2 className="text-2xl font-bold">
              Total Questions
            </h2>

            <p className="mt-3">
              Dynamic Count (Coming Soon)
            </p>

          </div>

          <div className="bg-purple-600 text-white rounded-xl p-8 shadow-lg">

            <h2 className="text-2xl font-bold">
              Manage Questions
            </h2>

            <p className="mt-3">
              Edit / Delete Questions
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;