type Props ={
    displayCalPad:()=>void,
    output:string
}

const CalculatorOutput:React.FC<Props> = (Props:Props)=>{
    return (
        <div className="output" onClick={()=> {
            Props.displayCalPad();
        }}>
            {Props.output}
        </div>
    );
}

export default CalculatorOutput;