import { NextResponse } from "next/server";
import { Resend } from "resend";
import { google } from "googleapis";

async function createCalendarEvent(
  name: string,
  email: string,
  service: string,
  dateISO: string,
  time: string
) {
  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  let privateKey = process.env.GOOGLE_PRIVATE_KEY || "";
  if (!privateKey.includes("BEGIN PRIVATE KEY")) {
    privateKey = Buffer.from(privateKey, 'base64').toString('utf-8');
  } else {
    privateKey = privateKey.replace(/\\n/g, "\n").replace(/"/g, "").trim();
  }
  const calendarId = process.env.GOOGLE_CALENDAR_ID;

  if (!serviceAccountEmail || !privateKey || !calendarId) return null;

  const auth = new google.auth.JWT({
    email: serviceAccountEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });

  const calendar = google.calendar({ version: "v3", auth });

  const [hour, minute] = time.split(":").map(Number);
  const startDateTime = `${dateISO}T${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:00`;
  const endDateTime = `${dateISO}T${String(hour + 1).padStart(2, "0")}:${String(minute).padStart(2, "0")}:00`;

  const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const event = await calendar.events.insert({
    calendarId,
    sendUpdates: "all",
    requestBody: {
      summary: `${service} — ${name}`,
      description: `Cliente: ${name}\nEmail: ${email || "No proporcionado"}\nServicio: ${service}`,
      start: { dateTime: startDateTime, timeZone: "America/Lima" },
      end: { dateTime: endDateTime, timeZone: "America/Lima" },
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 60 },
          { method: "popup", minutes: 30 },
        ],
      },
    },
  });

  return event.data;
}

