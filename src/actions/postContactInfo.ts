"use server";

import { baseUrl } from "@/constants/data";

export async function postContactInfo(formData: FormData) {
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),

    message: formData.get("description"),
    turnstileRes: formData.get("cf-turnstile-response"),
  };
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
    console.log("Error:", data.message);
  }

  return data.message;
}
