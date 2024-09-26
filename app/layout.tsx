import type { Metadata } from "next";
import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from "@/components/header/header";
import { Container } from "@mui/material";
import RootThemeWrapper from "@/components/rootThemeWrapper";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Home Page of the portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body lang="en">
        <RootThemeWrapper>
          <Header />
          {children}        
        </RootThemeWrapper>
      </body>
    </html>
  );
}
