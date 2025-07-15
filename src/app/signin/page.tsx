"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("email", { email, redirect: false });
    if (result?.error) {
      setMessage("Sign in failed. Please check your email address.");
    } else {
      setMessage("Check your email for a magic link!");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white shadow-md p-8 rounded max-w-sm w-full">
        <h1 className="text-xl font-bold mb-4">Sign in to RankCraft</h1>
        <input
          type="email"
          placeholder="Enter your email"
          className="border p-2 w-full mb-4"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700" type="submit">
          Send Magic Link
        </button>
        {message && <div className="mt-4 text-center text-sm">{message}</div>}
      </form>
    </main>
  );
}
