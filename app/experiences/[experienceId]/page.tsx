import { resources } from "@/data/resources";
import { ResourceCard } from "@/components/ResourceCard";

export default async function ExperienceHome({
  params,
}: {
  params: { experienceId: string };
}) {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Gumroad Growth Hub</h1>
        <p className="text-gray-500 text-base">
          Everything you need to grow your Gumroad business — in one place.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        {[
          { label: "Resources", value: "6", icon: "📚" },
          { label: "Tools", value: "5", icon: "🛠️" },
          { label: "Downloads", value: "3", icon: "📥" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-200 p-5 text-center">
            <div className="text-2xl mb-1">{stat.icon}</div>
            <div className="text-2xl font-bold text-purple-700">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>

      <h2 className="text-lg font-semibold text-gray-800 mb-4">Featured Resources</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {resources.slice(0, 4).map((r) => (
          <ResourceCard key={r.id} resource={r} />
        ))}
      </div>

      <div className="mt-10 p-6 bg-purple-50 border border-purple-200 rounded-xl">
        <h3 className="font-semibold text-purple-900 mb-1">Need help growing your Gumroad store?</h3>
        <p className="text-sm text-purple-700">
          Explore all resources, tools, and downloads using the navigation above.
        </p>
      </div>
    </div>
  );
}
