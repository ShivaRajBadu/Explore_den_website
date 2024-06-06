"use client";
import React from "react";

const Filter = () => {
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
  const [show, setShow] = React.useState(false);
  const [selected, setSelected] = React.useState(options[0]);

  return (
    <div className="relative ">
      <button
        onClick={() => setShow((prev) => !prev)}
        className="flex justify-between items-center gap-4 rounded-md cursor-pointer border border-[#A1A1AA] px-2 py-1"
      >
        <p className="text-sm text-textSecondary font-normal">
          {selected.label}
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
        <div className="border border-[#E4E4E7] shadow-md absolute top-[32px] w-full rounded-md py-2 ">
          <ul className="">
            {options.map((option) => {
              return (
                <li
                  onClick={() => {
                    setSelected(option);
                    setShow(false);
                  }}
                  className={`text-sm hover:bg-textSecondary/10 py-1 px-2 text-textSecondary cursor-pointer  font-normal ${
                    selected.value === option.value ? "bg-textSecondary/15" : ""
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
