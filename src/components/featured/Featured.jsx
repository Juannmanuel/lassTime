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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae eum
          iusto repellat eligendi repudiandae magni iure. Maiores voluptates
          facere eius, assumenda hic dolor laudantium repellat, nemo ut modi
          quidem doloribus?
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
            - Over 80 products to choose from, ensuring you find the perfect
            piece. <br />
            - Over 2,500 satisfied customers trust our quality and attention to
            detail. <br />- Shipping available to 15 countries, bringing our
            exquisite jewelry to the world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Featured;
