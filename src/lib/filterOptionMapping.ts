import { Slug } from "@/types/index";
import { getDateTimeString } from "@/utils";

const filterOptionsMapping: Record<Slug, { value: string; label: string }[]> = {
  [Slug.POPULAR]: [
    // {
    //   value: "all",
    //   label: "All",
    // },
    // {
    //   value: "event",
    //   label: "Event",
    // },
    // {
    //   value: "activity",
    //   label: "Activity",
    // },
    // {
    //   value: "destination",
    //   label: "Destination",
    // },
  ],
  [Slug.EVENT]: [
    {
      value: "all",
      label: "All",
    },
    {
      value: "24Hours",
      label: "Last 24 hours",
    },
    {
      value: "7Days",
      label: "Last 7 days",
    },
    {
      value: "30Days",
      label: "Last 30 days",
    },
    // {
    //   value: "cancelled",
    //   label: "Cancelled",
    // },
  ],
  [Slug.ACTIVITY]: [
    {
      value: "all",
      label: "All",
    },
    {
      value: "24Hours",
      label: "Last 24 hours",
    },
    {
      value: "7Days",
      label: "Last 7 days",
    },
    {
      value: "30Days",
      label: "Last 30 days",
    },
    // {
    //   value: "all",
    //   label: "All",
    // },
    // {
    //   value: "ongoing",
    //   label: "Ongoing",
    // },
    // {
    //   value: "cancelled",
    //   label: "Cancelled",
    // },
    // {
    //   value: "upcoming",
    //   label: "Upcoming",
    // },
    // {
    //   value: "past",
    //   label: "Past",
    // },
  ],
  [Slug.DESTINATION]: [
    {
      value: "all",
      label: "All",
    },
    {
      value: "24Hours",
      label: "Last 24 hours",
    },
    {
      value: "7Days",
      label: "Last 7 days",
    },
    {
      value: "30Days",
      label: "Last 30 days",
    },
    // {
    //   value: "all",
    //   label: "All",
    // },
    // {
    //   value: "popular",
    //   label: "Popular",
    // },
    // {
    //   value: "top-rated",
    //   label: "Top Rated",
    // },
    // {
    //   value: "new",
    //   label: "New",
    // },
    // {
    //   value: "trending",
    //   label: "Trending",
    // },
    // {
    //   value: "recommended",
    //   label: "Recommended",
    // },
  ],
  [Slug.CATEGORY]: [
    {
      value: "all",
      label: "All",
    },
    {
      value: "escape room",
      label: "Escape Room",
    },
    {
      value: "hiking",
      label: "Hiking",
    },
    {
      value: "paint Ball",
      label: "Paint Ball",
    },
    {
      value: "surfing",
      label: "Surfing",
    },
  ],
};

// Export filter options for each slug
export const filterOptions: Record<Slug, { value: string; label: string }[]> =
  filterOptionsMapping;
