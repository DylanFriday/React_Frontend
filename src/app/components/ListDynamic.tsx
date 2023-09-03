'use client'
import { useState } from "react";

const unique = () =>{
    let i : number = 1 
    return function()
    {
        return i++;
    }
}

export default function ListDynamic()
{
    const nextId = unique();
    const [items,setItems] = useState(['One']);

    const addListHandler = ()=>{
        // items.push('Item' + nextId());
        setItems([...items,'Item'+nextId() ]);
    }
    return(<div>
        {
            items.map((item: string,index: number) => <div key={index}>{item}</div>)
        }
        <button type="button" onClick={addListHandler}>Add</button>
    </div>)
}