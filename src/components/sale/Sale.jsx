import style from "./Sale.module.css";
import { products } from "../../data/newProduct";

const Sale = () => {
  return (
    <div className={style.main_sale}>
      {products.map((item, index) => {
        return (
          <div key={index} className={style.products}>
            <img src={item.image1} alt="image" />
            <img src={item.image2} alt="image" />
            <button className={style.btn_sale}>Quick view</button>
          </div>
        );
      })}
    </div>
  );
};

export default Sale;
