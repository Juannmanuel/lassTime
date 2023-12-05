import Navbar from "../Navbar/Navbar";
import NewProducts from "../widgets/NewProducts/NewProducts";
import HotSale from "../widgets/hotSale/HotSale";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.header_main}>
      <div className={style.filter_header}></div>
      <section className={style.header_welcome}>
        <h1>
          Exceptional
          <h2>
            designs <br /> for unique
          </h2>{" "}
          individuals.
        </h1>
      </section>
      <section className={style.cardHotSale}>
        <HotSale />
      </section>
    </div>
  );
};

export default Header;
