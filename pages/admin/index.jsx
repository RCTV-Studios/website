import { supabase } from "../../lib/client";
import { useAuth } from "../../lib/auth";
export default function AdminDashboard({ user, token }) {
  const { signOut } = useAuth();
  if (user && user.id != null) {
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
          Successful Login!
          <p className="bg-red-300 first-line:text-xl font-bold">
            token <code className="font-normal text-md ">{token}</code>
          </p>
          <p className="bg-red-300 first-line:text-xl font-bold">
            user.id <code className="font-normal text-md">{user.id}</code>
          </p>
        </div>
      </>
    );
  }
}

export async function getServerSideProps({ req, res }) {
  const { user, session } = await supabase.auth.api.getUserByCookie(req);

  if (!user) {
    return {
      props: {},
      redirect: { destination: "/admin/login", permanent: false },
    };
  }
  let token = req.cookies["sb-access-token"];
  return { props: { user, token } };
}
