import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "United Audio Design System",
  description: " Design tokens, components, and patterns for Universal Audio products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-sans bg antialiased bg-(--ua-bg-canvas)">
        {children}
      </body>
    </html>
  );
}
