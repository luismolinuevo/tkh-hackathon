import React, { useState } from "react";
import cities from "../../cities.jsx";
const combinedCitiesArray = cities.join(",").split(", ");
const citiesList = combinedCitiesArray.filter((city) => city !== "");

const CitySearchBar = (props) => {
//   const [searchValue, setSearchValue] = useState("");
  const [showItems, setShowItems] = useState(false);
  const dropdownItems = citiesList
    .filter((city) => {
      const searchCity = props.searchValue.toLowerCase();
      return searchCity && city.toLowerCase().startsWith(searchCity);
    })
    .slice(0, 5)
    .map((city) => {
      return (
        <div
          onClick={() => {
           props.setSearchValue(city);
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
      <div className={"flex flex-col " + props.labelInputGap}>
        <label className={props.labelStyling} htmlFor="title">
          City
        </label>
        <input
                  className={props.inputStyle}
          type="text"
          name="city"
          value={props.searchValue}
          onChange={(e) => {
            props.setSearchValue(e.target.value)
            setShowItems(true);
          }}
          placeholder={props.placeholder}
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
