/** WhatsApp de contacto comercial — +376 372 235 */
export const WHATSAPP_NUMBER = "376372235";
export const WHATSAPP_DISPLAY = "+376 372 235";

export function whatsAppUrl(text?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!text?.trim()) return base;
  return `${base}?text=${encodeURIComponent(text.trim())}`;
}

export function buildContactWhatsAppMessage(fields: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  family?: string;
  message?: string;
}): string {
  const lines = [
    "Hola, solicito información sobre BioHackPro Machines.",
    "",
    `Nombre: ${fields.name}`,
    `Email: ${fields.email}`,
  ];

  if (fields.phone?.trim()) lines.push(`Teléfono: ${fields.phone.trim()}`);
  if (fields.company?.trim()) lines.push(`Centro / Empresa: ${fields.company.trim()}`);
  if (fields.family?.trim()) lines.push(`Tecnología de interés: ${fields.family.trim()}`);
  if (fields.message?.trim()) {
    lines.push("", "Mensaje:", fields.message.trim());
  }

  return lines.join("\n");
}
