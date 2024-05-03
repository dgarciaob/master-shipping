import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Master Shipping | Ship Brokers & Agents",
  description: "Ship Brokers & Agents for US and Latam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("overflow-x-hidden", roboto.className)}>
        <main>{children}</main>
      </body>
    </html>
  );
}
