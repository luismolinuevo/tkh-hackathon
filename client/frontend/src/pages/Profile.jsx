import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SearchCard from "../components/SearchCard";

const Profile = () => {
  const initialPosts = useLoaderData();
  const [posts, setPosts] = useState(initialPosts);
  return (
    <div className="border font-poppins border-rose-700 w-full px-20">
      {" "}
      <h1 className="text-3xl  font-bold text-green-background">
        Username's Profile
      </h1>
      <div>
        <p>Your Contributions</p>
        <button>Submit New Post</button>
      </div>
      <div className="flex flex-col rounded-lg">
        {posts.map((post) => {
          return (
            <SearchCard
              //         title="Green houses"
              key={post.id}
              id={post.id}
              description={post.description}
              votes={post.upvotes - post.downvotes}
              username={post.userName}
              posts={posts}
              setPosts={setPosts}
              difficulty={post.implementationDifficulty}
              livingSituation={post.livingSituation}
              location={post.state}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
