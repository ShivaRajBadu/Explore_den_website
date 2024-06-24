import { detectDevice } from "@/utils";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import QRCodeComponent from "../QRCode";

const DownloadBtn = ({
  className,
  value = "Download App",
}: {
  className?: string;
  value?: string;
}) => {
  const AndroidDownloadLink =
    "https://play.google.com/store/apps/details?id=com.adobe.scan.android&pcampaignid=web_share";
  const IOSDownloadLink =
    "https://play.google.com/store/apps/details?id=com.intsig.camscanner&pcampaignid=web_share";

  const router = useRouter();
  const [showDownloadQr, setShowDownloadQr] = React.useState(false);
  const [device, setDevice] = React.useState<
    "iOS Device" | "Android Device" | "Mac" | "Desktop" | "Unknown"
  >("Unknown");
  useEffect(() => {
    if (showDownloadQr) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [showDownloadQr]);

  const handleDownloadClick = () => {
    const device = detectDevice();
    setDevice(device);
    if (device === "Desktop" || device === "Mac") {
      setShowDownloadQr(true);
    } else {
      if (device === "iOS Device") {
        router.push(IOSDownloadLink, { scroll: false });
      } else {
        router.push(AndroidDownloadLink, {
          scroll: false,
        });
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
