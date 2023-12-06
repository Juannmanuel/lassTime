import style from "./Count.module.css";
import CountUp from "react-countup";
import { CgMathPlus } from "react-icons/cg";


const Count = ({ title }) => {
  const detailCount = (title) => {
    switch (title) {
      case "products":
        return (
          <p>
            {
              <CountUp
                className={style.count_number}
                start={0}
                end={85}
                delay={2.5}
                duration={15}
              />
            }
          </p>
        );
      case "clients":
        return (
          <p>
            {
              <CountUp
                className={style.count_number}
                start={0}
                end={1500}
                delay={2.5}
                duration={15}
              />
            }
          </p>
        );
      case "shipments":
        return (
          <p>
            {
              <CountUp
                className={style.count_number}
                start={0}
                end={2000}
                delay={2.5}
                duration={10}
              />
            }{" "}
          </p>
        );
    }
  };
  return (
    <div className={style.main_count}>
      <h2>
        <u>{title.toUpperCase()}</u>
      </h2>
      <div className={style.count}>
        <div>
        <CgMathPlus />
        </div>
        <div>{detailCount(title)}</div>
      </div>
    </div>
  );
};

export default Count;
