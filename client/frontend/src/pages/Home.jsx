import React, { useState } from "react";

const Home = () => {
  const [isHidden, setIsHidden] = useState("");
  return (
    <>
      <div className="flex flex-col w-full px-20 py-10 gap-10">
        <div className="flex flex-col ">
          <input
            className="w-1/2 border h-10 justify-self-center self-center rounded-xl"
            type="text"
            value="hello"
            placeholder="This is the search bar"
          />
          <div className="flex mt-10 w-5/6 self-center p-10 border gap-10 ">
            <div className="flex flex-col border w-4/6  gap-5">
              <div className="text-6xl">Find Sustainable Solutions for You</div>
              <div className="text-3xl">
                Brief mission statement describing the goal of the website,
                uses, and why its important.
              </div>
            </div>

            <form className=" flex ms-auto flex-col border justify-end items-end w-2/6 gap-4 ">
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
                  Type: {" "}
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
        <div className="border p-5">
          <div className="flex  border justify-between items-center">
            <div className="text-4xl">Recommendations</div>
            <div>Sort by ▼ </div>
          </div>
          {/* Posts container */}
          <div className="flex flex-col mt-10 gap-4">
            <div>
              <div
                className={`flex border h-40 relative p-4 ${
                  isHidden ? "" : "border-b-0"
                }`}
              >
                <div className="border w-56 bg-slate-200">
                  <img src="" alt="image" />
                </div>
                <div className="flex flex-col flex-1 px-5">
                  <div>Title: </div>
                  <div>
                    Description: Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Asperiores laboriosam expedita optio
                    impedit, eaque maxime aliquam sunt illo sint, hic quam iste
                    velit quod corporis distinctio praesentium error laborum
                    tempore?
                  </div>
                  <div>Recommendated Products</div>
                </div>
                <div className="flex flex-col justify-between">
                  <div className="flex gap-1">
                    <div>
                      <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="css-i6dzq1"
                      >
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                      </svg>
                    </div>
                    <div>101</div>
                    <div>
                      <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="css-i6dzq1"
                      >
                        <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    onClick={() => setIsHidden(!isHidden)}
                    className="hover:text-blue-500 hover:underline cursor-pointer"
                  >
                    {isHidden ? "View More" : ""}
                  </div>
                </div>
              </div>
              {/* <div className= {isHidden ? "hidden border border-t-0 relative" : "display border relative border-t-0 "}> */}
              <div
                className={` border border-t-0 relative p-5 ${
                  isHidden ? "hidden" : "display "
                }`}
              >
                <div>
                  <ul>Additional Info</ul>
                  <ul>Additional Info</ul>
                  <ul>Additional Info</ul>
                  <ul>Additional Info</ul>
                  <ul>Additional Info</ul>
                </div>
                <div>
                  <div className="text-3xl mt-4">Referred solutions</div>
                  <div className="flex mt-4 gap-4">
                    <div className="bg-slate-200 h-40 w-56">
                      <img src="" alt="amazon image" />
                    </div>
                    <div className="bg-slate-200 h-40 w-56">
                      <img src="" alt="amazon image" />
                    </div>
                    <div className="bg-slate-200 h-40 w-56">
                      <img src="" alt="amazon image" />
                    </div>
                    <div className="bg-slate-200 h-40 w-56">
                      <img src="" alt="amazon image" />
                    </div>
                  </div>
                </div>
                <span
                  className="hover:text-blue-500 hover:underline absolute px-5 pb-2 right-0 bottom-0 cursor-pointer"
                  onClick={() => setIsHidden(!isHidden)}
                >
                  Close
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {console.log(isHidden)}
    </>
  );
};

export default Home;
