import React from "react";
import Stars from "./Stars";
import ReviewSlide from "./ReviewSlide";
import VerifiedBadge from "./VerifiedBadge";

import ReviewCard from "./ReviewCard";
import Filter from "@/components/Filter";
import { Review, ReviewedBy } from "@/types";
import { calculateAverageRating } from "@/utils";

const reviewSection = ({ reviews }: { reviews: Review[] }) => {
  const options = [
    {
      value: "most-recent",
      label: "Most Recent",
    },
    {
      value: "highest-rating",
      label: "Highest Rating",
    },
  ];
  const averageRating = calculateAverageRating(
    reviews.map((review) => review.stars)
  );

  const totalReviews = reviews.length;
  const reviewsByRating = reviews.reduce((acc: any, review: Review) => {
    acc[review.stars] = (acc[review.stars] || 0) + 1;
    return acc;
  }, {});

  const slideWidth: any = (key: number) => {
    return Math.round((reviewsByRating[key] / totalReviews) * 100);
  };
  const sortedReviewsByRating = Object.keys(reviewsByRating).sort(
    (a, b) => parseInt(b) - parseInt(a)
  );

  return (
    <div className="my-20">
      <h1 className="text-3xl text-textPrimary font-semibold pb-4">Reviews</h1>
      <div className="flex flex-col lg:flex-row items-start gap-8 my-4">
        <div className="bg-[#F5F4F4] w-full lg:w-[40%] p-4 md:p-9 rounded-[19px]">
          <div className="flex flex-row lg:flex-col gap-6  ">
            <div>
              <h2 className="text-[40px] md:text-[56px] font-semibold text-textPrimary pb-2">
                {averageRating}
              </h2>
              <Stars rating={Math.floor(averageRating)} starSize="24" />
              <h4 className="text-xs md:text-base font-medium text-textPrimary py-3">
                {totalReviews} Reviews
              </h4>
            </div>
            <div className="space-y-3 mt-8 w-full">
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
        </div>
        <div className="w-full">
          <VerifiedBadge />
          {/* <div className="flex justify-between items-center  my-6">
            <p className="text-textPrimary text-[24px] font-medium">Sort By</p>
            <Filter options={options} contentPadding="px-4 py-2" />
          </div> */}
          <hr />
          {reviews &&
            reviews.map((review) => {
              return <ReviewCard key={review.id} review={review} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default reviewSection;
