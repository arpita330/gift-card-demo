"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OTPPage({ searchParams }) {
  const [otp, setOtp] = useState("");
  const router = useRouter();

  const phone = searchParams?.phone || "";

  const verify = async () => {
    const res = await fetch("/api/verify-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone, otp }),
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
        Verify OTP
      </button>
    </div>
  );
          }
