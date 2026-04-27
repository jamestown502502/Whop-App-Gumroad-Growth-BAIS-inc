import type { Tool } from "@/data/tools";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-5 bg-white border border-gray-200 rounded-xl hover:border-purple-400 hover:shadow-md transition-all"
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl">{tool.icon}</span>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-gray-900 text-sm">{tool.name}</h3>
            {tool.free && (
              <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Free</span>
            )}
          </div>
          <span className="inline-block text-xs text-gray-400 mb-1">{tool.category}</span>
          <p className="text-gray-500 text-xs">{tool.description}</p>
        </div>
      </div>
    </a>
  );
}
