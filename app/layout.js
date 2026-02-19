import "../styles/globals.css";

export const metadata = {
  title: "Gift Card Demo Portal",
  description: "Demo OTP verification system"
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
    }
