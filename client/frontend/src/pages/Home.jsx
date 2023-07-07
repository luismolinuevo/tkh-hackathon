import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import axios from "axios";
const Home = () => {
  const initialPosts = useLoaderData();

  const [searchInput, setSearchInput] = useState("");
  const [posts, setPosts] = useState(initialPosts);

  const [location, setLocation] = useState();
  const [livingSituation, setLivingSituation] = useState();
  const [difficulty, setDifficulty] = useState();

  console.log(location, livingSituation, difficulty);

  console.log(initialPosts);
  const searchPost = (e) => {
    e.preventDefault();
    // const filteredPost = initialPosts.map(
    //   (post) =>
    //     post.implementationDifficulty.toLowerCase() ===
    //       difficulty.toLowerCase() &&
    //     post.country.toLowerCase() === location.toLowerCase() &&
    //     post.livingSituation.toLowerCase() === livingSituation.toLowerCase()
    // );
    const filteredPost = initialPosts.filter((post) =>
   
        post.country.toLowerCase() === location && 
        post.livingSituation.toLowerCase() === livingSituation &&
        post.implementationDifficulty.toLowerCase() === difficulty
      
    );
    console.log(filteredPost);
    setPosts(filteredPost);
  };

  return (
    <>
      <div className="flex flex-col w-full px-20 py-10 gap-10">
        <div className="flex flex-col px-10 py-5 border rounded-2xl bg-zinc-200 h-4/7">
          {/* <input
            className="w-1/2 border h-10 justify-self-center self-center rounded-lg ps-4"
            type="text"
            value={searchInput}
            placeholder="Search for information!"
            onChange={(e) => setSearchInput(e.target.value)}
          /> */}
          <div className="flex flex-col self-center w-full p-3 gap-10 ">
            <div className="flex gap-5">
              <div className="text-6xl">
                Transform the Future. Find Sustainable Solutions for You
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl overflow-hidden h-5/6">
              <form className="flex flex-col px-20 py-10 gap-5">
                <div className="flex flex-col gap-3">
                  <label htmlFor="location" className="text-3xl">
                    Location
                  </label>
                  <input
                    onChange={(e) => setLocation(e.target.value)}
                    type="text"
                    className="w-3/4 border p-2 rounded-3xl bg-green-background"
                    placeholder="--enter city, state, and zipcode--"
                  />
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col gap-3 ">
                    <label htmlFor="living-situation" className="text-2xl">
                      Living Situation:{" "}
                    </label>
                    <select
                      className=" shadow-md w-56 border h-10 ps-4 rounded-3xl appearance-none"
                      name="living-situation"
                      id="living-situation"
                      onChange={(e) => setLivingSituation(e.target.value)}
                    >
                      <option selected="selected">Please Select ▼</option>
                      <option value="urban">Urban</option>
                      <option value="suburban">Suburban</option>
                      <option value="rural">Rural</option>
                    </select>
                  </div>
                  <div className="flex flex-col  gap-3">
                    <label htmlFor="type" className="text-2xl">
                      Difficulty:{" "}
                    </label>
                    <select
                      className=" shadow-md w-56 border h-10 ps-4 rounded-3xl appearance-none"
                      name="type"
                      id="type"
                      onChange={(e) => setDifficulty(e.target.value)}
                    >
                      <option selected="selected">Please Select ▼</option>
                      <option className="" value="urban">
                        Option 1
                      </option>
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    className="text-lg rounded-3xl border py-2 px-5 bg-blue-400 "
                    onClick={(e) => searchPost(e)}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className=" p-5">
          <div className="flex justify-between items-center">
            <div className="text-4xl">Recommendations</div>
            <div>Sort by ▼ </div>
          </div>

          {/* {posts
            .filter((post) =>
              post.description.toLowerCase().includes(searchInput)
          ) */}
          {/* {console.log(posts[0].id)} */}
          {posts.map((post) => {
            return (
              <Card
                title="Green houses"
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
    </>
  );
};

export default Home;