function clientEmailHtml(name: string, service: string, date: string, time: string) {
  return `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#111;border:1px solid #2a2a2a;border-radius:12px;overflow:hidden;">

        <!-- Franja dorada superior -->
        <tr><td style="height:3px;background:linear-gradient(to right,#BF953F,#FCF6BA,#B38728,#AA771C);"></td></tr>

        <!-- Header -->
        <tr><td style="padding:40px 40px 20px;text-align:center;">
          <p style="margin:0 0 8px;font-size:10px;letter-spacing:6px;text-transform:uppercase;color:#D4AF37;font-weight:600;">Expressive</p>
          <h1 style="margin:0;font-size:28px;font-weight:300;color:#fff;letter-spacing:1px;">Tu cita está confirmada</h1>
          <p style="margin:12px 0 0;font-size:13px;color:#888;letter-spacing:0.5px;">Estética Facial & Corporal · Arequipa</p>
        </td></tr>

        <!-- Divider -->
        <tr><td style="padding:0 40px;"><div style="height:1px;background:linear-gradient(to right,transparent,rgba(212,175,55,0.3),transparent);"></div></td></tr>

        <!-- Detalles -->
        <tr><td style="padding:32px 40px;">
          <p style="margin:0 0 20px;font-size:14px;color:#bbb;line-height:1.6;">Hola <strong style="color:#fff;">${name}</strong>, hemos recibido tu reserva. Te esperamos con todo listo.</p>

          <table width="100%" cellpadding="0" cellspacing="0" style="background:#1a1a1a;border-radius:8px;overflow:hidden;border:1px solid #2a2a2a;">
            <tr>
              <td style="padding:14px 20px;border-bottom:1px solid #2a2a2a;">
                <span style="font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#D4AF37;">Servicio</span>
                <p style="margin:4px 0 0;font-size:14px;color:#fff;font-weight:500;">${service}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:14px 20px;border-bottom:1px solid #2a2a2a;">
                <span style="font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#D4AF37;">Fecha</span>
                <p style="margin:4px 0 0;font-size:14px;color:#fff;font-weight:500;">${date}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:14px 20px;">
                <span style="font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#D4AF37;">Hora</span>
                <p style="margin:4px 0 0;font-size:14px;color:#fff;font-weight:500;">${time}</p>
              </td>
            </tr>
          </table>
        </td></tr>

        <!-- Dirección -->
        <tr><td style="padding:0 40px 32px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(212,175,55,0.06);border:1px solid rgba(212,175,55,0.2);border-radius:8px;padding:16px 20px;">
            <tr><td>
              <p style="margin:0 0 4px;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#D4AF37;">Dónde encontrarnos</p>
              <p style="margin:0;font-size:13px;color:#ccc;">Pasaje Santa Cruz 205, Int. 305, Cayma · Arequipa, Perú</p>
              <p style="margin:4px 0 0;font-size:13px;color:#ccc;">📞 951 108 796</p>
            </td></tr>
          </table>
        </td></tr>

        <!-- Franja dorada inferior -->
        <tr><td style="height:1px;background:linear-gradient(to right,transparent,rgba(212,175,55,0.3),transparent);"></td></tr>
        <tr><td style="padding:20px 40px;text-align:center;">
          <p style="margin:0;font-size:10px;color:#555;letter-spacing:1px;">© ${new Date().getFullYear()} Expressive · Estética Facial & Corporal</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function adminEmailHtml(name: string, email: string, service: string, date: string, time: string) {
  return `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:30px 20px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:500px;background:#fff;border-top:3px solid #D4AF37;border-radius:8px;">
        <tr><td style="padding:30px 30px 10px;">
          <p style="margin:0 0 4px;font-size:9px;letter-spacing:4px;text-transform:uppercase;color:#D4AF37;">Expressive</p>
          <h2 style="margin:0;font-size:20px;color:#111;font-weight:500;">Nueva Reserva Recibida</h2>
        </td></tr>
        <tr><td style="padding:20px 30px 30px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-size:12px;color:#666;width:100px;">Cliente</td><td style="padding:10px 0;border-bottom:1px solid #eee;font-size:13px;color:#111;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-size:12px;color:#666;">Email</td><td style="padding:10px 0;border-bottom:1px solid #eee;font-size:13px;color:#111;">${email || "—"}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-size:12px;color:#666;">Servicio</td><td style="padding:10px 0;border-bottom:1px solid #eee;font-size:13px;color:#111;">${service}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #eee;font-size:12px;color:#666;">Fecha</td><td style="padding:10px 0;border-bottom:1px solid #eee;font-size:13px;color:#111;">${date}</td></tr>
            <tr><td style="padding:10px 0;font-size:12px;color:#666;">Hora</td><td style="padding:10px 0;font-size:13px;color:#D4AF37;font-weight:700;">${time}</td></tr>
          </table>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(req: Request) {
  try {
    const { name, email, service, date, time, dateISO } = await req.json();

    if (!name || !service || !date || !time) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 });
    }

    const adminEmail = (process.env.ADMIN_EMAIL || "estetica.expressiveperu@gmail.com").trim();
    const resendApiKey = process.env.RESEND_API_KEY;
    const resend = resendApiKey ? new Resend(resendApiKey) : null;
    const fromEmail = "onboarding@resend.dev"; // Remitente estándar para evitar filtros de spam iniciales

    console.log(`Intentando enviar reserva a: ${adminEmail} (Resend disponible: ${!!resend})`);

    const [calendarResult, clientEmailResult, adminEmailResult] = await Promise.allSettled([
      // 1. Crear evento en Google Calendar
      dateISO ? createCalendarEvent(name, email, service, dateISO, time) : Promise.resolve(null),

      // 2. Confirmación directa al CLIENTE usando Resend
      email && email.includes("@") && resend
        ? resend.emails.send({
            from: fromEmail,
            to: [email.trim()],
            subject: `✨ Tu cita en Expressive está confirmada — ${date} ${time}`,
            html: clientEmailHtml(name, service, date, time),
          })
        : Promise.resolve(null),

      // 3. Notificación al ADMINISTRADOR (Expressive) usando Resend
      resend
        ? resend.emails.send({
            from: fromEmail,
            to: [adminEmail.trim()],
            subject: `🚨 NUEVA RESERVA: ${service} — ${name}`,
            html: adminEmailHtml(name, email, service, date, time),
          })
        : Promise.resolve(null),
    ]);

    let errors = [];
    if (calendarResult.status === "rejected") {
      console.error("Google Calendar error:", calendarResult.reason);
      errors.push("calendar_error");
    }
    if (clientEmailResult.status === "rejected") {
      console.error("Client email error:", clientEmailResult.reason);
      errors.push("client_email_error");
    }
    if (adminEmailResult.status === "rejected") {
      console.error("Admin email error:", adminEmailResult.reason);
      errors.push("admin_email_error");
    }

    return NextResponse.json({
      message: "Reserva procesada",
      calendar: calendarResult.status === "fulfilled" ? "ok" : "error",
      emailClient: clientEmailResult.status === "fulfilled" ? "ok" : "error",
      emailAdmin: adminEmailResult.status === "fulfilled" ? "ok" : "error",
      errors: errors.length > 0 ? errors : null
    });
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json({ error: "Error interno del servidor", details: String(error) }, { status: 500 });
  }
}
