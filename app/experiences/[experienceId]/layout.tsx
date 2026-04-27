import { verifyUserTokenOrRedirect } from "@whop/react/server";
import { Nav } from "@/components/Nav";

export default async function ExperienceLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { experienceId: string };
}) {
  const { experienceId } = await params;
  await verifyUserTokenOrRedirect();

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav experienceId={experienceId} />
      <main className="max-w-4xl mx-auto px-6 py-10">{children}</main>
      <footer className="border-t border-gray-200 text-center text-xs text-gray-400 py-6 mt-12">
        Built by Bennett AI Solutions Inc.
      </footer>
    </div>
  );
}
