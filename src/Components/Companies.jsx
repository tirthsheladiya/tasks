import React from "react";

const Companies = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col bg-[#FFFFFF] p-5 gap-5 md:gap-15 px-10  md:px-60">
        <p className="text-center text-[10px] font-bold ">
          Trusted by the best in the world
        </p>

        <div className="flex flex-wrap justify-center gap-y-6 gap-x-10 md:flex-nowrap">
          <img src="/Google.png" alt="companies" className="w-15 md:w-20 h-5" />
          <img
            src="./Atlassian.png"
            alt="companies"
            className="w-15 md:w-20 h-5"
          />
          <img src="/Canon.png" alt="companies" className="w-15 md:w-20 h-5" />
          <img
            src="/Walmart.png"
            alt="companies"
            className="w-15 md:w-20 h-5"
          />
          <img src="/Amazon.png" alt="companies" className="w-15 md:w-20 h-5" />
        </div>
      </div>
    </>
  );
};

export default Companies;
