import { useState } from "react";

const Card= ( {question, answer, num})=>{
    console.log(question);

    const[isOpen, setIsOpen]= useState(false);


    function handleToggle(num){
        setIsOpen(isOpen=>!isOpen);
    }
    
    return(
        <>
            <div style={{border: "3px solid white", display:"flex", cursor: "pointer"}} onClick={handleToggle}>
                <p>{num} </p>
                <p>{question} </p>
                <p> {isOpen ? " - " : " + "} </p>
                {isOpen && <div>{answer}</div>}
                
            </div>
        </>
    )
}   

export default Card;