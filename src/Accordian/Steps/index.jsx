import { useState } from "react"
import './styles.css';

function Steps(){

    const msgs =[
        "What is ReactJs?", "What is the difference in Js and ReactJs?", "What is CSS?"
    ]

    const step =1;
    const[steps, setSteps]= useState(1)

    function handleIncrement(){
        {steps <= 2 && setSteps(steps=> steps + 1)};
    }

    function handleDecrement(){
        // alert("Previous");
        {steps > 1 && setSteps(steps=> steps - 1);}
    }

    return(
        
        <div>
            <div className="steps" style={{display: "flex"}}>
                <div className={steps >=1? "active" : "not"} style={{width:"20px", height:"20px", borderRadius: "50%", }}>1</div>
                <div className={steps >=2? "active" : "not"} style={{width:"20px", height:"20px", borderRadius: "50%", }}>2</div>
                <div className={steps >=3? "active" : "not"} style={{width:"20px", height:"20px", borderRadius: "50%", }}>3</div>
            </div>

            <span>{steps} : {msgs[steps -1]}</span>
            
            <div className="buttons" style={{display: "flex"}}>
                <button onClick={handleDecrement}>Previous</button>
                <button onClick={handleIncrement}>Next</button>
            </div>
        </div>
    )
}


export default Steps;