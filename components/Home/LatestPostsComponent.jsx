import Link from "next/link";
function LatestPostsComponent({ posts }) {
  if (!posts) {
    return (
      <>
        <div className="w-full bg-red-500 h-36 sm:h-16 text-center text-white text-4xl">
          <div className="h-full grid place-items-center">
            <p>Latest posts could not load.</p>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              &bull;
              <Link href={`/${post.category}/${post.slug}`}>
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

export default LatestPostsComponent;
