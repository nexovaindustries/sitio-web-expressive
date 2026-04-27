import { NextResponse } from "next/server";
import { google } from "googleapis";

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const date = searchParams.get("date"); // YYYY-MM-DD

  if (!date) {
    return NextResponse.json({ bookedSlots: [] });
  }

  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n").replace(/"/g, "").trim();
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

        // Only count events created by our booking system.
        // Our events always include "Cliente:" in the description.
        // Google Booking availability blocks (Reservas Expressive) do NOT have this.
        const description = event.description || "";
        if (!description.includes("Cliente:")) return false;

        return true;
      })
      .map((event) => {
        const start = event.start!.dateTime!;

        // Google returns times with Lima offset already in the string:
        // e.g. "2026-04-23T10:00:00-05:00" → hour is 10
        // Just parse it directly from the string — no timezone math needed
        const timePart = start.split("T")[1]; // "10:00:00-05:00"
        if (!timePart) return null;
        const hour = parseInt(timePart.split(":")[0], 10);
        if (isNaN(hour)) return null;

        return `${String(hour).padStart(2, "0")}:00`;
      })
      .filter(Boolean) as string[];

    console.log(`[availability v4] Date: ${date} | Total events: ${events.length} | Booked slots: ${JSON.stringify(bookedSlots)}`);

    return NextResponse.json({ bookedSlots, _version: "v4", _total: events.length });
  } catch (error) {
    console.error("Availability check error:", error);
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const rawKey = process.env.GOOGLE_PRIVATE_KEY || "";
    const privateKey = rawKey.replace(/\\n/g, "\n").replace(/"/g, "").trim();
    
    return NextResponse.json({ 
      bookedSlots: [], 
      _error: (error as Error).message || String(error),
      _debug: {
        keyLength: privateKey.length,
        keyStart: privateKey.substring(0, 50),
        hasCarriageReturn: privateKey.includes("\r")
      }
    });
  }
}
