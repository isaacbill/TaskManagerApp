import React, { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then(setPosts)
      .catch(() => setError("Failed to load posts"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center py-4">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {posts.map((post) => (
        <div key={post.id} className="border rounded-xl p-4 shadow hover:shadow-lg transition">
          <h2 className="font-bold text-lg mb-2">{post.title}</h2>
          <p className="text-sm text-gray-600">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
