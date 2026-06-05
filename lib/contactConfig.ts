export const contactConfig = {
  toEmail: process.env.CONTACT_TO_EMAIL || "info@exceltradeint.com",
  fromEmail:
    process.env.CONTACT_FROM_EMAIL || "ETIL Website <noreply@exceltradeint.com>",
  resendApiKey: process.env.RESEND_API_KEY,
};

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
