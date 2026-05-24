import type { Metadata } from "next";
import { Suspense } from "react";
import { Anta, Poppins } from "next/font/google";
// import { AosInit } from "@/components/common/aos-init";
import { FloatingActions } from "@/components/common/floating-actions";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import "./globals.css";
import { Providers } from "@/components/providers";
import Script from "next/script";


const anta = Anta({
  variable: "--primary-font",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const poppins = Poppins({
  variable: "--secondary-font",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Best Music Studio in Tirunelveli, Tamil Nadu",
  description: "Fifth Fade is a professional music studio in Tirunelveli offering song recording, dubbing, mixing, mastering, SFX, and video shoot services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${anta.variable} ${poppins.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="flex min-h-dvh flex-col">
        <Suspense fallback={null}>
          <Header />
        </Suspense>
        <main className="flex flex-1 flex-col">
          {children}
        </main>
        <Footer />
        <FloatingActions />
        <Providers />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2DQ0BE6SNS"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-2DQ0BE6SNS');
        `}
        </Script>
      </body>
    </html>
  );
}