import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Form = () => {
  const [implementationDifficulty, setImplementationDifficulty] = useState("");
  const [cost, setCost] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [livingSituation, setLivingSituation] = useState("");
  const [userName, setUserName] = useState("");

  const handleCreatePost = async () => {
    const createPost = axios.post("http://localhost:3000/post/", {
      implementationDifficulty: implementationDifficulty,
      cost: cost,
      title: title,
      description: description,
      location: location,
      livingSituation: livingSituation,
      userName: userName,
    });

    // console.log(res)
  };

  return (
    <div>
      <form className="w-[650px]" onSubmit={handleCreatePost}>
        <div className="flex">
          <div className="w-[45%]">
            <label>Title</label>
            <input type="text" />
          </div>
          <div className="w-[45%]">
            <label>Cost</label>
            <input type="text" />
          </div>
        </div>

        <button type="submit">Hey</button>
      </form>
    </div>
  );
};

export default Form;
