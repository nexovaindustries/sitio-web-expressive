import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, service, date, time } = await req.json();

    // Configuración del transporte (USAR APP PASSWORD DE GMAIL)
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin_expressive@test.com";

    // Para el test, si no hay credenciales, simulamos el éxito
    if (!EMAIL_USER || !EMAIL_PASS || EMAIL_USER === "test@gmail.com") {
      console.log("MOCK BOOKING RECEIVED:", { name, email, service, date, time });
      await new Promise((resolve) => setTimeout(resolve, 800));
      return NextResponse.json({ message: "Mock reservation successful" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Expressive Booking" <${EMAIL_USER}>`,
      to: [ADMIN_EMAIL, email].filter(Boolean),
      subject: `Nueva Cita: ${service} - ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #D4AF37; border-radius: 10px;">
          <h2 style="color: #D4AF37; text-transform: uppercase; letter-spacing: 2px;">Nueva Reserva Confirmada</h2>
          <p>Hola, se ha registrado una nueva cita en <strong>Expressive</strong>.</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
            <p><strong>Cliente:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email || "No proporcionado"}</p>
            <p><strong>Servicio:</strong> ${service}</p>
            <p><strong>Fecha:</strong> ${date}</p>
            <p><strong>Hora:</strong> ${time}</p>
          </div>
          <p style="font-size: 11px; color: #999; margin-top: 20px;">Este es un mensaje automático del sistema de reservas de Expressive.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
