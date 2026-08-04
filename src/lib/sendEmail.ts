import { BUSINESS_EMAIL } from "@/lib/contact";

export interface EmailParams {
  fullName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

const FORM_SUBMIT_URL = `https://formsubmit.co/ajax/${encodeURIComponent(BUSINESS_EMAIL)}`;

export const sendEmail = async (params: EmailParams) => {
  try {
    const response = await fetch(FORM_SUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: params.fullName,
        email: params.email,
        phone: params.phone || "Not provided",
        service: params.subject,
        message: params.message,
        _subject: `New consultation request — ${params.fullName}`,
        _template: "table",
        _captcha: "false",
      }),
    });

    const data: unknown = await response.json().catch(() => null);

    if (!response.ok) {
      const message =
        data && typeof data === "object" && "message" in data
          ? String(data.message)
          : "Failed to send message. Please try WhatsApp instead.";

      return { success: false, error: new Error(message), message };
    }

    return { success: true, response: data };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to send message. Please try WhatsApp instead.";

    console.error("Contact form error:", error);
    return { success: false, error, message };
  }
};
