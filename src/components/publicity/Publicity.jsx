import style from "./Publicity.module.css";
import image from "../../assets/images/products/publicity1.jpeg";

const Publicity = () => {
  return (
    <section className={style.publicity_main}>
      <div className={style.image_publicity}>
        <img src={image} alt="products" />
      </div>
      <div className={style.description_publicity}>
        <h4>DISCOVER THE COLLECTION</h4>
        <h2>HOUSE OF HARLOW FINE CRYSTALS</h2>
        <p className={style.p_publicity}>
          Each crystal used in these pieces is hand selected by Nicole and
          charged by the light of the full moon. Chosen for their healing
          properties and uses, no crystal is alike.
        </p>
        <p className={style.p_publicity}>
          Our crystals are handcrafted in 14 karat yellow gold with white
          diamond pavé and set by master jewelers in our Los Angeles design
          studio. Made with love and intention.
        </p>
        <button>View products</button>
      </div>
    </section>
  );
};

export default Publicity;
