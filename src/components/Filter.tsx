"use client";
import React from "react";

const Filter = ({
  options,
  contentWidth = "w-full",
  contentPadding = "px-3 py-2",
  selectedFilter,
  setSelectedFilter,
}: {
  options: { value: string; label: string }[];
  contentWidth?: string;
  contentPadding?: string;
  selectedFilter: {
    value: string;
    label: string;
  };
  setSelectedFilter?: (value: { value: string; label: string }) => void;
}) => {
  const [show, setShow] = React.useState(false);

  return (
    <div className="relative ">
      <button
        onClick={() => setShow((prev) => !prev)}
        className="flex justify-between items-center gap-4 rounded-md cursor-pointer border border-[#A1A1AA] px-2 py-1"
      >
        <p className="text-sm text-textSecondary font-normal">
          {selectedFilter.label}
        </p>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 5.5L8 10.5L3 5.5"
            stroke="#5B5255"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {show && (
        <div
          className={`border border-[#E4E4E7] bg-background z-30 shadow-md absolute top-[32px] right-0  rounded-md py-2 ${contentWidth}`}
        >
          <ul className="">
            {options.map((option) => {
              return (
                <li
                  onClick={() => {
                    setSelectedFilter!(option);
                    setShow(false);
                  }}
                  className={`text-sm hover:bg-textSecondary/10 ${contentPadding} text-textSecondary cursor-pointer  font-normal ${
                    selectedFilter.value === option.value
                      ? "bg-textSecondary/15"
                      : ""
                  }`}
                  key={option.value}
                >
                  {option.label}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Filter;
