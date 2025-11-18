import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Life Upgrade Case Simulator | CS2-Style Dopamine Hit",
  description: "Experience the thrill of CS2 case openings but for real-life upgrades. Open cases, get dopamine hits, upgrade your lifestyle with affiliate-linked products.",
  keywords: ["case opening", "simulator", "life upgrade", "CS2", "dopamine", "gaming"],
  openGraph: {
    title: "Life Upgrade Case Simulator",
    description: "CS2-style case opening for real life products",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
