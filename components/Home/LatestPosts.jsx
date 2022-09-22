import Link from "next/link";
function LatestPosts({ data }) {
  return (
    <>
      <div>
        <ul>
          {data.map((post) => (
            <li key={post.id}>
              &bull;
              <Link href={`/post/${post.id}`}>
                <a className="text-red-500 hover:text-green-500">
                  {post.title}
                </a>
              </Link>
              <p className="text-sm">
                Published: {""}
                {new Date(post.date_published).getMonth() + 1}/
                {new Date(post.date_published).getDate()}/
                {new Date(post.date_published).getFullYear()}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default LatestPosts;
