import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import { Suspense } from "react";
import LoadingSpinner from "@/components/FallbackUI/loadingSpinner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Suspense fallback={<LoadingSpinner />}>
            <div className="w-full flex justify-center">
              <div className="max-w-[1200px] w-full">{children}</div>
            </div>
          </Suspense>
        </Provider>
      </body>
    </html>
  );
}
