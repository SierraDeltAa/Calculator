import React from "react"

export default function ResultScreen(props){

    const styleScreen = "rounded border col-12"

    return(
        <div>
            <input className={styleScreen} style={{height:"50px"}} type="text" value={props.screenValue} />
        </div>
    )
}