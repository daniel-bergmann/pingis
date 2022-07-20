import Navbar from "./navbar";
import Footer from "./footer";
import BatAndBall from "./batAndBall";
import ScrollToTop from "./scrollToTop";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <ScrollToTop />
      <BatAndBall />
      <Footer />
    </>
  );
}
