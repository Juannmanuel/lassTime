import NewProducts from "../widgets/NewProducts/NewProducts"
import style from "./Featured.module.css"

const Featured = () => {
 return (
    <div className={style.featured_main}>
       <NewProducts/>
    </div>
 )   
}

export default Featured