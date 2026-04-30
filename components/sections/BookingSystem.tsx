"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, Loader2 } from "lucide-react";

export default function BookingSystem() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [service, setService] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [bookedSlots, setBookedSlots] = React.useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = React.useState(false);

  React.useEffect(() => {
    const handleSelectService = (e: any) => {
      setService(e.detail);
    };
    window.addEventListener("selectService", handleSelectService);
    return () => window.removeEventListener("selectService", handleSelectService);
  }, []);

  // Fetch booked slots from Google Calendar when date changes
  // Helper: fecha local en formato YYYY-MM-DD (sin conversión a UTC)
  const toLocalISO = (d: Date) => {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  };

  React.useEffect(() => {
    if (!date) return;
    const dateISO = toLocalISO(date); // local, sin desfase UTC
    setLoadingSlots(true);
    setSelectedTime(null);
    fetch(`/api/availability?date=${dateISO}`)
      .then((r) => r.json())
      .then((data) => setBookedSlots(data.bookedSlots || []))
      .catch(() => setBookedSlots([]))
      .finally(() => setLoadingSlots(false));
  }, [date]);

  const availableTimeSlots = React.useMemo(() => {
    if (!date) return [];

    const dayOfWeek = date.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat

    // Generate base slots based on day
    let slots: string[] = [];
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      // Monday–Friday: 9 AM to 5 PM (slots: 9, 10, 11, 12, 13, 14, 15, 16, 17)
      slots = Array.from({ length: 9 }, (_, i) => {
        const hour = i + 9;
        return `${String(hour).padStart(2, "0")}:00`;
      });
    } else if (dayOfWeek === 6) {
      // Saturday: 10 AM to 1 PM (last slot starts at 13, ends at 14)
      slots = ["10:00", "11:00", "12:00", "13:00"];
    } else {
      // Sunday: no slots
      return [];
    }

    const today = new Date();
    const isToday =
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();

    // Filter past hours if today
    if (isToday) {
      const currentHour = today.getHours();
      slots = slots.filter((slot) => parseInt(slot.split(":")[0], 10) > currentHour);
    }

    // Filter already booked slots
    slots = slots.filter((slot) => !bookedSlots.includes(slot));

    return slots;
  }, [date, bookedSlots]);

  const bookedDates = [
    new Date(2025, 5, 20),
    new Date(2025, 5, 21),
  ];

  const handleSubmit = async () => {
    if (!date || !selectedTime || !name) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          service,
          date: date.toLocaleDateString("es-ES", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
          dateISO: toLocalISO(date), // local, sin desfase UTC
          time: selectedTime,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Error booking:", error);
      alert("Hubo un error al procesar tu cita. Por favor intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Card className="max-w-2xl mx-auto border-gold/30 bg-white">
        <CardContent className="flex flex-col items-center justify-center py-20 text-center">
          <CheckCircle2 className="w-16 h-16 text-gold mb-6" />
          <h2 className="font-playfair text-3xl text-black mb-4">¡Cita Solicitada!</h2>
          <p className="font-montserrat text-gray-500 max-w-sm">
            Hemos recibido tu solicitud para el <span className="font-bold text-black">{date?.toLocaleDateString()}</span> a las <span className="font-bold text-black">{selectedTime}</span>. 
            Te enviaremos un correo de confirmación pronto.
          </p>
          <Button 
            variant="outline" 
            className="mt-8 border-gold text-gold hover:bg-gold hover:text-white"
            onClick={() => setIsSuccess(false)}
          >
            Reservar otra cita
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <section className="pt-10 pb-32 bg-black scroll-mt-14 relative overflow-hidden" id="booking">

      {/* Fondo negro geométrico dorado */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(rgba(212,175,55,0.08) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="absolute -top-[20%] -right-[5%] w-[60vw] h-[60vw] border border-[#D4AF37]/[0.06] rounded-full animate-[spin_100s_linear_infinite]" />
        <div className="absolute -bottom-[20%] -left-[5%] w-[50vw] h-[50vw] border border-[#D4AF37]/[0.05] rounded-full animate-[spin_80s_linear_infinite_reverse]" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.35), transparent)" }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.35), transparent)" }}
        />
        {/* Ornamentos */}
        <div className="absolute top-10 left-10 opacity-35">
          <div className="w-8 h-px bg-[#D4AF37]" /><div className="w-px h-8 bg-[#D4AF37]" />
        </div>
        <div className="absolute top-10 right-10 flex flex-col items-end opacity-35">
          <div className="w-8 h-px bg-[#D4AF37]" /><div className="w-px h-8 bg-[#D4AF37] self-end" />
        </div>
        <div className="absolute bottom-10 left-10 flex flex-col-reverse opacity-35">
          <div className="w-8 h-px bg-[#D4AF37]" /><div className="w-px h-8 bg-[#D4AF37]" />
        </div>
        <div className="absolute bottom-10 right-10 flex flex-col-reverse items-end opacity-35">
          <div className="w-8 h-px bg-[#D4AF37]" /><div className="w-px h-8 bg-[#D4AF37] self-end" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-[#D4AF37]/60" />
            <span className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] font-semibold">Reservas Online</span>
            <div className="w-8 h-px bg-[#D4AF37]/60" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl text-white tracking-tight">Agenda tu Experiencia</h2>
          <p className="font-montserrat text-sm text-gray-400 mt-4">Selecciona el día y la hora que mejor te convenga.</p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-2xl border-none overflow-hidden reveal">
          <div className="grid md:grid-cols-12">
            <div className="md:col-span-8 p-4 md:p-10 bg-white border-b md:border-b-0 md:border-r border-gray-100 overflow-x-auto">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="mx-auto w-full max-w-full"
                disabled={(day) => {
                  const today = new Date();
                  today.setHours(0, 0, 0, 0);
                  const currentDay = new Date(day);
                  currentDay.setHours(0, 0, 0, 0);
                  const isSunday = day.getDay() === 0;
                  return currentDay < today || isSunday;
                }}
              />
            </div>
            
            <div className="md:col-span-4 bg-gray-50/50 p-6 md:p-10">
              <h3 className="font-montserrat text-xs uppercase tracking-widest text-gray-400 mb-6 font-bold text-center">Horarios Disponibles</h3>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-3 max-h-[300px] overflow-y-auto pr-2">
                {loadingSlots ? (
                  <div className="col-span-2 text-center py-8 text-sm text-gray-400 font-montserrat">
                    Verificando disponibilidad...
                  </div>
                ) : availableTimeSlots.length > 0 ? availableTimeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    onClick={() => setSelectedTime(time)}
                    className={`w-full py-6 font-montserrat text-xs tracking-widest transition-all duration-300 border-none rounded-none ${
                      selectedTime === time ? "text-black shadow-lg" : "hover:border-gold hover:text-gold"
                    }`}
                    style={selectedTime === time ? {
                      background: "linear-gradient(135deg, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%)"
                    } : {}}
                  >
                    {time}
                  </Button>
                )) : (
                  <div className="col-span-2 text-center py-8 text-sm text-gray-500 font-montserrat">
                    {date?.getDay() === 0
                      ? "No atendemos los domingos."
                      : "No hay horarios disponibles para este día."}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white border-t border-gray-100 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Nombre Completo</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre aquí"
                  className="w-full bg-gray-50 border-none px-6 py-4 rounded-lg focus:ring-1 focus:ring-gold outline-none text-sm transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Correo Electrónico</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="hola@ejemplo.com"
                  className="w-full bg-gray-50 border-none px-6 py-4 rounded-lg focus:ring-1 focus:ring-gold outline-none text-sm transition-all"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Servicio de Interés</label>
                <select 
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-gray-50 border-none px-6 py-4 rounded-lg focus:ring-1 focus:ring-gold outline-none text-sm transition-all appearance-none"
                >
                  <option value="">Selecciona un ritual</option>
                  <option value="Limpieza Facial">Limpieza Facial</option>
                  <option value="Reducción de Medidas">Reducción de Medidas</option>
                  <option value="Aumento de Glúteos">Aumento de Glúteos</option>
                  <option value="Lipopapada Enzimática">Lipopapada Enzimática</option>
                  <option value="Ritual de Juventud (Exosomas)">Ritual de Juventud (Exosomas)</option>
                  <option value="Botox">Botox</option>
                  <option value="Plasma Rico en Plaquetas">Plasma Rico en Plaquetas</option>
                  <option value="Tratamiento Post-Lipo">Tratamiento Post-Lipo</option>
                  <option value="Vitamina C IV">Vitamina C IV</option>
                  <option value="Alopecia">Alopecia</option>
                  <option value="Otros">Otros</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-sm font-montserrat text-gray-400">
                {date && selectedTime ? (
                  <p>Reserva para el <span className="text-black font-bold uppercase tracking-tighter">{date.toLocaleDateString("es-ES", { weekday: 'long', day: 'numeric', month: 'long' })}</span> a las <span className="text-black font-bold">{selectedTime}</span>.</p>
                ) : (
                  <p>Por favor selecciona fecha y hora.</p>
                )}
              </div>
              <Button
                disabled={!date || !selectedTime || !name || isSubmitting}
                onClick={handleSubmit}
                className="w-full md:w-auto px-12 py-7 text-black hover:brightness-110 uppercase tracking-[0.3em] font-montserrat text-[10px] transition-all duration-500 rounded-none shadow-xl border-none"
                style={{
                  background: "linear-gradient(135deg, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%)",
                }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Procesando...
                  </>
                ) : (
                  "Confirmar Reserva"
                )}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
