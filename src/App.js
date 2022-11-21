import { useEffect, useState } from "react";
import "./App.scss";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Work from "./components/Work/Work";
import Loader from "./Loader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Home />
          <Work />
          <About />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
