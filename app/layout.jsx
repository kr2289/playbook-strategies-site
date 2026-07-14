import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "Playbook Strategies | Strategy & Insights That Drive Growth",
  description:
    "Katherine Rowe turns data and insight into decisions that drive growth for sports and entertainment organizations. Ticketing, sponsorship, media, and data strategy.",
  openGraph: {
    title: "Playbook Strategies",
    description:
      "Strategy & insights that drive growth for sports and entertainment organizations.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={archivo.className}>{children}</body>
    </html>
  );
}
