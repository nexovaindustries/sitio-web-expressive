import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const date = searchParams.get("date"); // YYYY-MM-DD

  if (!date) {
    return NextResponse.json({ bookedSlots: [] });
  }

  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const calendarId = process.env.GOOGLE_CALENDAR_ID;

  if (!serviceAccountEmail || !privateKey || !calendarId) {
    return NextResponse.json({ bookedSlots: [] });
  }

  try {
    const auth = new google.auth.JWT({
      email: serviceAccountEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/calendar.readonly"],
    });

    const calendar = google.calendar({ version: "v3", auth });

    const timeMin = `${date}T00:00:00-05:00`;
    const timeMax = `${date}T23:59:59-05:00`;

    const response = await calendar.events.list({
      calendarId,
      timeMin,
      timeMax,
      singleEvents: true,
      orderBy: "startTime",
    });

    const events = response.data.items || [];

    // Extract booked start hours (format: "HH:00")
    const bookedSlots = events
      .map((event) => {
        const start = event.start?.dateTime;
        if (!start) return null;
        const d = new Date(start);
        const hour = d.getHours();
        return `${String(hour).padStart(2, "0")}:00`;
      })
      .filter(Boolean) as string[];

    return NextResponse.json({ bookedSlots });
  } catch (error) {
    console.error("Availability check error:", error);
    return NextResponse.json({ bookedSlots: [] });
  }
}
