import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://salucoffee.com"),
  title: "Salu Coffee & Matcha",
  description: "Salu Coffee & Matcha için özel kahveler, matcha içecekleri ve taze cafe lezzetleri.",
  openGraph: {
    title: "Salu Coffee & Matcha",
    description: "Nitelikli kahve, pürüzsüz matcha ve güne iyi gelen tatlı molalar.",
    images: ["/hero-salu.png"],
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
