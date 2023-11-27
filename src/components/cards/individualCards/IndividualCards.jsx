import style from "./IndividualCards.module.css";

const IndividualCards = ({ image, name, material, price, details }) => {
  return (
    <div className={style.card}>
      <div className={style.card_inner}>
        <div className={style.card_front}>
          <img src={image[0]} />
        </div>
        <div className={style.card_back}>
          <h2>{name}</h2>
          <h3>{material}</h3>
          <span>${price},00</span>
          <button>Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default IndividualCards;
