import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata = {
  title: "Papelería Rosita - Sistema de Gestión",
  description: "Sistema de gestión para inventario, ventas y clientes de Papelería Rosita",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="light">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
