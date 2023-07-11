import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import axios from "axios";
import human from "humanparser";
import Autocomplete from "react-google-autocomplete";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";

import CitySearchBar from "../components/CitySearchBar";
const Home = () => {
  const fullName = "Mr. William R. Hearst, III";
  const attrs = human.parseName(fullName);

  const initialPosts = useLoaderData();

  const [searchInput, setSearchInput] = useState("");
  const [posts, setPosts] = useState(initialPosts);

  const [location, setLocation] = useState("");
  const [livingSituation, setLivingSituation] = useState("");
  const [difficulty, setDifficulty] = useState("");

  // console.log(location, livingSituation, difficulty);
  // console.log(human.parseAddress("3215 Coney Island Ave, Brooklyn, NY 11235, USA"));
  // console.log(initialPosts[0]);
  const searchPost = (e) => {
    e.preventDefault();
    const city = location ? location.split(", ")[1] : "";
    let filter;

    const propsToFilter = {
      location,
      livingSituation,
      difficulty,
    };

    function checkTrue(postVar, filterVar) {
      postVar.toLowerCase() === filterVar.toLowerCase();
    }

    if (location) {
    }
    // const filteredPost = initialPosts.filter((post) => {
    //   return (
    //     post.state.toLowerCase() === city.toLowerCase() &&
    //     post.livingSituation.toLowerCase() === livingSituation.toLowerCase() &&
    //     post.implementationDifficulty.toLowerCase() === difficulty.toLowerCase()
    //   );
    // });
    const filteredPost = initialPosts.filter((post) => {
      if (city && post.state.toLowerCase() !== city.toLowerCase()) {
        return false;
      }

      if (
        livingSituation &&
        post.livingSituation.toLowerCase() !== livingSituation.toLowerCase()
      ) {
        return false;
      }

      if (
        difficulty &&
        post.implementationDifficulty.toLowerCase() !== difficulty.toLowerCase()
      ) {
        return false;
      }

      return true;

      return (
        post.state.toLowerCase() === city.toLowerCase() &&
        post.livingSituation.toLowerCase() === livingSituation.toLowerCase() &&
        post.implementationDifficulty.toLowerCase() === difficulty.toLowerCase()
      );
    });
    // console.log(filteredPost);
    setPosts(filteredPost);
  };

  console.log(location.split(", "));

  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <div className="flex flex-col w-full font-poppins ">
        <div
          style={{ backgroundImage: "url('/leaf-background.jpg')" }}
          className=" flex flex-col px-20 py-5  bg-zinc-200 "
        >
          <div className="flex flex-col self-center w-full p-3 gap-10  ">
            <div className="flex gap-5">
              <div className="w-full text-center text-6xl text-white-highlight    ">
                Find Sustainable Solutions for Your Home
              </div>
            </div>

            <div className=" backdrop-blur-xl backdrop-opacity-95 backdrop-contrast-50 backdrop-brightness-200 rounded-2xl overflow-hidden h-5/6 ">
              <form className="flex flex-col px-20 py-10 gap-5">
                <CitySearchBar
                   searchValue={searchValue}
                   setSearchValue={setSearchValue}
                  labelInputGap="gap-3"
                  labelStyling="text-3xl text-white-highlight"
                  inputStyle="w-3/4 border p-4 rounded-xl h-12 bg-slate-200"
                  dropdownStyle="dropdown absolute top-[90px] z-10 bg-white w-3/4 "
                />
                <div className="flex gap-4">
                  <div className="flex flex-col gap-3 ">
                    <label
                      htmlFor="living-situation"
                      className="text-2xl text-white-highlight"
                    >
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
                    <label
                      htmlFor="type"
                      className="text-2xl text-white-highlight"
                    >
                      Difficulty:{" "}
                    </label>
                    <select
                      className=" shadow-md w-56 border h-10 ps-4 rounded-3xl appearance-none"
                      name="type"
                      id="type"
                      onChange={(e) => setDifficulty(e.target.value)}
                    >
                      <option selected="selected">Please Select ▼</option>

                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end">
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
          <div
            style={{ backgroundImage: "url('/minimalist-leaf.jpg')" }}
            className="hidden md:block md:absolute w-[1000px] h-[382px] right-0"
          ></div>
          <div className="flex justify-between items-center py-8">
            <div className="text-4xl font-semibold z-10">Popular</div>
            <div>Sort by ▼ </div>
          </div>

          {/* {posts
            .filter((post) =>
              post.description.toLowerCase().includes(searchInput)
          ) */}
          {/* {console.log(posts[0].id)} */}
          <div className="flex gap-16 rounded-lg">
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
      </div>
    </>
  );
};

export default Home;
