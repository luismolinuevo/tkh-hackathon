import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

function Faves() {
  const [faves, setFaves] = useState([]);
  const userName = "luismolinuevo";

  useEffect(() => {
    const fetchFaves = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER}/post/upvotes/luismolinuevo/upvote`
        );
        if (response.status === 200) {
          setFaves(response.data.getUpvotes);
          console.log(response.data.getUpvotes);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchFaves();
  }, []);

  return (
    <div>
      {faves && faves.length != 0 ? (
        faves.map((post) => (
          <div className="mb-4" key={post.id}>
            <Card
              key={post.post.id}
              id={post.post.id}
              description={post.post.description}
              votes={post.post.upvotes - post.post.downvotes}
              username={post.post.userName}
              //   posts={posts}
              //   setPosts={setPosts}
            />
          </div>
        ))
      ) : (
        <p>Failed to map</p>
      )}
    </div>
  );
}

export default Faves;
