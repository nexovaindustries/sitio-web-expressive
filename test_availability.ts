import { google } from "googleapis";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

async function testAvailability() {
  const date = "2026-04-24";
  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const calendarId = process.env.GOOGLE_CALENDAR_ID;

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
  console.log(`Found ${events.length} events for ${date}`);

  const bookedSlots = events
    .filter((event) => {
      if (!event.start?.dateTime) return false;
      const description = event.description || "";
      if (!description.includes("Cliente:")) return false;
      return true;
    })
    .map((event) => {
      console.log("Event start.dateTime:", event.start!.dateTime);
      const start = event.start!.dateTime!;
      const timePart = start.split("T")[1];
      if (!timePart) return null;
      const hour = parseInt(timePart.split(":")[0], 10);
      if (isNaN(hour)) return null;
      return `${String(hour).padStart(2, "0")}:00`;
    })
    .filter(Boolean) as string[];

  console.log("Booked slots:", bookedSlots);
}

testAvailability();
