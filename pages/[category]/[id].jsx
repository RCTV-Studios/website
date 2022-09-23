import Head from "next/head";
import PostLayout from "../../components/Layouts/PostLayout";
import { supabase } from "../../lib/client";
import Link from "next/link";
export default function ViewPost({ post }) {
  return (
    <>
      <Head>
        <title> RCTV Studios</title>
      </Head>
      <PostLayout heroVariant={"none"}>
        <p className="text-3xl my-5 font-bold capitalize">{post.title}</p>
        <p className="text-md mb-10">
          <span>
            Published: {""}
            {new Date(post.date_published).getMonth() + 1}/
            {new Date(post.date_published).getDate()}/
            {new Date(post.date_published).getFullYear()}
          </span>
          <span> by </span>
          <span>{post.author.name}.</span>
          <p>
            Posted in:{" "}
            <span>
              <Link href={`/${post.category}`}>
                <a className="capitalize text-red-500">{post.category}</a>
              </Link>
              .
            </span>{" "}
          </p>
        </p>
        <p className="text-md text-justify">{post.body}</p>
      </PostLayout>
    </>
  );
}

export async function getServerSideProps(context) {
  const { data: post, error: postError } = await supabase
    .from("posts")
    .select("slug,category,author(name),title,body,date_published")
    .eq("slug", context.params.id)
    .single();
  // console.log({ post, postError });

  if (post == null) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}

// export async function getStaticPaths(context) {
//   const { data, error } = await supabase
//     .from("posts")
//     .select("id,title,body,author,date_published")
//     .limit(10); // only use SSG for the first 10 posts, then SSR the rest
//   const paths = data.map((post) => `/post/${post.id}`);
//   return {
//     paths: paths,
//     fallback: "blocking",
//   };
// }
