import style from "./HotSale.module.css";

const HotSale = () => {
  return (
    <div className={style.hot_sale_main}>
      <header className={style.hot_sale_title}>
        <h2>THE BLACK FRIDAY EVENT</h2>
      </header>
      <section className={style.hot_sale_description}>
        <p>50% OFF WHITE CODE: JuaN-mA</p>
        <a href="#sale"><button>Explore our Special Deals</button></a>
      </section>
    </div>
  );
};

export default HotSale;
