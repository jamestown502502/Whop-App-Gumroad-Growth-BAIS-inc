import Link from "next/link";

type NavProps = {
  experienceId: string;
};

export function Nav({ experienceId }: NavProps) {
  const base = `/experiences/${experienceId}`;
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold text-purple-700">Gumroad Growth Hub</span>
        <span className="text-xs text-gray-400 ml-2">by Bennett AI Solutions Inc.</span>
      </div>
      <div className="flex gap-6 text-sm font-medium text-gray-600">
        <Link href={base} className="hover:text-purple-700 transition-colors">Home</Link>
        <Link href={`${base}/resources`} className="hover:text-purple-700 transition-colors">Resources</Link>
        <Link href={`${base}/tools`} className="hover:text-purple-700 transition-colors">Tools</Link>
        <Link href={`${base}/downloads`} className="hover:text-purple-700 transition-colors">Downloads</Link>
      </div>
    </nav>
  );
}
