import type { Metadata } from "next";
import { Inter } from "next/font/google";

import './globals.css';

const inter = Inter({ subsets: ["latin"] });

export default function NotAuthorizeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Merodi Admin</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'use-credentials'} />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"></link>
      </head>
      <body className={inter.className}>
          {children}
      </body>
    </html>
  );
}
