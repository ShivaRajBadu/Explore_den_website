"use server";

import { baseUrl } from "@/constants/data";

export async function getCategories() {
  const response = await fetch(`${baseUrl}/places/categories`, {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
}
