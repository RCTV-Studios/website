import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "../../lib/auth";
import { supabase } from "../../lib/client";
export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      router.push("/admin");
    }
  }, [user, router]);

  const handleLogin = async (email, password) => {
    const { error } = await supabase.auth.signIn({ email, password });
    if (error) throw new Error("Error logging in!");
  };

  return (
    <div>
      <div className="grid place-items-center justify-center w-screen">
        <p className="font-bold mt-16 text-4xl">Login</p>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleLogin(email, password);
              }}
              type="submit"
              className="bg-purple-700 px-3 py-2 border-2 rounded-sm border-black text-white"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
