const downloads = [
  {
    id: "1",
    title: "Gumroad Launch Checklist",
    description: "A printable PDF checklist to run a smooth product launch.",
    size: "PDF · 1 page",
    icon: "📋",
  },
  {
    id: "2",
    title: "Product Description Templates",
    description: "5 fill-in-the-blank templates for high-converting product descriptions.",
    size: "PDF · 3 pages",
    icon: "✍️",
  },
  {
    id: "3",
    title: "Pricing Strategy Guide",
    description: "A quick-reference guide to pricing your digital products for max revenue.",
    size: "PDF · 2 pages",
    icon: "💰",
  },
];

export default function DownloadsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Downloads</h1>
      <p className="text-gray-500 mb-8">Free templates and guides to keep.</p>
      <div className="space-y-4">
        {downloads.map((d) => (
          <div key={d.id} className="flex items-center justify-between p-5 bg-white border border-gray-200 rounded-xl">
            <div className="flex items-start gap-3">
              <span className="text-2xl">{d.icon}</span>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">{d.title}</h3>
                <p className="text-gray-500 text-xs mt-0.5">{d.description}</p>
                <span className="text-xs text-gray-400 mt-1 inline-block">{d.size}</span>
              </div>
            </div>
            <button className="text-xs font-medium text-purple-700 border border-purple-300 px-3 py-1.5 rounded-lg hover:bg-purple-50 transition-colors">
              Download
            </button>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-400 mt-6 text-center">More downloads added regularly.</p>
    </div>
  );
}
