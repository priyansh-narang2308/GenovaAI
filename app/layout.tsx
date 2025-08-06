import type { Metadata } from "next";
import { Inter,Outfit} from "next/font/google";
import "./globals.css";
import {ClerkProvider} from "@clerk/nextjs"
import { dark } from '@clerk/themes'

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Genova - AI",
  description: "AI Content generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning
          className={`${outfit.className} antialiased`}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
