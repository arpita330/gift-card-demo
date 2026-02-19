import { verifyOTP } from "@/lib/otpStore";

export async function POST(req) {
  const { phone, otp } = await req.json();

  if (verifyOTP(phone, otp)) {
    return Response.json({ success: true });
  }

  return Response.json({ success: false });
}
