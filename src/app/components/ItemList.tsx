export default function Itemlist({items} : any)
{
    return(<div>
        {
            items.map((item : any)=> <div>{item}</div>) 
        }
        </div>
    )
}