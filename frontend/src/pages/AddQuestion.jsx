import { useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import QuestionForm from "../components/QuestionForm";

function AddQuestion() {
  const [question, setQuestion] = useState({
    title: "",
    category: "",
    topic: "",
    difficulty: "Easy",
    company: "",
    platform: "",
    link: "",
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNavbar />

      <div className="max-w-4xl mx-auto p-10">

        <h1 className="text-4xl font-bold mb-8">
          Add New Question
        </h1>

        <QuestionForm
          question={question}
          setQuestion={setQuestion}
        />

      </div>
    </div>
  );
}

export default AddQuestion;