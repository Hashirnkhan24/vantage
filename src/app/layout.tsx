import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MBA Role Explorer",
  description:
    "Sector and specialization based role exploration platform for MBA students.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
