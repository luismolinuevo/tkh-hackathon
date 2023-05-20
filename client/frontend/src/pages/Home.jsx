import React, { useState } from "react";
import Card from "../components/Card";
const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const fakeData = [
    {
      description: "asdjkoasdjasldkjasdklasjdkasd",
      upvotes: 1000,
      downvotes: 1,
      username: "Jack",
    },
    {
      description:
        "Sit incidunt tempore eos eius voluptas qui voluptatem dolorum eos eveniet ipsam? Et laborum sint id velit officiis id illum quia qui alias fugiat sit amet dolore non sequi libero.",
      upvotes: 1000,
      downvotes: 1324,
      username: "Harry123",
    },
    {
      description:
        "Eos enim deleniti ut reprehenderit sunt aut facere consequatur qui culpa labore nam voluptas ipsam est iste molestiae. Sit itaque repellendus ut dolores odio aut ullam optio et officia iste et natus quam a magni nihil. Vel laudantium eveniet qui maxime tempore aut accusamus voluptatem a totam dolore sit eius aliquid. 33 aliquam dolor id quia tempora nam illo placeat sed officiis .",
      upvotes: 100,
      downvotes: 1324,
      username: "Jordan12323",
    },
  ];
  return (
    <>
      <div className="flex flex-col w-full px-20 py-10 gap-10">
        <div className="flex flex-col ">
          <input
            className="w-1/2 border h-10 justify-self-center self-center rounded-lg ps-4"
            type="text"
            value={searchInput}
            placeholder="Search for information!"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <div className="flex mt-10 w-5/6 self-center p-10  gap-10 ">
            <div className="flex flex-col  w-4/6  gap-5">
              <div className="text-6xl">Find Sustainable Solutions for You</div>
              <div className="text-3xl">
                Brief mission statement describing the goal of the website,
                uses, and why its important.
              </div>
            </div>

            <form className=" flex ms-auto flex-col  justify-end items-end w-2/6 gap-4 ">
              <div className="">
                <label htmlFor="location" className="text-2xl ">
                  Location:{" "}
                </label>
                <input
                  className="w-48 border h-10"
                  type="text"
                  name="location"
                  value=""
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
            </form>
          </div>
        </div>
        <div className=" p-5">
          <div className="flex justify-between items-center">
            <div className="text-4xl">Recommendations</div>
            <div>Sort by ▼ </div>
          </div>
          {/* Posts container */}
          {/* <Card description={description} title={title} votes={upvotes >  downvotes ? upvotes - downvotes : downvotes - upvotes} /> */}

          {/* {fakeData.map((post) => {
            return (
              <Card
                description={post.description}
                votes={
                  post.upvotes > post.downvotes
                    ? post.upvotes - post.downvotes
                    : post.downvotes - post.upvotes
                }
                username={post.username}
              />
            );
          })} */}
          {fakeData
            .filter((post) =>
              post.description.toLowerCase().includes(searchInput)
            )
            .map((post) => {
              return (
                <Card
                  description={post.description}
                  votes={
                    post.upvotes > post.downvotes
                      ? post.upvotes - post.downvotes
                      : post.downvotes - post.upvotes
                  }
                  username={post.username}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Home;
