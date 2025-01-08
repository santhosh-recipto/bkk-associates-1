import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-source-sans",
});

export const metadata = {
  title: "BKK & ASSOCIATES Chartered Accountants",
  description: "BKK & ASSOCIATES Chartered Accountants",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sourceSans.className} antialiased`}>{children}</body>
    </html>
  );
}
