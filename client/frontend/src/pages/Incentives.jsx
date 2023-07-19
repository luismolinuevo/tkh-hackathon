import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import states from "../../states";
const Incentives = () => {
  const [programsWithStates, setProgramWithStates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // const initialPrograms = useLoaderData()

  // const [programs, setPrograms] = useState(initialPrograms)
  const [programs, setPrograms] = useState();
  console.log(programs);
  useEffect(() => {
    const getRenewData = async () => {
      try {
        setIsLoading(true);
        const response = await axios({
          method: "get",
          url: `${import.meta.env.VITE_SERVER}/dsire`,
        });

        console.log(response);

        if (response) {
          const data = response.data.dsire_response;
          const itemsWithStates = data.filter(
            (items) => items.State !== undefined && items.WebsiteUrl !== ""
          );
          setIsLoading(false);
          setPrograms(itemsWithStates);
        }
      } catch (e) {
        console.log(e);
      }
    };

    getRenewData();
  }, []);

  console.log(isLoading);
  const [searchValue, setSearchValue] = useState("");

  const filteredStatesSearch = programs
    ? programs.filter((program) => {
        return program.State.toLowerCase().startsWith(searchValue);
      })
    : [];

  return (
    <div className="flex flex-col w-full  px-16 gap-7 mt-10">
      <h1 className="text-5xl  font-poppins">Find Incentive Programs for Environmental Sustainability</h1>

      <div className="w-full ">
        <label htmlFor="state-input"></label>
        <input
          className="border w-full md:w-3/4 p-4 rounded-xl h-12 bg-dull-green-background"
          placeholder="Search Program By State"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      
        {isLoading ? (
        <div>
          <h3 className="text-2xl font-bold flex">
            <p className="font-poppins">Loading</p>
            <div className="w-[4rem] flex justify-center items-end pb-[6px] pe-3">
              <div className="snippet" data-title="dot-flashing">
                <div className="stage">
                  <div className="dot-flashing"></div>
                </div>
              </div>
            </div>
          </h3>
          </div>
        ) : (
          ""
        )}
      <div className="grid grid-cols-1 sm:grid-cols-2 mdlg:grid-cols-3 xl:grid-cols-4 gap-6  auto-rows-fr">
        {filteredStatesSearch.map((program, index) => {
          return (
            <div
              key={index}
              className="font-poppins rounded-xl p-6 border bg-white-highlight shadow-md hover:shadow-green hover:-translate-y-0.5 hover:-translate-x-0.5 duration-200"
            >
              {/* {program.Name} */}
              <div className="font-bold text-xl">{program.State}</div>
              <a className="hover:underline decoration-green-background "href={program.WebsiteUrl} target="_blank">
                {" "}
                {program.Name}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Incentives;
