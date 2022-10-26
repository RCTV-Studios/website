import PublicLayout from "../components/Layouts/public";
import Head from "next/head";
import { supabase } from "../lib/client";

import LatestPostsComponent from "../components/Home/LatestPostsComponent";
export default function Home({ latestPosts }) {
  return (
    <>
      <Head>
        <title>Home | RCTV Studios</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PublicLayout pageName={"Home"}>
        <main>
          <LatestPostsComponent posts={latestPosts} />
        </main>
      </PublicLayout>
    </>
  );
}

export async function getStaticProps() {
  const { data: latestPosts, error } = await supabase
    .from("posts")
    .select("slug,category,title,date_published")
    .order("date_published", { ascending: false })
    .limit(5);
  // console.log({ data, error });

  return {
    props: {
      latestPosts,
      error,
    },
  };
}
