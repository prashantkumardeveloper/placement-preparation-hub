import TopicCard from "../components/TopicCard";
import { companies } from "../data/company";

function Companies() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-center mb-10">
        Company Wise Questions
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {companies.map((company) => (
          <TopicCard
            key={company.id}
            topic={company}
          />
        ))}
      </div>

    </div>
  );
}

export default Companies;