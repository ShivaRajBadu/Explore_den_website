"use server";

import { baseUrl } from "@/constants/data";

export async function postContactInfo(prevState: any, formData: FormData) {
  try {
    const rawFormData = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("description"),
      turnstileRes: formData.get("cf-turnstile-response"),
    };

    if (!rawFormData.turnstileRes) {
      throw new Error("Please verify captcha");
    } else if (
      !rawFormData.name ||
      !rawFormData.email ||
      !rawFormData.message
    ) {
      throw new Error("All fields are required");
    }

    const response = await fetch(`${baseUrl}/contactus`, {
      method: "POST",
      body: JSON.stringify({
        name: rawFormData.name,
        email: rawFormData.email,
        message: rawFormData.message,
        turnstileResponse: rawFormData.turnstileRes,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (data.statusCode || data.statusCode === 400) {
      throw new Error(data.message);
    }

    return {
      success: data.message,
    };
  } catch (err: any) {
    return {
      error: err.toString(),
    };
  }
}
