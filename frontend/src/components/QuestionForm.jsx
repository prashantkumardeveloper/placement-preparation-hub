import { addQuestion } from "../services/questionService";

function QuestionForm({ question, setQuestion }) {

  const handleChange = (e) => {
    setQuestion({
      ...question,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addQuestion(question);

      alert("Question Added Successfully!");

      setQuestion({
        title: "",
        category: "",
        topic: "",
        difficulty: "Easy",
        company: "",
        platform: "",
        link: "",
      });

    } catch (error) {

      alert("Failed to Add Question");

      console.log(error);

    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-xl p-8 space-y-5"
    >

      <input
        name="title"
        placeholder="Question Title"
        value={question.title}
        onChange={handleChange}
        className="w-full border p-3 rounded"
        required
      />

      <input
        name="category"
        placeholder="Category"
        value={question.category}
        onChange={handleChange}
        className="w-full border p-3 rounded"
        required
      />

      <input
        name="topic"
        placeholder="Topic"
        value={question.topic}
        onChange={handleChange}
        className="w-full border p-3 rounded"
        required
      />

      <select
        name="difficulty"
        value={question.difficulty}
        onChange={handleChange}
        className="w-full border p-3 rounded"
      >
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>

      <input
        name="company"
        placeholder="Company"
        value={question.company}
        onChange={handleChange}
        className="w-full border p-3 rounded"
        required
      />

      <input
        name="platform"
        placeholder="Platform"
        value={question.platform}
        onChange={handleChange}
        className="w-full border p-3 rounded"
        required
      />

      <input
        name="link"
        placeholder="Question Link"
        value={question.link}
        onChange={handleChange}
        className="w-full border p-3 rounded"
        required
      />

      <button
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        Add Question
      </button>

    </form>
  );
}

export default QuestionForm;