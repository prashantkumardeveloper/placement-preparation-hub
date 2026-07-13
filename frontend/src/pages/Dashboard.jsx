import { useEffect, useState } from "react";
import DashboardCard from "../components/DashboardCard";
import Navbar from "../components/Navbar";
import { getStats } from "../services/questionService";

function Dashboard() {
  const [stats, setStats] = useState({
    dsa: 0,
    aptitude: 0,
    csFundamentals: 0,
    companies: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const data = await getStats();
      setStats(data.stats);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-10">

        <h1 className="text-4xl font-bold mb-10">
          Welcome to Placement Preparation Hub 🚀
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          <DashboardCard
            title="DSA"
            description="Practice Coding Questions"
            color="bg-blue-600"
            link="/dsa"
            count={stats.dsa}
          />

          <DashboardCard
            title="Aptitude"
            description="Quantitative & Logical"
            color="bg-green-600"
            link="/aptitude"
            count={stats.aptitude}
          />

          <DashboardCard
            title="CS Fundamentals"
            description="DBMS, OS, CN"
            color="bg-purple-600"
            link="/cs-fundamentals"
            count={stats.csFundamentals}
          />

          <DashboardCard
            title="Companies"
            description="Company Wise Questions"
            color="bg-orange-500"
            link="/companies"
            count={stats.companies}
          />

          <DashboardCard
            title="Bookmarks"
            description="Saved Questions"
            color="bg-pink-600"
            link="/bookmarks"
          />

          <DashboardCard
            title="HR Interview"
            description="Top HR Interview Questions"
            color="bg-red-600"
            link="/hr"
          />

        </div>

      </div>
    </>
  );
}

export default Dashboard;