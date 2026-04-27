import type { Resource } from "@/data/resources";

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-5 bg-white border border-gray-200 rounded-xl hover:border-purple-400 hover:shadow-md transition-all"
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl">{resource.icon}</span>
        <div>
          <span className="inline-block text-xs font-medium text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full mb-1">
            {resource.category}
          </span>
          <h3 className="font-semibold text-gray-900 text-sm">{resource.title}</h3>
          <p className="text-gray-500 text-xs mt-1">{resource.description}</p>
        </div>
      </div>
    </a>
  );
}
