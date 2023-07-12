import React, { useState } from "react";

export default function AiPage() {
  const [situationInput, setSituationInput] = useState("");
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(false);
  async function onSubmit(event) {
    event.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_SERVER}/api/generate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ situation: situationInput }),
        }
      );

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      } else {
        console.info("Start - OpenAI result");
        // console.info();
        console.info("End - OpenAI result");
        setIsLoading(false);
        // setResult(data.result);
        // console.log(data);
        // console.log(data.result);
        // console.log(data.result.split("\n"));

        const listOfResults = data.result.split("\n").filter((value) => {
          if (value !== undefined && value !== " " && value !== "") {
            return value;
          }
        });

        const finalResults =
          listOfResults[0].length > 14
            ? listOfResults
            : listOfResults.slice(1, 12);
        console.log(listOfResults);
        console.log(finalResults);
        setResult(listOfResults);
        setSituationInput("");
      }
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      setIsLoading(false);
      alert(error.message);
    }
  }

  const data = [
    "",
    "",
    "1. Replace traditional lightbulbs with LED bulbs to reduce electricity usage",
    "2. Reduce water usage by installing low-flow showerheads and toilets",
    "3. Insulate windows and doors to reduce energy loss",
    "4. Grow native plants and trees in your yard",
    "5. Compost food waste to reduce landfill waste",
    "6. Recycle paper, plastic, glass, and aluminum",
    "7. Use natural, non-toxic cleaning products",
    "8. Buy furniture, appliances, and other items made from recycled materials",
    "9. Install a rainwater collection system to reduce reliance on municipal water sources",
    "10. Look for green energy options in your area, such as wind or solar power.",
  ];

  // console.log(data[1] === "")
  // const listOfResults = data.filter(value => {
  //   console.log(value ===  "")
  //   if (value !== undefined && value !== " " && value !== "") {
  //     return value
  //   }
  // })
  // console.log(listOfResults)
  const data2 = [
    "",
    "",
    "1. Plant trees that are native to the New York City area.",
    "2. Use LED lighting to reduce electricity consumption.",
    "3. Purchase energy efficient appliances.",
    "4. Install a rain barrel or two to collect rainwater for use in your garden.",
    "5. Use cloth towels and linens instead of paper towels.",
    "6. Use natural and/or reusable cloth products for cleaning.",
    "7. Buy organic, locally-sourced foods and goods when possible.",
    "8. Use biodegradable products, such as shampoo and soap, when possible.",
    "9. Shop for clothing secondhand and donate or recycle pieces you don't need.",
    "10. Compost food scraps, yard trimmings, and other organic materials.",
  ].slice(2, 12);
  // console.log(data.slice(2, 12));
  return (
    <div className="w-full relative">
      <div className="p-20 flex flex-col justify-center items-center gap-4 w-full">
        <div className="flex justify-center gap-3 w-full">
          <div className=" w-3/4 relative">
            <input
              type="text"
              onChange={(e) => setSituationInput(e.target.value)}
              className="w-full relative border justify-self-center self-center rounded-lg h-16 p-5"
              placeholder="Enter Situation. Ex: 'I live in Arizona. I have a large house."
            />
            {isLoading && (
              <div role="status" className="absolute top-[16px]  right-2">
                <svg
                  aria-hidden="true"
                  class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-background"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            )}
          </div>
          <button
            className="bg-green-background font-poppins text-xl text-white  w-[100px] rounded-lg"
            onClick={onSubmit}
          >
            Ask
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-lg font-semibold mt-6 ">
          {result &&
            result.map((tip) => {
              return (
                <div
                  key={tip}
                  className="border rounded-lg p-4 w-auto block bg-green-background text-white z-10"
                >
                  {tip}
                </div>
              );
            })}
        </div>
      </div>
      <div
        style={{ backgroundImage: "url('/minimalist-leaf.jpg')" }}
        className="hidden md:block md:absolute w-[1000px] h-[382px] bottom-0 right-0 "
      ></div>
    </div>
  );
}
