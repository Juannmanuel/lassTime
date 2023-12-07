import style from "./Navbar.module.css";
import image from "../../assets/images/products/logo.jpeg";
import { FaShoppingCart, FaShoppingBag  } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className={style.navbar_main}>
      <div className={style.aceess}></div>
      <div className={style.logo}>
        <img src={image} alt="" />
      </div>
      <div className={style.icons_container}>
        <div className={style.icons}>
        <FaShoppingBag style={{cursor:"pointer"}}/>
        <FaShoppingCart style={{cursor:"pointer"}}/>
        </div>
        <section className={style.search_nav}>
          <input
            type="text"
            placeholder="Search Product"
            name="text"
          />
        </section>
      </div>
    </div>
  );
};

export default Navbar;
