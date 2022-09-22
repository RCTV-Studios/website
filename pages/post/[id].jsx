import { data } from "autoprefixer";
import PublicLayout from "../../components/Layouts/public";
import { supabase } from "../../lib/client";
export default function ViewPost({ data }) {
  return (
    <>
      <PublicLayout pageName={data.title}>
        <p className="text-md">Post ID: {data.id}</p>
        <p className="text-md">
          Published: {""}
          {new Date(data.date_published).getMonth() + 1}/
          {new Date(data.date_published).getDate()}/
          {new Date(data.date_published).getFullYear()}
        </p>
        <p className="text-md">Posted by: {data.author}</p>
        <p className="text-md mx-5 text-center">{data.body}</p>
      </PublicLayout>
    </>
  );
}

export async function getStaticProps(context) {
  const { data, error } = await supabase
    .from("posts")
    .select("id,title,body,author,date_published")
    .eq("id", context.params.id)
    .single();
  //   console.log({ data, error });
  if (data == null) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
      error,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths(context) {
  const { data, error } = await supabase
    .from("posts")
    .select("id,title,body,author,date_published")
    .limit(10); // only use SSG for the first 10 posts, then SSR the rest
  const paths = data.map((post) => `/post/${post.id}`);
  return {
    paths: paths,
    fallback: "blocking",
  };
}
