'use client';

import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';

export default function SignIn() {
  const [providers, setProviders] = useState<any>(null);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const searchParams = useSearchParams();

  useEffect(() => {
    getProviders().then(setProviders);

    // Handle query param ?error=EmailSignin from NextAuth
    const errorParam = searchParams.get('error');
    if (errorParam === 'EmailSignin') {
      setError("There was a problem sending the email.");
    }
  }, [searchParams]);

  const handleSignIn = async () => {
    setError('');
    const res = await signIn('email', {
      email,
      redirect: true,
      callbackUrl: '/',
    });

    if (res?.error) {
      setError("There was a problem sending the email.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="p-8 max-w-md w-full border rounded shadow text-center">
        <h1 className="text-2xl font-bold mb-6">Sign in to RankCraft</h1>

        {error && (
          <div className="bg-red-500 text-white px-4 py-2 rounded mb-4">
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-4 py-2 mb-4 w-full rounded"
        />

        <button
          onClick={handleSignIn}
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 w-full"
        >
          Sign in with Email
        </button>
      </div>
    </div>
  );
}
