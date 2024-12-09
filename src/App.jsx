
import { useState } from 'react'
import './App.css'
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';
import Logo from './Logo';



const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

function App() {

    const [items, setItems ]= useState(initialItems);

    function handleAddItem(item){
      setItems((items)=>[...items, item]);
    }

    function handleDeleteItem(id){
      setItems((items)=>(items.filter((item)=> item.id !== id)))
    }

    function togglePackedStatus(id){
      setItems((items)=> items.map((item)=> item.id == id ? {...item, packed: !item.packed} : item))
    }


    return(
      <>
        <Logo/>
        <Form onAddItem= {handleAddItem} />
        <PackingList items={items} handleDeleteItem={handleDeleteItem} onTogglePack = {togglePackedStatus} />
        <Stats items={items}/>
        
        
      </>
    )
}

export default App
