import React from "react";

const BeneficialCard = ({ card }) => {
  return (
    <div className="flex flex-col gap-2  rounded-lg p-5 md:w-60 w-80 md:h-110 h-85 bg-[#F2F5F6]">
      <img className="h-30 w-30" src={card.img}></img>
      <h4 className="text-2xl font-bold">{card.title}</h4>
      <p className="text-lg text-gray-500">{card.description}</p>
    </div>
  );
};

export default BeneficialCard;
