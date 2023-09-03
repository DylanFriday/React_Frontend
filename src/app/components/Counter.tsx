'use client'

import { useState } from "react"

const Counter = () => {
    const [Counter,setCounter] = useState(0)
    const [label,setlabel] = useState('hello world')
    const inc =() => {
       setCounter(Counter+1)
    }
    const dec =() => {
        setCounter(Counter-1)
    }
    const chgLabel = () =>{
        setlabel('helloworld')
    }
    return (
        <div>
            
            <button type="button" onClick={inc}>+ Counter</button> <br/>
            {Counter}
            <button type="button" onClick={dec}>- Counter</button>
            {label}
            <button type="button" onClick={chgLabel}>chg label</button>
        </div>
    );
}

export default Counter;