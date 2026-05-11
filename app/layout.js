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
        <a
          href="https://wa.me/917827715657?text=Hi%20SNG%20Consultancy,%20I'm%20interested%20in%20your%20compliance%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed md:bottom-5 right-5 z-[111] bg-[#25D366] hover:bg-green-600 text-white p-3 rounded-full shadow-lg hidden md:flex items-center justify-center transition duration-300"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-7 h-7"
          />
        </a>
        <Footer />
      </body>
    </html>
  );
}
