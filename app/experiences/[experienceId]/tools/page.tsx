import { tools } from "@/data/tools";
import { ToolCard } from "@/components/ToolCard";

export default function ToolsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Creator Tools</h1>
      <p className="text-gray-500 mb-8">The best free tools for Gumroad sellers.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tools.map((t) => (
          <ToolCard key={t.id} tool={t} />
        ))}
      </div>
    </div>
  );
}
