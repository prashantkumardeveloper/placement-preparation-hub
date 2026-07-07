import { useState } from "react";
import { osQuestions } from "../data/csFundamentals";
import QuestionCard from "../components/QuestionCard";

function OperatingSystem() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">
        Operating System Questions
      </h1>

      <input
        type="text"
        placeholder="Search Question..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 mb-6 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="space-y-4">
        {osQuestions
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

export default OperatingSystem;