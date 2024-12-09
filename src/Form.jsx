import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function Form({onAddItem}) {

    const [description, setDescription]= useState("");
    const [quantity, setQuantity]= useState(1);

    function handleSubmitForm(e){
        e.preventDefault();
        if(!description) return;

        const newItem = {
            description,
            quantity,
            packed: false,
            id: Date.now(),
        }

        onAddItem(newItem)
        console.log(newItem);

        setDescription("");
        setQuantity(1);
    }




  return (
    <div>
        <form className="add-form" onSubmit={handleSubmitForm}>
            <h3>What do you need for your Trip?</h3>
            <select name="select" value={quantity} onChange={(e)=> setQuantity(e.target.value)}>
                {Array.from({length:20}, (_, i)=> i+1).map((num)=>(
                    <option value={num} key={num}>
                        {num}
                    </option>
                ))}
            </select>

            <input type="text" placeholder='Item...' value={description} onChange={(e) => setDescription(e.target.value)}/>

            <button>Add</button>
        </form>
    </div>
  )
}

export default Form;