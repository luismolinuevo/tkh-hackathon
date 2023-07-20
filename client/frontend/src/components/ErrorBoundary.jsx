import React from "react";

const ErrorBoundary = () => {
  return (
    <div className="flex flex-col items-center mt-[25vh] gap-5  ">
      <div className="text-8xl font-bold text-slate-500 border-b w-full text-center p-3">
        404{" "}
      </div>
      <div className="font-poppins font-[600] text-slate-500 text-4xl text-center ">
        <p>This page could not be found.</p>
        <p className="font-poppins font-[600] mt-3  text-bright-green-highlight">
          Please come back later!
        </p>
      </div>
    </div>
  );
};

export default ErrorBoundary;
