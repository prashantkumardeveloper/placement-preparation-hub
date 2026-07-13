import { Link } from "react-router-dom";

function DashboardCard({
  title,
  description,
  color,
  link,
  count,
}) {
  return (
    <Link to={link}>
      <div
        className={`p-6 rounded-xl shadow-lg ${color} text-white hover:scale-105 transition duration-300`}
      >
        <h2 className="text-2xl font-bold">
          {title}
        </h2>

        <p className="mt-2">
          {description}
        </p>

        {count !== undefined && (
          <div className="mt-4 text-lg font-semibold">
            {count} Questions
          </div>
        )}
      </div>
    </Link>
  );
}

export default DashboardCard;