import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Remedy",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-[#F5F5F5] overflow-x-hidden">
        <header>
          <Header/>
        </header>
        <main>
          {children}
        </main>
        <footer >
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
