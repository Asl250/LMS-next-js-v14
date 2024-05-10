import { ThemeProvider } from '@/components/providers/theme-provider'
import type { Metadata } from "next";
import "./globals.css";
import { Inter, Crete_Round, Work_Sans } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by ASK250",
};

const creteRound = Crete_Round({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-creteRound",
})
const workSans = Work_Sans({
  weight: ["500","600"],
  subsets: ["latin"],
  variable: "--font-workSans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={`${creteRound.variable} ${workSans.variable} overflow-x-hidden`}>{children}
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </body>
    </html>
  );
}