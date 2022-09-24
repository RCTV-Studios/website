import AdminLayout from "../../components/Layouts/AdminLayout";
import { supabase } from "../../lib/client";
export default function AdminDashboard({ user }) {
  if (user && user.id != null) {
    return (
      <>
        <AdminLayout>
          <div className="grid h-screen place-items-center justify-center bg-purple-500">
            <p className="text-5xl font-bold text-purple-100">
              Successful Login!
            </p>
          </div>
        </AdminLayout>
      </>
    );
  }
}

export async function getServerSideProps({ req, res }) {
  const { user } = await supabase.auth.api.getUserByCookie(req);
  if (!user) {
    return {
      props: {},
      redirect: { destination: "/admin/login", permanent: false },
    };
  }
  // let token = req.cookies["sb-access-token"];
  return { props: { user } };
}
