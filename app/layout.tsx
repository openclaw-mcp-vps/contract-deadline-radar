import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contract Deadline Radar — Never Miss a Renewal",
  description: "Track contract expiration dates with smart alerts and renewal reminders for small businesses and procurement teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3e9c3ed4-0b48-4f05-8182-07e2a4eb1392"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
