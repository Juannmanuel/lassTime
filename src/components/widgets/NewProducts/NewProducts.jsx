import style from "./NewProducts.module.css";
import { newProducts } from "../../../data/newProduct/";
import IndividualCards from "../../cards/individualCards/IndividualCards";
const NewProducts = () => {
  return (
    <div className={style.main_newProducts}>
      <div className={style.main_newProducts_card}>
        {newProducts.map((item, index) => (
          <IndividualCards
          key={index}
            image={item.image}
            name={item.name}
            price={item.price}
            material={item.material}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
