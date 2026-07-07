import { Link } from "react-router-dom";
import { hrQuestions } from "../data/hr";

function HR() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        HR Interview Questions
      </h1>

      <div className="space-y-4">

        {hrQuestions.map((item) => (

          <div
            key={item.id}
            className="bg-white p-5 rounded-lg shadow"
          >

            <h2 className="text-xl font-semibold">
              {item.question}
            </h2>

            <Link
              to={`/hr/${item.id}`}
              className="text-blue-600 font-semibold mt-3 inline-block"
            >
              Read Answer →
            </Link>

          </div>

        ))}

      </div>

    </div>
  );
}

export default HR;