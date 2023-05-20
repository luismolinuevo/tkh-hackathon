import React, { useState } from "react";
import axios from "axios";

const Card = ({ description, votes, username, id, posts, setPosts }) => {
  const [isHidden, setIsHidden] = useState("hidden");
  const [likesStatus, setLikesStatus] = useState("");

  const updateLike = async (type, username, id) => {
    try {
      const response = await axios({
        method: "put",
        url: `http://localhost:3000/post/${id}/vote/`,
        data: {
          type: type,
          userName: username,
        },
      });
      console.log(response);

      if (response) {
        const updatedVotes = response.data.updatedVotes;
        const updatedPostLikes = posts.map((post) => {
          if (post.id !== id) {
            return post;
          } else {
            return {
              ...post,
              upvotes: updatedVotes.upvotes,
              downvotes: updatedVotes.downvotes,
            };
          }
        });
        setPosts(updatedPostLikes);

        if (type === "upvote") {
          setLikesStatus("liked");
        } else if (type === "downvote") {
          setLikesStatus("disliked");
        } else {
          setLikesStatus("");
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  console.log(likesStatus);
  return (
    <>
      <div className="flex flex-col mt-10 gap-4">
        <div>
          <div
            className={`flex border bg-green-background h-40 relative p-4 ${
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
                    onClick={() => updateLike("upvote", username, id)}
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill={likesStatus === "liked" ? "#71d371" : "none"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="css-i6dzq1"
                  >
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                  </svg>
                </div>
                <div>{votes}</div>
                <div>
                  <svg
                    onClick={() => updateLike("downvote", username, id)}
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill={likesStatus === "disliked" ? "#d15645" : "none"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="css-i6dzq1 "
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
              <div className="flex mt-4 gap-4 text-center">
                <div>
                  <div className="bg-slate-200 h-40 w-56 mb-3">
                    <img src="" alt="amazon image" />
                  </div>
                  <a className="" href="https://www.amazon.com/" target="_blank">
                    Amazon link
                  </a>
                </div>{" "}
                <div>
                  <div className="bg-slate-200 h-40 w-56 mb-3">
                    <img src="" alt="amazon image" />
                  </div>
                  <a href="https://www.amazon.com/" target="_blank">
                    Amazon link
                  </a>
                </div>{" "}
                <div>
                  <div className="bg-slate-200 h-40 w-56 mb-3">
                    <img src="" alt="amazon image" />
                  </div>
                  <a href="https://www.amazon.com/" target="_blank">
                    Amazon link
                  </a>
                </div>{" "}
                <div>
                  <div className="bg-slate-200 h-40 w-56 mb-3">
                    <img src="" alt="amazon image" />
                  </div>
                  <a href="https://www.amazon.com/" target="_blank">
                    Amazon link
                  </a>
                </div>{" "}
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
