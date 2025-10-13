import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Omnitype - Collaborative Editor",
  description: "A modern collaborative text editor with real-time collaboration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body 
        className={`${poppins.className} antialiased min-h-screen`}
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 1) 0%,
              rgba(219, 234, 254, 0.5) 30%,
              rgba(219, 234, 254, 0.8) 70%,
              rgba(219, 234, 254, 1) 100%
            )
          `,
          backgroundAttachment: 'fixed'
        }}
      >
        <ThemeProvider defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
