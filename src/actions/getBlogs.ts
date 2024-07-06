"use server";

import { baseUrl } from "@/constants/data";
import { Blog, BlogWithMeta } from "@/types";

export async function getBlog(id: number): Promise<Blog> {
  const response = await fetch(`${baseUrl}/blogs/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch blog");
  }

  const data = await response.json();
  return data;
}

export async function getFeaturedBlogs(): Promise<Blog[]> {
  try {
    const response = await fetch(`${baseUrl}/blogs/featured`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch blog");
    }

    const data: Blog[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error in getFeaturedBlogs:", error);
    return [];
  }
}

export async function getAllBlogs({
  order = "DESC",
  limit = 4,
  page = 1,
}: {
  order?: string;
  limit?: number;
  page?: number;
}): Promise<BlogWithMeta> {
  try {
    const response = await fetch(
      `${baseUrl}/blogs?order=${order}&limit=${limit}&page=${page}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch blog");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error in getAllBlogs:", error);
    return {
      data: [],
      meta: {
        page: 1,
        limit: 4,
        itemCount: 0,
        pageCount: 0,
        hasPreviousPage: false,
        hasNextPage: false,
      },
    };
  }
}
