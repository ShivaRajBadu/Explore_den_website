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
};

export type Event = {
  startDate: string;
  endDate: string;
  eventDuration: 0;
  currency: string;
  entryFee: number;
  eventType: string;
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
  facebookPage: string;
  instagramPage: string;
  twitterPage: string;
  linkedinPage: string;
  youtubePage: string;
  tiktokPage: string;
  event?: Event;
  destination?: Destination;
  activity?: Activity;
};
