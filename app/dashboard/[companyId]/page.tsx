import { verifyUserTokenOrRedirect } from "@whop/react/server";

export default async function DashboardPage({
  params,
}: {
  params: { companyId: string };
}) {
  const { companyId } = await params;
  await verifyUserTokenOrRedirect();

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Seller Dashboard</h1>
      <p className="text-gray-500 mb-8">Manage your Gumroad Growth Hub experience.</p>

      <div className="space-y-4">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h2 className="font-semibold text-gray-800 mb-1">Your App</h2>
          <p className="text-sm text-gray-500">Gumroad Growth Hub is live and ready for your members.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h2 className="font-semibold text-gray-800 mb-1">Resources</h2>
          <p className="text-sm text-gray-500">6 curated resources available to members.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h2 className="font-semibold text-gray-800 mb-1">Tools</h2>
          <p className="text-sm text-gray-500">5 creator tools listed and accessible.</p>
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-10 text-center">Built by Bennett AI Solutions Inc.</p>
    </div>
  );
}
