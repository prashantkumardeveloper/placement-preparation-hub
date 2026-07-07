import { useEffect, useState } from "react";
import { getQuestions } from "../services/questionService";
import QuestionCard from "../components/QuestionCard";

function Arrays() {
  const [questions, setQuestions] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const data = await getQuestions({
        topic: "Arrays",
      });

      setQuestions(data.questions);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const filteredQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">
        Arrays Questions
      </h1>

      <input
        type="text"
        placeholder="Search Question..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 mb-6 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="space-y-4">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((question) => (
            <QuestionCard
              key={question._id}
              question={question}
            />
          ))
        ) : (
          <p className="text-gray-600 text-lg">
            No questions found.
          </p>
        )}
      </div>
    </div>
  );
}

export default Arrays;