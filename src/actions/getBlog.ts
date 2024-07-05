"use server";

import { baseUrl } from "@/constants/data";
import { Blog } from "@/types";

export async function getBlog(id: number): Promise<Blog> {
  const response = await fetch(`${baseUrl}/blogs/${id}`, {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
}
