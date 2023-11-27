import style from "./Price.module.css"

const Price = ({price}) => {
 return (
    <div>
        {price !== 0 ? <div><span>{price}</span><span>{price}</span></div> : <span></span>}
    </div>
 )   
}

export default Price