import style from "./Featured.module.css";
import IndividualCards from "../cards/individualCards/IndividualCards";
import { newProducts } from "../../data/newProduct";
import Count from "../widgets/Count/Count";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

const Featured = () => {
  return (
    <section className={style.featured_main}>
      <header className={style.description_featured}>
        <h2>New Collection 2023</h2>
        <p>
          Discover our exquisite "New Collection 2023." Elevate your style with artisan-crafted pieces that blend contemporary fashion with timeless elegance. Each item is a unique masterpiece designed with precision and high-quality materials. Join us on a journey where sophistication meets creativity.
        </p>
      </header>
      <div className={style.products_section}>
        <div className={style.containerCards}>
          {newProducts.map((item, index) => (
            <IndividualCards
              key={index}
              name={item.name}
              price={item.price}
              material={item.material}
              image={item.image}
            />
          ))}
        </div>
        <div className={style.envio}>
          <div className={style.counters}>
            <Count title={"products"} />
            <Count title={"clients"} />
            <Count title={"shipments"} />
          </div>
          <p className={style.p_featured}>
            - 80+ curated pieces for your perfect style. <br />
            - 2,500+ satisfied customers trust our quality. <br />- Shipping available to 15 countries, sharing our exquisite jewelry worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Featured;
