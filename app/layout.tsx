import Navigation from "./components/navgation";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Meu Doce Lucro",
  description: "Criado pelo Grupo 15 - Projeto integrador UNIVESP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />      
        {children}
      </body>
    </html>
  );
}