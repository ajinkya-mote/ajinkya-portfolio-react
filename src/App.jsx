import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  // cursor spotlight tracking
  useEffect(() => {
    const move = (e) => {
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div className="cursor-spotlight" />
      <ScrollProgress />
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
