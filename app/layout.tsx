"use client"
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
          <title>SyamimDev</title>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link 
           rel="icon"
           href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>" 
           />
       </head>
      <body className="dark:bg-stone-900">
      <ThemeProvider enableSystem={true} attribute="class">
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
      </body>
    </html>
  );
}
