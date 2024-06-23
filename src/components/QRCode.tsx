"use client";
import React from "react";
import QRCode from "react-qr-code";
const QRCodeComponent = () => {
  return (
    <div className="fixed w-full h-full inset-0 grid place-content-center z-50 bg-black/70">
      <div className="w-[300px] h-[300px] bg-white  ">
        <h1>Scan the QR code to open the URL</h1>
        <QRCode value="https://play.google.com/store/apps/details?id=com.adobe.scan.android&pcampaignid=web_share" />
      </div>
    </div>
  );
};

export default QRCodeComponent;
