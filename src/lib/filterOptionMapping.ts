import { Slug } from "@/types/index";

const filterOptionsMapping: Record<Slug, { value: string; label: string }[]> = {
  [Slug.POPULAR]: [
    {
      value: "all",
      label: "All",
    },
    {
      value: "event",
      label: "Event",
    },
    {
      value: "activity",
      label: "Activity",
    },
    {
      value: "destination",
      label: "Destination",
    },
  ],
  [Slug.EVENT]: [
    {
      value: "all",
      label: "All",
    },
    {
      value: "upcoming",
      label: "Upcoming",
    },
    {
      value: "past",
      label: "Past",
    },
    {
      value: "ongoing",
      label: "Ongoing",
    },
    {
      value: "cancelled",
      label: "Cancelled",
    },
  ],
  [Slug.ACTIVITY]: [
    {
      value: "all",
      label: "All",
    },
    {
      value: "ongoing",
      label: "Ongoing",
    },
    {
      value: "cancelled",
      label: "Cancelled",
    },
    {
      value: "upcoming",
      label: "Upcoming",
    },
    {
      value: "past",
      label: "Past",
    },
  ],
  [Slug.DESTINATION]: [
    {
      value: "all",
      label: "All",
    },
    {
      value: "popular",
      label: "Popular",
    },
    {
      value: "top-rated",
      label: "Top Rated",
    },
    {
      value: "new",
      label: "New",
    },
    {
      value: "trending",
      label: "Trending",
    },
    {
      value: "recommended",
      label: "Recommended",
    },
  ],
};

// Export filter options for each slug
export const filterOptions: Record<Slug, { value: string; label: string }[]> =
  filterOptionsMapping;
