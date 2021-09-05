type Props ={
    displayNumberPad:()=>void,
    output:string
}

const CalculatorOutput = (Props:Props)=>{
    return (
        <div className="output" onClick={()=> {
            Props.displayNumberPad();
            console.log("hello");
        }}>
            {Props.output}
        </div>
    );
}

export default CalculatorOutput;