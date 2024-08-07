import React from "react";

function TestimonailCard({ name, review }) {
  return (
    <div className="w-full flex items-start justify-start gap-2 flex-col">
      <p className="text-mainHeading text-para font-semibold text-start leading-8">
        {review
          ? review
          : "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet  sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
      </p>
      <p className="border-b-2 border-marqueColor text-[0.9rem]">
        {name ? name : "Simon Árpád"}
      </p>
    </div>
  );
}

export default TestimonailCard;
