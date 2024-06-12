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
