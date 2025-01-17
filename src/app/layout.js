import Head from "../components/Head";
import Footer from "../components/Footer";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={montserrat.className}>
      <Head />
      <body style={{ margin: 0 }}>
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
