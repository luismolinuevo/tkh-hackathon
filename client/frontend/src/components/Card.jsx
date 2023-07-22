import React, { useState } from "react";
import axios from "axios";

const Card = ({
  description,
  votes,
  username,
  id,
  posts,
  setPosts,
  title,
  difficulty,
  livingSituation,
  location,
}) => {
  const [isHidden, setIsHidden] = useState("hidden");
  const [likesStatus, setLikesStatus] = useState("");

  const updateLike = async (type, id) => {
    try {
      const response = await axios({
        method: "put",
        url: `${import.meta.env.VITE_SERVER}/post/${id}/vote/`,
        data: {
          type: type,
          // userName: username,
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

  // console.log(likesStatus);
  return (
    <>
      <div className="flex flex-col ">
        <div>
          <div
    
            className={`flex border bg-green-background relative w-[90%] h-[350px] rounded-2xl overflow-hidden shadow-3xl my-10 border-0`}
            style={{
              backgroundImage: `url('https://source.unsplash.com/random/56×56/?${title}')`,
              
            }}
          >
            <div className="absolute capitalize px-5 bottom-0  w-full h-[54px] backdrop-blur-xl backdrop-opacity-95 backdrop-contrast-50 backdrop-brightness-200">
              <div className="text-2xl text-white-highlight flex h-full items-center">
                {title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
