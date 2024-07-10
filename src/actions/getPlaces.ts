"use server";

import { baseUrl } from "@/constants/data";
import {
  DataWithMetadata,
  getDataParams,
  placeDataType,
  placeType,
} from "@/types";
import { getDateTimeString } from "@/utils";

export async function getPlaces(
  params: getDataParams
): Promise<DataWithMetadata> {
  const { limit, pageNumber = 1, placeType, filter, isCategory } = params;

  const url = new URL(`${baseUrl}/places`);

  url.searchParams.append("limit", limit.toString());

  url.searchParams.append("page", pageNumber.toString());

  if (placeType !== null) {
    url.searchParams.append("filter.placeType", placeType!);
  }

  if (filter) {
    if (isCategory) {
      url.searchParams.append("filter.category", filter);
    } else {
      // @ts-ignore
      const filterDateTime = getDateTimeString(filter);
      url.searchParams.append("filter.datetimeAdded", `$gte:${filterDateTime}`);
    }
  }

  const response = await fetch(url.toString(), { cache: "no-cache" });

  if (!response.ok) {
    console.log(`Failed to fetch places: ${response.statusText}`);
  }

  const data = await response.json();
  data.data.images = data.data.forEach((place: any) =>
    place.images.sort((a: any, b: any) => a.position - b.position)
  );

  return data;
}

export async function getPlace(id: number): Promise<placeDataType | null> {
  try {
    const response = await fetch(`${baseUrl}/places/${id}`, {
      cache: "no-store",
    });
    if (response.ok) {
      const data = await response.json();
      data.images = data.images.sort(
        (a: any, b: any) => a.position - b.position
      );

      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error in getPlace:", error);
    return null;
  }
}

export async function getPopularPlaces(): Promise<placeDataType[] | null> {
  try {
    const response = await fetch(`${baseUrl}/places/popular`, {
      cache: "no-store",
    });
    if (response.ok) {
      const data = await response.json();
      data.images = data.forEach((place: any) =>
        place.images.sort((a: any, b: any) => a.position - b.position)
      );
      return data;
    }
    return null;
  } catch (error) {
    console.log("Error in getting popular places", error);
    return null;
  }
}

export async function getNeighbouringPlaces(
  id: number
): Promise<placeDataType[] | null> {
  try {
    const response = await fetch(`${baseUrl}/places/neighbours/${id}`);
    if (response.ok) {
      const data = await response.json();

      data.images = data.forEach((place: any) =>
        place.images.sort((a: any, b: any) => a.position - b.position)
      );
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.log("Error in getting neighbours places ", error);
    return null;
  }
}
