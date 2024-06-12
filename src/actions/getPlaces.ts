"use server";

import { baseUrl } from "@/constants/data";
import { getDataParams, placeDataType, placeType } from "@/types";

export async function getPlaces(
  params: getDataParams
): Promise<placeDataType[]> {
  const { limit, pageNumber = 1, placeType, filter } = params;

  let url = `${baseUrl}/places?limit=${limit}&page=${pageNumber}&filter.placeType=${placeType}`;
  if (filter) {
    url = `${baseUrl}/places?limit=${limit}&page=${pageNumber}&filter.placeType=${placeType}&filter.datetimeAdded=${filter}`;
  }

  const response = await fetch(url);

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
