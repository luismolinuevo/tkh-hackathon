import React, { useState } from "react";

export default function AiPage() {
  const [situationInput, setSituationInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ situation: situationInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      console.info("Start - OpenAI result");
      console.info(data.result);
      console.info("End - OpenAI result");

      setResult(data.result);
      setSituationInput("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }
  return (
    <div className="w-full">
      <div className="p-20 flex justify-center">
        <input
        type="text"
          onChange={(e) => setSituationInput(e.target.value)}
          className="w-1/2 border h-10 justify-self-center self-center rounded-lg ps-4"
          placeholder="Enter situation. Ex: 'I live in Arizona. I have a large house."
          
        />
        <button onClick={onSubmit}>Ask</button>
      </div>
      <div>
        {result}
      </div>
    </div>
  );
}

