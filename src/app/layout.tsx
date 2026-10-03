import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Forma — Make room for your best work",
  description:
    "A calmer, more creative workspace for teams doing their best work. Plan projects, share ideas, and make momentum feel effortless.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full scroll-smooth antialiased [scroll-padding-top:90px]`}
    >
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground [font-optical-sizing:auto] [font-kerning:normal] [text-rendering:optimizeLegibility] [-webkit-tap-highlight-color:transparent] selection:bg-accent selection:text-ink">
        {children}
      </body>
    </html>
  );
}
