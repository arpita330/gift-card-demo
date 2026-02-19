"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OTPPage() {
  const [otp, setOtp] = useState("");
  const router = useRouter();

  const verifyOTP = async () => {
    try {
      await window.confirmationResult.confirm(otp);
      router.push("/success");
    } catch (error) {
      router.push("/failed");
    }
  };

  return (
    <div className="card">
      <h2>Enter OTP</h2>

      <input
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />

      <button onClick={verifyOTP} disabled={otp.length !== 6}>
        Verify OTP
      </button>
    </div>
  );
          }
