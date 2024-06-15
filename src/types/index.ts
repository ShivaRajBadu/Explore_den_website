export enum Slug {
  POPULAR = "popular",
  EVENT = "event",
  ACTIVITY = "activity",
  DESTINATION = "destination",
}
export enum placeType {
  EVENT = "event",
  ACTIVITY = "activity",
  DESTINATION = "destination",
}

export type getDataParams = {
  limit: number;
  pageNumber?: number;
  placeType: placeType;
  filter?: string | null;
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
  firstName: string;
  lastName: string;
  username: string;
  profilePic: string;
  email: string;
  loginType: string;
  emailVerified: boolean;
};
export type Review = {
  id: number;
  text: string;
  stars: number;
  images: [];
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
