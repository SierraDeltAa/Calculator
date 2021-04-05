import React, {useState} from "react"
import "../assets/css/style.css";
import Buttons from "./Buttons/Buttons"
import ResultScreen from "./ResultScreen/ResultScreen"

export default function App(){

    const [result, setResult] = useState("");

    const handleAdd = (e)=>{
        const value = e.target.value;
        setResult(previousResult =>{
            return previousResult + value
        })
    }

    const handleReset = ()=>{
        setResult("")
    }

    const handleCalc = ()=>{
        try{
            setResult(eval(result).toString())
        }
        catch(err){
            setResult("Err Reset")
        }
    }

    return(
        <div className="bg-dark rounded p-2">
            <ResultScreen screenValue={result} />
            <Buttons onAdd={handleAdd} onReset={handleReset} onCalc={handleCalc} />
        </div>
    )
}