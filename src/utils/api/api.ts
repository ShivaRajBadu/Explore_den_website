import { baseUrl } from "@/constants/data";
import { getDataParams, placeDataType } from "@/types";

// export async function getPlaces(
//   params: getDataParams
// ): Promise<placeDataType[]> {
//   const { limit, pageNumber = 1, placeType } = params;

//   const response = await fetch(
//     `${baseUrl}/places?limit=${limit}&page=${pageNumber}&filter.placeType=${placeType}`
//   );

//   const data = await response.json();

//   return data.data;
// }

// export async function getPlace(id: number): Promise<placeDataType> {
//   const response = await fetch(`${baseUrl}/places/${id}`);

//   const data = await response.json();

//   return data;
// }
