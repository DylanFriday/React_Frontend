'use client' 

const Button = ({onClick} : any) =>{
    return (
        <div>
            <button onClick={onClick} type="button">Click</button>
        </div>
    )
}
const CustomButton = () => {
    const handler = (events : any) =>{
        console.log('clicked',events);
        
    }
    return (
        <div>
            Custom Button
            <Button onCLick={handler}/>
        </div>
    );
}

export default CustomButton;