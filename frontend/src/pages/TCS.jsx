import { useState } from "react";
import { tcsQuestions } from "../data/company";
import QuestionCard from "../components/QuestionCard";

function TCS() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        TCS Most Asked Questions
      </h1>

      <input
        type="text"
        placeholder="Search Question..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 mb-6 border border-gray-300 rounded-lg"
      />

      <div className="space-y-4">
        {tcsQuestions
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

export default TCS;