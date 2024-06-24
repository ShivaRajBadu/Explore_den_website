import { detectDevice } from "@/utils";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import QRCodeComponent from "../QRCode";
import { AndroidDownloadLink, IOSDownloadLink } from "@/constants/data";

const DownloadBtn = ({
  className,
  value = "Download App",
}: {
  className?: string;
  value?: string;
}) => {
  const router = useRouter();
  const [showDownloadQr, setShowDownloadQr] = React.useState(false);
  const [device, setDevice] = React.useState("Unknown");

  useEffect(() => {
    if (showDownloadQr) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [showDownloadQr]);

  const handleDownloadClick = () => {
    const detectedDevice = detectDevice();
    setDevice(detectedDevice);
    if (detectedDevice === "Desktop" || detectedDevice === "Mac") {
      setShowDownloadQr(true);
    } else {
      if (detectedDevice === "iOS Device") {
        router.push(IOSDownloadLink, { scroll: false });
      } else {
        router.push(AndroidDownloadLink, { scroll: false });
      }
    }
  };

  return (
    <>
      <button onClick={handleDownloadClick} className={className}>
        {value}
      </button>
      {showDownloadQr && (
        <QRCodeComponent
          apkLink={AndroidDownloadLink}
          IosLink={IOSDownloadLink}
          device={device}
          toggleModal={setShowDownloadQr}
        />
      )}
    </>
  );
};

export default DownloadBtn;
