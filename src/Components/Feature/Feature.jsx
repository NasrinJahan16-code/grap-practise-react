import PropTypes from "prop-types";
import { ImCheckmark } from "react-icons/im";
const Feature = ({feature}) => {
    return (
        <div>
           <p className="flex items-center"> <ImCheckmark />{feature}</p> 
           
        </div>
    );
};
Feature.propTypes = {
    feature : PropTypes.string
}
export default Feature;