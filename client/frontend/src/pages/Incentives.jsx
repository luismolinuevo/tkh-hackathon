import React from "react";
import axios from "axios";
const Incentives = () => {
  const getRenewData = async () => {
    try {
      const response = await axios({
        method: "get",
        headers: { "Access-Control-Allow-Origin": "*" },
        //   url: "https://cors-anywhere.herokuapp/corsdemo/programs.dsireusa.org/api/v1/getprogramsbydate/20150325/20150514/json",
        url: "https://cors-anywhere.herokuapp.com/http://programs.dsireusa.org/api/v1/getprogramsbydate/20150325/20170514/json",
      });

      console.log(response);

      const itemsWithStates = response.data.data.filter(
        (items) => items.State !== undefined && items.WebsiteUrl !== ""
      );
      console.log(itemsWithStates);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div>Incentives</div>
      <button className="border" onClick={getRenewData}>
        Button
      </button>
    </>
  );
};

export default Incentives;
