import style from "./Navbar.module.css";
import image from "../../assets/images/logo.jpeg";
const Navbar = () => {
  return (
    <div className={style.navbar_main}>
      <div className={style.logo}>
        <h1>lassTime</h1>
      </div>
      <div className={style.titles}>
        <span>Home</span>
        <span>About</span>
        <span>Shop</span>
        <span>Featured</span>
        <span>Products</span>
      </div>
    </div>
  );
};

export default Navbar;
