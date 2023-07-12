import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SearchCard from "../components/SearchCard";
import CitySearchBar from "../components/CitySearchBar";
import { ImageIcon } from "../components/Icons";
import axios from "axios";
const Profile = () => {
  const initialPosts = useLoaderData();
  const [posts, setPosts] = useState(initialPosts);
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  const handleCreatePost = async () => {
    // console.log(state);
    const createPost = axios.post("${import.meta.env.VITE_SERVER}/post/", {
      implementationDifficulty: postValues.difficulty,
      cost: postValues.cost,
      title: postValues.title,
      description: postValues.description,
      // country: country,
      // state: state,
      city: searchValue,
      // zipCode: zipCode,
      // goodFor: goodFor,
      livingSituation: postValues.livingSituation,
      userName: "a default username",
    });

    // console.log(res)
  };

  const [postValues, setPostValues] = useState({
    title: "",
    description: "",
    cost: "cheap",
    livingSituation: "urban",
    difficulty: "easy",
  });
  console.log(postValues);
  const changeHandler = (e) => {
    setPostValues({ ...postValues, [e.target.name]: e.target.value });
  };

  const [searchValue, setSearchValue] = useState("");
  const [showItems, setShowItems] = useState(false);
  console.log(searchValue);
  return (
    <div className="flex flex-col   relative font-poppins w-full  grow px-20">
      <div
        style={{ backgroundImage: "url('/minimalist-leaf.jpg')" }}
        className="hidden md:block md:absolute w-[1000px] h-[382px] bottom-0 right-0"
      ></div>{" "}
      <h1 className="text-3xl  mt-6 font-bold text-green-background">
        Username's Profile
      </h1>
      <div className="flex justify-between mt-12">
        <p className="text-2xl font-bold ">Your Contributions</p>
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-background text-white  py-2 px-4 rounded-3xl"
        >
          Create Post
        </button>
      </div>
      {showModal && (
        <div
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          className="overlay fixed left-0 top-0 w-full h-screen bg-zinc-600 z-40"
          onClick={toggleModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="modal rounded-2xl overflow-hidden font-poppins  bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
          >
            <header className="bg-green-background px-9 py-5 text-3xl text-white ">
              New Post
            </header>
            <main className="px-9 pt-5  flex flex-col gap-3">
              <div className="flex gap-3">
                <div className="flex flex-col gap-2">
                  <label className="text-xl font-semibold" htmlFor="title">
                    Title
                  </label>
                  <input
                    className="border border-zinc-400 w-[280px]"
                    type="text"
                    name="title"
                    onChange={changeHandler}
                  />
                </div>
                <CitySearchBar
                  // titleColor = "text-white"
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  labelInputGap="gap-2"
                  labelStyling="text-xl font-semibold"
                  inputStyle="border border-zinc-400 w-[280px]"
                  dropdownStyle="dropdown absolute top-[60px] z-10 bg-white  w-[280px] "
                />
              </div>

              <div className="flex flex-col">
                <label
                  className="text-xl font-semibold mb-1"
                  htmlFor="description"
                >
                  Description
                </label>
                <p>
                  How has this solution helped you? What is it trying to solve?
                  What are its benefits?
                </p>
                <textarea
                  className="border border-zinc-400 w-full"
                  name="description"
                  id="description"
                  cols="30"
                  rows="5"
                  onChange={changeHandler}
                ></textarea>
              </div>
              <div className="flex gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="cost" className="text-xl font-semibold">
                    Cost of Implementation
                  </label>
                  <select
                    className="border border-black h-8"
                    name="cost"
                    id="cost"
                    onChange={changeHandler}
                  >
                    <option value="cheap" selected>
                      Cheap
                    </option>
                    <option value="regular">Regular</option>
                    <option value="expensive">Expensive</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="living-situation"
                    className="text-xl font-semibold"
                  >
                    Living Situation{" "}
                  </label>
                  <select
                    className="border border-black h-8"
                    name="livingSituation"
                    id="living-situation"
                    onChange={changeHandler}
                  >
                    <option value="urban" selected>
                      Urban
                    </option>
                    <option value="suburban">Suburban</option>
                    <option value="rural">Rural</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="difficulty" className="text-xl font-semibold">
                    Implementation Difficulty{" "}
                  </label>
                  <select
                    className="border border-black h-8"
                    name="difficulty"
                    id="difficulty"
                    onChange={changeHandler}
                  >
                    <option value="easy">Easy</option>
                    <option value="medium" selected>
                      Medium
                    </option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
              </div>
            </main>
            <footer className="px-9 py-5 flex gap-8 justify-between">
              <button className="bg-green-background rounded-3xl px-4 py-2 text-white flex justify-center items-center gap-2">
                <ImageIcon />
                Upload a Photo
              </button>
              <button
                onClick={handleCreatePost}
                className="bg-green-background rounded-3xl px-4 py-2 text-white"
              >
                Submit
              </button>
            </footer>
          </div>
        </div>
      )}
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
              location={post.city}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
