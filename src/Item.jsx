import PropTypes from 'prop-types';

function Item({item, onDelete, onToggle}) {
  return (
    <div>
        <li>
            <input type="checkbox" value={item.packed} onChange={()=> onToggle(item.id)}/>

            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
            </span>
            <button onClick={()=> onDelete(item.id)}>
                ❌
            </button>
            
        </li>
    </div>
  )
}

Item.propTypes = {
    item: PropTypes.shape({
      packed: PropTypes.bool.isRequired,
      quantity: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
  };

export default Item