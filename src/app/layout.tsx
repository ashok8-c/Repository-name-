
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Consolas", "monospace"],
});

const siteUrl = "https://ashok8-c.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Ashok S. Babu — Software Engineer",
    template: "%s | Ashok S. Babu",
  },

  description:
    "Ashok S. Babu is a computer science student focused on software engineering, backend development, full-stack applications, and connected systems. Explore selected projects, technical work, and achievements.",

  applicationName: "Ashok S. Babu — Portfolio",

  openGraph: {
    type: "website",
    title: "Ashok S. Babu — Software Engineer",
    description:
      "Selected engineering projects, backend systems, full-stack development, and technical experiments.",
    siteName: "Ashok S. Babu",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ashok S. Babu — Software Engineer",
    description:
      "Explore selected software engineering projects and technical work by Ashok S. Babu.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090a0c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<LayoutProps<"/">>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
