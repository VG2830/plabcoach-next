import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // metadataBase: new URL("https://plabcoach.com"),
  metadataBase: new URL("https://plabcoach-next.vercel.app"),
  title: "PLABCoach - UK Medical Exam Preparation",
  description: "Expert-led preparation for PLAB, UKMLA and UK medical exams.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
