import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/Header";
import Sale from "./components/sale/sale";
import Featured from "./components/featured/Featured";
import Publicity from "./components/publicity/Publicity";
import Footer from "./components/footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="grid-container">
      <head className="item-header">
        <Header />
      </head>
      <section className="item">
        <Sale />
      </section>
      <section id="sale" className="item">
        <Featured />
      </section>
      <section className="item">
        <Publicity />
      </section>
      <footer className="item-footer">
        <Footer/>
      </footer>
    </main>
  );
}

export default App;
