import PublicLayout from "../components/Layouts/public";
import Head from "next/head";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us | RCTV Studios</title>
        <meta name="description" content="RCTV Studios is a TV studio..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PublicLayout pageName={"About Us"}>
        <main className="bg-slate-600 h-[85vh]">
          <div>
            <p className="text-white text-xl p-5">RCTV Studios is...</p>
          </div>
        </main>
      </PublicLayout>
    </>
  );
}
