"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function OTPPage() {
  const [otp, setOtp] = useState("");
  const router = useRouter();
  const params = useSearchParams();
  const phone = params.get("phone");

  const verify = async () => {
    const res = await fetch("/api/verify-otp", {
      method: "POST",
      body: JSON.stringify({ phone, otp })
    });

    const data = await res.json();

    if (data.success) {
      router.push("/success");
    } else {
      router.push("/failed");
    }
  };

  return (
    <div className="card">
      <h2>Verify OTP</h2>

      <input
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />

      <button onClick={verify} disabled={otp.length !== 6}>
        Verify
      </button>
    </div>
  );
      }
