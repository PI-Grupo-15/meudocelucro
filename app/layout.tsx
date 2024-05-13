import Footer from "./components/footer";
import Navigation from "./components/navgation";
import "./globals.css";
import { Inter } from "next/font/google";
import Principal_page from "./principal_page/page";
import Principal_page_login from "./Principal_page_login/page";

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

        <section>
          <Principal_page_login />
        </section>

        <footer>
        <Footer toggle={function (): void {      
        } } /> 
        </footer>
        
      </body>
      
        
        
      
    </html>
  );
}