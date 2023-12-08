
import Header from "./components/header/Header";
import Navbar from "./components/Navbar/Navbar";
import Sale from "./components/sale/Sale";
import Featured from "./components/featured/Featured";
import Publicity from "./components/publicity/Publicity";
import Footer from "./components/footer/Footer";
import "./App.css";
import PublicityButton from "./components/publicity/PublicityButton";

function App() {


  return (
    <section className="grid-container">
      <nav className="item_nav">
      <Navbar/>
      </nav>
      <header className="item_header" id="home">
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
        <PublicityButton />
      </section>
      <footer className="item_footer">
        <Footer />
      </footer>
    </section>
  );
}

export default App;
