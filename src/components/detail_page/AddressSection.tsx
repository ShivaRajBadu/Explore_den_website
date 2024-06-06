import React from "react";
import Image from "next/image";
const AddressSection = () => {
  return (
    <div className="py-6">
      <h2 className="text-[24px] font-semibold text-textPrimary pb-3 ">
        Address
      </h2>
      <Image src="/images/google_map.png" alt="map" width={776} height={365} />
      <div className="flex gap-4 w-full my-6">
        <button className="flex items-center justify-center p-3 rounded-lg gap-2 border border-brand w-full font-semibold text-sm text-brand">
          Get Direction
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 8.75C13 9.41304 12.7366 10.0489 12.2678 10.5178C11.7989 10.9866 11.163 11.25 10.5 11.25C9.83696 11.25 9.20107 10.9866 8.73223 10.5178C8.26339 10.0489 8 9.41304 8 8.75C8 8.08696 8.26339 7.45107 8.73223 6.98223C9.20107 6.51339 9.83696 6.25 10.5 6.25C11.163 6.25 11.7989 6.51339 12.2678 6.98223C12.7366 7.45107 13 8.08696 13 8.75Z"
              stroke="#EB3A66"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.75 8.75C16.75 14.7017 10.5 18.125 10.5 18.125C10.5 18.125 4.25 14.7017 4.25 8.75C4.25 7.0924 4.90848 5.50268 6.08058 4.33058C7.25268 3.15848 8.8424 2.5 10.5 2.5C12.1576 2.5 13.7473 3.15848 14.9194 4.33058C16.0915 5.50268 16.75 7.0924 16.75 8.75Z"
              stroke="#EB3A66"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="flex items-center justify-center p-3 rounded-lg gap-2 border border-brand w-full font-semibold text-sm text-brand">
          Visit Website{" "}
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 17.5C12.1625 17.4999 13.7779 16.9477 15.0925 15.93C16.4072 14.9124 17.3466 13.4869 17.7633 11.8775M10.5 17.5C8.83751 17.4999 7.22212 16.9477 5.90748 15.93C4.59284 14.9124 3.6534 13.4869 3.23667 11.8775M10.5 17.5C12.5708 17.5 14.25 14.1417 14.25 10C14.25 5.85833 12.5708 2.5 10.5 2.5M10.5 17.5C8.42917 17.5 6.75 14.1417 6.75 10C6.75 5.85833 8.42917 2.5 10.5 2.5M17.7633 11.8775C17.9175 11.2775 18 10.6483 18 10C18.0021 8.71009 17.6699 7.44166 17.0358 6.31833M17.7633 11.8775C15.541 13.1095 13.041 13.754 10.5 13.75C7.865 13.75 5.38917 13.0708 3.23667 11.8775M3.23667 11.8775C3.07896 11.2641 2.99944 10.6333 3 10C3 8.6625 3.35 7.40583 3.96417 6.31833M10.5 2.5C11.8302 2.49945 13.1366 2.8528 14.2852 3.5238C15.4337 4.19481 16.3831 5.15931 17.0358 6.31833M10.5 2.5C9.1698 2.49945 7.8634 2.8528 6.71484 3.5238C5.56628 4.19481 4.61692 5.15931 3.96417 6.31833M17.0358 6.31833C15.2214 7.88994 12.9004 8.75345 10.5 8.75C8.00167 8.75 5.71667 7.83333 3.96417 6.31833"
              stroke="#EB3A66"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AddressSection;
