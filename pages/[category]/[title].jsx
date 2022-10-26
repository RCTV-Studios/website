import Head from "next/head";
import Link from "next/link";
import PostLayout from "../../components/Layouts/PostLayout";
import AuthorFooter from "../../components/Post/AuthorFooter";
import { supabase } from "../../lib/client";
export default function ViewPost({ post }) {
  return (
    <div className="relative">
      <Head>
        <title> RCTV Studios</title>
      </Head>
      <PostLayout heroVariant={"none"}>
        <p className="text-3xl my-5 font-bold capitalize">{post.title}</p>
        <div className="text-md mb-10">
          <span>
            Published: {""}
            {new Date(post.date_published).getMonth() + 1}/
            {new Date(post.date_published).getDate()}/
            {new Date(post.date_published).getFullYear()}
          </span>
          <span> by {post.author.name}.</span>
          <p>
            Posted in:{" "}
            <span>
              <Link href={`/${post.category}`}>
                <a className="capitalize text-red-500">{post.category}</a>
              </Link>
              .
            </span>{" "}
          </p>
        </div>
        <p className="text-md text-justify">{post.body}</p>
      </PostLayout>
      <AuthorFooter src={post.author.icon} name={post.author.name} />
    </div>
  );
}

export async function getStaticProps(context) {
  const { data: post, error: postError } = await supabase
    .from("posts")
    .select("slug,category,author(name,icon),title,body,date_published")
    .eq("slug", context.params.title)
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

export async function getStaticPaths(context) {
  const { data: posts, error } = await supabase
    .from("posts")
    .select("slug,category,author(name),title,body,date_published")
    .limit(10); // only use SSG for the first 10 posts, then SSR the rest
  const paths = posts.map((post) => `/${post.category}/${post.slug}`);
  return {
    paths: paths,
    fallback: "blocking",
  };
}
