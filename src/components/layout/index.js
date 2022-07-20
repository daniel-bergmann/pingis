import Navbar from "./navbar";
import Footer from "./footer";
import BatAndBall from "./batAndBall";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <BatAndBall />
      <Footer />
    </>
  );
}
