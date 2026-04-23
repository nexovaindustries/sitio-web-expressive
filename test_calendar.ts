import { google } from "googleapis";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

async function test() {
  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const calendarId = process.env.GOOGLE_CALENDAR_ID;

  if (!serviceAccountEmail || !privateKey || !calendarId) {
    console.error("Missing env vars");
    return;
  }

  const auth = new google.auth.JWT({
    email: serviceAccountEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });

  const calendar = google.calendar({ version: "v3", auth });

  const dateISO = "2026-04-24";
  const time = "11:00";
  const service = "Test Service";
  const name = "Test User";
  const email = "estetica.expressiveperu@gmail.com";

  const [hour, minute] = time.split(":").map(Number);
  const startDateTime = `${dateISO}T${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:00`;
  const endDateTime = `${dateISO}T${String(hour + 1).padStart(2, "0")}:${String(minute).padStart(2, "0")}:00`;

  try {
    const event = await calendar.events.insert({
      calendarId,
      sendUpdates: "all",
      requestBody: {
        summary: `${service} — ${name}`,
        description: `Cliente: ${name}\nEmail: ${email}\nServicio: ${service}`,
        start: { dateTime: startDateTime, timeZone: "America/Lima" },
        end: { dateTime: endDateTime, timeZone: "America/Lima" },
      },
    });
    console.log("Success:", event.data.htmlLink);
  } catch (error: any) {
    console.error("Error creating event:");
    console.error(error.message || error);
    if (error.response) console.error(JSON.stringify(error.response.data, null, 2));
  }
}

test();
