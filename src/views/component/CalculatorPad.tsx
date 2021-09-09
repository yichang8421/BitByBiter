import React from "react";
import styled from "styled-components";
import Icon from "../../components/Icon";

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    >.hiddenPad {
        border: none;
        width: 100%;
        height: 24px;
        
        &:active {
            box-shadow: inset 0 0 5px rgba(0,0,0,0.1);
        }
    }
    
    > .pad { 
        >button{
            margin-bottom:0;
            background: #f4faff;
            font-weight: bolder;
            font-size: 20px;
            width: 20%;
            height: 64px;
            float: left;
            border: none;
            display: block;

            &:active {
                box-shadow: inset 0 0 5px rgba(0,0,0,0.1);
                color:#00aeff;
            }
        }
    }
`;

type Props = {
    hidePad: () => void,
    output: string,
    setOutput: React.Dispatch<React.SetStateAction<string>>
}

let isDecimalAdded = false;
let isOperatorAdded = false;

const CalculatorPad: React.FC<Props> = (Props: Props) => {
    const {output, setOutput} = Props;
    if (output.length === 0) {
        setOutput(() => "0");
    }

    const isOperator = (character: string) => {
        return ["+", "-", "×", "÷"].indexOf(character) > -1;
    };

    const endWidthDecimal = (string:string) => {
        return string.charAt(string.length - 1) === ".";
    };
    const endWidthOperator = (string:string) => {
        return isOperator(string.charAt(output.length - 1));
    };

    const onClickButtonWrapper = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent;
        if (!text) {
            return;
        }
        switch (text) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                if (output === "0") {
                    setOutput(() => text);
                } else {
                    setOutput(() => output + text);
                }
                isOperatorAdded = false;
                break;
            case ".":
                if (!isDecimalAdded) {
                    setOutput(() => output + text);
                    isDecimalAdded = true;
                    isOperatorAdded = true;
                }
                break;
            case "+":
            case "-":
            case "×":
            case "÷":
                if (!isOperatorAdded) {
                    if (endWidthOperator(output)) {
                        setOutput(() => output + "0" + text);
                    } else {
                        setOutput(() => output + text);
                    }
                    isDecimalAdded = false;
                    isOperatorAdded = true;
                }
                break;
            case "%":
                setOutput(() => {return (Number(output) / 100).toString();});
                const _output = (Number(output) * 0.01).toString();
                if (_output.indexOf(".") !== -1) {
                    isDecimalAdded = true;
                    console.log(isDecimalAdded);
                }
                break;
            case "⇐":
                if (output.length === 1) {
                    setOutput(() => "");
                    isOperatorAdded = false;
                    isOperatorAdded = false;
                } else {
                    if (endWidthDecimal(output)) {
                        isOperatorAdded = false;
                    }
                    if(endWidthDecimal(output)){
                        isOperatorAdded = false;
                    }

                    setOutput(() => output.slice(0, -1));

                    const _output = output.slice(0,-1);
                    if (_output.indexOf(".") !== -1) {
                        isDecimalAdded = true;
                    }
                }
                break;
            case "AC":
                setOutput(() => "");
                isOperatorAdded = false;
                isDecimalAdded = false;
                break;
            case "=":
                let result = output
                    .replace(new RegExp(/×/g), "*")
                    .replace(new RegExp(/÷/g), "/");

                if (result.match(/(\D+)$/g)) {
                    result += "0";
                }

                setOutput(() => {
                    return Number(eval(result)
                        .toFixed(9))
                        .toString();
                });

                isOperatorAdded = false;
                isDecimalAdded = false;

                const _result = Number(eval(result)
                    .toFixed(9))
                    .toString();
                if (_result.indexOf(".") !== -1) {
                    isDecimalAdded = true;
                }
                break;
            case "SAVE":
                console.log("SAVE");
                break;
        }
    };

    return (
        <Wrapper>
            {/*<div className="result">100</div>*/}
            <button className="hiddenPad" onClick={Props.hidePad}>
                <Icon name={"down"}/>
            </button>
            <div
                className="pad clearfix"
                onClick={onClickButtonWrapper}
            >
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>+</button>
                <button>⇐</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>-</button>
                <button>AC</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>×</button>
                <button>SAVE</button>
                <button>%</button>
                <button>0</button>
                <button>.</button>
                <button>÷</button>
                <button>=</button>
            </div>
        </Wrapper>);
};

export {CalculatorPad};