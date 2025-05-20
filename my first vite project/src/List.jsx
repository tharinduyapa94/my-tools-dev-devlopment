import PropTypes from 'prop-types';

function ListR(props) {

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>
        {item.name} : &nbsp;
        <b>{item.caleroies}</b></li>);

    return (<>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
    </>);
}
ListR.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        caleroies: PropTypes.number
    })),
}

ListR.defaultProps = {
    category: "Category",
    items: [],
}
export default ListR;