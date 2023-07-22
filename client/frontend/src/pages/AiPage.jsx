import React, { useState } from "react";
import Icon from "../../public/icon.svg";
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
        setSituationInput("");
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
    <div className="w-full relative flex justify-center items-start ">
      <div className="p-6 md:p-10 lg:p-20 pt-10 flex flex-col justify-center items-center gap-4 w-5/6">
        <h1 className="text-5xl font-bold font-poppins self-start flex mb-4">
          Ask Ai{" "}
          <span className="ms-4 fill-green-background">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
            >
              <path d="M384 312.7c-55.1 136.7-187.1 54-187.1 54-40.5 81.8-107.4 134.4-184.6 134.7-16.1 0-16.6-24.4 0-24.4 64.4-.3 120.5-42.7 157.2-110.1-41.1 15.9-118.6 27.9-161.6-82.2 109-44.9 159.1 11.2 178.3 45.5 9.9-24.4 17-50.9 21.6-79.7 0 0-139.7 21.9-149.5-98.1 119.1-47.9 152.6 76.7 152.6 76.7 1.6-16.7 3.3-52.6 3.3-53.4 0 0-106.3-73.7-38.1-165.2 124.6 43 61.4 162.4 61.4 162.4.5 1.6.5 23.8 0 33.4 0 0 45.2-89 136.4-57.5-4.2 134-141.9 106.4-141.9 106.4-4.4 27.4-11.2 53.4-20 77.5 0 0 83-91.8 172-20z" />
            </svg>
          </span>
        </h1>
        <div className="flex justify-center gap-3  w-full">
          <div className=" w-full relative">
            <input
              type="text"
              onChange={(e) => setSituationInput(e.target.value)}
              className="w-full relative border justify-self-center self-center rounded-lg h-16 p-2 ps-20 outline-none text-xl"
              placeholder="Enter Situation. Ex: 'I live in Arizona. I have a large house."
            />
            <svg
              className={`absolute top-[15px] left-[30px] ${
                isLoading ? "animate-spin" : ""
              }`}
              width="33"
              height="33"
              viewBox="0 0 33 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.3834 19.9981C17.2755 19.9981 17.9987 19.275 17.9987 18.3829C17.9987 17.4908 17.2755 16.7677 16.3834 16.7677C15.4914 16.7677 14.7682 17.4908 14.7682 18.3829C14.7682 19.275 15.4914 19.9981 16.3834 19.9981Z"
                fill={isLoading ? "#459858" : "#939393"}
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.3834 36.1505C13.8093 36.1505 11.5164 33.5011 10.0375 29.3742C5.72406 30.1569 2.28319 29.4959 0.996129 27.2666C-0.290924 25.0374 0.857086 21.7271 3.69163 18.3828C0.857095 15.0386 -0.290911 11.7283 0.996141 9.49906C2.2832 7.26981 5.72408 6.60885 10.0376 7.39155C11.5165 3.26463 13.8093 0.615234 16.3834 0.615234C18.9575 0.615234 21.2504 3.26459 22.7293 7.39146C27.0427 6.60878 30.4836 7.26974 31.7706 9.49898C33.0577 11.7282 31.9096 15.0386 29.0751 18.3828C31.9096 21.7271 33.0577 25.0375 31.7706 27.2667C30.4836 29.496 27.0427 30.1569 22.7293 29.3742C21.2504 33.5012 18.9575 36.1505 16.3834 36.1505ZM20.6646 28.9065C20.5119 29.3164 20.3509 29.7073 20.1826 30.0776C18.7852 33.1519 17.2838 34.0507 16.3834 34.0507C15.483 34.0507 13.9817 33.1519 12.5843 30.0776C12.416 29.7073 12.255 29.3164 12.1022 28.9064C13.4794 28.5352 14.9182 28.0336 16.3833 27.4052C17.8484 28.0337 19.2874 28.5352 20.6646 28.9065ZM13.7915 26.1724C12.995 26.4599 12.2167 26.7036 11.464 26.9035C11.2608 26.1516 11.0826 25.3558 10.9334 24.5222C11.3925 24.8136 11.8634 25.0989 12.3453 25.3771C12.8271 25.6553 13.3096 25.9204 13.7915 26.1724ZM21.3028 26.9036C20.55 26.7036 19.7716 26.4599 18.975 26.1724C19.457 25.9204 19.9396 25.6552 20.4215 25.377C20.9034 25.0988 21.3743 24.8135 21.8335 24.5221C21.6842 25.3557 21.5061 26.1516 21.3028 26.9036ZM19.3716 23.5585C20.3742 22.9797 21.3213 22.3716 22.2071 21.745C22.3068 20.6648 22.3598 19.5405 22.3598 18.3829C22.3598 17.2252 22.3068 16.1009 22.207 15.0207C21.3213 14.3941 20.3742 13.786 19.3716 13.2072C18.369 12.6283 17.3687 12.1121 16.3833 11.6583C15.3979 12.1121 14.3977 12.6283 13.3952 13.2071C12.3926 13.7859 11.4455 14.394 10.5598 15.0205C10.4601 16.1008 10.407 17.2252 10.407 18.3829C10.407 19.5406 10.4601 20.6649 10.5598 21.7452C11.4455 22.3717 12.3926 22.9798 13.3952 23.5586C14.3977 24.1374 15.3979 24.6536 16.3833 25.1074C17.3687 24.6536 18.369 24.1374 19.3716 23.5585ZM23.3565 27.3523C23.7236 25.9739 24.0087 24.477 24.197 22.8939C25.4738 21.9394 26.6275 20.9441 27.6376 19.937C27.9163 20.2743 28.1743 20.6092 28.4109 20.9401C30.3746 23.6875 30.4023 25.437 29.9521 26.2168C29.5019 26.9966 27.9729 27.8474 24.6117 27.5204C24.2069 27.481 23.7879 27.425 23.3565 27.3523ZM24.4253 20.033C25.0725 19.487 25.6727 18.9348 26.2222 18.3828C25.6727 17.8309 25.0725 17.2787 24.4253 16.7327C24.448 17.276 24.4596 17.8265 24.4596 18.3829C24.4596 18.9393 24.448 19.4897 24.4253 20.033ZM28.4109 15.8256C28.1743 16.1565 27.9163 16.4914 27.6376 16.8287C26.6275 15.8216 25.4738 14.8263 24.197 13.8717C24.0087 12.2887 23.7236 10.7918 23.3565 9.41338C23.7879 9.3407 24.2069 9.28468 24.6117 9.2453C27.9729 8.91834 29.5019 9.76911 29.9521 10.5489C30.4023 11.3287 30.3746 13.0782 28.4109 15.8256ZM20.1826 6.68817C20.3509 7.05845 20.5119 7.44929 20.6646 7.85921C19.2873 8.23047 17.8484 8.73204 16.3833 9.36048C14.9182 8.73209 13.4794 8.23055 12.1022 7.85931C12.255 7.44936 12.416 7.05848 12.5843 6.68817C13.9817 3.61385 15.483 2.71505 16.3834 2.71505C17.2838 2.71505 18.7852 3.61385 20.1826 6.68817ZM21.3028 9.86214C20.55 10.0621 19.7716 10.3058 18.975 10.5933C19.457 10.8453 19.9396 11.1105 20.4215 11.3887C20.9034 11.6669 21.3743 11.9522 21.8335 12.2436C21.6842 11.41 21.5061 10.6141 21.3028 9.86214ZM11.464 9.86224C12.2167 10.0622 12.995 10.3058 13.7915 10.5933C13.3096 10.8453 12.8271 11.1104 12.3453 11.3886C11.8634 11.6668 11.3925 11.9521 10.9334 12.2435C11.0827 11.4099 11.2608 10.6141 11.464 9.86224ZM9.41032 9.41347C9.04323 10.7918 8.75816 12.2886 8.56984 13.8716C7.29303 14.8262 6.13919 15.8216 5.12904 16.8287C4.85041 16.4914 4.59241 16.1566 4.35589 15.8257C2.39216 13.0783 2.36442 11.3288 2.81463 10.549C3.26484 9.76919 4.79388 8.91842 8.15503 9.24538C8.5599 9.28476 8.9789 9.34079 9.41032 9.41347ZM8.56983 22.8941C7.29302 21.9395 6.13919 20.9441 5.12904 19.937C4.8504 20.2743 4.5924 20.6091 4.35587 20.94C2.39215 23.6874 2.36441 25.437 2.81462 26.2167C3.26483 26.9965 4.79387 27.8473 8.15502 27.5203C8.55988 27.4809 8.97889 27.4249 9.4103 27.3522C9.04321 25.9739 8.75814 24.4771 8.56983 22.8941ZM8.3416 16.7325C7.69429 17.2786 7.09407 17.8309 6.54452 18.3828C7.09407 18.9348 7.69429 19.4871 8.34159 20.0332C8.31885 19.4898 8.30722 18.9393 8.30722 18.3829C8.30722 17.8264 8.31885 17.2759 8.3416 16.7325Z"
                fill={isLoading ? "#459858" : "#939393"}
                
              />
            </svg>

            {/* {isLoading && (
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
            )} */}
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
