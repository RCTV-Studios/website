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
        <main>
          <div className="grid h-screen place-items-center bg-blue-200">
            <p className="font-bold text-5xl">About Us</p>
          </div>
        </main>
      </PublicLayout>
    </>
  );
}
