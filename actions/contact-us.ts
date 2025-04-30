"use server";


import { db } from "@/lib/db"; 
import { revalidatePath } from "next/cache";

export const createContactMessage = async (
  fullName: string,
  email: string,
  subject: string,
  department: string,
  message: string,
  consent: boolean
) => {
  try {
    if (!fullName || !email || !subject || !message || department === undefined || !consent) {
      throw new Error("Missing required fields");
    }

    const contact = await db.contactForm.create({
      data: {
        fullName,
        email,
        subject,
        department,
        message,
        consent,
      },
    });

    // Optional: revalidate a page that shows contact submissions
    // revalidatePath("/admin/contact");

    return { message: "Your message has been sent successfully", contact };
  } catch (error) {
    console.error("createContactMessage error", error);
    throw new Error("Failed to send your message. Please try again later.");
  }
};
