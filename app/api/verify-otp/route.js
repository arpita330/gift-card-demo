import { verifyOTP } from "../../../lib/otpStore";

export async function POST(req) {
  try {
    const body = await req.json();
    const { phone, otp } = body;

    if (!phone || !otp) {
      return Response.json({ success: false });
    }

    const valid = verifyOTP(phone, otp);

    if (valid) {
      return Response.json({ success: true });
    }

    return Response.json({ success: false });
  } catch (error) {
    return Response.json({ success: false });
  }
}
