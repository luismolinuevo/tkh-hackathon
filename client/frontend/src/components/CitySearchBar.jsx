import React, { useState } from "react";
import cities from "../../cities.jsx";
const combinedCitiesArray = cities.join(",").split(", ");
const citiesList = combinedCitiesArray.filter((city) => city !== "");

const CitySearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("s");
  const [showItems, setShowItems] = useState(false);
  const dropdownItems = citiesList
    .filter((city) => {
      const searchCity = searchValue.toLowerCase();
      // console.log(searchCity)
      return searchCity && city.toLowerCase().startsWith(searchCity);
    })
    .slice(0, 5)
    .map((city) => {
      return (
        <div
          onClick={() => {
            setSearchValue(city);
            setShowItems(false);
          }}
          className="px-2 py-1 dropdown-items hover:bg-zinc-300"
          key={city}
        >
          {city}
        </div>
      );
    });
  return (
    <div className="flex flex-col gap-2 relative">
      <div className="flex flex-col gap-2">
        <label className={"text-xl font-semibold " + props.titleColor } htmlFor="title">
          City
        </label>
        <input
                //   className="border border-zinc-400 w-[280px] "
                  className={props.inputStyle}
          type="text"
          name="city"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value)
            setShowItems(true);
          }}
        />
      </div>
      <div
              className={
            props.dropdownStyle + `
      ${
        dropdownItems.length > 0 && showItems ? "border border-zinc-400 " : ""
      }`}
      >
        {showItems ? dropdownItems : ""}
      </div>
    </div>
  );
};

export default CitySearchBar;
