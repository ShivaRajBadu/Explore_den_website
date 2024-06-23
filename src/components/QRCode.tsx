"use client";
import React from "react";
import QRCode from "react-qr-code";
const QRCodeComponent = ({
  apkLink,
  IosLink,
  device,
  toggleModal,
}: {
  apkLink: string;
  IosLink: string;
  device: string;
  toggleModal: any;
}) => {
  const [url, setUrl] = React.useState(
    device === "Desktop" ? apkLink : IosLink
  );

  return (
    <div className="hidden md:grid fixed w-full h-full inset-0  place-content-center z-50 bg-black/70">
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleModal(false);
        }}
        className="absolute right-4 top-4  border-2 cursor-pointer border-[#A1A1AA] rounded-full p-2 w-min"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 4.5L4.5 16.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.5 4.5L16.5 16.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="w-[400px] h-[450px] rounded-lg bg-white p-12 flex flex-col justify-center items-center  ">
        <QRCode
          value={url}
          width={200}
          height={200}
          className="mx-auto"
          aria-placeholder="Android"
        />
        <h1 className="text-balance text-base font-semibold mx-auto text-center py-6">
          Point your phone camera at the QR code to download the app
        </h1>
        <p
          onClick={() => setUrl(device === "Desktop" ? IosLink : apkLink)}
          className="text-center text-lg cursor-pointer text-green-600"
        >
          My device is {device === "Desktop" ? "iOS" : "Android"} ):
        </p>
      </div>
    </div>
  );
};

export default QRCodeComponent;
