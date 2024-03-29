import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import { Suspense } from "react";
import LoadingSpinner from "@/components/FallbackUI/loadingSpinner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodingHub Wiki",
  description: "코딩허브의 위키 페이지 입니다.",
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
            <div className="w-full min-h-screen h-full flex justify-center items-center">
              <div className="max-w-[1200px] w-full h-full">{children}</div>
            </div>
          </Suspense>
        </Provider>
      </body>
    </html>
  );
}
