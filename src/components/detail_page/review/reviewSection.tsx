import React from "react";
import Stars from "./Stars";
import ReviewSlide from "./ReviewSlide";
import VerifiedBadge from "./VerifiedBadge";

import Filter from "./Filter";
import ReviewCard from "./ReviewCard";

const reviewSection = () => {
  const options = [
    {
      value: 1,
      label: "Leanne Graham",
    },
    {
      value: 2,
      label: "Ervin Howell",
    },
  ];
  const totalReviews = 52;
  const reviewsByRating: any = {
    5: 24,
    4: 16,
    3: 5,
    2: 6,
    1: 1,
  };

  const slideWidth: any = (key: number) => {
    return Math.round((reviewsByRating[key] / totalReviews) * 100);
  };
  const sortedReviewsByRating = Object.keys(reviewsByRating).sort(
    (a, b) => parseInt(b) - parseInt(a)
  );
  return (
    <div className="my-20">
      <h1 className="text-3xl text-textPrimary font-semibold pb-4">Reviews</h1>
      <div className="flex gap-4">
        <div className="bg-[#F5F4F4] w-[40%] p-9 rounded-[19px]">
          <h2 className="text-[56px] font-semibold text-textPrimary pb-2">
            4.0
          </h2>
          <Stars rating={4} starSize="30" />
          <h4 className="text-base font-medium text-textPrimary py-3">
            {totalReviews} Reviews
          </h4>
          <div className="space-y-3 mt-8">
            {sortedReviewsByRating.map((key) => {
              return (
                <ReviewSlide
                  key={key}
                  reviewNumber={parseInt(key)}
                  slideWidth={slideWidth(parseInt(key))}
                />
              );
            })}
          </div>
        </div>
        <div className="w-full">
          <VerifiedBadge />
          <div className="flex justify-between items-center  my-6">
            <p className="text-textPrimary text-[24px] font-medium">Sort By</p>
            <Filter />
          </div>
          <hr />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </div>
  );
};

export default reviewSection;
