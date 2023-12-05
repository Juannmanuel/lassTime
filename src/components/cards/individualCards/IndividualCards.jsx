import style from "./IndividualCards.module.css";

const IndividualCards = ({ image, name, material, price, details }) => {
  return (
    <div className={style.productCard}>
      <div className={style.imageContainer}>
        <img src={image[0]} alt={`Product 1 - ${name}`} className={style.productImage} />
      </div>
      <div className={style.productOverlay}>
        <img src={image[1]} alt={`Product 2 - ${name}`} className={style.productImage} />
        <div className={style.viewButton}>
          <h2>{name.toUpperCase()}</h2>
          <p>({material})</p>
          <span>${price},00</span>
          <button>Ver Producto</button>
          </div>
      </div>
    </div>
  );
};

export default IndividualCards;
