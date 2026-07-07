import TopicCard from "../components/TopicCard";
import { aptitudeTopics } from "../data/aptitude";

function Aptitude() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">
        Aptitude Topics
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {aptitudeTopics.map((topic) => (
          <TopicCard
            key={topic.id}
            topic={topic}
          />
        ))}
      </div>
    </div>
  );
}

export default Aptitude;