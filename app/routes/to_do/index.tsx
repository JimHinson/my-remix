import { Link, useLoaderData } from "remix";

export type Post = {
  slug: string;
  title: string;
};

export const loader = async () => {
  const Posts: Post[] = [
    {
      slug: "my-first-post",
      title: "My First Post",
    }
  ];
  return Posts;
};

export default function Posts() {
  const posts = useLoaderData<Post[]>();
  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li data-testid="mixtape1"
          key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}