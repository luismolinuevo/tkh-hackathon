import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Form = () => {
  const [implementationDifficulty, setImplementationDifficulty] = useState("");
  const [cost, setCost] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [goodFor, setGoodFor] = useState("");
  const [livingSituation, setLivingSituation] = useState("Urban");
  const [userName, setUserName] = useState("luismolinuevo");

  const handleCreatePost = async () => {
    const createPost = axios.post("http://localhost:3000/post/", {
      implementationDifficulty: implementationDifficulty,
      cost: cost,
      title: title,
      description: description,
      country: country,
      city: city,
      zipCode: zipCode,
      goodFor: goodFor,
      livingSituation: livingSituation,
      userName: userName,
    });

    // console.log(res)
  };

  return (
    <div className="mt-[120px]">
      <form className="w-[650px]" onSubmit={handleCreatePost}>
        <h1 className="text-[35px] mb-6">New Post</h1>
        <div className="flex">
          <div className="w-[45%] flex flex-col mr-8">
            <label className="text-[25px]">Title</label>
            <input
              type="text"
              className="border border-black h-8"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="w-[45%] flex flex-col mr-8">
            <label htmlFor="living-situation" className="text-[25px]">
              Living Situation:{" "}
            </label>
            <select
              className="border border-black h-8"
              name="living-situation"
              id="living-situation"
              onChange={(e) => setLivingSituation(e.target.value)}
            >
              <option value="urban">Urban</option>
              <option value="suburban">Suburban</option>
              <option value="rural">Rural</option>
            </select>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col">
            <label className="text-[28px]">Country</label>
            <input
              type="text"
              className="border border-black h-8"
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[28px]">City</label>
            <input
              type="text"
              className="border border-black h-8"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[28px]">Zip</label>
            <input
              type="text"
              className="border border-black h-8"
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label>Description</label>
          <p>
            How has this solution helped you? What is it trying to solve? What
            are its benefits?
          </p>
          <textarea
            type="text"
            className="h-[150px] border border-black w-full"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex">
          <div className="w-[45%] flex-col mr-8">
            <label className="text-[28px]">Cost of Implemation</label>
            <input
              type="text"
              className="border border-black h-8 "
              onChange={(e) => setCost(e.target.value)}
            />
          </div>
          <div className="w-[45%] flex-col mr-8">
            <label className="text-[28px]">This solution is good for</label>
            <input
              type="text"
              className="border border-black h-8"
              onChange={(e) => setGoodFor(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="p-2 rounded-[50px] bg-[#63B2F6] text-white text-[25px]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
