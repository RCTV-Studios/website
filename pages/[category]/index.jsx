import PublicLayout from "../../components/Layouts/public";
import { supabase } from "../../lib/client";
import Link from "next/link";

export default function ViewCategory({ posts }) {
  return (
    <PublicLayout heroVariant={"none"}>
      <div className="grid h-[30vh] place-items-center font-bold text-4xl text-green-300 bg-green-700">
        <p className="capitalize">{posts[0].category} Posts</p>
      </div>
      <div>
        {posts.map((post) => (
          <li key={post.id}>
            &bull;
            <Link href={`/${post.category}/${post.slug}`}>
              <a className="text-red-500 hover:text-green-500">{post.title}</a>
            </Link>
            <p className="text-sm">
              Published: {""}
              {new Date(post.date_published).getMonth() + 1}/
              {new Date(post.date_published).getDate()}/
              {new Date(post.date_published).getFullYear()}
            </p>
          </li>
        ))}
      </div>
    </PublicLayout>
  );
}
export async function getServerSideProps(context) {
  const { data: posts, error: postError } = await supabase
    .from("posts")
    .select("slug,category,author(name),title,date_published")
    .eq("category", context.params.category)
    .limit(5);
  // console.log({ posts, postError });

  if (posts.length == 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts,
    },
  };
}
