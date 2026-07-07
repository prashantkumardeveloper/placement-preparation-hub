import { useState } from "react";
import { stringQuestions } from "../data/dsa";
import QuestionCard from "../components/QuestionCard";

function Strings() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">
        String Questions
      </h1>

      <input
        type="text"
        placeholder="Search Question..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 mb-6 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="space-y-4">
        {stringQuestions
          .filter((question) =>
            question.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((question) => (
            <QuestionCard
              key={question.id}
              question={question}
            />
          ))}
      </div>
    </div>
  );
}

export default Strings;