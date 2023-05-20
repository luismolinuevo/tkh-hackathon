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
    <div className="">
      <form className="w-[650px]" onSubmit={handleCreatePost}>
        <h1>New Post</h1>
        <div className="flex">
          <div className="w-[45%] flex flex-col mr-8">
            <label>Title</label>
            <input type="text" className="border border-black" />
          </div>
        </div>
        <div className="flex gap-2">
            <div className="flex flex-col">
              <label>Country</label>
              <input type="text" className="border border-black" />
            </div>
            <div className="flex flex-col">
              <label>City</label>
              <input type="text" className="border border-black" />
            </div>
            <div className="flex flex-col">
              <label>Zip</label>
              <input type="text" className="border border-black" />
            </div>
          </div>
        <div>
          <label>Description</label>
          <p>
            How has this solution helped you? What is it trying to solve? What
            are its benefits?
          </p>
          <input type="text" className="h-[150px] border border-black w-full" />
        </div>
        <div className="flex">
          <div className="w-[45%] flex-col mr-8">
            <label>Cost of Implemation</label>
            <input type="text" className="border border-black  " />
          </div>
          <div className="w-[45%] flex-col mr-8">
            <label>This solution is good for</label>
            <input type="text" className="border border-black " />
          </div>
        </div>

        <button type="submit">Hey</button>
      </form>
    </div>
  );
};

export default Form;
