import React, { useState, useEffect } from "react";
import axios from "axios";
import PostsCard from "../components/PostsCard";

function Home() {
  const [posts, setPosts] = useState([]);

  const getApi = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data.slice(0, 12));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      <div className="container grid grid-cols-1 gap-x-4 gap-y-16 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostsCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Home;
