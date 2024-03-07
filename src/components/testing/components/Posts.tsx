import { useEffect, useState } from "react";

type PostType = { id: number; title: string };
export default function Posts() {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(function () {
    async function fetchPosts() {
      const res = await fetch("https://dummyjson.com/posts");
      const data = await res.json();
      setPosts(data.posts);
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>POSTS</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
