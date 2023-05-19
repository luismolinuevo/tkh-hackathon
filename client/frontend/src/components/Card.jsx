import React, { useState } from "react";

const Card = ({ description, votes, username }) => {
  const [isHidden, setIsHidden] = useState("hidden");
  return (
    <>
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
              <div>Description: {description}</div>
              <div>Recommendated Products</div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex gap-2">
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
                <div>{votes}</div>
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
                className="hover:text-blue-500 hover:underline cursor-pointer absolute bottom-3 right-5"
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
    </>
  );
};

export default Card;
