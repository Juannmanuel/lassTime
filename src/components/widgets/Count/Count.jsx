import style from "./Count.module.css";
import CountUp from "react-countup";
import { FaUsers } from "react-icons/fa6";


const Count = ({ title }) => {
  const detailCount = (title) => {
    switch (title) {
      case "products":
        return (
          <p>
            Explore our collection of{" "}
            {<CountUp className={style.count_number} start={0} end={80} delay={0.5} duration={15} />} featured
            jewelry pieces and be captivated.
          </p>
        );
      case "clients":
        return (
          <p>
            Over {<CountUp className={style.count_number} start={0} end={1250} delay={0.5} duration={15} />}
            {" "}satisfied clients adorned with our unique jewelry.
          </p>
        );
      case "shipping":
        return (
          <p>
           Elegant shipping to{" "}
            {<a><CountUp className={style.count_number} start={0} end={15} delay={0.5} duration={15} /></a>}{" "}
            destinations, allowing you to shine anywhere.`
          </p>
        );
    }
  };
  return (
    <div className={style.main_count}>
      <h2><u>{title.toUpperCase()}</u></h2>
      <div className={style.count}>{detailCount(title)}</div>
    </div>
  );
};

export default Count;
