import PropTypes from 'prop-types'
import Item from './item'
import { useState } from 'react';


function PackingList({ items, handleDeleteItem, onTogglePack }) {
  const [sort, setSort] = useState("input");

  let sortedItems;

  if (sort === "input") {
    sortedItems = items;
  }

  if (sort === "description") {
    sortedItems = items.slice().sort((a, b) => (a.description || "").localeCompare(b.description || ""));
  }

  if (sort === "packed") {
    sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className='list'>
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDelete={handleDeleteItem}
            onToggle={onTogglePack}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="input">Input</option>
          <option value="description">Description</option>
          <option value="packed">Packed</option>
        </select>
      </div>
    </div>
  );
}

//Add PropTypes validation
PackingList.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        packed: PropTypes.bool.isRequired,
        quantity: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
    handleDeleteItem: PropTypes.func.isRequired,
    onTogglePack: PropTypes.func.isRequired,
  };
export default PackingList;































// function PackingList({items, handleDeleteItem, onTogglePack}) {

// console.log(items)
// const [sortBy, setSort]= useState("description");


//     let sortedItems;
//     if(sortBy === "input") sortedItems = items;

//     if(sortBy === "description") 
//       items.slice().sort((a, b)=> (a.description).localeCompare(b.description))
//       console.log(typeof(items));

//     if (sortBy === "packed")
//       sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
        
        

//   return (
//     <div className='list'>
//         <ul>
//             {sortedItems.map((item)=>(
//                 <Item 
//                 item={item}
//                 key={item.id} 
//                 onDelete={handleDeleteItem} 
//                 onToggle={onTogglePack}/>
//             ))}
//         </ul>

//         <div className="actions">
//             <select value={sortBy} onChange={(e)=> setSort(e.target.value)}>
//                 <option value="input">Sort By Input</option>
//                 <option value="description">Sort By Description</option>
//                 <option value="packed">Sort By Packed</option>
//             </select>
//         </div>
//     </div>
//   )
// }

// 

// export default PackingList;