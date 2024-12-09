import { useState } from "react";
import Card from "./questionCard";

const data =[
        {
            question: "What is the Meaning of React.JS?",
            answer: "It's a JavaScript Library of frameworks."
        },
    
        {
            question: "What is the Meaning of React.JS?",
            answer: "It's a JavaScript Library of frameworks."
        },
        {
            question: "What is the Meaning of React.JS?",
            answer: "It's a JavaScript Library of frameworks."
        },
         
        {
            question: "What is the Meaning of React.JS?",
            answer: "It's a JavaScript Library of frameworks."    
        }
    ]


function Accodian(){
    
    return(
        <div>
            {data.map((el, index)=>(
                <Card question={el.question} answer={el.answer} num={index+1}/>
            ))}
        </div>
    )
}


export default Accodian;
