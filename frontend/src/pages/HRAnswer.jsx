import { useParams } from "react-router-dom";
import { hrQuestions } from "../data/hr";

function HRAnswer() {

  const { id } = useParams();

  const question = hrQuestions.find(
    (q) => q.id === Number(id)
  );

  if (!question) {
    return <h1>Question Not Found</h1>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold mb-6">
        {question.question}
      </h1>

      <div className="bg-white p-6 rounded-lg shadow">

        <p className="text-lg leading-8">
          {question.answer}
        </p>

      </div>

    </div>
  );
}

export default HRAnswer;