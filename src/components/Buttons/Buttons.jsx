import React from "react"

export default function Buttons(props){


    const styleButtons = "btn btn-lg btn-secondary m-2"
    const styleOperators = "btn btn-lg btn-info m-2"
    const styleCalc = "col-12 btn btn-lg btn-success"
    const styleReset = "btn btn-lg btn-danger m-1"

    return(
        <div>
            <div className="flex">
                <button value="7" className={styleButtons} onClick={props.onAdd}>7</button>
                <button value="8" className={styleButtons} onClick={props.onAdd}>8</button>
                <button value="9" className={styleButtons} onClick={props.onAdd}>9</button>
                <button value="/" className={styleOperators} onClick={props.onAdd}>/</button>
            </div>
            <div className="flex">
                <button value="4" className={styleButtons} onClick={props.onAdd}>4</button>
                <button value="5" className={styleButtons} onClick={props.onAdd}>5</button>
                <button value="6" className={styleButtons} onClick={props.onAdd}>6</button>
                <button value="*" className={styleOperators} onClick={props.onAdd}>*</button>
            </div>
            <div className="flex">
                <button value="1" className={styleButtons} onClick={props.onAdd}>1</button>
                <button value="2" className={styleButtons} onClick={props.onAdd}>2</button>
                <button value="3" className={styleButtons} onClick={props.onAdd}>3</button>
                <button value="-" className={styleOperators} onClick={props.onAdd}>-</button>
            </div>
            <div className="flex">
                <button value="0" className={styleButtons} onClick={props.onAdd}>0</button>
                <button value="." className={styleButtons} onClick={props.onAdd}>,</button>
                <button value="C" className={styleReset} onClick={props.onReset}>AC</button>
                <button value="+" className={styleOperators} onClick={props.onAdd}>+</button>
            </div>
            <div className="flex">
                <button onClick={props.onCalc} className={styleCalc}>=</button>
            </div>
        </div>
    )
}