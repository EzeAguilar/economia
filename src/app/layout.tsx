import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NexoBot — Tu negocio siempre disponible",
  description:
    "Automatizá las consultas de WhatsApp e Instagram sobre stock, precios y disponibilidad con un chatbot inteligente. Soluciones para farmacias, ferreterías, distribuidoras y más.",
  icons: {
    icon: "/logoEconomiaRecortado.png",
  },
  openGraph: {
    title: "NexoBot — Tu negocio siempre disponible",
    description:
      "Chatbot inteligente para WhatsApp e Instagram. Tu negocio responde solo, 24/7.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
