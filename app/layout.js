import localFont from "next/font/local";
import "./globals.css";

// Carica i font localmente
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata = {
  title: "Qiskit Fall Fest 2024 / Catania",
  description: "Catania Qiskit Fall Fest 2024",
  icons: {
    icon: '/favicon.ico', 
    shortcut: '/favicon-16x16.png', 
    apple: '/apple-touch-icon.png', 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
