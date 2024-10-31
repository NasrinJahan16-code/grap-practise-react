import PropTypes from "prop-types";
import Feature from "../Feature/Feature";
const PriceOpt = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className="bg-blue-300 rounded-md p-4  flex flex-col">
            <h2 className="text-center">
                <span className="text-5xl  font-bold">{price}</span>
                <span className="text-3xl"> /month</span>
            </h2>
            <h4 className="text-2xl my-3">{name}  </h4>
            <div className="pl-2 flex-grow">
            {
                features.map ((feature, index)=> <Feature key={index} feature ={feature}></Feature>)
            }
            </div>
            <button className="mt-12 bg-yellow-400 font-bold rounded-lg p-3">Buy Now</button>
        </div>
    );
};
PriceOpt.propTypes = {
    option : PropTypes.object
}
export default PriceOpt;