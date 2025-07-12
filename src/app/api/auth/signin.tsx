import { getProviders, signIn } from "next-auth/react";

export default async function SignIn() {
  const providers = await getProviders();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="p-8 max-w-md w-full border rounded shadow text-center">
        <h1 className="text-2xl font-bold mb-6">Sign in to RankCraft</h1>
        {providers &&
          Object.values(providers ?? {}).map((provider: { id: string; name: string }) => (
            <div key={provider.name}>
              <button
                onClick={() => signIn(provider.id)}
                className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 w-full"
              >
                Sign in with Email
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
