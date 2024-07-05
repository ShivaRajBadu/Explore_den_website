export enum Slug {
  POPULAR = "popular",
  EVENT = "event",
  ACTIVITY = "activity",
  DESTINATION = "destination",
  CATEGORY = "category",
}
export enum placeType {
  EVENT = "event",
  ACTIVITY = "activity",
  DESTINATION = "destination",
}

export type DataWithMetadata = {
  data: placeDataType[];
  meta: {
    currentPage: number;
    totalItems: number;
    itemsPerPage: number;
    totalPages: number;
  };
  links: {
    first?: string | null | undefined;
    previous?: string | null | undefined;
    current: string;
    next?: string | null | undefined;
    last?: string | null | undefined;
  };
};

export type getDataParams = {
  limit: number;
  pageNumber?: number;
  placeType: placeType | null;
  filter?: string | null;
  isCategory?: boolean;
};

export type Event = {
  startDate: string;
  endDate: string;
  eventDuration: 0;
  currency: string;
  entryFee: number;
  eventType: string;
};
export type ReviewedBy = {
  id: number;
  name: string;

  profilePic: string;
  email: string;
  loginType: string;
  emailVerified: boolean;
};
export type Review = {
  id: number;
  text: string;
  stars: number;
  images: Imagetype[];
  reviewedBy: ReviewedBy;
  datetimeAdded: string;
};

type Destination = {
  openingHours: {
    id: number;
    sundayOpenTime: string;
    sundayCloseTime: string;
    mondayOpenTime: string;
    mondayCloseTime: string;
    tuesdayOpenTime: string;
    tuesdayCloseTime: string;
    wednesdayOpenTime: string;
    wednesdayCloseTime: string;
    thursdayOpenTime: string;
    thursdayCloseTime: string;
    fridayOpenTime: string;
    fridayCloseTime: string;
    saturdayOpenTime: string;
    saturdayCloseTime: string;
  };
};

type Activity = {
  openingHours: {
    id: number;
    sundayOpenTime: string;
    sundayCloseTime: string;
    mondayOpenTime: string;
    mondayCloseTime: string;
    tuesdayOpenTime: string;
    tuesdayCloseTime: string;
    wednesdayOpenTime: string;
    wednesdayCloseTime: string;
    thursdayOpenTime: string;
    thursdayCloseTime: string;
    fridayOpenTime: string;
    fridayCloseTime: string;
    saturdayOpenTime: string;
    saturdayCloseTime: string;
  };
};

export type Imagetype = {
  id: number;
  imageUrl: string;
  imageKey: string;
  datetimeAdded: string;
};

export type placeDataType = {
  id: number;
  name: string;
  description: string;
  category: string;
  placeType: string;
  address: string;
  location: string;
  phone_number: string;
  email: string;
  images: Imagetype[];
  website: string;
  facebookPage: string;
  instagramPage: string;
  twitterPage: string;
  linkedinPage: string;
  youtubePage: string;
  tiktokPage: string;
  event?: Event;
  destination?: Destination;
  activity?: Activity;
  reviews: Review[];
};

export type Blog = {
  id: number;
  readingMinute: number;
  title: string;
  subTitle: string;
  mainImageUrl: string;
  mainImageKey: string;
  content: string;
  status: string;
  createdAt: string;
  publishedAt?: string | null;
};
