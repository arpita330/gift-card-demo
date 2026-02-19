import { generateOTP } from "../../../lib/otpStore";

export async function POST(req) {
  try {
    const body = await req.json();
    const { phone } = body;

    if (!phone) {
      return Response.json({ success: false });
    }

    const otp = generateOTP(phone);

    console.log("Generated OTP:", otp);

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false });
  }
}
