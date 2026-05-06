import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SNG Consultancy | Global Tax & Compliance Advisory",
  description:
    "Strategic tax advisory and OECD compliance solutions for US and European multinationals. Delivered with technical rigor and senior-level expertise.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary text-white font-body">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
