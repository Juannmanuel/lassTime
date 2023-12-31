import Navbar from "../Navbar/Navbar";
import NewProducts from "../widgets/NewProducts/NewProducts";
import HotSale from "../widgets/hotSale/HotSale";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.header_main}>
      <section className={style.cardHotSale}>
        <HotSale />
      </section>
    </div>
  );
};

export default Header;
