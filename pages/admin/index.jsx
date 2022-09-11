import { useAuth } from "../../lib/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function AdminDashboard() {
  const router = useRouter();
  const { user, session, signOut } = useAuth();
  if (!user) {
    return (
      <>
        <p className="text-3xl">Login to view.</p>
      </>
    );
  }
  return (
    <>
      <button
        className="bg-green-100 border-black border py-2 px-2"
        onClick={() => {
          signOut();
        }}
      >
        sign out
      </button>
      <div>
        logged in view
        <div className="w-96">
          <p className="bg-red-300 first-line:text-xl font-bold">
            session.access_token{" "}
            <code className="font-normal text-md ">{session.access_token}</code>
          </p>
          <p className="bg-red-300 first-line:text-xl font-bold">
            user.id <code className="font-normal text-md">{user.id}</code>
          </p>
        </div>
      </div>
    </>
  );
}
