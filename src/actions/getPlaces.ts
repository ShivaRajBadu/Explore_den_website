"use server";

import { baseUrl } from "@/constants/data";
import { getDataParams, placeDataType, placeType } from "@/types";
import { getDateTimeString } from "@/utils";

export async function getPlaces(
  params: getDataParams
): Promise<placeDataType[]> {
  const { limit, pageNumber = 1, placeType, filter } = params;
  const url = new URL(`${baseUrl}/places`);
  url.searchParams.append("limit", limit.toString());
  url.searchParams.append("page", pageNumber.toString());
  url.searchParams.append("filter.placeType", placeType);

  if (filter) {
    // @ts-ignore
    const filterDateTime = getDateTimeString(filter);
    url.searchParams.append("filter.datetimeAdded", `$gte:${filterDateTime}`);
  }

  console.log(url.toString());

  const response = await fetch(url.toString(), { cache: "no-cache" });

  if (!response.ok) {
    console.log(`Failed to fetch places: ${response.statusText}`);
  }

  const data = await response.json();
  return data.data;
}

export async function getPlace(id: number): Promise<placeDataType> {
  const response = await fetch(`${baseUrl}/places/${id}`, {
    cache: "no-store",
  });

  const data = await response.json();

  return data;
}
