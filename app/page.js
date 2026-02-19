"use client";

import { useState } from "react";
import { auth } from "../lib/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Home() {
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const setupRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      { size: "invisible" },
      auth
    );
  };

  const sendOTP = async () => {
    setupRecaptcha();

    const appVerifier = window.recaptchaVerifier;

    try {
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        "+91" + phone,
        appVerifier
      );

      window.confirmationResult = confirmationResult;
      router.push("/otp");
    } catch (error) {
      alert("Error sending OTP");
    }
  };

  return (
    <div className="card">
      <h2>Firebase OTP Demo</h2>

      <input
        placeholder="Enter 10 digit mobile"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button onClick={sendOTP} disabled={phone.length !== 10}>
        Send OTP
      </button>

      <div id="recaptcha-container"></div>
    </div>
  );
          }
