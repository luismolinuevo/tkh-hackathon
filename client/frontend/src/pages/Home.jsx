import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import axios from "axios";
const Home = () => {
  const initialPosts = useLoaderData();

  const [searchInput, setSearchInput] = useState("");
  const [posts, setPosts] = useState(initialPosts);
  const fakeData = [
    {
      id: 1,
      description: "asdjkoasdjasldkjasdklasjdkasd",
      upvotes: 1000,
      downvotes: 1,
      username: "Jack",
    },
    {
      id: 2,
      description:
        "Sit incidunt tempore eos eius voluptas qui voluptatem dolorum eos eveniet ipsam? Et laborum sint id velit officiis id illum quia qui alias fugiat sit amet dolore non sequi libero.",
      upvotes: 1000,
      downvotes: 1324,
      username: "Harry123",
    },
    {
      id: 3,
      description:
        "Eos enim deleniti ut reprehenderit sunt aut facere consequatur qui culpa labore nam voluptas ipsam est iste molestiae. Sit itaque repellendus ut dolores odio aut ullam optio et officia iste et natus quam a magni nihil. Vel laudantium eveniet qui maxime tempore aut accusamus voluptatem a totam dolore sit eius aliquid. 33 aliquam dolor id quia tempora nam illo placeat sed officiis .",
      upvotes: 100,
      downvotes: 1324,
      username: "Jordan12323",
    },
  ];

  // useEffect(() => {
  //   const getPosts = async () => {
  //     try {
  //       const response = await axios({
  //         method: "get",
  //         url: `http://localhost:3000/post/`,
  //       });

  //       console.log(response);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  //   getPosts();
  // });
  console.log(initialPosts);

  return (
    <>
      <div className="flex flex-col w-full px-20 py-10 gap-10">
        <div className="flex flex-col border rounded-2xl bg-zinc-200 h-3/6">
          {/* <input
            className="w-1/2 border h-10 justify-self-center self-center rounded-lg ps-4"
            type="text"
            value={searchInput}
            placeholder="Search for information!"
            onChange={(e) => setSearchInput(e.target.value)}
          /> */}
          <div className="flex flex-col self-center  p-3 gap-10 ">
            <div className="flex gap-5">
              <div className="text-6xl">
                Transform the Future. Find Sustainable Solutions for You
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl overflow-hidden h-5/6">
              {/* <form className=" flex ms-auto flex-col  justify-end items-end w-2/6 gap-4 ">
                <div className="">
                  <label htmlFor="location" className="text-2xl ">
                    Location:{" "}
                  </label>
                  <input
                    className="w-48 border h-10"
                    type="text"
                    name="location"
                    // value=""
                  />
                </div>
                <div className="">
                  <label htmlFor="living-situation" className="text-2xl">
                    Living Situation:{" "}
                  </label>
                  <select
                    className="w-48 border h-10"
                    name="living-situation"
                    id="living-situation"
                  >
                    <option value="urban">Urban</option>
                    <option value="suburban">Suburban</option>
                    <option value="rural">Rural</option>
                  </select>
                </div>
                <div className="">
                  <label htmlFor="type" className="text-2xl">
                    Type:{" "}
                  </label>
                  <select className="w-48 border h-10" name="type" id="type">
                    <option value="urban">Option 1</option>
                    <option value="suburban">Option 2</option>
                    <option value="rural">Option 3</option>
                  </select>
                </div>
                <button className="border p-2 px-3 rounded-3xl w-24">
                  Search
                </button>
              </form> */}
              <form className="flex flex-col px-20 py-10 gap-5">
                <div className="flex flex-col gap-3">
                  <label htmlFor="location" className="text-3xl">
                    Location
                  </label>
                  <input
                    type="text"
                    className="w-3/4 border p-2 rounded-3xl bg-green-background"
                    placeholder="--enter city, state, and zipcode--"
                  />
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col gap-3">
                    <label htmlFor="living-situation" className="text-2xl">
                      Living Situation:{" "}
                    </label>
                    <select
                      className="w-56 border h-10 ps-4 rounded-3xl appearance-none"
                      name="living-situation"
                      id="living-situation"
                    >
                      <option selected="selected">Please Select</option>
                      <option value="urban">Urban</option>
                      <option value="suburban">Suburban</option>
                      <option value="rural">Rural</option>
                      
                    </select>
                  </div>
                  <div className="flex flex-col  gap-3">
                    <label htmlFor="type" className="text-2xl">
                      Type:{" "}
                    </label>
                    <select
                      className="w-56 border h-10 ps-4 rounded-3xl appearance-none"
                      name="type"
                      id="type"
                      
                    >
                      <option selected="selected">Please Select</option>
                      <option className="" value="urban">
                        Option 1
                      </option>
                      <option value="suburban">Option 2</option>
                      <option value="rural">Option 3</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="text-lg rounded-3xl border py-2 px-5 bg-blue-400 ">
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

          {posts
            .filter((post) =>
              post.description.toLowerCase().includes(searchInput)
            )
            .map((post) => {
              return (
                <Card
                  key={post.id}
                  id={post.id}
                  description={post.description}
                  votes={post.upvotes - post.downvotes}
                  username={post.userName}
                  posts={posts}
                  setPosts={setPosts}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Home;
