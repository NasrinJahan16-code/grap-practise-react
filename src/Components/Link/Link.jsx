import PropTypes from 'prop-types';
const Link = ({route}) => {
    return (
        <li className="mr-20 hover:bg-yellow-200 px-6" >
        <a href={route.path}>{route.name}</a>
        </li>
    );
};
Link.propTypes = {
    route:PropTypes.object
}

export default Link;