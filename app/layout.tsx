import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { ModalProvider } from "./contexte/modalContext";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr-FR" dir="ltr">
      <body className="bg-background h-full w-full">
        <ModalProvider>
          <Navbar />
          {children}
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}