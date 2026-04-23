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

    // Query the full day in Lima timezone (UTC-5)
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

    const bookedSlots = events
      .filter((event) => {
        // Skip all-day events (they have `start.date` not `start.dateTime`)
        if (!event.start?.dateTime) return false;

        // Skip very long events (Google Booking availability blocks span many hours)
        const startMs = new Date(event.start.dateTime).getTime();
        const endMs = event.end?.dateTime
          ? new Date(event.end.dateTime).getTime()
          : startMs;
        const durationHours = (endMs - startMs) / (1000 * 60 * 60);
        if (durationHours > 2) return false; // skip blocks longer than 2h

        return true;
      })
      .map((event) => {
        const start = event.start!.dateTime!;

        // Convert to Lima timezone (UTC-5, Peru never uses DST)
        const d = new Date(start);
        const limaHour = new Intl.DateTimeFormat("en-US", {
          timeZone: "America/Lima",
          hour: "2-digit",
          hour12: false,
        }).format(d);

        const hour = parseInt(limaHour, 10);
        if (isNaN(hour)) return null;

        return `${String(hour).padStart(2, "0")}:00`;
      })
      .filter(Boolean) as string[];

    console.log(`[availability] Date: ${date} | Events found: ${events.length} | Booked slots: ${JSON.stringify(bookedSlots)}`);

    return NextResponse.json({ bookedSlots });
  } catch (error) {
    console.error("Availability check error:", error);
    return NextResponse.json({ bookedSlots: [] });
  }
}
