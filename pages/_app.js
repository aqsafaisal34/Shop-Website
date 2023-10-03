import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Carasoul from "@/components/carasoul";
import Footer from "@/components/footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Carasoul />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
