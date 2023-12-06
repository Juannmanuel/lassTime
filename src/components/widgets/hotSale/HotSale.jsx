import style from "./HotSale.module.css";
import CountUp from "react-countup";

const HotSale = () => {
  return (
    <div className={style.hot_sale_main}>
      <header className={style.hot_sale_title}>
        <h2>THE BLACK FRIDAY</h2>
        <div>
          <h2 className={style.numberOff}>
            <CountUp start={0} end={50} delay={0.5} duration={10} />% OFF
          </h2>
        </div>
      </header>
      <section className={style.hot_sale_description}>
        <p>white code: JuaN-mA</p>
        <a href="#sale">
          <button>Explore our Special Deals</button>
        </a>
      </section>
    </div>
  );
};

export default HotSale;
