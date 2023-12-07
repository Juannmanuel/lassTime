import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/Header";
import Sale from "./components/sale/sale";
import Featured from "./components/featured/Featured";
import Publicity from "./components/publicity/Publicity";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section className="grid-container">
      <nav className="item_nav">
      <Navbar/>
      </nav>
      <header className="item_header">
        <Header />
      </header>
      <section className="item_featured">
        <Featured />
      </section>
      <section id="sale" className="item">
        <Publicity />
      </section>
      <section className="item_sale">
        <Sale />
      </section>
      <section className="item">
        <Publicity />
      </section>
      <footer className="item_footer">
        <Footer />
      </footer>
    </section>
  );
}

export default App;
