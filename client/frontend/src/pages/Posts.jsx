import React, { useState } from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import SearchCard from "../components/SearchCard";
import human from "humanparser";
import Autocomplete from "react-google-autocomplete";
import CitySearchBar from "../components/CitySearchBar";

const Posts = () => {
  const initialPosts = useLoaderData();
  const [posts, setPosts] = useState(initialPosts);
  const [searchValue, setSearchValue] = useState("");

  const searchPost = (e) => {
    e.preventDefault();

    const filteredPosts = initialPosts.filter((post) => {
      console.log(post.city.toLowerCase(), searchValue);
      return post.city.toLowerCase() === searchValue.toLowerCase();
    });

    setPosts(filteredPosts);
  };
  console.log(posts);
  return (
    <>
      <div className="post-container relative  flex flex-col w-full h-full font-poppins ">
        <div className=" flex flex-col px-20 py-5">
          {/* <input
            className="w-1/2 border h-10 justify-self-center self-center rounded-lg ps-4"
            type="text"
            value={searchInput}
            placeholder="Search for information!"
            onChange={(e) => setSearchInput(e.target.value)}
          /> */}
          <div className="flex flex-col self-center w-full p-3 gap-10  ">
            <div className="flex gap-5">
              <div className="w-full text-5xl  text-black font-semibold">
                Find Sustainable Solutions for Your Home
              </div>
            </div>

            <div className=" backdrop-blur-xl backdrop-opacity-95  overflow-hidden h-5/6  z-50">
              <form className="flex flex-col gap-10">
                <div className="flex flex-col gap-3">
                  <CitySearchBar
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    labelInputGap=""
                    labelStyling=""
                    inputStyle="md:w-3/4 border p-4 rounded-xl h-[54px] bg-dull-green-background"
                    dropdownStyle="dropdown absolute top-[90px] z-10 bg-white w-3/4"
                    placeholder="Enter City"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-[50px]  text-black">
                  <div className="flex flex-col gap-3 ">
                    <label htmlFor="living-situation" className="text-2xl ">
                      Living Situation:{" "}
                    </label>
                    <select
                      className="outline-none shadow-md w-56 h-12 border p-2 indent-4 rounded-3xl text-xl appearance-none"
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
                      className="outline-none shadow-md w-56 h-12 border p-2 indent-4 rounded-3xl text-xl appearance-none"
                      name="type"
                      id="type"
                      onChange={(e) => setDifficulty(e.target.value)}
                    >
                      <option selected="selected">Please Select ▼</option>

                      <option value="easy" className="hover:bg-slate-400 ">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-start md:justify-end mt-3">
                  <button
                    className="text-lg rounded-3xl  py-2 px-5 bg-green-background text-white-highlight"
                    onClick={(e) => searchPost(e)}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          // style={{ backgroundImage: "url('/minimalist-leaf.jpg')" }}
          className=" px-20 "
        >
          {posts.length > 0 && <div
            style={{ backgroundImage: "url('/minimalist-leaf.jpg')" }}
            className="hidden md:block md:absolute w-[1000px] h-[382px] bottom-0 right-0"
          ></div>}
          <div className="flex justify-between items-center">
            <div className="text-4xl font-semibold z-10 text-green-background">
              Recommended
            </div>
            {/* <div>Sort by ▼ </div> */}
          </div>{" "}
          <div className="flex flex-col items-center  rounded-lg">
            {posts.length > 0 ? (
              posts.map((post) => {
                return (
                  <SearchCard
                    title={post.title}
                    key={post.id}
                    id={post.id}
                    description={post.description}
                    votes={post.upvotes - post.downvotes}
                    username={post.userName}
                    posts={posts}
                    setPosts={setPosts}
                    difficulty={post.implementationDifficulty}
                    livingSituation={post.livingSituation}
                    location={post.city}
                    cost={post.cost}
                  />
                );
              })
            ) : (
              <div className="mt-5">There are no posts found. Please select another city.</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
