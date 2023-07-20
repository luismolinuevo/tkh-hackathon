import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  function openBloombergLink() {
    window.open(
      "https://assets.bbhub.io/company/sites/51/2023/03/Bloomberg-Impact-Report-2022.pdf?tactic-page=588597",
      "_blank"
    );
  }

  return (
    <div className="landing-page-container flex xxl:flex-row flex-col  items-center xxl:items-start   justify-center   w-full  self-center  ">
      <div className="w-[625px] md:w-[700px]  xxl:w-[645px] h-[400px] flex flex-col justify-center  mt-12  xxl:ps-10 text-center items-center xxl:text-start xxl:items-start ">
        <div className=" text-[#41D261] not-italic text-[64px] font-poppins font-[900]">
          Sustainable Living for a{" "}
          <span className="text-[#FCC443]">Brighter</span> Future
        </div>
        <div className="xxl:flex-row  flex gap-10 text-white font-bold text-[16px] mt-8 xxl:mt-16">
          <button
            onClick={openBloombergLink}
            className="bg-green-background z-20  w-[220px] md:w-[250px] py-3 px-4 duration-100 hover:underline rounded-2xl shadow-button"
          >
            Download Bloomberg's Annual Impact Report
          </button>
          <button
            onClick={() => navigate("/home")}
            className="bg-green-background  z-20 w-[250px] py-3 px-4 duration-100 hover:underline rounded-2xl shadow-button "
          >
            Find Sustainable Solutions
          </button>
        </div>
      </div>

      <img
        src="./landing-transformed.jpeg"
        className="md:w-[893px] md:h-[728px]"
        alt=""
      />
    </div>
  );
};

export default LandingPage;
