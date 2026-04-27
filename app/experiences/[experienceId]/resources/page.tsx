import { resources } from "@/data/resources";
import { ResourceCard } from "@/components/ResourceCard";

export default function ResourcesPage() {
  const categories = [...new Set(resources.map((r) => r.category))];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Resource Library</h1>
      <p className="text-gray-500 mb-8">Curated guides and articles to grow your Gumroad business.</p>

      {categories.map((cat) => (
        <div key={cat} className="mb-8">
          <h2 className="text-sm font-semibold text-purple-700 uppercase tracking-wide mb-3">{cat}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {resources
              .filter((r) => r.category === cat)
              .map((r) => (
                <ResourceCard key={r.id} resource={r} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
