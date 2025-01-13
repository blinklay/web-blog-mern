import { useEffect, useState } from "react";
import H1 from "../../components/H1/H1";
import PostList from "../../components/PostList/PostList";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div>
      <H1>Главная</H1>

      <PostList posts={posts} isLoading={isLoading} />
    </div>
  );
}
