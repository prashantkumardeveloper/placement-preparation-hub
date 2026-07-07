function QuestionCard({ question }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">

      {/* Question Title */}
      <h2 className="text-2xl font-bold text-gray-800">
        {question.title}
      </h2>

      {/* Badges */}
      <div className="flex flex-wrap gap-3 mt-4">

        {/* Category */}
        {question.category && (
          <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
            {question.category}
          </span>
        )}

        {/* Difficulty */}
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
          {question.difficulty}
        </span>

        {/* Company */}
        {question.company && (
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
            {question.company}
          </span>
        )}

        {/* Platform */}
        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
          {question.platform}
        </span>

      </div>

      {/* Solve Button */}
      <a
        href={question.link}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Solve Question →
      </a>

    </div>
  );
}

export default QuestionCard;