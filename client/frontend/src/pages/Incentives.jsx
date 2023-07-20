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
      <h1 className="text-5xl  font-poppins">
        Find Incentive Programs for Environmental Sustainability
      </h1>

      <div className="w-full ">
        <label htmlFor="state-input"></label>
        <input
          className="border w-full md:w-3/4 p-4 rounded-xl h-[64px] bg-dull-green-background text-2xl outline-none"
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
      <div className="grid grid-cols-1  mdlg:grid-cols-2 xl:grid-cols-3 xxxl:grid-cols-4 gap-6  auto-rows-fr">
        {filteredStatesSearch.map((program, index) => {
          return (
            <div
              key={index}
              className="flex flex-col font-poppins rounded-xl p-8 border bg-white-highlight shadow-md hover:shadow-green hover:-translate-y-0.5  duration-200 min-h-[200px]"
            >
              {/* {program.Name} */}

              <a
                className="hover:underline decoration-green-background text-3xl"
                href={program.WebsiteUrl}
                target="_blank"
              >
                {" "}
                {program.Name}
              </a>
              <div className="flex flex-col gap-2 mt-2">
                {program.Contacts.slice(0, 3).map((contactInfo) => {
                  console.log(
                    contactInfo.contact,
                    contactInfo.contact.firstName
                  );
                  return (
                    <div className="">
                      <div className="text-green-background font-semibold text-md">
                        {contactInfo.contact.firstName}{" "}
                        {contactInfo.contact.lastName}
                      </div>
                      <div>
                        {contactInfo.contact.email} 
                      </div>
                      <div>
                      {contactInfo.contact.phone}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-between w-full text-xl self-end mt-auto">
                <div className="italic"> Updated{" "}: {program.LastUpdate}</div>
                <div className="font-bold"> {program.State}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Incentives;
