export default function Itemlist({items} : any)
{
    return(<div>
        {
            items.map((item : any,index : number)=> <div key={index}>{item}</div>) 
        }
        </div>
    )
}