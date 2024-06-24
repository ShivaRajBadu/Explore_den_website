import { AndroidDownloadLink, IOSDownloadLink } from "@/constants/data";

export function timeAgo(datetime: string): string {
  const now = new Date();
  const past = new Date(datetime);

  const seconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  const intervals: Record<string, number> = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (const [unit, value] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / value);
    if (interval >= 1) {
      return `${interval} ${unit}${interval !== 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}

export function calculateAverageRating(ratings: number[]): number {
  const total = ratings.reduce((sum, rating) => sum + rating, 0);
  const count = ratings.length;
  return count === 0 ? 0 : total / count;
}

export const getDateTimeString = (
  interval: "24Hours" | "7Days" | "30Days" | "6Months" | "1Year" | "all"
): string => {
  const endDate = new Date();
  let startDate = new Date();

  switch (interval) {
    case "24Hours":
      startDate.setDate(endDate.getDate() - 1);
      break;
    case "7Days":
      startDate.setDate(endDate.getDate() - 7);
      break;
    case "30Days":
      startDate.setMonth(endDate.getMonth() - 1);
      break;
    case "6Months":
      startDate.setMonth(endDate.getMonth() - 6);
      break;
    case "1Year":
      startDate.setFullYear(endDate.getFullYear() - 1);
      break;
    case "all":
      startDate = new Date(0);
      break;
    default:
      throw new Error("Invalid interval");
  }

  return startDate.toISOString();
};

export function detectDevice() {
  const userAgent = navigator.userAgent;

  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return "iOS Device";
  }

  if (/android/i.test(userAgent)) {
    return "Android Device";
  }

  if (/Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent)) {
    return "Mac";
  }

  if (
    /Win32|Win64|Windows|WinCE/.test(userAgent) ||
    /Linux|X11/.test(userAgent)
  ) {
    return "Desktop";
  }

  // if (/Mobi|Android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent)) {
  //   return "Mobile Device";
  // }

  // if (/Linux|X11/.test(userAgent) || /Macintosh|Windows|Win/.test(userAgent)) {
  //   return "Desktop";
  // }

  return "Unknown";
}

export const getAppLinkBaseOnDevice = () => {
  const device = detectDevice();
  return device === "Desktop" ? AndroidDownloadLink : IOSDownloadLink;
};
