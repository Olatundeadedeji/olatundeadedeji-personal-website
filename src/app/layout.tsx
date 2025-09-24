import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import PlausibleAnalytics from "@/components/PlausibleAnalytics";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Olatunde Adedeji —  Full-Stack AI Engineer, Technical Author & MLOps Specialist",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <style dangerouslySetInnerHTML={{
          __html: `
            :root { --progress: var(--p, 0%); }
            #scroll-progress::before { content: ""; position: absolute; inset: 0; width: var(--progress); background: linear-gradient(90deg,#2563EB, #22C55E); }
            body { font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; }
          `
        }} />
      </head>
      <body className={`${inter.variable} bg-white text-slate-900 dark:bg-base-100 dark:text-slate-100 selection:bg-brand/20 selection:text-slate-900`}>
        {/* Skip link */}
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 bg-accent text-white px-3 py-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">
          Skip to main content
        </a>

        {/* Top progress bar */}
        <ScrollProgress />

        {/* Floating background mesh + orbs */}
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 bg-mesh"></div>
        <div aria-hidden="true" className="pointer-events-none fixed -top-20 -right-20 w-72 h-72 rounded-full blur-3xl opacity-40 bg-brand/30 animate-float-slow"></div>
        <div aria-hidden="true" className="pointer-events-none fixed -bottom-24 -left-20 w-80 h-80 rounded-full blur-3xl opacity-30 bg-accent/30 animate-float-slow"></div>

        <Header />

        <main id="main" tabIndex={-1}>
          {children}
        </main>

        <Footer />

        {/* Analytics */}
        <PlausibleAnalytics
          domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || 'olatundeadedeji.com'}
          trackLocalhost={process.env.NEXT_PUBLIC_TRACK_LOCALHOST === 'true'}
          enableAutoPageviews={process.env.NEXT_PUBLIC_ENABLE_AUTO_PAGEVIEWS !== 'false'}
          enableOutboundLinks={process.env.NEXT_PUBLIC_ENABLE_OUTBOUND_LINKS !== 'false'}
          enableFileDownloads={process.env.NEXT_PUBLIC_ENABLE_FILE_DOWNLOADS !== 'false'}
        />

        {/* Privacy-compliant consent banner */}
        <CookieConsent />
      </body>
    </html>
  );
}
