"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const sendOTP = async () => {
    await fetch("/api/send-otp", {
      method: "POST",
      body: JSON.stringify({ phone })
    });

    router.push(`/otp?phone=${phone}`);
  };

  return (
    <div className="card">
      <h2>Gift Card Demo Portal</h2>
      <p>Enter your mobile number</p>

      <input
        placeholder="Enter mobile number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button onClick={sendOTP} disabled={phone.length !== 10}>
        Send OTP
      </button>
    </div>
  );
    }
