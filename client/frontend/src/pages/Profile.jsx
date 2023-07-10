import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SearchCard from "../components/SearchCard";

const Profile = () => {
  const initialPosts = useLoaderData();
  const [posts, setPosts] = useState(initialPosts);
  return (
    <div className="border font-poppins  w-full px-20">
      <div
        style={{ backgroundImage: "url('/minimalist-leaf.jpg')" }}
        className="hidden md:block md:absolute w-[1000px] h-[382px] bottom-0 right-0"
      ></div>{" "}
      <h1 className="text-3xl  mt-6 font-bold text-green-background">
        Username's Profile
      </h1>
      <div className="flex justify-between mt-12">
        <p className="text-2xl font-bold ">Your Contributions</p>
        <button className="bg-green-background text-white  py-2 px-4 rounded-3xl">
          Submit New Post
        </button>
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
