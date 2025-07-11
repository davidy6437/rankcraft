import { getCsrfToken } from "next-auth/react";

export default async function SignIn() {
  const csrfToken = await getCsrfToken();

  return (
    <form method="post" action="/api/auth/signin/email" className="max-w-md mx-auto mt-20">
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <label className="block mb-2 text-sm font-medium">Email address</label>
      <input
        type="email"
        name="email"
        placeholder="you@example.com"
        required
        className="w-full px-4 py-2 border rounded mb-4"
      />
      <button type="submit" className="w-full px-4 py-2 bg-black text-white rounded">
        Sign in with Email
      </button>
    </form>
  );
}
