import TopicCard from "../components/TopicCard";
import { csTopics } from "../data/csFundamentals";

function CSFundamentals() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">
        CS Fundamentals
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {csTopics.map((topic) => (
          <TopicCard
            key={topic.id}
            topic={topic}
          />
        ))}
      </div>
    </div>
  );
}

export default CSFundamentals;