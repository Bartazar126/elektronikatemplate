import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TEMPLATE",
  description:
    "Professzionális, gyorsan szűrhető elektronikai és PC alkatrész katalógus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body>{children}</body>
    </html>
  );
}
