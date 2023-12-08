import style from "./Navbar.module.css";
import image from "../../assets/images/products/logo.jpeg";
import { FaShoppingCart, FaShoppingBag, FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className={style.navbar_main}>
      <div className={style.aceess}>
        <CiSearch />
        <section className={style.search_nav}>
          <input type="text" placeholder="Search Product" name="text" />
        </section>
      </div>
      <div className={style.logo}>
        <a href="home">
          <img src={image} alt="logo" />
        </a>
      </div>
      <div className={style.icons_container}>
        <div className={style.icons}>
          <FaShoppingBag style={{ cursor: "pointer" }} />
          <FaShoppingCart style={{ cursor: "pointer" }} />
        </div>
          <FaUser style={{ cursor: "pointer", marginLeft: "1rem" }} />
      </div>
    </div>
  );
};

export default Navbar;
