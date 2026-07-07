import { Link } from "react-router-dom";

function TopicCard({ topic }) {
  return (
    <Link to={topic.route}>
      <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl hover:scale-105 transition duration-300 cursor-pointer">

        <h2 className="text-2xl font-bold text-blue-600">
          {topic.name}
        </h2>

      </div>
    </Link>
  );
}

export default TopicCard;