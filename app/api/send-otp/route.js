import { generateOTP } from "@/lib/otpStore";

export async function POST(req) {
  const { phone } = await req.json();
  const otp = generateOTP(phone);

  console.log("Generated OTP:", otp); // Visible in Vercel logs

  return Response.json({ success: true });
}
