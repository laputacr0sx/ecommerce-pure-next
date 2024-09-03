import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Authenticating with Kinde...",
  description: "Please get Authenticated before accessing...",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html className="bg-white dark:bg-zinc-900 lg:bg-zinc-100 dark:lg:bg-zinc-950">
      <body>{children}</body>
    </html>
  );
}
